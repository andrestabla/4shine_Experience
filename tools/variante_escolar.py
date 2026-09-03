#!/usr/bin/env python3
"""Genera la variante escolar del mazo: mismas 96 competencias, lenguaje de
último grado de secundaria (tuteo, contexto de colegio, sin jerga corporativa)."""
import json, os, sys, time
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "api"))
from index import call_openai

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SISTEMA = """Adaptas cartas de «El Diamante Vivo» (4Shine) para estudiantes de último grado de
secundaria (16-18 años). La versión original está escrita para directivos; tú la traduces sin
perder la competencia que entrena.

CONTEXTO DEL JUEGO: el estudiante construyó SU situación real sobre un tablero de cuatro campos
con avatares, piezas símbolo (base, foco, puente, energía, barrera), conectores que cualifican
vínculos (activo, acuerdo, tenso, en revisión, roto) y fichas de tensión y recurso.

REGLAS DE TRADUCCIÓN:
- Tutea. Español natural de un adolescente, ni infantil ni corporativo.
- Sustituye el mundo de la oficina por el suyo: colegio, curso, grupo de trabajo, profesores,
  amigos, familia, entrenador, redes, proyecto de grado, elección de carrera, primer empleo.
- Prohibido: «colaboradores», «equipo directivo», «stakeholders», «organización», «KPI»,
  «comité», «cuota», «la empresa», «su rol profesional».
- La consigna PREGUNTA por lo que ya está en el tablero. No instruye ni da lecciones.
- «z» (En el tablero) ordena un movimiento físico: coloca, retira, mueve, acerca, aleja, gira,
  marca con una ficha, cambia un conector.
- «p» (Para cerrar) es UNA pregunta.
- «conducta» es la misma capacidad, dicha en su mundo y en tercera persona ("Reconoce…", "Pide…").
- Título de 2 a 3 palabras.
- Nada de moralina. Ni «es importante que», ni «recuerda siempre»."""

def main():
    src = open(os.path.join(BASE, "public/data/conductas.js")).read()
    cartas = json.loads(src[src.index("const CONDUCTAS = ")+18:src.rindex(";")])
    print(f"{len(cartas)} cartas a adaptar", flush=True)
    out_all = {}
    N = 6
    for k in range(0, len(cartas), N):
        g = cartas[k:k+N]
        detalle = "\n".join(
            f'{n+1}. [{c["id"]}] {c["competencia"]}\n'
            f'   reto adulto: «{c["reto"]["t"]}» — {c["reto"]["c"]}\n'
            f'     en el tablero: {c["reto"]["z"]}\n'
            f'     para cerrar: {c["reto"]["p"]}\n'
            f'   conducta adulta: «{c["conducta"]}»'
            for n, c in enumerate(g))
        user = f"""Adapta estas {len(g)} cartas al mundo de un estudiante de último grado.

{detalle}

Devuelve JSON: {{"cartas":[{{"id":"...","t":"...","c":"...","z":"...","p":"...","conducta":"..."}}]}}"""
        for intento in (1,2):
            try:
                t0 = time.time()
                r = call_openai([{"role":"system","content":SISTEMA},{"role":"user","content":user}])
                for x in r.get("cartas", []):
                    i = (x.get("id") or "").strip("[]")
                    if x.get("t") and x.get("conducta"):
                        out_all[i] = {"reto":{kk:(x.get(kk) or "").strip() for kk in ("t","c","z","p")},
                                      "conducta": x["conducta"].strip()}
                print(f"  {k+1}-{k+len(g)} ✓ ({time.time()-t0:.0f}s, {len(out_all)})", flush=True)
                break
            except Exception as e:
                print(f"  {k+1}-{k+len(g)} intento {intento}: {e}", flush=True)
    json.dump(out_all, open("/tmp/escolar.json","w"), ensure_ascii=False, indent=1)
    print(f"\nadaptadas {len(out_all)}/{len(cartas)}")

if __name__ == "__main__":
    main()
