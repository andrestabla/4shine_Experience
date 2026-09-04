#!/usr/bin/env python3
"""Servidor local de desarrollo: sirve web/ y expone /api/advisor
reutilizando exactamente el mismo núcleo que la función serverless de Vercel."""
import io, json, os, re, sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "api"))
from index import responder  # noqa: E402

WEB = os.path.join(BASE, "public")
PORT = int(os.environ.get("PORT", "8765"))


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=WEB, **kw)

    def end_headers(self):
        # en desarrollo nunca queremos la copia vieja: el navegador se quedaba
        # con board.js y app.js del arranque anterior
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()

    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")

    def send_head(self):
        """Al servir HTML le pega la marca de tiempo a cada .js/.css propio.
        Sin esto el navegador se queda con la copia en memoria del arranque
        anterior y uno cree estar probando código que no está corriendo."""
        ruta = self.translate_path(self.path)
        if os.path.isdir(ruta):
            ruta = os.path.join(ruta, "index.html")
        if not ruta.endswith(".html") or not os.path.isfile(ruta):
            return super().send_head()

        base = os.path.dirname(ruta)

        def sellar(m):
            pre, url, post = m.group(1), m.group(2), m.group(3)
            if "//" in url or url.startswith(("data:", "#", "?")):
                return m.group(0)
            destino = os.path.normpath(os.path.join(base, url.split("?")[0]))
            if not os.path.isfile(destino):
                return m.group(0)
            sep = "&" if "?" in url else "?"
            return f"{pre}{url}{sep}t={int(os.path.getmtime(destino))}{post}"

        html = open(ruta, encoding="utf-8").read()
        html = re.sub(r'(<script[^>]*\ssrc=")([^"]+)(")', sellar, html)
        html = re.sub(r'(<link[^>]*\shref=")([^"]+)(")', sellar, html)
        datos = html.encode("utf-8")

        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(datos)))
        self.end_headers()
        return io.BytesIO(datos)

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
