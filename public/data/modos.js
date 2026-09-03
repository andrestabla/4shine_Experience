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
  resumen:"Hasta seis personas, cada una con su rol en el tablero.",
  desc:"El grupo elige y asigna sus roles sobre el tablero —reales, recreados o deseados— y cada quien responde por su avatar. La mesa trabaja un turno a la vez, con la carta como hilo.",
  bueno:["Equipos comerciales, comités y mandos medios",
         "Grupos de clase y talleres",
         "Cuando el valor está en las preguntas de los demás"],
  duracion:"15 min por participante + 20 de apertura y cierre", personas:"3 a 6",

  /* ---------- los roles NO vienen dados: los elige y los asigna el grupo ---------- */
  asignacion:{
    titulo:"Los roles no vienen dados",
    idea:"El juego no reparte papeles. El grupo decide qué rol ocupa cada quien sobre el tablero y lo declara en voz alta antes de empezar. Esa decisión ya es parte de la sesión: dice desde dónde quiere mirar cada persona.",
    tipos:[
      {id:"real", nombre:"Rol real", color:"#3988ca",
       desc:"El que cada quien ocupa hoy en su organización o institución. Se nombra tal cual: «jefa de operaciones», «delegado de curso», «el que cierra las cuentas grandes».",
       cuando:"Cuando el equipo trabaja una situación que de verdad comparte y necesita verse tal como está.",
       cuidado:"Es el más honesto y el más expuesto: exige haber acordado la confidencialidad en voz alta."},
      {id:"recreado", nombre:"Rol recreado", color:"#8b59b2",
       desc:"Juego de rol: alguien toma el papel de otro —el cliente, dirección, el profesor, un par de otra área— y sostiene esa mirada durante todo su turno.",
       cuando:"Cuando falta en la sala la voz que más pesa en la decisión, o cuando el tema es demasiado caliente para ponerlo en primera persona.",
       cuidado:"Quien recrea un rol habla desde él, no de él. Si dice «yo creo que el cliente pensaría…», ha salido del papel."},
      {id:"deseado", nombre:"Rol deseado", color:"#ed8124",
       desc:"El que aspira a ocupar: el cargo al que quiere llegar, la versión de sí que todavía no ejerce.",
       cuando:"En procesos de sucesión, promoción o transición, y con estudiantes que están decidiendo qué quieren ser.",
       cuidado:"El tablero no se convierte en fantasía: el rol es deseado, la situación sigue siendo real."}
    ],
    mezcla:"Los tres tipos pueden convivir en la misma mesa. Una sesión donde dos personas juegan su rol real, una recrea al cliente ausente y otra ocupa el rol al que aspira suele producir más movimiento que cuatro roles reales."
  },

  /* ---------- la regla de oro: cómo interactúa cada quien con su avatar ---------- */
  avatar:{
    titulo:"Cada quien responde por su avatar",
    reglas:[
      {t:"Su avatar lo coloca usted",
       d:"Cada participante pone su propio avatar en el cuadrante desde el que va a jugar y lo nombra con el rol que eligió. Nadie coloca el avatar de otro."},
      {t:"En su turno, solo mueve lo suyo",
       d:"Puede mover su avatar y los conectores que salen de él. Las piezas y vínculos de los demás quedan donde están, aunque le estorben."},
      {t:"Para mover algo ajeno, hay que pedirlo",
       d:"Se le pide en voz alta a quien corresponde: «¿podrías acercarte a esto?». La otra persona decide si lo hace. Ese pedido es, en sí mismo, la conducta que se está entrenando."},
      {t:"El avatar no se abandona",
       d:"Al terminar el turno, cada avatar queda donde lo dejaron. La escena se acumula: al final, la mesa ve el sistema que construyeron entre todos."},
      {t:"Se habla desde el rol, no sobre él",
       d:"Quien recrea a un cliente dice «no me sirve este plazo», no «el cliente diría que no le sirve». Salir del rol para comentarlo rompe la escena."}
    ]
  },

  /* ---------- el hilo de cada turno ---------- */
  hilo:{
    titulo:"El hilo del turno es la carta",
    idea:"Un turno sin hilo se convierte en conversación suelta. La carta que se roba al inicio del turno es lo que lo sostiene: fija sobre qué se pregunta, qué hay que mover y con qué se cierra.",
    pasos:["<b>Se lee la carta en voz alta.</b> Todos escuchan la misma consigna: ese es el contexto compartido del turno.",
           "<b>El protagonista responde desde su rol</b> y mueve su avatar según lo que pide «En el tablero».",
           "<b>Los demás preguntan desde sus roles</b>, no como espectadores: quien recrea al cliente pregunta como cliente.",
           "<b>La pregunta de cierre de la carta</b> termina el turno. No se sigue conversando: se pasa el testigo."],
    nota:"Si el grupo prefiere un hilo distinto —una situación común, un caso traído por el Advisor—, la carta se usa igual dentro de él. Lo que no funciona es un turno sin ningún hilo."
  },

  /* ---------- funciones de apoyo, opcionales ---------- */
  apoyos:[
    {nombre:"Escriba", que:"Anota las frases textuales del protagonista y se las devuelve al cierre. Útil desde cuatro personas."},
    {nombre:"Guardián del tiempo", que:"Marca el inicio y el fin de cada paso. Sin él, el primer turno se lleva media sesión."}
  ],
  /* ---------- la ruta de un turno ---------- */
  turno:[
    {n:1, paso:"Se roba y se lee la carta", min:1, fase:"conecta",
     protagonista:"Roba la carta del turno y la lee en voz alta.",
     mesa:"Escucha. Esa consigna es el hilo compartido de todo el turno.",
     porque:"Sin hilo, el turno se convierte en conversación suelta. La carta fija sobre qué se trabaja."},
    {n:2, paso:"Construcción en silencio", min:3, fase:"conecta",
     protagonista:"Coloca o reubica su avatar y las piezas de su situación, sin explicar nada.",
     mesa:"Silencio absoluto. Nadie sugiere dónde poner una pieza ni toca el tablero.",
     porque:"El silencio protege la autoría: si alguien opina mientras construye, la escena deja de ser suya."},
    {n:3, paso:"Narración desde el rol", min:2, fase:"comprende",
     protagonista:"Cuenta lo que construyó hablando desde su rol, sin que nadie lo interrumpa.",
     mesa:"Escucha. El escriba, si lo hay, anota las frases textuales.",
     porque:"Hablar desde el rol —real, recreado o deseado— sostiene la escena y evita el comentario de sobremesa."},
    {n:4, paso:"Preguntas desde los roles", min:4, fase:"comprende",
     protagonista:"Responde lo que quiera responder. Puede mover su avatar mientras habla.",
     mesa:"Una pregunta por persona, en orden, hecha desde el rol de cada quien. Preguntas, nunca consejos.",
     porque:"Quien recrea al cliente pregunta como cliente: así entra en la sala la voz que faltaba."},
    {n:5, paso:"Movimiento y pedidos", min:3, fase:"crea",
     protagonista:"Hace lo que pide la carta sobre el tablero. Si necesita mover algo ajeno, lo pide en voz alta.",
     mesa:"El avatar de cada quien solo lo mueve su dueño, y solo si acepta el pedido.",
     porque:"El pedido en voz alta es, en sí mismo, la conducta que se está entrenando."},
    {n:6, paso:"Cierre y testigo", min:2, fase:"consolida",
     protagonista:"Voltea la carta, elige su conducta y dice ante quién y cuándo.",
     mesa:"El escriba le devuelve dos frases textuales suyas. Nadie añade nada más.",
     porque:"La pregunta de cierre de la carta termina el turno: no se sigue conversando, se pasa el testigo."}
  ],
  /* ---------- las reglas que sostienen todo ---------- */
  reglas:[
    {t:"Cada quien responde por su avatar",
     d:"Solo su dueño lo mueve. Para que otro lo mueva, hay que pedírselo en voz alta y él decide."},
    {t:"Preguntas, no consejos",
     d:"Si alguien empieza con «yo que tú…» o «deberías…», el Advisor lo devuelve y pide que lo formule como pregunta."},
    {t:"Nadie interpreta la escena ajena",
     d:"«Ese muro es tu miedo» está prohibido. Lo que significa una pieza solo lo dice quien la puso."},
    {t:"Una pregunta por persona y por ronda",
     d:"El turno rota en orden. Quien no tenga pregunta, pasa: el silencio también es una intervención."},
    {t:"Lo de la mesa se queda en la mesa",
     d:"Se acuerda en voz alta antes de empezar. Sin esa frase dicha, nadie pone sobre el tablero lo que de verdad importa."},
    {t:"Se habla desde el rol, no sobre él",
     d:"Quien recrea a un cliente dice «no me sirve este plazo», no «el cliente diría que…». Comentar el rol desde fuera rompe la escena."},
    {t:"Todos son protagonistas una vez",
     d:"La sesión no termina hasta que la última persona haya tenido su turno completo. Si no alcanza el tiempo, se reduce el turno, no el número de participantes."}
  ],

  /* ---------- lo que hace el Advisor cuando hay mesa ---------- */
  advisor:"Con mesa, el Advisor tiene tres funciones más: acompañar la asignación de roles al inicio —sin decidir por el grupo—, sostener el hilo de cada turno, y proteger las reglas. Devuelve los consejos disfrazados de pregunta, avisa cuando alguien sale de su rol, y se asegura de que cada quien conserve la última palabra sobre su propio avatar."
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
