#!/usr/bin/env python3
"""Servidor local de desarrollo: sirve web/ y expone /api/advisor
reutilizando exactamente el mismo núcleo que la función serverless de Vercel."""
import json, os, sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

BASE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(BASE, "api"))
from advisor import responder  # noqa: E402

WEB = os.path.join(BASE, "web")
PORT = int(os.environ.get("PORT", "8765"))


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=WEB, **kw)

    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")

    def do_OPTIONS(self):
        self.send_response(204); self._cors(); self.end_headers()

    def do_POST(self):
        if self.path.rstrip("/") != "/api/advisor":
            self.send_error(404); return
        try:
            n = int(self.headers.get("Content-Length") or 0)
            payload = json.loads(self.rfile.read(n) or "{}")
        except Exception:
            payload = {}
        body = json.dumps(responder(payload), ensure_ascii=False).encode()
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self._cors(); self.send_header("Content-Length", str(len(body)))
        self.end_headers(); self.wfile.write(body)

    def log_message(self, fmt, *args):
        if "/api/" in (args[0] if args else ""):
            sys.stderr.write("  advisor · %s\n" % (args[0],))


if __name__ == "__main__":
    print(f"4Shine Experience · http://127.0.0.1:{PORT}")
    print(f"  Sitio        → http://127.0.0.1:{PORT}/index.html")
    print(f"  Diamante     → http://127.0.0.1:{PORT}/sim/diamante/")
    print(f"  Umbral       → http://127.0.0.1:{PORT}/sim/umbral/")
    ThreadingHTTPServer(("127.0.0.1", PORT), Handler).serve_forever()
