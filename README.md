# 4Shine Experience®

**El Diamante Vivo**: experiencia de liderazgo del framework 4Shine. Sitio de
presentación, demo de cartas imprimible y **simulador interactivo** con Advisor digital.

> La experiencia es **física y presencial**. El simulador existe para tomar decisiones
> de diseño, calibrar la exigencia del Advisor y mostrar la metodología en vivo antes
> de producir un solo componente.

## La experiencia

Una situación real de liderazgo se construye con piezas sobre un tablero de cuatro
campos, se perturba con una Tarjeta de Reto y se transforma delante de quien la vive.
La sesión recorre **Conecta → Comprende → Crea → Consolida** y termina en una conducta
observable con responsable, fecha y evidencia.

## El simulador

`/sim/diamante/` — Tablero de cuatro campos (CONECTA · COMPRENDE · CREA · CONSOLIDA)
renderizado con Konva: piezas 3D arrastrables (avatares, piezas símbolo, fichas de tensión
y recurso) y conectores que cualifican vínculos. Cuatro fases: Construyo → Narro →
Reconfiguro → Actúo. El sistema **verifica que el tablero realmente cambió** antes de
aceptar una reconfiguración, y el Advisor lee la escena construida para preguntar sobre
lo visible sin interpretar jamás por el participante.


## El Advisor digital

Evalúa en dos capas:

1. **Filtro determinista** (`filtro_concrecion`) — rechaza al instante toda evidencia sin
   anclaje concreto: sin cita textual, sin nombre o rol, sin dato verificable. No consume
   tokens y garantiza el rigor mínimo con independencia del modelo.
2. **Evaluación con IA** — juzga coherencia, integración de dimensiones y calidad de la
   evidencia citando textualmente lo que el equipo escribió.

Si no hay clave o conexión, los simuladores **siguen siendo jugables** en modo local
básico y lo indican en pantalla: nunca fingen una evaluación de IA.

## Estructura

```
public/               sitio estático desplegable
  index.html            la propuesta: qué es, la sesión, el kit, la evidencia
  opcion-a.html         la sesión completa + manual de facilitación
  cartas.html           20 cartas imprimibles a tamaño real
  sim/diamante/         el simulador (tablero Konva + Advisor)
  archivo/              alternativa explorada y no producida (Cruza el Umbral)
api/index.py          Advisor digital · función serverless y núcleo compartido
tools/dev_server.py   servidor local que reutiliza ese mismo núcleo
docs/                 investigación (16 referentes analizados)
```

## Desarrollo local

```bash
python3 tools/dev_server.py     # http://127.0.0.1:8765
```

Requiere `OPENAI_API_KEY` en un archivo `.env` en la raíz (ver `.env.example`).
Sin ella el sitio y los simuladores funcionan igual, en modo local básico.

## Despliegue en Vercel

El repositorio ya viene configurado (`vercel.json`): salida estática en `web/`,
función Python en `api/index.py` y reescritura de `/api/advisor` → `/api`.

1. **Importar el repositorio** en [vercel.com/new](https://vercel.com/new) y elegir
   `andrestabla/4shine_Experience`. No hay que tocar Build & Output: `vercel.json` manda.
2. **Variable de entorno** — en *Settings → Environment Variables* añadir:
   `OPENAI_API_KEY` = la clave de OpenAI, para los tres entornos.
   Sin ella el sitio despliega igual y los simuladores quedan en modo local básico.
3. **Acceso público** — en *Settings → Deployment Protection*, poner
   **Vercel Authentication** en `Disabled`. Vercel la activa por defecto y, mientras
   esté encendida, los clientes verían una pantalla de login en vez del sitio.
4. **Deploy**. Cada `git push` a `main` vuelve a desplegar solo.

> **Sobre el consumo de la API**: con el sitio público, el endpoint `/api/advisor`
> queda abierto. Cada partida completa cuesta menos de US$0,02, pero conviene
> vigilar el uso en el panel de OpenAI y fijar un límite de gasto mensual.
> Si en algún momento hace falta cerrarlo, basta con quitar la variable de entorno
> (los simuladores siguen funcionando en modo local) o pedir que se añada una
> frase de acceso al endpoint.

## Fundamento

Diseñado sobre el Dossier Final 4Shine v6 (4 pilares · 22 componentes · 47 competencias ·
96 conductas observables) y un corpus de 16 referentes académicos sobre juego serio y
aprendizaje. Cada carta y cada movimiento lleva impresa su ruta de origen en el framework.
