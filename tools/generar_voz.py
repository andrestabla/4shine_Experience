#!/usr/bin/env python3
"""Genera la voz del Advisor (Carlos · colombiano) para las instrucciones del simulador.
Los guiones hablados no son el texto escrito: son más cortos y con otro ritmo."""
import json, os, ssl, sys, urllib.request, certifi

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(BASE, "public", "voz")
CTX = ssl.create_default_context(cafile=certifi.where())
VOZ = "4PN5DHmrfIgZksvIrawS"   # Carlos · colombiano, mediana edad

def key():
    for l in open(os.path.join(BASE, ".env")):
        if l.startswith("ELEVENLABS"):
            return l.split("=", 1)[1].strip()
    raise SystemExit("falta ELEVENLABS_API_KEY en .env")

# ─────────────────────────── guiones ───────────────────────────
G = {}

# ── ÁREA COMERCIAL (usted) ──
G["comercial-conecta"] = """Antes de contarme nada, construya.
Ponga sobre el tablero lo que hoy compone esta situación: usted, el cliente, su equipo, lo que promete y lo que se atraviesa.
La distancia a la que ponga cada pieza significa algo. Una relación de cinco años no se dibuja igual que una que se enfrió el mes pasado.
Yo no voy a intervenir mientras construye. Solo voy a mirar."""

G["comercial-comprende"] = """Ahora cuénteme lo que ve.
No me hable del pipeline ni de la técnica de venta: descríbame la escena como si se la mostrara a alguien que no conoce la cuenta.
Voy a hacerle tres preguntas sobre lo que se ve en el tablero: quién quedó lejos, qué separa a quién, qué falta.
Puede mover piezas mientras responde. Si aparece alguien que no había puesto, colóquelo."""

G["comercial-crea"] = """Es momento de la carta.
En el recto trae un reto que va a alterar su escena. El reverso guarda la conducta que entrena, y se revela al cierre.
Haga lo que pide el bloque «En el tablero»: mover, retirar, acercar, cambiar un conector. Y explíqueme cada movimiento.
Voy a comprobar que el tablero cambió de verdad. Si nada se movió, le devuelvo la jugada."""

G["comercial-consolida"] = """Cerramos.
Voltee la carta que jugó: al otro lado está la conducta que ese reto entrenaba.
Elija una sola. Dígame ante quién y cuándo, y qué evidencia me va a traer.
Prefiero una conducta que pueda sostener el próximo lunes a cinco que suenen bien en un offsite."""

# ── ÁREA GERENCIAL (usted) ──
G["gerencial-conecta"] = """Construya primero. No me cuente todavía qué significa.
Ubique su propio avatar donde sienta que está, y desde ahí añada a quienes intervienen: su equipo, su par de otra área, dirección.
Ponga las metas con un foco, lo que bloquea con una barrera, lo ya construido con una base. Y una las piezas con conectores: no todos los vínculos son iguales.
Mientras construye, yo solo miro."""

G["gerencial-comprende"] = """Ahora cuénteme lo que ve, no lo que debería ver.
Descríbame la escena como si la viera por primera vez: quién está, qué separa a quién, dónde puso la tensión.
Voy a preguntarle por distancias y por ausencias. No le voy a decir qué significa una pieza: eso lo dice usted.
Puede seguir moviendo el tablero mientras hablamos."""

G["gerencial-crea"] = """Robe la carta.
Lo que pida hay que hacerlo sobre el tablero. Si nada se mueve, no ocurrió.
No hay respuestas correctas: hay decisiones visibles. Mueva, y expliquemé cada movimiento y por qué lo hizo.
Yo voy a comparar la escena de antes con la de ahora."""

G["gerencial-consolida"] = """Última fase.
Voltee la carta: al otro lado está la conducta observable que ese reto entrenaba.
Comprométase con una sola. Sin destinatario y sin fecha, no es un compromiso: es una intención.
Dígame también qué evidencia va a traer. Cómo vamos a saber que ocurrió."""

# ── ÚLTIMO GRADO DE SECUNDARIA (tuteo) ──
G["escolar-conecta"] = """Antes de contarme nada, ármalo.
Pon en el tablero lo que hoy compone tu situación: tú, la gente que está metida en esto, lo que quieres y lo que se te atraviesa.
La distancia a la que pongas a cada quien dice algo. Ponlos donde de verdad los sientes, no donde deberían estar.
Mientras armas, yo no digo nada. Solo miro."""

G["escolar-comprende"] = """Ahora cuéntame lo que ves.
Descríbelo como si se lo mostraras a alguien que no sabe nada de ti.
Te voy a hacer tres preguntas sobre lo que se ve ahí: qué quedó lejos, qué separa a quién, qué falta.
Responde con lo que ves, no con lo que crees que suena bien. Y puedes mover piezas mientras hablas."""

G["escolar-crea"] = """Roba la carta.
Trae un reto que va a mover lo que armaste. Al otro lado está lo que ese reto entrena, pero eso se revela al final.
Haz lo que pide, ahí en el tablero. Y cuéntame qué moviste y por qué.
Voy a revisar que el tablero haya cambiado de verdad. Si no se movió nada, no pasó nada."""

G["escolar-consolida"] = """Vamos a cerrar.
Voltea la carta que jugaste: al otro lado está lo que ese reto entrenaba.
Quédate con una sola cosa. Dime ante quién y cuándo, y qué evidencia me vas a traer.
Mejor una que puedas sostener, a cinco que suenen bien."""

# ── TRANSVERSALES ──
G["advisor"] = """Le explico rápido qué hago yo acá.
Soy el Advisor. Leo la escena que usted construyó y le pregunto por lo que se ve: distancias, ausencias, qué separa a qué.
Le devuelvo sus propias palabras cuando pregunto, y le señalo lo que nombró en voz alta pero no está en el tablero.
Lo que nunca hago: decirle qué significa una pieza, interpretar su situación, ni darle consejos. Eso lo decide usted.
Y no acepto respuestas abstractas: si nadie puede verificarlo mañana, no es evidencia."""

G["mesa"] = """Antes de empezar, tres cosas sobre la mesa.
Los roles no los pone el juego: los eligen ustedes. Pueden jugar su rol real, recrear el de alguien que no está en la sala, o el que aspiran a ocupar. Declárenlo en voz alta.
Cada quien responde por su avatar. Solo su dueño lo mueve. Si necesitan mover el de otro, se lo piden en voz alta, y esa persona decide. Ese pedido, en sí mismo, es la conducta que estamos entrenando.
Y el hilo de cada turno lo da la carta. Se lee en voz alta, cada quien pregunta desde su rol, y la pregunta de cierre termina el turno."""

G["cartas"] = """Una carta no es un premio ni un castigo: es una perturbación. Por eso importa de dónde viene.
Hay tres formas. Yo puedo elegirla, leyendo su escena y lo que hemos conversado, y le digo por qué; usted puede rechazarla.
Puede elegir el pilar y sacar a ciegas dentro de él: es la que recomiendo, porque conserva su decisión y la sorpresa.
O puede ir al azar puro, entre las noventa y seis. Como la vida: lo que lo mueve a uno no lo elige uno."""


def hablar(slug, texto):
    destino = os.path.join(OUT, slug + ".mp3")
    body = json.dumps({
        "text": texto.strip(),
        "model_id": "eleven_multilingual_v2",
        "voice_settings": {"stability": 0.55, "similarity_boost": 0.75,
                           "style": 0.12, "use_speaker_boost": True},
    }).encode()
    req = urllib.request.Request(
        f"https://api.elevenlabs.io/v1/text-to-speech/{VOZ}", data=body,
        headers={"xi-api-key": key(), "Content-Type": "application/json", "Accept": "audio/mpeg"})
    with urllib.request.urlopen(req, timeout=180, context=CTX) as r:
        audio = r.read()
    open(destino, "wb").write(audio)
    return len(audio)


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    solo = sys.argv[1:] or list(G)
    total = 0
    for slug in solo:
        try:
            n = hablar(slug, G[slug])
            total += n
            print(f"  ✓ {slug:24} {n//1024:4d} KB", flush=True)
        except Exception as e:
            cuerpo = e.read().decode()[:200] if hasattr(e, "read") else ""
            print(f"  ✗ {slug}: {e} {cuerpo}", flush=True)
    print(f"\n{len(solo)} clips · {total//1024} KB en total")
