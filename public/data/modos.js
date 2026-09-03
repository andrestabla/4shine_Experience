/* Modos de juego · El Diamante Vivo
   Individual: una persona, su escena, su Advisor.
   Grupal: varias personas en una mesa, con roles rotativos y turnos estrictos.
   El modo grupal existe para resolver los tres fallos clásicos de la facilitación en grupo:
   que el más locuaz domine, que los demás aconsejen en vez de preguntar,
   y que el dueño de la escena pierda la autoría de su propia situación. */

const MODOS = {

individual: {
  id:"individual", nombre:"Individual", icono:"◆",
  resumen:"Una persona, su situación, su tablero.",
  desc:"El formato de mentoría. Toda la sesión gira alrededor de una sola escena y el Advisor acompaña sin testigos. La profundidad es máxima; no hay aprendizaje por observación.",
  bueno:["Mentoría 1:1 y acompañamiento ejecutivo",
         "Situaciones sensibles o confidenciales",
         "Cuando la persona necesita pensar sin público"],
  duracion:"30–60 min", personas:"1"
},

grupal: {
  id:"grupal", nombre:"Mesa de trabajo", icono:"◈",
  resumen:"Hasta seis personas. Cada una con su escena, por turnos.",
  desc:"Cada participante construye su propia situación, pero la mesa trabaja una escena a la vez. Se aprende dos veces: al ser protagonista y al ver cómo otro mueve su tablero.",
  bueno:["Equipos comerciales, comités y mandos medios",
         "Grupos de clase y talleres",
         "Cuando el valor está en las preguntas de los demás"],
  duracion:"15 min por participante + 20 de apertura y cierre", personas:"3 a 6",

  /* ---------- los cuatro roles, que rotan en cada turno ---------- */
  roles:[
    {id:"protagonista", nombre:"Protagonista", color:"#d9b54a",
     que:"Su escena está sobre la mesa. Es la única persona que puede tocar sus piezas.",
     hace:["Construye y mueve su tablero","Narra lo que ve","Responde las preguntas","Declara su compromiso"],
     evita:["Justificarse ante el grupo","Pedir que le digan qué hacer"]},
    {id:"indagadores", nombre:"Indagadores", color:"#8b59b2",
     que:"El resto de la mesa. Solo pueden hacer preguntas sobre lo que se ve en el tablero.",
     hace:["Preguntan por distancias, ausencias y tensiones","Señalan lo que se nombró pero no está en la escena"],
     evita:["Dar consejos o soluciones","Interpretar la escena de otro","Contar su propio caso parecido"]},
    {id:"escriba", nombre:"Escriba", color:"#3988ca",
     que:"Anota las palabras textuales del protagonista, no su interpretación de ellas.",
     hace:["Registra las frases exactas que aparecen","Se las devuelve al cierre del turno"],
     evita:["Resumir con sus propias palabras","Opinar sobre lo que anota"]},
    {id:"tiempo", nombre:"Guardián del tiempo", color:"#ed8124",
     que:"Protege el turno. Sin él, el primer participante se lleva la mitad de la sesión.",
     hace:["Marca el inicio y el fin de cada paso","Avisa a un minuto del cierre"],
     evita:["Interrumpir una frase a medias","Negociar la extensión del turno"]}
  ],

  /* ---------- la ruta de un turno: qué hace cada quién y cuándo ---------- */
  turno:[
    {n:1, paso:"Construcción en silencio", min:3, fase:"conecta",
     protagonista:"Arma su escena sin explicar nada.",
     mesa:"Silencio absoluto. Nadie comenta, nadie sugiere dónde poner una pieza.",
     porque:"El silencio protege la autoría: si alguien opina mientras construye, la escena deja de ser suya."},
    {n:2, paso:"Narración", min:2, fase:"comprende",
     protagonista:"Cuenta lo que construyó, sin que nadie lo interrumpa.",
     mesa:"Escucha. El escriba anota las frases textuales.",
     porque:"Dos minutos sin interrupción bastan para que aparezca lo que no se había dicho."},
    {n:3, paso:"Ronda de preguntas", min:4, fase:"comprende",
     protagonista:"Responde solo lo que quiera responder. Puede mover piezas mientras habla.",
     mesa:"Una pregunta por persona, en orden. Preguntas, nunca consejos.",
     porque:"El turno rotatorio impide que el más rápido acapare; la prohibición de aconsejar evita que la mesa resuelva por el protagonista."},
    {n:4, paso:"Carta y movimiento", min:4, fase:"crea",
     protagonista:"Roba una carta, hace lo que pide sobre el tablero y explica cada movimiento.",
     mesa:"Observa en silencio. Solo el Advisor puede intervenir.",
     porque:"Mover el tablero delante de otros compromete de una forma que hablar no logra."},
    {n:5, paso:"Compromiso y devolución", min:2, fase:"consolida",
     protagonista:"Voltea la carta, elige su conducta y dice ante quién y cuándo.",
     mesa:"El escriba le devuelve dos frases textuales suyas. Nadie añade nada más.",
     porque:"Oír sus propias palabras en boca de otro es el cierre más potente de la mesa."}
  ],

  /* ---------- las reglas que sostienen todo ---------- */
  reglas:[
    {t:"Solo el protagonista toca sus piezas",
     d:"Nadie mueve el tablero de otro, ni para ayudar. Señalar con el dedo sí; mover, no."},
    {t:"Preguntas, no consejos",
     d:"Si alguien empieza con «yo que tú…» o «deberías…», el Advisor lo devuelve y pide que lo formule como pregunta."},
    {t:"Nadie interpreta la escena ajena",
     d:"«Ese muro es tu miedo» está prohibido. Lo que significa una pieza solo lo dice quien la puso."},
    {t:"Una pregunta por persona y por ronda",
     d:"El turno rota en orden. Quien no tenga pregunta, pasa: el silencio también es una intervención."},
    {t:"Lo de la mesa se queda en la mesa",
     d:"Se acuerda en voz alta antes de empezar. Sin esa frase dicha, nadie pone sobre el tablero lo que de verdad importa."},
    {t:"Todos son protagonistas una vez",
     d:"La sesión no termina hasta que la última persona haya tenido su turno completo. Si no alcanza el tiempo, se reduce el turno, no el número de participantes."}
  ],

  /* ---------- lo que hace el Advisor cuando hay mesa ---------- */
  advisor:"Con mesa, el Advisor tiene una función más: proteger las reglas. Devuelve los consejos disfrazados de pregunta, corta las interpretaciones sobre la escena ajena, y se asegura de que el protagonista conserve la última palabra sobre lo que sus piezas significan."
}
};

/* Ajustes por escenario: tiempos y matices del modo grupal */
const MODO_CTX = {
  comercial:{ grupal:{ mesa:"Equipo comercial o célula de ventas", ideal:"4 a 5 personas",
    nota:"Funciona especialmente bien cuando cada quien trae una cuenta distinta: las preguntas cruzadas revelan patrones que en el reporte de pipeline no aparecen." }},
  gerencial:{ grupal:{ mesa:"Comité o grupo de mandos medios", ideal:"4 a 6 personas",
    nota:"Si los participantes son pares con historia entre ellos, el acuerdo de confidencialidad en voz alta no es un formalismo: es la condición para que alguien ponga algo real sobre la mesa." }},
  escolar:{ grupal:{ mesa:"Grupo de curso", ideal:"4 a 6 estudiantes",
    nota:"Reduce los turnos a 10 minutos y haz la primera ronda de preguntas tú, en voz alta, para que vean qué es una pregunta y qué es un consejo. Después ya lo hacen solos." }}
};
