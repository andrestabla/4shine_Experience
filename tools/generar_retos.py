#!/usr/bin/env python3
"""Genera el recto (Reto) de cada una de las 96 cartas, a partir de su
conducta observable (reverso). Usa los retos escritos a mano como patrón."""
import json, os, re, sys, time
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "api"))
from index import call_openai  # mismo núcleo del Advisor

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SISTEMA = """Eres diseñador de juego serio para 4Shine Experience, la experiencia «El Diamante Vivo».
Escribes el RECTO de una carta: un Reto que perturba la escena que la persona construyó sobre un
tablero de cuatro campos (los pilares Within, Out, Up, Beyond) con avatares, piezas símbolo
(base, foco, puente, energía, barrera), conectores que cualifican vínculos (activo, acuerdo, tenso,
en revisión, roto) y fichas de tensión y recurso.

El REVERSO de esa misma carta es una conducta observable del mapa 4Shine. El recto debe entrenar
exactamente esa conducta, sin nombrarla ni explicarla.

REGLAS DE ESCRITURA (inquebrantables):
- Trato de usted. Español neutro, sobrio, sin jerga de coaching.
- La consigna PROVOCA, nunca enseña ni aconseja. Prohibido «debe», «es importante», «recuerde que».
- «En el tablero» exige un MOVIMIENTO FÍSICO concreto sobre las piezas: añadir, retirar, mover,
  acercar, alejar, girar, marcar con una ficha, cambiar un conector. Nunca «reflexione» o «piense».
- «Para cerrar» es una pregunta que convierte el movimiento en aprendizaje. Una sola pregunta.
- Título de 2 a 4 palabras, concreto y memorable. Nada de títulos abstractos tipo «La reflexión».
- Todo en una frase por campo. Sin preámbulos."""

EJEMPLOS = """EJEMPLOS DEL ESTILO EXACTO QUE SE ESPERA:

Conducta: «Aplica la pausa estratégica (Método STOP) antes de reaccionar ante una crisis.»
→ {"t":"El detonante","c":"¿Qué momento de esta escena lo saca de su centro? Descríbalo sin suavizarlo.","z":"Marque con una ficha de tensión el punto exacto donde reacciona en vez de responder.","p":"¿Qué señal temprana lo anuncia, y qué hará al detectarla?"}

Conducta: «Hace pedidos impecables (con condiciones de satisfacción y tiempos claros).»
→ {"t":"La promesa impecable","c":"Convierta su próximo paso en un pedido: a quién, qué exactamente, con qué condición de satisfacción y para cuándo.","z":"Acerque al destinatario de ese pedido a su avatar.","p":"Si no pudiera cumplir, ¿cuándo y cómo renegociaría?"}

Conducta: «Identifica activamente el talento interno y dedica tiempo a formar a sus sucesores.»
→ {"t":"Quién queda","c":"Si usted no estuviera la próxima semana, ¿quién sostendría esto?","z":"Coloque a esa persona en el tablero y únala a lo que tendría que sostener.","p":"¿Qué necesitaría de usted para poder hacerlo?"}

Conducta: «Cuestiona el "así es como siempre se ha hecho", desafiando el statu quo.»
→ {"t":"La regla heredada","c":"¿Qué está haciendo en esta situación solo porque «siempre se ha hecho así»?","z":"Encuentre la pieza que lo representa. Retírela o cámbiela de lugar.","p":"¿Qué probaría como piloto esta semana en su lugar?"}"""

def lote(cartas):
    listado = "\n".join(
        f'{i+1}. [{c["id"]}] pilar {c["pilar"]} · {c["componente"]} · {c["competencia"]}\n   conducta: «{c["conducta"]}»'
        for i, c in enumerate(cartas))
    user = f"""{EJEMPLOS}

Escriba el recto de estas {len(cartas)} cartas. Cada reto debe entrenar su conducta sin nombrarla.
Los títulos deben ser distintos entre sí.

{listado}

Devuelva JSON: {{"retos":[{{"id":"...","t":"...","c":"...","z":"...","p":"..."}}]}} en el mismo orden."""
    return call_openai([{"role":"system","content":SISTEMA},{"role":"user","content":user}])

def main():
    src = open(os.path.join(BASE, "public/data/conductas.js")).read()
    cartas = json.loads(src[src.index("const CONDUCTAS = ")+len("const CONDUCTAS = "):src.rindex(";")])
    print(f"{len(cartas)} conductas a procesar", flush=True)
    retos, fallos = {}, []
    N = 8
    for k in range(0, len(cartas), N):
        grupo = cartas[k:k+N]
        for intento in (1, 2):
            try:
                t0 = time.time()
                out = lote(grupo)
                for r in out.get("retos", []):
                    if r.get("id") and r.get("t"): retos[r["id"]] = {kk: r.get(kk,"") for kk in ("t","c","z","p")}
                print(f"  {k+1}-{k+len(grupo)} ✓ ({time.time()-t0:.0f}s, acumulado {len(retos)})", flush=True)
                break
            except Exception as e:
                print(f"  {k+1}-{k+len(grupo)} intento {intento} falló: {e}", flush=True)
                if intento == 2: fallos.extend(c["id"] for c in grupo)
    json.dump(retos, open("/tmp/retos.json","w"), ensure_ascii=False, indent=1)
    print(f"\nGenerados {len(retos)}/{len(cartas)}. Sin reto: {fallos or 'ninguno'}")

if __name__ == "__main__":
    main()
