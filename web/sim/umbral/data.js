/* ===== Datos del juego · Cruza el Umbral ===== */
const MOVIMIENTOS = [
  { id:"centro", nombre:"Centro", dimension:"Within · Mirar hacia dentro", color:"#c13a68",
    intencion:"Pausa y define el criterio.",
    pregunta:"¿Qué debemos sostener, aunque aumente la presión?",
    accion:"Cada persona nombra el criterio que no está dispuesta a sacrificar. El equipo acuerda uno.",
    evidencia_esperada:"Una frase de criterio compartida, textual." },
  { id:"vinculo", nombre:"Vínculo", dimension:"Out · Mirar hacia el otro", color:"#8b59b2",
    intencion:"Abre la conversación clave.",
    pregunta:"¿Con quién debemos hablar antes de decidir?",
    accion:"El equipo identifica la voz ausente y formula la conversación que necesita sostener.",
    evidencia_esperada:"Un interlocutor, un mensaje y una pregunta abierta." },
  { id:"sistema", nombre:"Sistema", dimension:"Up · Mirar el sistema", color:"#ed8124",
    intencion:"Lee actores y consecuencias.",
    pregunta:"¿Qué estamos afectando más allá del resultado inmediato?",
    accion:"El equipo identifica dos actores impactados y anticipa una consecuencia no prevista.",
    evidencia_esperada:"Un ajuste concreto a la decisión inicial." },
  { id:"legado", nombre:"Legado", dimension:"Beyond · Mirar más allá", color:"#3988ca",
    intencion:"Protege la capacidad futura.",
    pregunta:"¿Qué debe permanecer cuando esta crisis termine?",
    accion:"El equipo define qué práctica, relación o principio quiere fortalecer con su decisión.",
    evidencia_esperada:"Un compromiso que seguirá vigente después del reto." }
];

const SITUACIONES = [
  { id:"S01", titulo:"El lanzamiento", contexto:"Equipo directivo",
    prueba:"Compostura · Decisión bajo incertidumbre · Integridad bajo presión",
    rondas:[
      "Faltan diez días para el lanzamiento. Una prueba crítica falla y el cliente principal exige confirmación hoy mismo.",
      "El líder técnico renuncia. Dos áreas comienzan a culparse públicamente por la falla.",
      "El CEO pide mantener la fecha y eliminar la revisión de seguridad para lograrlo."
    ]},
  { id:"S02", titulo:"La fusión silenciosa", contexto:"Equipo directivo",
    prueba:"Construcción de confianza · Claridad e inspiración · Ética y responsabilidad",
    rondas:[
      "Se anuncia la integración con un área que duplica funciones de la tuya. Tu equipo teme recortes y los rumores crecen más rápido que la información oficial.",
      "Se filtra a la prensa una cifra de despidos que no es la real. Dos de tus talentos clave reciben ofertas externas esta semana.",
      "Dirección te pide anunciar a tu equipo que «no habrá cambios». Tú sabes que sí los habrá."
    ]},
  { id:"S03", titulo:"El cliente imposible", contexto:"Mandos medios",
    prueba:"Gestión de relaciones · Feedback centrado en conducta · Criterio bajo presión",
    rondas:[
      "Tu mayor cliente exige un cambio de alcance sin costo adicional. El equipo ya está al límite de capacidad.",
      "Un miembro del equipo comete un error visible para el cliente, que ahora pide sacarlo de la cuenta.",
      "El cliente amenaza con irse hoy si no aceptas todas sus condiciones. Representa el 40% de tus ingresos."
    ]},
  { id:"S04", titulo:"Dos áreas, una culpa", contexto:"Mandos medios",
    prueba:"Responsabilidad radical · Resolución de causa raíz · Confianza entre pares",
    rondas:[
      "Un entregable conjunto falla. Tu par de otra área te responsabiliza en un correo con copia a dirección.",
      "Tu equipo te pide responder con evidencia que hunde al otro equipo. Dirección exige que «lo resuelvan entre ustedes» en 48 horas.",
      "Descubres que parte del error sí fue de tu equipo — y tu par todavía no lo sabe."
    ]},
  { id:"S05", titulo:"El proyecto de grado", contexto:"Educación",
    prueba:"Cooperación · Manejo de la presión de grupo · Equidad",
    rondas:[
      "A una semana de la feria, la mitad del equipo no ha entregado su parte. Hay que decidir hoy qué se presenta y qué no.",
      "El compañero que más sabe propone hacerlo todo él solo «para asegurar la nota».",
      "El profesor ofrece extender el plazo con una condición: que un integrante salga del grupo."
    ]},
  { id:"S06", titulo:"La cancha dividida", contexto:"Educación",
    prueba:"Regulación emocional · Escucha activa · Integridad ante el grupo",
    rondas:[
      "Un conflicto en redes dividió al grupo en dos bandos. El trabajo en equipo se congeló y la entrega conjunta está en riesgo.",
      "Uno de los bandos te exige elegir lado públicamente para «cerrar el tema de una vez».",
      "El conflicto escala a dirección, que pide nombres de responsables antes del viernes."
    ]}
];

const RONDAS_META = [
  { n:1, nombre:"Capacidad actual", etiqueta:"RONDA 01", presion:33,
    instruccion:"Acuerden una respuesta al caso y jueguen UN Movimiento.", movs:1 },
  { n:2, nombre:"Fuerza de retorno", etiqueta:"RONDA 02", presion:66,
    instruccion:"La presión aumenta. Amplíen la respuesta sin repetir el Movimiento anterior.", movs:1 },
  { n:3, nombre:"Umbral", etiqueta:"RONDA 03", presion:100,
    instruccion:"Presión máxima. Combinen DOS Movimientos y declaren una conducta sostenible.", movs:2 }
];
