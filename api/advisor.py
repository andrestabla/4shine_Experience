"""Advisor 4Shine · función serverless (Vercel) y núcleo compartido.

Atiende las cinco fases de los dos simuladores:
  Cruza el Umbral →  movimiento · debrief
  El Diamante Vivo → dv_narrar · dv_reconfigurar · dv_cierre
"""
import json, os, ssl, urllib.request, urllib.error
from http.server import BaseHTTPRequestHandler

try:
    import certifi
    SSL_CTX = ssl.create_default_context(cafile=certifi.where())
except Exception:
    SSL_CTX = ssl.create_default_context()

MODEL_CHAIN = ["gpt-5-mini", "gpt-4o-mini"]


def api_key():
    k = os.environ.get("OPENAI_API_KEY")
    if k:
        return k
    for base in (os.path.dirname(os.path.abspath(__file__)),
                 os.path.dirname(os.path.dirname(os.path.abspath(__file__)))):
        env = os.path.join(base, ".env")
        if os.path.exists(env):
            for line in open(env):
                if line.startswith("OPENAI_API_KEY"):
                    return line.split("=", 1)[1].strip()
    return None


PERSONA_UMBRAL = (
    "Eres el Advisor 4Shine: facilitador experto de la simulación de liderazgo 'Cruza el Umbral'. "
    "Tu voz es serena, directa y exigente. Hablas en español, tratando de 'ustedes' al equipo. "
    "REGLAS INQUEBRANTABLES: nunca resuelves el caso por el equipo; nunca sugieres la respuesta; "
    "solo aceptas evidencia concreta y observable; rechazas respuestas abstractas o declarativas sin sustancia. "
    "Reconoces lo logrado sin adular. Máximo 3 frases por campo.\n\n"
    "RÚBRICA DE EVIDENCIA (rigor sin excepciones):\n"
    "VÁLIDA solo si contiene AL MENOS UNO de estos anclajes: (a) una frase textual acordada y citable; "
    "(b) una persona, rol o interlocutor identificable; (c) un ajuste específico a la decisión; "
    "(d) un compromiso con acción y momento verificables.\n"
    "INVÁLIDA toda declaración de intención genérica: 'acordamos ser transparentes', 'mejorar la comunicación', "
    "'priorizar la calidad', 'alinearnos como equipo'. Suenan bien y nadie podría verificarlas mañana.\n"
    "En caso de duda, RECHAZA y pide el anclaje que falta."
)

PERSONA_DIAMANTE = (
    "Eres el Advisor 4Shine facilitando 'El Diamante Vivo': una persona ha construido su situación real "
    "con piezas físicas sobre un tablero de cuatro campos (CONECTA, COMPRENDE, CREA, CONSOLIDA). "
    "Hablas en español, tratando de usted, con calidez sobria y precisión.\n\n"
    "REGLA CENTRAL E INQUEBRANTABLE: NUNCA interpretas la escena por la persona. No dices qué significa "
    "una pieza, un muro o una distancia. No das consejos, no propones soluciones, no diagnosticas. "
    "Tu único instrumento es la PREGUNTA sobre lo que es visible en el tablero: distancias, ausencias, "
    "cercanías, qué separa a qué, qué quedó fuera, qué se movió y qué no. "
    "Devuelves a la persona sus propias palabras exactas cuando preguntas. "
    "Prohibido: 'esto sugiere que...', 'parece que usted siente...', 'le recomiendo...', 'debería...'. "
    "Permitido: '¿qué hace que X esté tan lejos de Y?', 'nombró Z; ¿dónde está Z en el tablero?'."
)


def call_openai(messages):
    key = api_key()
    if not key:
        raise RuntimeError("sin_api_key")
    body = {"messages": messages, "response_format": {"type": "json_object"}}
    last = None
    for model in MODEL_CHAIN:
        body["model"] = model
        req = urllib.request.Request(
            "https://api.openai.com/v1/chat/completions",
            data=json.dumps(body).encode(),
            headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"})
        try:
            with urllib.request.urlopen(req, timeout=90, context=SSL_CTX) as r:
                data = json.load(r)
            return json.loads(data["choices"][0]["message"]["content"])
        except urllib.error.HTTPError as e:
            last = f"{e.code} {e.read().decode()[:200]}"
            if e.code in (400, 404):
                continue
            raise RuntimeError(last)
    raise RuntimeError(last or "sin_modelo")


# ---------- filtro determinista de evidencia (Umbral) ----------
ABSTRACTAS = ["ser transparente", "mejorar la comunicaci", "alinear al equipo", "alinearnos",
              "priorizar la calidad", "trabajar en equipo", "ser honesto", "mantener la calma",
              "hacer las cosas bien", "dar lo mejor", "estar unidos", "comunicarnos mejor",
              "tener empatía", "escuchar más", "ser claros", "generar confianza"]


def filtro_concrecion(evidencia):
    e = (evidencia or "").strip()
    low = e.lower()
    if len(e) < 30:
        return "Eso es demasiado breve para ser evidencia. Necesito ver qué produjo el movimiento, no un titular."
    if len(e.split()) < 7:
        return "Eso es una declaración, no una evidencia. Díganme qué quedó por escrito, quién lo dijo o qué cambió."
    ancla = ('"' in e or '«' in e or '“' in e
             or any(c.isdigit() for c in e)
             or any(w[0].isupper() for w in e.split()[1:]))
    if any(a in low for a in ABSTRACTAS) and not ancla:
        return ("Eso suena bien y no es observable: nadie podría verificar mañana si ocurrió. "
                "Necesito la frase textual que acordaron, el nombre de quien responde o el ajuste concreto a la decisión.")
    return None


# ---------- fallbacks sin IA ----------
FALLBACKS = {
    "movimiento": lambda p: {
        "valido": len((p.get("evidencia") or "").strip()) >= 30,
        "veredicto": "Registro la evidencia. Continuamos." if len((p.get("evidencia") or "").strip()) >= 30
                     else "Esa evidencia es abstracta. Necesito algo observable: una frase textual, un nombre, un ajuste concreto.",
        "pregunta_sonda": "¿Qué haría visible este movimiento mañana a las 9 de la mañana?",
        "coherencia": "mantiene", "nota_presion": "La presión no negocia.", "_modo": "offline"},
    "debrief": lambda p: {
        "cruzo": False,
        "criterios": {k: {"cumple": False, "razon": "Sin el Advisor IA no puede evaluarse."}
                      for k in ("coherencia", "integracion", "evidencia", "sostenibilidad")},
        "relato": "El Advisor digital no está disponible. El registro de la partida quedó guardado; repitan el cierre con el Advisor activo.",
        "capacidad_revelada": "—", "fuerza_retorno": "—",
        "recomendacion": "Revisar la conexión y volver a cerrar la simulación.", "_modo": "offline"},
    "dv_narrar": lambda p: {
        "devolucion": "Leo su escena. Sin el Advisor activo le dejo las preguntas base de la metodología.",
        "preguntas": ["¿Qué pieza está más lejos de usted y qué la mantiene ahí?",
                      "¿Qué hay en el tablero que no había nombrado hasta ahora?",
                      "¿Quién o qué falta en esta escena?"], "_modo": "offline"},
    "dv_reconfigurar": lambda p: {
        "devolucion": "Registro que el tablero cambió.", "significativo": True,
        "pregunta_cierre": "¿Qué haría falta para que ese movimiento se sostenga fuera de esta mesa?", "_modo": "offline"},
    "dv_cierre": lambda p: {
        "sintesis": "La escena quedó construida, perturbada y reconfigurada. El compromiso quedó registrado.",
        "_modo": "offline"},
}


def procesar(p):
    """Núcleo compartido: recibe el payload y devuelve el dict de respuesta."""
    fase = p.get("fase")

    if fase == "ping":
        return {"ok": True, "ia": bool(api_key())}

    # ===== CRUZA EL UMBRAL =====
    if fase == "movimiento":
        motivo = filtro_concrecion(p.get("evidencia"))
        if motivo:
            return {"valido": False, "veredicto": motivo,
                    "pregunta_sonda": "¿Qué exactamente podría observar otra persona que confirme que esto ocurrió?",
                    "coherencia": "tensiona", "nota_presion": "La presión no espera.", "_filtro": True}
        movs = "\n".join(f"* {m['nombre']} ({m['dimension']}): pregunta «{m['pregunta']}»; espera: {m['evidencia_esperada']}"
                         for m in (p.get("movimientos") or []))
        hist = "\n".join(f"- Ronda {h['ronda']}: {h['movimientos']}; evidencia: «{h['evidencia']}»"
                         for h in (p.get("historial") or [])) or "(primera ronda)"
        user = f"""SITUACIÓN: {p.get('situacion_titulo')} ({p.get('contexto')})
RONDA {p.get('ronda')} — {p.get('ronda_nombre')}. REVELACIÓN: «{p.get('revelacion')}»
CRITERIO DE LA RONDA 1: «{p.get('criterio_r1') or '(aún no declarado)'}»
HISTORIAL:
{hist}

EL EQUIPO ({p.get('equipo')}) PRESENTA:
1) Respuesta al caso: «{p.get('respuesta_caso')}»
2) Movimiento(s):
{movs}
3) Respuesta a la pregunta: «{p.get('respuesta_pregunta')}»
4) Evidencia declarada: «{p.get('evidencia')}»

En ronda 3 exige además que la respuesta INTEGRE de verdad las dos dimensiones, no que las mencione.
Devuelve JSON: {{"valido":true|false,"veredicto":"2-3 frases en voz de Advisor citando textualmente algo que dijeron",
"pregunta_sonda":"una pregunta incisiva","coherencia":"mantiene"|"tensiona"|"rompe","nota_presion":"1 frase"}}"""
        out = call_openai([{"role": "system", "content": PERSONA_UMBRAL}, {"role": "user", "content": user}])
        for k in ("valido", "veredicto", "pregunta_sonda", "coherencia", "nota_presion"):
            out.setdefault(k, "")
        return out

    if fase == "debrief":
        rondas = "\n".join(
            f"RONDA {r['ronda']} ({r['ronda_nombre']}) — «{r['revelacion']}»\n  Respuesta: «{r['respuesta_caso']}»\n"
            f"  Movimientos: {r['movimientos']}\n  Evidencia: «{r['evidencia']}» (aceptada a la primera: {r.get('primera', True)})"
            for r in (p.get("rondas") or []))
        c = p.get("canvas") or {}
        user = f"""SIMULACIÓN COMPLETA — {p.get('situacion_titulo')} ({p.get('contexto')}; pone a prueba: {p.get('prueba')})
EQUIPO: {p.get('equipo')}

{rondas}

CANVAS FINAL:
- Decisión: «{c.get('decision','')}» · Conducta: «{c.get('conducta','')}»
- Evidencia: «{c.get('evidencia','')}» · Responsable: «{c.get('responsable','')}» · Fecha: «{c.get('fecha','')}»
- Riesgo: «{c.get('riesgo','')}»

Cruzan el umbral SOLO si cumplen los 4 criterios: coherencia (criterio sostenido en las 3 rondas),
integracion (la respuesta final articula de verdad dos dimensiones), evidencia (cada movimiento produjo
evidencia observable), sostenibilidad (Canvas con conducta verificable, responsable, fecha y riesgo real).
Un Canvas vago o una integración de nombre NO cumplen.
Devuelve JSON: {{"cruzo":true|false,
"criterios":{{"coherencia":{{"cumple":bool,"razon":"1-2 frases citando la partida"}},"integracion":{{...}},"evidencia":{{...}},"sostenibilidad":{{...}}}},
"relato":"4-6 frases comparando la ronda 1 con la final, citando momentos concretos",
"capacidad_revelada":"1 frase","fuerza_retorno":"1 frase","recomendacion":"1-2 frases"}}"""
        out = call_openai([{"role": "system", "content": PERSONA_UMBRAL}, {"role": "user", "content": user}])
        out.setdefault("criterios", {})
        return out

    # ===== EL DIAMANTE VIVO =====
    if fase == "dv_narrar":
        user = f"""PARTICIPANTE: {p.get('quien')}
SITUACIÓN QUE TRAJO: «{p.get('situacion')}»

LO QUE CONSTRUYÓ SOBRE EL TABLERO (lectura objetiva de las piezas):
{p.get('escena')}

CÓMO LA NARRÓ: «{p.get('narracion')}»

Formule TRES preguntas que trabajen sobre lo VISIBLE del tablero (distancias, ausencias, qué separa a qué,
qué nombró en palabras pero no está en la escena, qué está en la escena pero no nombró).
NO interprete, NO aconseje, NO diagnostique. Use las palabras exactas de la persona.
Devuelve JSON: {{"devolucion":"2 frases devolviendo lo que observa en el tablero, sin interpretar, citando algo textual suyo",
"preguntas":["...","...","..."],"patron":"2-4 palabras que nombren el patrón visible, en minúsculas (ej. 'distancia con el equipo')"}}"""
        out = call_openai([{"role": "system", "content": PERSONA_DIAMANTE}, {"role": "user", "content": user}])
        out.setdefault("preguntas", [])
        return out

    if fase == "dv_reconfigurar":
        r = p.get("reto") or {}
        user = f"""PARTICIPANTE: {p.get('quien')} · SITUACIÓN: «{p.get('situacion')}»
NARRACIÓN PREVIA: «{p.get('narracion')}»

ESCENA ANTES DE LA TARJETA:
{p.get('escena_antes')}

TARJETA DE RETO JUGADA: «{r.get('titulo')}» — consigna: «{r.get('consigna')}» — pedía: «{r.get('zona')}»

ESCENA DESPUÉS DEL MOVIMIENTO:
{p.get('escena_ahora')}

LO QUE DICE HABER MOVIDO: «{p.get('explicacion')}»

Compare las dos escenas. Un movimiento es SIGNIFICATIVO si cambia una relación, una distancia o retira/añade
algo que la persona había señalado como importante; es SUPERFICIAL si solo reacomoda sin alterar lo que
la escena mostraba. No interprete el significado emocional: describa el cambio observable y pregunte.
Devuelve JSON: {{"devolucion":"2-3 frases nombrando exactamente qué cambió en el tablero, citando sus palabras",
"significativo":true|false,"pregunta_cierre":"la pregunta que convierte el movimiento en aprendizaje"}}"""
        out = call_openai([{"role": "system", "content": PERSONA_DIAMANTE}, {"role": "user", "content": user}])
        return out

    if fase == "dv_cierre":
        c = p.get("conducta") or {}
        user = f"""CIERRE DE SESIÓN — {p.get('quien')}
SITUACIÓN: «{p.get('situacion')}»
ESCENA FINAL: {p.get('escena')}
NARRACIÓN: «{p.get('narracion')}»
TARJETA JUGADA: «{p.get('reto')}» · LO QUE MOVIÓ: «{p.get('explicacion')}»
CONDUCTA ELEGIDA: «{c.get('t')}» ({c.get('o')}) — ante: «{p.get('cuando')}» — evidencia: «{p.get('evidencia')}»

Cierre la sesión sin interpretar por la persona: describa el recorrido observable y deje una pregunta abierta.
Devuelve JSON: {{"sintesis":"3-4 frases que recorran lo que pasó en la mesa, citando sus palabras",
"patron_central":"1 frase que nombre el patrón que la propia persona hizo visible (con SUS palabras, no las suyas)",
"lo_que_no_dijo":"1 frase sobre algo presente en el tablero que no llegó a nombrar, formulado como observación",
"para_la_proxima":"1 frase: qué convendría traer a la próxima sesión"}}"""
        out = call_openai([{"role": "system", "content": PERSONA_DIAMANTE}, {"role": "user", "content": user}])
        return out

    return {"error": "fase desconocida"}


def responder(p):
    """Envuelve procesar() con degradación elegante a modo offline."""
    try:
        return procesar(p)
    except Exception:
        fb = FALLBACKS.get(p.get("fase"))
        return fb(p) if fb else {"error": "no disponible", "_modo": "offline"}


class handler(BaseHTTPRequestHandler):
    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")

    def do_OPTIONS(self):
        self.send_response(204); self._cors(); self.end_headers()

    def do_POST(self):
        try:
            n = int(self.headers.get("Content-Length") or 0)
            payload = json.loads(self.rfile.read(n) or "{}")
        except Exception:
            payload = {}
        out = responder(payload)
        body = json.dumps(out, ensure_ascii=False).encode()
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self._cors()
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, *a):
        pass
