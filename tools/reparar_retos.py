#!/usr/bin/env python3
"""Regenera individualmente las cartas cuyo «En el tablero» no exige un
movimiento físico, o cuyo título se repite."""
import json, os, sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "api"))
from index import call_openai
from generar_retos import SISTEMA, EJEMPLOS

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = open(os.path.join(BASE, "public/data/conductas.js")).read()
cartas = json.loads(src[src.index("const CONDUCTAS = ")+len("const CONDUCTAS = "):src.rindex(";")])
retos = json.load(open("/tmp/retos.json"))

VERBOS = ["coloque","ponga","añada","agregue","retire","quite","mueva","acerque","aleje","gire","marque",
          "cambie","sitúe","ubique","desplace","separe","una ","conecte","reemplace","sustituya","traslade",
          "apile","superponga","intercambie","saque","lleve","reconfigur","desconecte","rote","gírela"]

def malo(r):
    return not any(v in (r.get("z") or "").lower() for v in VERBOS)

titulos = {}
for c in cartas:
    r = retos.get(c["id"])
    if r: titulos.setdefault(r["t"], []).append(c["id"])
dups = [ids for t, ids in titulos.items() if len(ids) > 1]

arreglar = [c for c in cartas if c["id"] in retos and malo(retos[c["id"]])]
for grupo in dups: arreglar += [c for c in cartas if c["id"] in grupo[1:]]
arreglar = {c["id"]: c for c in arreglar}.values()
print(f"a reparar: {[c['id'] for c in arreglar]}")

usados = {r["t"] for r in retos.values()}
for c in arreglar:
    prev = retos.get(c["id"], {})
    user = f"""{EJEMPLOS}

Este reto fue rechazado en revisión. Reescríbalo entero.
MOTIVO: el campo «z» (En el tablero) debe ordenar un MOVIMIENTO FÍSICO de piezas
(coloque, retire, mueva, acerque, gire, marque, cambie un conector…), no describir un estado.
El título debe ser distinto de todos estos: {sorted(usados)[:40]}

Carta [{c['id']}] pilar {c['pilar']} · {c['componente']} · {c['competencia']}
conducta (reverso): «{c['conducta']}»
versión rechazada: {json.dumps(prev, ensure_ascii=False)}

Devuelva JSON: {{"t":"...","c":"...","z":"...","p":"..."}}"""
    try:
        out = call_openai([{"role":"system","content":SISTEMA},{"role":"user","content":user}])
        if out.get("t") and out.get("z"):
            retos[c["id"]] = {k: (out.get(k) or "").strip() for k in ("t","c","z","p")}
            usados.add(out["t"])
            ok = "✓" if any(v in out["z"].lower() for v in VERBOS) else "⚠ sigue sin verbo"
            print(f"  {c['id']} {ok} → {out['t']} | {out['z'][:60]}")
    except Exception as e:
        print(f"  {c['id']} falló: {e}")

json.dump(retos, open("/tmp/retos.json","w"), ensure_ascii=False, indent=1)
print("guardado")
