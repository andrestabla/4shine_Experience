#!/usr/bin/env python3
"""Reescribe los retos flojos: los que instruyen la conducta en vez de
preguntar por la escena que la persona construyó."""
import json, os, sys, time
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "api"))
from index import call_openai

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SISTEMA = """Eres diseñador de juego serio para «El Diamante Vivo» (4Shine Experience).

LA SITUACIÓN EXACTA: una persona ya construyó SU situación real de liderazgo sobre un tablero
de cuatro campos (los pilares Within, Out, Up, Beyond) usando avatares, piezas símbolo
(base, foco, puente, energía, barrera), conectores que cualifican vínculos (activo, acuerdo,
tenso, en revisión, roto) y fichas de tensión y recurso. La escena ya está ahí, delante de ella.

Usted escribe el RECTO de una carta: un Reto que PERTURBA esa escena ya construida.

EL ERROR QUE DEBE EVITAR A TODA COSTA — instruir la conducta:
  ✗ «Reserve ahora un bloque semanal para registrar lo que hizo.»
  ✗ «Formule un pedido concreto: quién hará qué y para cuándo.»
  ✗ «Defina una práctica breve diaria e insértela en su calendario.»
Eso es una tarea, no un reto. No mira la escena. No provoca nada.

LO QUE SÍ DEBE HACER — preguntar por lo que ya está sobre el tablero:
  ✓ «¿Qué frase se repite sobre esta situación? Dígala en voz alta, tal como suena en su cabeza.»
  ✓ «¿Quién debería estar en esta escena y no está? Nómbrelo.»
  ✓ «Elija el vínculo que más energía le consume hoy. ¿Qué lo tensó?»
  ✓ «Si usted no estuviera la próxima semana, ¿quién sostendría esto?»

REGLAS:
- La consigna EMPIEZA o CONTIENE una pregunta dirigida a su escena. Trato de usted.
- Debe aludir a lo que hay en el tablero: una pieza, un vínculo, una distancia, una ausencia.
- Nunca nombra ni explica la conducta del reverso: la provoca de lado.
- «z» (En el tablero) ordena un movimiento físico: coloque, retire, mueva, acerque, aleje,
  gire, marque con una ficha, cambie un conector. Verbo en imperativo, concreto.
- «p» (Para cerrar) es UNA pregunta que convierte el movimiento en aprendizaje.
- Título de 2 a 3 palabras, concreto y memorable.
- Español sobrio. Sin jerga de coaching. Máximo 150 caracteres en la consigna."""

def main():
    src = open(os.path.join(BASE, "public/data/conductas.js")).read()
    cartas = json.loads(src[src.index("const CONDUCTAS = ")+18:src.rindex(";")])
    objetivo = set(json.load(open("/tmp/reescribir.json")))
    porId = {c["id"]: c for c in cartas}
    lista = [porId[i] for i in objetivo if i in porId]
    print(f"reescribiendo {len(lista)} cartas", flush=True)
    usados = {c["reto"]["t"] for c in cartas if c["id"] not in objetivo}
    nuevos = {}
    N = 6
    for k in range(0, len(lista), N):
        g = lista[k:k+N]
        detalle = "\n".join(
            f'{n+1}. [{c["id"]}] {c["competencia"]} ({c["pilar"]})\n'
            f'   conducta del reverso: «{c["conducta"]}»\n'
            f'   versión rechazada: «{c["reto"]["c"]}»'
            for n, c in enumerate(g))
        user = f"""Reescriba estas {len(g)} cartas. Cada versión rechazada falla por instruir la conducta
en vez de preguntar por la escena. Corrija exactamente eso.

Títulos ya usados que NO puede repetir: {sorted(usados)}

{detalle}

Devuelva JSON: {{"retos":[{{"id":"...","t":"...","c":"...","z":"...","p":"..."}}]}} en el mismo orden."""
        for intento in (1,2):
            try:
                t0 = time.time()
                out = call_openai([{"role":"system","content":SISTEMA},{"role":"user","content":user}])
                for r in out.get("retos", []):
                    i = (r.get("id") or "").strip("[]")
                    if i in porId and r.get("t"):
                        nuevos[i] = {kk:(r.get(kk) or "").strip() for kk in ("t","c","z","p")}
                        usados.add(r["t"])
                print(f"  {k+1}-{k+len(g)} ✓ ({time.time()-t0:.0f}s, {len(nuevos)} listos)", flush=True)
                break
            except Exception as e:
                print(f"  {k+1}-{k+len(g)} intento {intento}: {e}", flush=True)
    json.dump(nuevos, open("/tmp/retos_v2.json","w"), ensure_ascii=False, indent=1)
    print(f"\nreescritos {len(nuevos)}/{len(lista)}")

if __name__ == "__main__":
    main()
