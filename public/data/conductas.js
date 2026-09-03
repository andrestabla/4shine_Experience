/* Mazo unificado 4Shine · 96 cartas de dos caras.
   RECTO   = reto: perturba la escena y exige mover el tablero
   REVERSO = conducta observable, literal del Mapa de competencias V3 */
const PILARES = [
  {
    "id": "within",
    "nombre": "Shine Within",
    "verbo": "Comprende",
    "color": "#8b59b2",
    "lema": "El centro",
    "desc": "Identidad, creencias, regulación emocional y propósito. La base que sostiene todo lo demás."
  },
  {
    "id": "out",
    "nombre": "Shine Out",
    "verbo": "Conecta",
    "color": "#c13a68",
    "lema": "El vínculo",
    "desc": "Presencia, comunicación, escucha, confianza e influencia: cómo la interioridad se vuelve visible."
  },
  {
    "id": "up",
    "nombre": "Shine Up",
    "verbo": "Crea",
    "color": "#ed8124",
    "lema": "El ecosistema",
    "desc": "Lectura del entorno, red de relaciones, pensamiento estratégico y decisión bajo incertidumbre."
  },
  {
    "id": "beyond",
    "nombre": "Shine Beyond",
    "verbo": "Consolida",
    "color": "#3988ca",
    "lema": "La huella",
    "desc": "Desarrollo de otros, cultura e impacto que permanece cuando el líder ya no está."
  }
];

const CONDUCTAS = [
 {
  "id": "W01",
  "pilar": "within",
  "componente": "Autoconfianza y autoliderazgo",
  "competencia": "Autoeficacia y seguridad",
  "conducta": "Afronta desafíos con seguridad en sus capacidades sin caer en la arrogancia, lo que motiva al equipo a perseguir metas exigentes.",
  "reto": {
   "t": "Paso hacia adelante",
   "c": "¿Qué riesgo exigente está dispuesto a asumir usted ahora que demuestre su confianza y motive al equipo a seguirlo?",
   "z": "Acerque su avatar al foco más desafiante, coloque una pieza puente hacia el equipo y ponga una ficha de energía sobre ese puente.",
   "p": "¿Qué hará en el primer paso para que el equipo quiera acompañarlo?"
  }
 },
 {
  "id": "W02",
  "pilar": "within",
  "componente": "Autoconfianza y autoliderazgo",
  "competencia": "Autoeficacia y seguridad",
  "conducta": "Muestra consistencia entre lo que dice y hace, generando credibilidad y confianza en los colaboradores",
  "reto": {
   "t": "Palabra y obra",
   "c": "¿Qué compromiso suyo aquí aún no se ha convertido en acto visible y cómo lo corregirá usted ahora?",
   "z": "Ubique la pieza que representa esa promesa, colóquele una ficha de recurso y acerque su avatar para ejecutarla.",
   "p": "Si no la ejecuta hoy, ¿qué cambio de escenario hará usted para que su palabra y su acción coincidan?"
  }
 },
 {
  "id": "W03",
  "pilar": "within",
  "componente": "Autoconfianza y autoliderazgo",
  "competencia": "Gestión de creencias (mindset)",
  "conducta": "Identifica activamente sus creencias limitantes (ej. \"no soy bueno en esto\") y las reescribe hacia un lenguaje transformador y empoderante (ej. \"estoy aprendiendo a dominar esto\").",
  "reto": {
   "t": "Creencia a acción",
   "c": "¿Qué creencia limitante aparece en esta escena y cómo la enunciaría usted ahora en términos de aprendizaje y progreso?",
   "z": "Retire la pieza barrera que simboliza esa creencia y sustituya por una pieza energía etiquetada con la nueva frase.",
   "p": "¿Qué acción medible demostrará que la nueva creencia lo impulsa a usted?"
  }
 },
 {
  "id": "W04",
  "pilar": "within",
  "componente": "Autoconfianza y autoliderazgo",
  "competencia": "Gestión de creencias (mindset)",
  "conducta": "Sustituye preguntas de víctima (¿Por qué a mí?) por preguntas de protagonista (¿Qué puedo aprender de esto? ¿Cómo puedo aportar valor?).",
  "reto": {
   "t": "Cambio de pregunta",
   "c": "¿Qué pregunta de víctima surge en esta situación y cuál sería la pregunta alternativa que pondría a usted en acción?",
   "z": "Coloque una ficha de tensión sobre la pregunta de víctima y una ficha de recurso sobre la pregunta protagonista; acerque su avatar a la ficha de recurso.",
   "p": "¿Cuál de las dos preguntas moviliza a usted ahora mismo?"
  }
 },
 {
  "id": "W05",
  "pilar": "within",
  "componente": "Autoconfianza y autoliderazgo",
  "competencia": "Responsabilidad radical (accountability)",
  "conducta": "Pasa de poner excusas a tomar decisiones; reconoce que tiene el control de su vida y responsabilidad sobre sus resultados.",
  "reto": {
   "t": "Excusa a decisión",
   "c": "¿Qué excusa usa usted aquí para evitar decidir y cuál será la decisión concreta que tomará en su lugar?",
   "z": "Retire la ficha que representa la excusa, añada una ficha de recurso que nombre la decisión y conecte esa ficha a su avatar con un conector activo.",
   "p": "¿Qué primer gesto demostrará que eligió la decisión y no la excusa?"
  }
 },
 {
  "id": "W06",
  "pilar": "within",
  "componente": "Autoconfianza y autoliderazgo",
  "competencia": "Responsabilidad radical (accountability)",
  "conducta": "No culpa a factores externos; asume la propiedad de sus errores y busca soluciones proactivas.",
  "reto": {
   "t": "Error y reparación",
   "c": "¿Qué error suyo reciente sostiene esta escena y qué reparación concreta propondrá usted sin atribuir la culpa a factores externos?",
   "z": "Mueva la pieza que representa el error hacia su avatar, coloque una ficha de recurso que describa la reparación y cambie el conector hacia la solución a 'en revisión'.",
   "p": "¿Qué evidencia será suficiente para que usted considere la reparación efectiva?"
  }
 },
 {
  "id": "W07",
  "pilar": "within",
  "componente": "Inteligencia emocional y regulación (self-regulation)",
  "competencia": "Autoconciencia emocional",
  "conducta": "Monitorea sus estados de ánimo en tiempo real y reconoce cómo estos afectan su toma de decisiones y a las personas a su alrededor.",
  "reto": {
   "t": "Marque su ánimo",
   "c": "¿Qué ánimo domina usted en esta escena y qué decisión reciente ha condicionado ese ánimo?",
   "z": "Marque su avatar con una ficha que nombre ese ánimo y coloque una ficha de tensión sobre la decisión que afectó.",
   "p": "¿Qué señal detectable le indicará a usted tempranamente ese ánimo la próxima vez?"
  }
 },
 {
  "id": "W08",
  "pilar": "within",
  "componente": "Inteligencia emocional y regulación (self-regulation)",
  "competencia": "Autoconciencia emocional",
  "conducta": "Identifica sus \"detonantes\" emocionales (ej. sentirse cuestionado) antes de que provoquen una reacción impulsiva.",
  "reto": {
   "t": "Distancia al detonante",
   "c": "¿Cuál es el detonante que suele activarlo a usted en esta escena antes de que reaccione impulsivamente?",
   "z": "Identifique el elemento detonante, coloque una ficha de tensión sobre él y aléjelo un campo de su avatar para crear un espacio de espera.",
   "p": "¿Qué reacción práctica realizará usted en los primeros cinco segundos cuando detecte ese detonante?"
  }
 },
 {
  "id": "W09",
  "pilar": "within",
  "componente": "Inteligencia emocional y regulación (self-regulation)",
  "competencia": "Regulación emocional",
  "conducta": "Aplica la pausa estratégica (Método STOP: Parar, Pensar, Observar, Proceder) antes de reaccionar ante una crisis.",
  "reto": {
   "t": "El segundo antes",
   "c": "Mire la ficha de tensión más caliente de su escena. ¿Qué hace usted en el segundo anterior a estallar ahí?",
   "z": "Coloque una ficha de recurso justo antes de esa tensión, en el punto donde todavía puede elegir.",
   "p": "¿Qué le dará la señal de que ese segundo llegó?"
  }
 },
 {
  "id": "W10",
  "pilar": "within",
  "componente": "Inteligencia emocional y regulación (self-regulation)",
  "competencia": "Regulación emocional",
  "conducta": "Utiliza \"anclas de serenidad\" (respiración consciente, objetos físicos o mantras) para volver a su centro en momentos de estrés.",
  "reto": {
   "t": "Ancla serena",
   "c": "Elija ahora un gesto, palabra corta u objeto que lo traiga al centro y pruébelo en esta escena.",
   "z": "Añada una ficha de recurso junto a su avatar que represente ese ancla y acérquela al área donde se concentra la tensión.",
   "p": "¿Qué señal concreta lo hará usar ese ancla antes de que suba la temperatura?"
  }
 },
 {
  "id": "W11",
  "pilar": "within",
  "componente": "Inteligencia emocional y regulación (self-regulation)",
  "competencia": "Regulación emocional",
  "conducta": "Gestiona la frustración manteniendo la calma, proyectando estabilidad al equipo.",
  "reto": {
   "t": "Centro estable",
   "c": "En la próxima confrontación de la escena, mantenga tono y postura neutros y no permita que la escalada cambie su gesto.",
   "z": "Acerque su avatar un paso hacia el centro del tablero y coloque sobre él una ficha de recurso que signifique estabilidad.",
   "p": "¿Qué frase neutra dirá para sostener esa calma cuando aumente la presión?"
  }
 },
 {
  "id": "W12",
  "pilar": "within",
  "componente": "Inteligencia emocional y regulación (self-regulation)",
  "competencia": "Gestión de la energía",
  "conducta": "Prioriza su descanso y desconexión para mantener la claridad mental, entendiendo que el agotamiento afecta la calidad de sus decisiones.",
  "reto": {
   "t": "Tiempo de desconexión",
   "c": "Bloquee ahora un periodo sin interrupciones en su agenda y anúncielo en la escena como no negociable.",
   "z": "Retire una pieza de energía del tablero y colóquela fuera del campo para representar ese tiempo de desconexión.",
   "p": "¿Qué barrera deberá mover para que ese tiempo realmente se mantenga?"
  }
 },
 {
  "id": "W13",
  "pilar": "within",
  "componente": "Inteligencia emocional y regulación (self-regulation)",
  "competencia": "Gestión de la energía",
  "conducta": "Incorpora rutinas de bienestar físico y mental para recargar su \"batería\" de liderazgo.",
  "reto": {
   "t": "Batería visible",
   "c": "¿Qué pieza en Within representa su nivel de energía hoy y qué la ha agotado? Ubíquela tal como está en la escena.",
   "z": "Coloque una ficha de recurso en el campo donde su energía se sostiene, y una de tensión donde se agota.",
   "p": "Si esa pieza no cambia, ¿qué impacto tendrá en su liderazgo la próxima semana?"
  }
 },
 {
  "id": "W14",
  "pilar": "within",
  "componente": "Propósito y valores (integridad)",
  "competencia": "Claridad de propósito (Ikigai)",
  "conducta": "Define y articula un \"para qué\" claro que conecta su trabajo diario con un impacto mayor (ej. \"Estoy aquí para empoderar a otros\").",
  "reto": {
   "t": "Norte claro",
   "c": "¿Qué 'para qué' aparece cuando mira la pieza base en Within? Dígalo en una frase, tal como lo siente usted.",
   "z": "Acérque una ficha de energía a la pieza Within que más refleja ese paraqué.",
   "p": "¿Qué decisión reciente habría sido distinta si ese paraqué hubiera guiado la elección?"
  }
 },
 {
  "id": "W15",
  "pilar": "within",
  "componente": "Propósito y valores (integridad)",
  "competencia": "Claridad de propósito (Ikigai)",
  "conducta": "Utiliza su propósito como filtro para la toma de decisiones difíciles, asegurando que sus acciones honren su intención de vida.",
  "reto": {
   "t": "Filtro personal",
   "c": "Frente al dilema que muestra su escena, ¿qué pieza en Within habla por su propósito? ¿Cuál le pide avanzar o frenar?",
   "z": "Aleje una ficha de decisión de la pieza que contradice su sentido personal dentro de Within.",
   "p": "¿Qué ganancia y qué costo ve al priorizar lo que su propósito señala?"
  }
 },
 {
  "id": "W16",
  "pilar": "within",
  "componente": "Propósito y valores (integridad)",
  "competencia": "Integridad y coherencia",
  "conducta": "Hace lo que dice.  Sus acciones privadas y públicas son congruentes con los valores que predica.",
  "reto": {
   "t": "Palabra y acto",
   "c": "Identifique una discrepancia entre lo que dice y lo que hace aquí y sustituya la acción contradictoria por otra que refleje su mensaje.",
   "z": "Gire la pieza que lo representa para mostrar la nueva acción y cambie su conector hacia el valor correspondiente por 'acuerdo'.",
   "p": "¿Qué costo acepta para mantener ahora esa alineación entre palabra y acto?"
  }
 },
 {
  "id": "W17",
  "pilar": "within",
  "componente": "Propósito y valores (integridad)",
  "competencia": "Integridad y coherencia",
  "conducta": "Cumple sus promesas y compromisos, generando un entorno de confianza y previsibilidad.",
  "reto": {
   "t": "Palabra cumplida",
   "c": "Declare un compromiso público para esta escena con una fecha concreta de entrega.",
   "z": "Añada una ficha de recurso a la pieza que representa ese compromiso y cambie su conector a 'acuerdo'.",
   "p": "Si no cumple esa fecha, ¿qué acción concreta realizará para restaurar la confianza?"
  }
 },
 {
  "id": "W18",
  "pilar": "within",
  "componente": "Propósito y valores (integridad)",
  "competencia": "Integridad y coherencia",
  "conducta": "Defiende sus principios éticos incluso bajo presión o ante la posibilidad de ganancias a corto plazo.",
  "reto": {
   "t": "Firme por principio",
   "c": "Enuncie una decisión que sacrificaría una ganancia inmediata aquí para mantener un principio suyo.",
   "z": "Separe la pieza que representa la ganancia a corto plazo de su avatar y coloque una ficha de barrera entre ambas piezas.",
   "p": "¿Qué línea ética no negociará aunque le ofrezcan un beneficio inmediato?"
  }
 },
 {
  "id": "W19",
  "pilar": "within",
  "componente": "Propósito y valores (integridad)",
  "competencia": "Autenticidad",
  "conducta": "Se muestra genuino, sin adoptar \"máscaras\" corporativas; tiene la valentía de ser él mismo mientras lidera.",
  "reto": {
   "t": "Máscara quitada",
   "c": "¿Qué barrera o conector impide que su avatar muestre cómo es usted realmente? Descríbalo.",
   "z": "Retire o gire la barrera frente a su avatar que simbolice esa incomodidad.",
   "p": "Al hacerlo, ¿qué palabra auténtica surge para describir su liderazgo?"
  }
 },
 {
  "id": "W20",
  "pilar": "within",
  "componente": "Propósito y valores (integridad)",
  "competencia": "Autenticidad",
  "conducta": "Es transparente sobre sus intenciones y valores, lo que facilita la conexión humana con su equipo.",
  "reto": {
   "t": "Intención explícita",
   "c": "Declare en voz alta la motivación real que guía la acción que aparece en esta escena.",
   "z": "Marque su avatar con una ficha de foco que exprese esa intención y acerque una ficha de energía hacia la persona más afectada.",
   "p": "¿Qué reacción espera y cómo la integrará en la relación?"
  }
 },
 {
  "id": "W21",
  "pilar": "within",
  "componente": "Aprendizaje y reflexión (self-awareness)",
  "competencia": "Práctica reflexiva",
  "conducta": "Dedica tiempo agendado para la auto-observación y el análisis de su desempeño (ej. llevar un diario o bitácora emocional).",
  "reto": {
   "t": "Mirada interna",
   "c": "¿Qué sensación o patrón aparece con más fuerza alrededor de su avatar en esta escena y cómo lo nota usted?",
   "z": "En el tablero, ponga una ficha 'registro' junto a su avatar y marque con una ficha tensión el patrón emocional más frecuente.",
   "p": "¿Qué insight diferente obtendría si leyera esa ficha dentro de siete días?"
  }
 },
 {
  "id": "W22",
  "pilar": "within",
  "componente": "Aprendizaje y reflexión (self-awareness)",
  "competencia": "Práctica reflexiva",
  "conducta": "Se hace preguntas poderosas sobre su identidad y futuro (¿En quién me quiero convertir? ¿Qué puedo ofrecer?).",
  "reto": {
   "t": "Yo que viene",
   "c": "¿Quién quiere convertirse usted en este rol dentro de un año y qué habrá dejado de hacer para lograrlo?",
   "z": "Añada en Up una pieza que represente esa versión futura y conecte esa pieza por 'acuerdo' con las acciones que mantendrá.",
   "p": "¿Cuál es el primer gesto observable que lo acercará a esa versión?"
  }
 },
 {
  "id": "W23",
  "pilar": "within",
  "componente": "Aprendizaje y reflexión (self-awareness)",
  "competencia": "Apertura al feedback",
  "conducta": "Solicita retroalimentación constructiva de pares, superiores y subordinados para identificar puntos ciegos.",
  "reto": {
   "t": "El punto ciego",
   "c": "De las personas que puso en el tablero, ¿cuál ve algo de usted que usted no ve? ¿Y por qué no se lo ha preguntado?",
   "z": "Gire el avatar de esa persona hasta que quede mirando hacia el suyo.",
   "p": "¿Qué pregunta exacta le haría, si supiera que responderá con franqueza?"
  }
 },
 {
  "id": "W24",
  "pilar": "within",
  "componente": "Aprendizaje y reflexión (self-awareness)",
  "competencia": "Apertura al feedback",
  "conducta": "Recibe la crítica sin ponerse a la defensiva, utilizándola como insumo para su crecimiento personal.",
  "reto": {
   "t": "Escucha presente",
   "c": "¿Qué conector en Within le indica que se cierra ante crítica y qué ficha lo devuelve visible en la escena?",
   "z": "En el tablero, marque ese conector con una ficha de tensión.",
   "p": "¿Qué observación concreta surge sobre su reacción al verlo marcado?"
  }
 },
 {
  "id": "W25",
  "pilar": "within",
  "componente": "Aprendizaje y reflexión (self-awareness)",
  "competencia": "Mentalidad de crecimiento",
  "conducta": "Ve los errores y fracasos no como definiciones de su valía, sino como oportunidades de aprendizaje y mejora.",
  "reto": {
   "t": "Fallo como dato",
   "c": "Describa el último resultado que usted etiquetó como fracaso y qué información concreta aporta.",
   "z": "Marque con una ficha de recurso la pieza que representa ese evento y acerque su avatar hacia ella.",
   "p": "¿Qué experimento repetirá para convertir esa información en mejora?"
  }
 },
 {
  "id": "W26",
  "pilar": "within",
  "componente": "Aprendizaje y reflexión (self-awareness)",
  "competencia": "Mentalidad de crecimiento",
  "conducta": "Está dispuesto a desaprender hábitos viejos y adquirir nuevas competencias para adaptarse a nuevos desafíos.",
  "reto": {
   "t": "Suelte lo viejo",
   "c": "Indique una práctica habitual que ya no le sirve y qué hábito nuevo ocuparía su lugar.",
   "z": "Retire o gire la pieza que simboliza el hábito viejo y añada una pieza foco para la nueva competencia.",
   "p": "¿Cuál será el primer gesto concreto esta semana para empezar a aprenderlo?"
  }
 },
 {
  "id": "W27",
  "pilar": "within",
  "componente": "Gestión de energía y bienestar (biohacking)",
  "competencia": "Regulación somática y fisiológica",
  "conducta": "Aplica técnicas de respiración consciente antes de situaciones de alta presión.",
  "reto": {
   "t": "Respiración en juego",
   "c": "¿Qué ficha de tensión en Within se activa ante la pieza Out que hoy le aprieta y cómo lo nota en su cuerpo?",
   "z": "Mueva esa ficha de tensión un paso hacia su avatar.",
   "p": "¿Qué variación en la escena anticipa cuando esa ficha cambie de posición?"
  }
 },
 {
  "id": "W28",
  "pilar": "within",
  "componente": "Toma de decisiones y resolución de problemas",
  "competencia": "Compostura",
  "conducta": "Mantiene la serenidad en situaciones de crisis, proyectando confianza y evitando que el pánico paralice al equipo.",
  "reto": {
   "t": "Punto de calma",
   "c": "¿Qué avatar en Within proyecta compostura frente a la ficha de tensión mayor y qué gesto suyo se reconoce primero?",
   "z": "En el tablero, acerque una ficha foco al avatar que elige.",
   "p": "¿Qué muestra ese acercamiento sobre cómo su presencia impacta al equipo?"
  }
 },
 {
  "id": "W29",
  "pilar": "within",
  "componente": "Toma de decisiones y resolución de problemas",
  "competencia": "Compostura",
  "conducta": "Controla los impulsos y evita reacciones defensivas, permitiendo que otros piensen con claridad y ejecuten tareas críticas.",
  "reto": {
   "t": "Calma en escena",
   "c": "¿Qué pieza o vínculo en su tablero dispara su reacción defensiva cuando recibe crítica?",
   "z": "Aleje dos centímetros la pieza que simboliza la crítica respecto a su avatar y ponga una ficha de tensión en el conector.",
   "p": "¿Qué revela este ajuste sobre su impulso a defenderse?"
  }
 },
 {
  "id": "W30",
  "pilar": "within",
  "componente": "Gestión de energía y bienestar (biohacking)",
  "competencia": "Regulación somática y fisiológica",
  "conducta": "Gestiona sus ritmos circadianos y descanso para asegurar un rendimiento cognitivo óptimo.",
  "reto": {
   "t": "Proteja su ciclo",
   "c": "Explique el cambio concreto en su rutina nocturna o de sueño que implementará esta semana para mejorar su rendimiento al día siguiente.",
   "z": "Coloque una ficha de recurso en la base que representa su rutina nocturna y gire esa pieza 90°.",
   "p": "¿Qué obstáculo practicará neutralizar hoy para asegurar ese cambio esta noche?"
  }
 },
 {
  "id": "W31",
  "pilar": "within",
  "componente": "Identidad de liderazgo (identity ownership)",
  "competencia": "Re-alineación Cognitiva",
  "conducta": "Reescribe narrativas internas de duda (\"ocupo el cargo\") por narrativas de propiedad (\"merezco el cargo\").",
  "reto": {
   "t": "Frase repetida",
   "c": "¿Qué frase en Within se repite sobre su pertenencia al cargo? Dígala exactamente como suena en su cabeza.",
   "z": "Acerque su avatar al centro del diamante hasta que la distancia refleje cuánto se siente dueño de ese rol.",
   "p": "¿Qué cambiaría en la escena si esa frase sonara diferente?"
  }
 },
 {
  "id": "W32",
  "pilar": "within",
  "componente": "Identidad de liderazgo (identity ownership)",
  "competencia": "Re-alineación Cognitiva",
  "conducta": "Integra sus valores personales con su rol profesional sin sentir que está \"actuando\".",
  "reto": {
   "t": "Valores en acto",
   "c": "Identifique una próxima decisión donde sus valores choquen con lo que el rol espera y describa una conducta puntual que expresará ese valor.",
   "z": "Coloque una pieza foco sobre el valor en conflicto y únala mediante un conector 'activo' a su avatar.",
   "p": "¿Qué indicador objetivo mirará para comprobar que actuó desde su valor y no desde la apariencia?"
  }
 },
 {
  "id": "O01",
  "pilar": "out",
  "componente": "Comunicación de impacto",
  "competencia": "Claridad e inspiración",
  "conducta": "Expresa objetivos y la visión de futuro de forma clara, evitando la ambigüedad sobre qué se espera y por qué es importante.",
  "reto": {
   "t": "Foco claro",
   "c": "¿Qué foco en la escena está más ambiguo y qué genera esa confusión sobre su propósito?",
   "z": "Acérquelo al avatar que lo lidera y marque con una ficha de recurso la distancia restante.",
   "p": "¿Qué palabra o imagen cambiaría para que ese foco sea comprensible ahora?"
  }
 },
 {
  "id": "O02",
  "pilar": "out",
  "componente": "Comunicación de impacto",
  "competencia": "Claridad e inspiración",
  "conducta": "Utiliza un tono entusiasta, historias o metáforas para alinear al equipo bajo un propósito común y motivador.",
  "reto": {
   "t": "Imagen que une",
   "c": "¿Qué pieza en Out funciona ya como relato que motiva y qué barrera la fragmenta ante quienes debería inspirar?",
   "z": "En el tablero, acerque la pieza 'foco' a quien aparece más distante.",
   "p": "¿Qué revela ese movimiento sobre quién necesita oír esa historia?"
  }
 },
 {
  "id": "O03",
  "pilar": "out",
  "componente": "Comunicación de impacto",
  "competencia": "Escucha Activa y Empática",
  "conducta": "Presta atención plena (mindfulness) cuando un colaborador habla, parafraseando para confirmar entendimiento y validando los aportes.",
  "reto": {
   "t": "Repita y confirme",
   "c": "Cuando alguien hable, diga en voz alta su versión en una línea y añada una frase que valide su aporte.",
   "z": "Marque con una ficha de recurso la pieza del interlocutor y acerque su avatar hacia ella un paso.",
   "p": "¿Qué palabra eligió parafrasear y qué cambió en la expresión del otro?"
  }
 },
 {
  "id": "O04",
  "pilar": "out",
  "componente": "Comunicación de impacto",
  "competencia": "Escucha Activa y Empática",
  "conducta": "Se \"pone en los zapatos\" de sus colegas para construir relaciones de confianza y seguridad psicológica.",
  "reto": {
   "t": "Póngase en su lugar",
   "c": "Describa en una frase cómo viviría esta situación desde la posición del colega y cuál sería su primera acción para aliviar su tensión.",
   "z": "Mueva su avatar al campo del colega y marque con una ficha de tensión la preocupación que imagina.",
   "p": "¿Qué diferencia esencial encontró entre su perspectiva y la del otro?"
  }
 },
 {
  "id": "O05",
  "pilar": "out",
  "componente": "Comunicación de impacto",
  "competencia": "Adaptabilidad Comunicativa",
  "conducta": "Lee a su audiencia y ajusta su estilo y lenguaje (ej. técnico vs. estratégico) según el interlocutor.",
  "reto": {
   "t": "Mensaje a medida",
   "c": "¿Qué pieza o distancia en su tablero señala quién necesita un tono más técnico o más estratégico?",
   "z": "En el tablero, mueva el mensaje que representa su comunicación más cerca del avatar del interlocutor y marque su tono con una ficha 'técnico' o 'estratégico'.",
   "p": "¿Qué cambio en la recepción del mensaje emergió al ajustar esa proximidad y etiqueta?"
  }
 },
 {
  "id": "O06",
  "pilar": "out",
  "componente": "Comunicación de impacto",
  "competencia": "Adaptabilidad Comunicativa",
  "conducta": "Identifica señales no verbales en los demás y modifica el ritmo o enfoque de su mensaje para mantener la sintonía y asegurar que el mensaje sea aceptado.",
  "reto": {
   "t": "Sintonice el ritmo",
   "c": "Si observa señales no verbales de disconfort, reduzca la velocidad de su exposición y haga una pregunta de comprobación.",
   "z": "Marque con una ficha de tensión la pieza que mostró la señal no verbal y aleje su avatar un paso para bajar el ritmo.",
   "p": "¿Qué gesto o silencio lo invitó a modificar su ritmo?"
  }
 },
 {
  "id": "O07",
  "pilar": "out",
  "componente": "Influencia positiva",
  "competencia": "Construcción de confianza (Trust)",
  "conducta": "Comparte información relevante de manera oportuna y honesta (transparencia), incluso las malas noticias.",
  "reto": {
   "t": "Información clave",
   "c": "¿Qué pieza en su tablero contiene información relevante que otros necesitan y qué la bloquea?",
   "z": "Acerque esa pieza al avatar afectado y marque su conector como activo o tenso.",
   "p": "¿Qué cambio en ese conector sería prueba de mayor transparencia?"
  }
 },
 {
  "id": "O08",
  "pilar": "out",
  "componente": "Influencia positiva",
  "competencia": "Construcción de confianza (Trust)",
  "conducta": "Admite abiertamente cuando \"no sabe\" algo y trata a todos con respeto, eliminando el miedo a represalias por reportar problemas.",
  "reto": {
   "t": "Admisión abierta",
   "c": "¿Dónde en el tablero se siente una barrera por miedo a preguntar o admitir desconocimiento?",
   "z": "Gire la pieza barrera y ponga una ficha de tensión sobre el vínculo que más la activa.",
   "p": "¿Qué haría que admitir 'no saber' fuese seguro para esa persona?"
  }
 },
 {
  "id": "O09",
  "pilar": "out",
  "componente": "Influencia positiva",
  "competencia": "Influencia ética y persuasión",
  "conducta": "Utiliza la persuasión racional (datos/hechos) y el ejemplo personal (\"walk the talk\") en lugar de la manipulación o la amenaza.",
  "reto": {
   "t": "Hecho y ejemplo",
   "c": "Presente un argumento concreto y haga usted mismo el primer gesto que exige ese argumento.",
   "z": "Acérque la pieza 'foco' al avatar del destinatario y marque con una ficha de recurso su propio avatar.",
   "p": "¿Qué evidencia mostró y qué acción ejecutó primero para sostenerla?"
  }
 },
 {
  "id": "O10",
  "pilar": "out",
  "componente": "Influencia positiva",
  "competencia": "Influencia ética y persuasión",
  "conducta": "Apela a valores e ideales compartidos para generar una voluntad genuina de colaboración en el equipo.",
  "reto": {
   "t": "Lo que compartimos",
   "c": "Frente a la pieza que representa lo que usted quiere lograr, ¿qué de eso le importa también a quien tiene enfrente?",
   "z": "Coloque una pieza base entre ambos avatares: lo que ninguno de los dos está dispuesto a perder.",
   "p": "Si mañana empezara la conversación por esa pieza, ¿qué cambiaría?"
  }
 },
 {
  "id": "O11",
  "pilar": "out",
  "componente": "Influencia positiva",
  "competencia": "Reconocimiento y feedback",
  "conducta": "Reconoce públicamente los logros y da crédito explícito a los colaboradores por sus contribuciones, fomentando el orgullo colectivo.",
  "reto": {
   "t": "Crédito visible",
   "c": "¿Qué logro en el tablero no tiene reconocimiento visible para usted? Nómbralo en voz alta.",
   "z": "Coloque junto a la pieza correspondiente una ficha de reconocimiento.",
   "p": "¿Qué vínculo en Out cambiaría si ese reconocimiento fuera explícito?"
  }
 },
 {
  "id": "O12",
  "pilar": "out",
  "componente": "Influencia positiva",
  "competencia": "Reconocimiento y feedback",
  "conducta": "Brinda feedback privado, específico y centrado en la conducta (no en la persona) para corregir el rumbo y desarrollar talento.",
  "reto": {
   "t": "Reconocimiento certero",
   "c": "¿Qué pieza en Out merece un reconocimiento privado y qué conector actual dificulta que lo reciba?",
   "z": "En el tablero, retire ese conector y cambie su conector por 'acuerdo' entre ambas piezas.",
   "p": "¿Qué le dice ahora el tablero sobre la forma y el lugar del reconocimiento?"
  }
 },
 {
  "id": "O13",
  "pilar": "out",
  "componente": "Presencia digital e híbrida",
  "competencia": "Influencia asíncrona y virtual",
  "conducta": "Proyecta la misma \"gravitas\" y calidez en videoconferencias que en persona.",
  "reto": {
   "t": "Presencia igualada",
   "c": "Prepare su próxima reunión remota como si fuera cara a cara: elija la postura y la frase de apertura que sostendría en persona.",
   "z": "Mueva su avatar al borde del pilar Out y marque con una ficha de energía su foco.",
   "p": "¿Qué diferencia notó en la percepción del grupo cuando mantuvo esa postura?"
  }
 },
 {
  "id": "O14",
  "pilar": "out",
  "componente": "Presencia digital e híbrida",
  "competencia": "Influencia asíncrona y virtual",
  "conducta": "Gestiona su reputación y narrativa en plataformas digitales (LinkedIn) de forma estratégica, no solo social.",
  "reto": {
   "t": "Narrativa pública",
   "c": "Publique o ajuste ahora un mensaje público que destaque su contribución y el impacto medible asociado.",
   "z": "Añada una ficha de recurso en el campo Out y acerque una pieza 'puente' desde su avatar hacia esa ficha.",
   "p": "¿Qué aspecto de su historia eligió destacar y por qué?"
  }
 },
 {
  "id": "O15",
  "pilar": "out",
  "componente": "Competencia conversacional (ontológica)",
  "competencia": "Ingeniería del lenguaje (promesas y pedidos)",
  "conducta": "Hace pedidos impecables (con condiciones de satisfacción y tiempos claros) para evitar retrabajos.",
  "reto": {
   "t": "Lo que dio por hecho",
   "c": "Elija un vínculo de su escena por el que espera algo de alguien. ¿Esa persona sabe exactamente qué, y para cuándo?",
   "z": "Cambie ese conector a «en revisión» hasta que pueda decir en voz alta qué pidió y con qué plazo.",
   "p": "¿Qué se ha roto antes por dar ese pedido por entendido?"
  }
 },
 {
  "id": "O16",
  "pilar": "out",
  "componente": "Competencia conversacional (ontológica)",
  "competencia": "Ingeniería del lenguaje (promesas y pedidos)",
  "conducta": "Gestiona sus promesas: si no puede cumplir, revoca o renegocia a tiempo, manteniendo la confianza.",
  "reto": {
   "t": "Promesa en juego",
   "c": "¿Qué promesa en Out está hoy más expuesta en su tablero y qué conector la vincula al resto?",
   "z": "Marque esa pieza con una ficha de tensión.",
   "p": "¿Qué cambiaría en la escena si esa ficha se moviera a otro vínculo?"
  }
 },
 {
  "id": "U01",
  "pilar": "up",
  "componente": "Networking estratégico",
  "competencia": "Conectividad interna y externa",
  "conducta": "Conecta activamente a su equipo con otras áreas para derribar silos y fomentar la colaboración interdepartamental.",
  "reto": {
   "t": "Vínculo externo",
   "c": "¿Qué pieza puente conecta a su avatar con otras áreas en este tablero? Diga su nombre tal como suena.",
   "z": "Acerque la pieza puente que une su avatar con la pieza de la otra área.",
   "p": "¿Qué cambia en la energía del vínculo al acercarla?"
  }
 },
 {
  "id": "U02",
  "pilar": "up",
  "componente": "Networking estratégico",
  "competencia": "Conectividad interna y externa",
  "conducta": "Participa en eventos de la industria y mantiene vínculos con stakeholders externos (clientes, proveedores) para detectar tendencias.",
  "reto": {
   "t": "Radar externo",
   "c": "Elija un evento o contacto externo que no haya atendido en seis meses y programe una acción concreta en su calendario.",
   "z": "Coloque una pieza 'puente' en Out y acerque su avatar un paso hacia ella; marque el evento con una ficha de recurso.",
   "p": "¿Qué señal buscará en ese contacto para ajustar su radar?"
  }
 },
 {
  "id": "U03",
  "pilar": "up",
  "componente": "Networking estratégico",
  "competencia": "Gestión de relaciones (relationship management)",
  "conducta": "Actúa como un \"tejedor\" de relaciones, facilitando el acceso a recursos y conocimientos críticos para el equipo a través de su red de contactos.",
  "reto": {
   "t": "Tejedor activo",
   "c": "Solicite a un contacto externo el acceso a un recurso crítico para su equipo y pacte cuándo lo entregará.",
   "z": "Coloque la pieza 'foco' que representa ese recurso en Up, únala con un conector 'acuerdo' al avatar del contacto y ponga una ficha de recurso encima.",
   "p": "¿Qué estará dispuesto a ofrecer a cambio para que ese acuerdo prospere?"
  }
 },
 {
  "id": "U04",
  "pilar": "up",
  "componente": "Networking estratégico",
  "competencia": "Gestión de relaciones (relationship management)",
  "conducta": "Utiliza su capital social para apoyar a su equipo y abrir puertas a nuevas oportunidades de negocio o desarrollo.",
  "reto": {
   "t": "Puente visible",
   "c": "¿Qué puente en su tablero conecta al equipo con oportunidades externas y qué le falta?",
   "z": "Marque con una ficha de recurso ese puente.",
   "p": "¿Quién sostendría ese puente si usted no pudiera hacerlo?"
  }
 },
 {
  "id": "U05",
  "pilar": "up",
  "componente": "Networking estratégico",
  "competencia": "Visibilidad estratégica",
  "conducta": "Se posiciona no solo como experto técnico, sino como un referente que aporta valor en comités y espacios de decisión.",
  "reto": {
   "t": "Voz en comités",
   "c": "Anuncie el asunto crítico que defenderá en su próxima reunión decisoria y defina la posición concreta que sostendrá.",
   "z": "Coloque una pieza 'foco' en Up que represente el comité, únala con un conector 'activo' a su avatar y ponga una ficha de energía sobre su aporte.",
   "p": "¿Qué reacción específica quiere provocar con esa intervención?"
  }
 },
 {
  "id": "U06",
  "pilar": "up",
  "componente": "Networking estratégico",
  "competencia": "Visibilidad estratégica",
  "conducta": "Construye relaciones basadas en la reciprocidad y el valor mutuo, no solo en la necesidad inmediata (transaccional).",
  "reto": {
   "t": "Reciprocidad activa",
   "c": "Elija un contacto cuya relación con usted sea puramente transaccional y proponga un intercambio concreto de valor mutuo para hacerse efectivo en esta quincena.",
   "z": "Acerque el avatar de ese contacto un campo hacia el suyo, mueva su pieza 'foco' al espacio entre ambos, cambie el conector entre los avatares a 'en revisión' y coloque una ficha de recurso junto a cada avatar.",
   "p": "¿Qué ofrecerá primero para equilibrar la relación y qué recibirá a cambio?"
  }
 },
 {
  "id": "U07",
  "pilar": "up",
  "componente": "Visión de futuro y estrategia",
  "competencia": "Pensamiento estratégico",
  "conducta": "Analiza tendencias macroeconómicas, tecnológicas y de la industria para anticipar cómo afectarán el entorno interno y externo de la empresa.",
  "reto": {
   "t": "Mapa de futuro",
   "c": "Escoja una tendencia macro y describa tres impactos concretos que tendría sobre su entorno en el próximo año.",
   "z": "Coloque tres fichas de tensión en los campos que representen esos impactos y etiquete cada ficha con una palabra breve.",
   "p": "¿Cuál de esos impactos exige que usted cambie hoy una decisión clave?"
  }
 },
 {
  "id": "U08",
  "pilar": "up",
  "componente": "Visión de futuro y estrategia",
  "competencia": "Pensamiento estratégico",
  "conducta": "No se limita a \"apagar fuegos\" a corto plazo; dedica tiempo de calidad a la planificación y a las iniciativas de largo alcance.",
  "reto": {
   "t": "Espacio estratégico",
   "c": "¿Qué pieza en Up hoy está más alejada de sus urgencias y qué le indica esa distancia?",
   "z": "Marque con una ficha de recurso la pieza que represente una iniciativa de largo plazo.",
   "p": "¿Qué revela esa ficha sobre la prioridad real que da al futuro?"
  }
 },
 {
  "id": "U09",
  "pilar": "up",
  "componente": "Visión de futuro y estrategia",
  "competencia": "Visión compartida (visioning)",
  "conducta": "Articula un escenario futuro aspiracional de manera vívida (ej. \"ser referentes regionales en 5 años\") logrando que el equipo haga propia esa visión (shared vision).",
  "reto": {
   "t": "Futuro presente",
   "c": "¿Qué pieza falta para que la visión a cinco años en este tablero se sienta compartida? Nómbrela.",
   "z": "Coloque una ficha 'visión' junto a la pieza foco que imagine para dentro de cinco años.",
   "p": "¿Quién en la escena podría repetir esa visión y qué cambia si lo hace?"
  }
 },
 {
  "id": "U10",
  "pilar": "up",
  "componente": "Visión de futuro y estrategia",
  "competencia": "Visión compartida (visioning)",
  "conducta": "Comunica el \"por qué\" detrás de las metas, dando un fuerte sentido de finalidad y propósito al trabajo diario.",
  "reto": {
   "t": "El para qué",
   "c": "Señale la meta más lejana de su tablero. Si alguien de su equipo preguntara «¿y esto para qué?», ¿qué respondería hoy?",
   "z": "Trace un puente desde esa meta hasta el avatar de la persona a quien más le costaría explicárselo.",
   "p": "¿Qué parte de esa respuesta todavía no ha dicho en voz alta?"
  }
 },
 {
  "id": "U11",
  "pilar": "up",
  "componente": "Visión de futuro y estrategia",
  "competencia": "Alineación de metas (execution)",
  "conducta": "Traduce la visión abstracta en objetivos SMART (específicos, medibles, alcanzables, relevantes y temporales) y planes de acción concretos",
  "reto": {
   "t": "Objetivo en juego",
   "c": "¿Qué número, plazo o responsable sugiere la pieza que representa la visión en su tablero y cuál falta para usted?",
   "z": "En el tablero, coloque una ficha 'número' junto a la pieza de visión y acerque una ficha 'plazo' hacia ella.",
   "p": "¿Qué se vuelve más claro o más riesgoso para su liderazgo con esas cifras visibles?"
  }
 },
 {
  "id": "U12",
  "pilar": "up",
  "componente": "Visión de futuro y estrategia",
  "competencia": "Alineación de metas (execution)",
  "conducta": "Asegura la \"línea de vista\": explica claramente cómo las tareas cotidianas y las metas de corto plazo contribuyen a la estrategia general.",
  "reto": {
   "t": "Conexión clara",
   "c": "¿Qué pieza en Up contiene hoy una tarea cotidiana y qué conector muestra su distancia a la meta estratégica?",
   "z": "En el tablero, acerque esa pieza una casilla hacia la meta y cambie su conector a 'activo'.",
   "p": "¿Qué evidencia de alineación aparece tras ese movimiento?"
  }
 },
 {
  "id": "U13",
  "pilar": "up",
  "componente": "Toma de decisiones y resolución de problemas",
  "competencia": "Decisión bajo incertidumbre",
  "conducta": "Reúne datos rápidamente y consulta expertos, pero toma decisiones oportunas incluso con información incompleta, evitando la \"parálisis por análisis\".",
  "reto": {
   "t": "Dato mínimo",
   "c": "¿Qué conector en Up bloquea su decisión por falta de información y qué dato mínimo ya en el tablero podría liberarlo?",
   "z": "Marque ese dato mínimo con una ficha de recurso en Up.",
   "p": "Si ese dato apareciera ahora, ¿quién en su tablero estaría listo para decidir?"
  }
 },
 {
  "id": "U14",
  "pilar": "up",
  "componente": "Toma de decisiones y resolución de problemas",
  "competencia": "Decisión bajo incertidumbre",
  "conducta": "Asume la responsabilidad de las consecuencias de sus decisiones, sean aciertos o errores, sin buscar culpables externos.",
  "reto": {
   "t": "Responsabilidad marcada",
   "c": "¿Qué pieza en Up representa la decisión más incierta y qué conector muestra quién la respalda o la aísla?",
   "z": "En el tablero, marque esa pieza con una ficha de tensión.",
   "p": "¿Cómo cambia su lectura de responsabilidad al verla marcada?"
  }
 },
 {
  "id": "U15",
  "pilar": "up",
  "componente": "Toma de decisiones y resolución de problemas",
  "competencia": "Resolución de causa raíz",
  "conducta": "No se queda en la corrección de síntomas superficiales; investiga a fondo para identificar y resolver la causa raíz de los problemas basándose en evidencias y datos.",
  "reto": {
   "t": "Síntoma persistente",
   "c": "¿Qué síntoma recurrente ve en Up que no se resuelve del todo? Dígalo como la frase que se repite en su cabeza.",
   "z": "Marque con una ficha de tensión la recurrencia en Up que más le preocupa.",
   "p": "¿Qué evidencia en el tablero sugiere dónde podría estar la causa raíz?"
  }
 },
 {
  "id": "U16",
  "pilar": "up",
  "componente": "Toma de decisiones y resolución de problemas",
  "competencia": "Resolución de causa raíz",
  "conducta": "Aplica el pensamiento crítico para cuestionar suposiciones y reducir sesgos antes de decidir",
  "reto": {
   "t": "Suposición central",
   "c": "¿Qué suposición sostiene la pieza foco en Up para usted? Dígala en voz alta tal como suena.",
   "z": "Marque con una ficha roja la suposición que más fragiliza la estrategia en Up.",
   "p": "Si esa suposición fuera falsa, ¿qué pieza en Up cambiaría primero?"
  }
 },
 {
  "id": "U17",
  "pilar": "up",
  "componente": "Adaptabilidad e innovación",
  "competencia": "Agilidad y adaptabilidad",
  "conducta": "Revisa y ajusta las estrategias establecidas si surgen cambios tecnológicos o regulatorios, demostrando disposición a abandonar ideas que ya no funcionan.",
  "reto": {
   "t": "Estrategia en juego",
   "c": "¿Qué idea o plan que hoy sostiene se volvió menos válido por un cambio tecnológico o regulatorio?",
   "z": "Retire o desplace la pieza que representa esa estrategia y cambie su conector a 'en revisión' o a 'roto'.",
   "p": "Para cerrar, ¿qué experimento discontinuo pondrá en marcha esta semana para verificar si esa estrategia sigue sirviendo?"
  }
 },
 {
  "id": "U18",
  "pilar": "up",
  "componente": "Adaptabilidad e innovación",
  "competencia": "Agilidad y adaptabilidad",
  "conducta": "Fomenta una cultura donde el cambio se ve como oportunidad y no como amenaza.",
  "reto": {
   "t": "Cambio como oportunidad",
   "c": "¿Qué acción concreta demostrará ahora que el cambio aporta ventaja y no amenaza al equipo?",
   "z": "Acerque una pieza que simbolice el cambio al avatar del equipo y coloque una ficha de recurso junto a ella.",
   "p": "Para cerrar, ¿qué gesto repetible incorporará para que ese acercamiento se transforme en norma?"
  }
 },
 {
  "id": "U19",
  "pilar": "up",
  "componente": "Adaptabilidad e innovación",
  "competencia": "Estimulación intelectual (innovación)",
  "conducta": "Cuestiona el \"así es como siempre se ha hecho\", desafiando el statu quo y animando al equipo a proponer nuevas formas de trabajar.",
  "reto": {
   "t": "Cuestione lo dado",
   "c": "¿Qué práctica que acepta por costumbre contribuiría más si la cambiara de raíz?",
   "z": "Encuentre la pieza que representa esa práctica, retírela o muévala a otro pilar y marque su conector como 'en revisión'.",
   "p": "Para cerrar, ¿qué pequeña prueba pedirá al equipo para reemplazarla este mes?"
  }
 },
 {
  "id": "U20",
  "pilar": "up",
  "componente": "Adaptabilidad e innovación",
  "competencia": "Estimulación intelectual (innovación)",
  "conducta": "Instituye proyectos piloto o pruebas de concepto para testear soluciones en entornos controlados antes de escalarlas.",
  "reto": {
   "t": "Prueba en pequeño",
   "c": "¿Qué solución puede someter a un piloto de bajo alcance antes de escalarla?",
   "z": "Añada una pieza que represente el piloto, únala al pilar correspondiente y ponga una ficha de tensión que limite su alcance.",
   "p": "Para cerrar, ¿qué criterio medible usará para decidir si ese piloto escala?"
  }
 },
 {
  "id": "U21",
  "pilar": "up",
  "componente": "Adaptabilidad e innovación",
  "competencia": "Gestión del error constructivo",
  "conducta": "Respalda al equipo cuando un experimento bien intencionado falla, enfocándose en extraer aprendizajes (\"fail forward\") en lugar de castigar el error.",
  "reto": {
   "t": "Fallar hacia adelante",
   "c": "¿Cómo responderá ahora ante un experimento fallido para que el equipo lo vea como aprendizaje y no como castigo?",
   "z": "Coloque una ficha de recurso sobre la pieza del experimento fallido y cambie su conector de 'roto' o 'tenso' a 'en revisión' o 'acuerdo'.",
   "p": "Para cerrar, ¿qué cambio inmediato hará para que el equipo perciba el fallo como avance?"
  }
 },
 {
  "id": "U22",
  "pilar": "up",
  "componente": "Adaptabilidad e innovación",
  "competencia": "Gestión del error constructivo",
  "conducta": "Elimina el \"factor miedo\", empoderando a los empleados para asumir riesgos calculados en la búsqueda de innovación.",
  "reto": {
   "t": "Reduzca el miedo",
   "c": "¿Qué gesto material hará para que alguien asuma un riesgo calculado sin temor a represalias?",
   "z": "Añada una ficha de energía junto al avatar que asumirá el riesgo y cambie el conector con su superior a 'acuerdo' u 'activo'.",
   "p": "Para cerrar, ¿qué límite claro y qué respaldo dejará antes de que comience el experimento?"
  }
 },
 {
  "id": "U23",
  "pilar": "up",
  "componente": "Inteligencia política y contextual",
  "competencia": "Lectura de poder y patrocinio",
  "conducta": "Identifica y cultiva activamente sponsors que hablen de él/ella en mesas de decisión.",
  "reto": {
   "t": "Encuentre patrocinador",
   "c": "¿Quién en la organización podría hablar de usted en mesas de decisión si usted le facilitara contexto y resultados?",
   "z": "Coloque a esa persona junto a su avatar, únalos con un conector 'activo' o 'acuerdo' y ponga entre ambos una ficha de recurso.",
   "p": "Para cerrar, ¿qué primer aporte concreto le ofrecerá para ganar su voz favorable?"
  }
 },
 {
  "id": "U24",
  "pilar": "up",
  "componente": "Inteligencia política y contextual",
  "competencia": "Lectura de poder y patrocinio",
  "conducta": "Mapea las dinámicas de poder informales en la organización para destrabar proyectos.",
  "reto": {
   "t": "Mapa de poder",
   "c": "¿Qué relación informal está frenando este proyecto aunque no figure en el organigrama?",
   "z": "Agregue avatares que representen influencias informales, conecte sus vínculos como 'tenso' o 'activo' según corresponda y marque con fichas de tensión los puntos de bloqueo.",
   "p": "Para cerrar, ¿qué pequeña intervención hará para convertir un vínculo 'tenso' en 'acuerdo'?"
  }
 },
 {
  "id": "U25",
  "pilar": "up",
  "componente": "Agilidad tecnológica (tech-savviness)",
  "competencia": "Liderazgo en entornos de transformación tecnológica",
  "conducta": "Promueve la adopción de nuevas herramientas digitales sin perder el enfoque en el bienestar del equipo.",
  "reto": {
   "t": "Herramienta visible",
   "c": "¿Dónde está la pieza que simboliza la nueva herramienta y qué distancia guarda con el avatar del equipo?",
   "z": "Acerque la pieza de la nueva herramienta hacia el avatar del equipo.",
   "p": "¿Qué tensión o recurso aparece al estrechar esa distancia?"
  }
 },
 {
  "id": "U26",
  "pilar": "up",
  "componente": "Agilidad tecnológica (tech-savviness)",
  "competencia": "Liderazgo en entornos de transformación tecnológica",
  "conducta": "Traduce conceptos tecnológicos complejos a decisiones de negocio estratégicas.",
  "reto": {
   "t": "Concepto en escena",
   "c": "¿Dónde en Up reside el concepto tecnológico en su tablero y qué pieza de negocio debería acercarse para hacerlo relevante?",
   "z": "Acérquelo: mueva la pieza de negocio un paso hacia el concepto.",
   "p": "¿Qué necesitaría esa pieza de negocio para sostener la conexión sin tensarla?"
  }
 },
 {
  "id": "B01",
  "pilar": "beyond",
  "componente": "Desarrollo de otros líderes (mentoring & coaching)",
  "competencia": "Mentoría y sucesión",
  "conducta": "Identifica activamente el talento interno y dedica tiempo a formar a sus sucesores para garantizar la continuidad del liderazgo (construcción de pipeline).",
  "reto": {
   "t": "Sucesor visible",
   "c": "¿Qué persona fuera del tablero debería estar en Beyond para sostener la pieza base y qué conector imagina entre ustedes?",
   "z": "Coloque en Beyond el avatar de esa persona.",
   "p": "¿Qué indicio en el tablero le diría si esa persona está dispuesta a sostenerlo?"
  }
 },
 {
  "id": "B02",
  "pilar": "beyond",
  "componente": "Desarrollo de otros líderes (mentoring & coaching)",
  "competencia": "Mentoría y sucesión",
  "conducta": "Comparte conocimientos y experiencias sin reservas, actuando como guía para acelerar el aprendizaje de líderes emergentes.",
  "reto": {
   "t": "Guía sin reservas",
   "c": "En el tablero, desplace una pieza experiencia desde su avatar hacia un avatar emergente en Beyond y marque ese traslado con un conector 'activo'.",
   "z": "Una pieza experiencia aparece junto al avatar emergente con un conector 'activo' desde su avatar.",
   "p": "¿Qué pedirá para comprobar que esa experiencia queda incorporada?"
  }
 },
 {
  "id": "B03",
  "pilar": "beyond",
  "componente": "Desarrollo de otros líderes (mentoring & coaching)",
  "competencia": "Empoderamiento (empowerment)",
  "conducta": "Comparte el poder delegando autoridad real para la toma de decisiones importantes, no solo tareas operativas, fomentando la autonomía.",
  "reto": {
   "t": "Transferir autoridad",
   "c": "¿Qué decisión crucial de este proyecto permitiría hoy que otro tome sin pedirle su validación previa?",
   "z": "Cambie el conector del elemento que representa esa decisión desde su avatar al avatar del colaborador a 'activo', mueva físicamente una ficha de energía desde su avatar al del colaborador y acerque el foco del proyecto al avatar del colaborador.",
   "p": "¿Qué resultado verificable exigirá para confiar plenamente en esa autoridad?"
  }
 },
 {
  "id": "B04",
  "pilar": "beyond",
  "componente": "Desarrollo de otros líderes (mentoring & coaching)",
  "competencia": "Empoderamiento (empowerment)",
  "conducta": "Elimina el micro-management; define el \"qué\" pero permite al equipo decidir el \"cómo\", demostrando confianza plena en sus capacidades.",
  "reto": {
   "t": "Distancia de mando",
   "c": "¿Qué conector muestra hoy el grado de control de su avatar sobre piezas operativas? Léalo en voz alta.",
   "z": "Retire el conector que une su avatar con la pieza operativa que más le pesa en el tablero.",
   "p": "¿Qué revela esa retirada sobre quién decide el 'cómo' aquí?"
  }
 },
 {
  "id": "B05",
  "pilar": "beyond",
  "componente": "Desarrollo de otros líderes (mentoring & coaching)",
  "competencia": "Desafío para el crecimiento",
  "conducta": "Asigna proyectos desafiantes (stretch assignments) que obligan a los colaboradores a salir de su zona de confort para desarrollar nuevas habilidades.",
  "reto": {
   "t": "Desafío visible",
   "c": "¿Qué avatar en Beyond raramente lidera proyectos grandes y qué puente le falta en el tablero para empujar su estirón?",
   "z": "Coloque una pieza puente en Beyond junto al avatar.",
   "p": "Si ese puente existiera, ¿qué se abriría o se cerraría en la red de conectores?"
  }
 },
 {
  "id": "B06",
  "pilar": "beyond",
  "componente": "Desarrollo de otros líderes (mentoring & coaching)",
  "competencia": "Desafío para el crecimiento",
  "conducta": "Utiliza el coaching para ayudar a los colaboradores a encontrar sus propias soluciones en lugar de dárselas resueltas.",
  "reto": {
   "t": "Guía lateral",
   "c": "¿Qué frase se repite entre su avatar y el colaborador junto a la ficha de tensión en su tablero?",
   "z": "En el tablero, acerque una ficha foco al avatar del colaborador y marque el conector entre ambos como 'en revisión'.",
   "p": "¿Qué conversación o postura esa modificación pone a prueba para usted?"
  }
 },
 {
  "id": "B07",
  "pilar": "beyond",
  "componente": "Impacto social y humano",
  "competencia": "Ética y responsabilidad social",
  "conducta": "Integra consideraciones éticas y de impacto comunitario en la toma de decisiones financieras y estratégicas, priorizando el bien común sobre la ganancia a corto plazo.",
  "reto": {
   "t": "Bien común",
   "c": "¿Qué ausencia ética identifica junto a la pieza que financia esta opción?",
   "z": "Coloque junto a esa pieza una ficha que nombre el impacto comunitario que falta.",
   "p": "¿Cómo cambiaría su decisión si esa ficha tuviera la misma prioridad que la pieza financiera?"
  }
 },
 {
  "id": "B08",
  "pilar": "beyond",
  "componente": "Impacto social y humano",
  "competencia": "Ética y responsabilidad social",
  "conducta": "Impulsa iniciativas que aporten valor social (sostenibilidad, diversidad, inclusión) y modela la integridad en todas sus acciones.",
  "reto": {
   "t": "Integridad en acto",
   "c": "En el tablero, añada una pieza 'foco' que represente una iniciativa social y conéctela activamente a su avatar.",
   "z": "Marque con una ficha de recurso esa iniciativa y ajuste su conector a 'acuerdo' con su avatar.",
   "p": "¿Qué gesto público hará esta semana para que esa iniciativa deje de ser simbólica?"
  }
 },
 {
  "id": "B09",
  "pilar": "beyond",
  "componente": "Impacto social y humano",
  "competencia": "Liderazgo de servicio (stewardship)",
  "conducta": "Actúa como un administrador (trustee) de los recursos y las personas, priorizando las necesidades de los colaboradores y la comunidad por encima del interés propio.",
  "reto": {
   "t": "Custodia primero",
   "c": "En el tablero, acerque la pieza que representa a su equipo hacia el centro de Beyond y reduzca la distancia entre esa pieza y su avatar.",
   "z": "Retire una ficha de recurso de su propia base y colóquela junto a la pieza del equipo.",
   "p": "¿Qué renuncia concreta está dispuesto a hacer hoy para que esa necesidad quede cubierta?"
  }
 },
 {
  "id": "B10",
  "pilar": "beyond",
  "componente": "Impacto social y humano",
  "competencia": "Liderazgo de servicio (stewardship)",
  "conducta": "Fomenta un clima de seguridad psicológica donde el bienestar emocional y físico del equipo es una prioridad tangible.",
  "reto": {
   "t": "Protección real",
   "c": "¿Qué pieza en Beyond indica quién vela por la seguridad física y emocional en su escena? Dígala tal como la ve.",
   "z": "Marque con una ficha la pieza que identifica esa custodia.",
   "p": "¿Qué le dice esa señal sobre lo que usted ya sostiene o deja sin sostener?"
  }
 },
 {
  "id": "B11",
  "pilar": "beyond",
  "componente": "Impacto social y humano",
  "competencia": "Inclusión y equidad",
  "conducta": "Promueve activamente la diversidad y crea un entorno inclusivo donde se valoran diferentes perspectivas y antecedentes.",
  "reto": {
   "t": "Perspectiva faltante",
   "c": "¿Qué voz o perspectiva falta en esta escena y cómo cambia lo que ocurre?",
   "z": "Coloque una ficha de recurso en la casilla Beyond que señale esa ausencia.",
   "p": "¿Quién podría traer esa voz y cómo lo invitaría a participar?"
  }
 },
 {
  "id": "B12",
  "pilar": "beyond",
  "componente": "Impacto social y humano",
  "competencia": "Inclusión y equidad",
  "conducta": "Trata a todos con justicia e imparcialidad, asegurando equidad en oportunidades y reconocimiento.",
  "reto": {
   "t": "Equidad visible",
   "c": "¿Dónde en el tablero se concentran las fichas de recurso y quién queda claramente más alejado? Señale esas piezas.",
   "z": "Coloque una ficha de tensión en el lugar que muestre la falta de equidad.",
   "p": "Si esa distancia no se modifica, ¿qué efecto tendrá en la escena dentro de un mes?"
  }
 },
 {
  "id": "B13",
  "pilar": "beyond",
  "componente": "Legado personal y trascendencia",
  "competencia": "Institucionalización de cultura",
  "conducta": "Establece rituales, historias y prácticas que anclan los valores y la visión en el ADN de la organización, asegurando que perduren más allá de su rol temporal como líder.",
  "reto": {
   "t": "Ritual colectivo",
   "c": "¿Qué ausencia impide que los valores del tablero crucen hacia las operaciones para usted?",
   "z": "En el tablero, retire una pieza 'valor' de su agrupación actual y acerque una pieza 'práctica' hacia la zona de operaciones.",
   "p": "¿Qué indicio le da ese movimiento sobre cuánto pueden sostener otros esos valores sin usted?"
  }
 },
 {
  "id": "B14",
  "pilar": "beyond",
  "componente": "Legado personal y trascendencia",
  "competencia": "Institucionalización de cultura",
  "conducta": "Documenta lecciones aprendidas y crea sistemas para que el conocimiento crítico (know-how) permanezca en la empresa.",
  "reto": {
   "t": "Saber permanente",
   "c": "¿Qué lección o know‑how en el tablero no está documentada y corre riesgo de desaparecer?",
   "z": "Coloque una ficha de recurso junto a la pieza que representa ese saber.",
   "p": "¿Qué señal le indicará que ese conocimiento ya no depende de una sola persona?"
  }
 },
 {
  "id": "B15",
  "pilar": "beyond",
  "componente": "Legado personal y trascendencia",
  "competencia": "Reconocimiento y humildad",
  "conducta": "Pone los focos sobre su equipo: cuando hay éxito, se aparta para que su equipo brille (\"stand back\"); cuando hay fracaso, asume la responsabilidad.",
  "reto": {
   "t": "Luz compartida",
   "c": "¿Qué avatar de su equipo está más cercano a la pieza de logro y cuál queda más apartado en su tablero?",
   "z": "En el tablero, acerque la pieza foco al avatar del miembro más alejado del logro y aleje su propio avatar un paso.",
   "p": "¿Qué percepción sobre el reconocimiento cambia para usted al ver esas posiciones alteradas?"
  }
 },
 {
  "id": "B16",
  "pilar": "beyond",
  "componente": "Legado personal y trascendencia",
  "competencia": "Reconocimiento y humildad",
  "conducta": "Celebra genuinamente los hitos personales y profesionales de los demás, construyendo una cultura de gratitud y apreciación.",
  "reto": {
   "t": "Valor visible",
   "c": "¿Qué pieza en Beyond muestra que el equipo recibe reconocimiento sincero? Nómbrela y diga qué le falta en su presencia.",
   "z": "Marque con una ficha la pieza que representa gratitud o reconocimiento.",
   "p": "¿Qué cambia en su liderazgo si esa pieza estuviera más presente?"
  }
 },
 {
  "id": "B17",
  "pilar": "beyond",
  "componente": "Legado personal y trascendencia",
  "competencia": "Conexión con el propósito (meaning)",
  "conducta": "Ayuda a cada miembro del equipo a descubrir su propio propósito y a conectarlo con la misión de la organización (alineación de propósito).",
  "reto": {
   "t": "Sentido visible",
   "c": "¿Qué conexiones en Beyond vinculan a cada avatar con la misión? Señale las piezas o avatares que no tienen puente al propósito.",
   "z": "Marque con una ficha de tensión los avatares o piezas sin puente al propósito.",
   "p": "¿Qué le pide eso sobre dónde concentrar su atención para dar más sentido a la escena?"
  }
 },
 {
  "id": "B18",
  "pilar": "beyond",
  "componente": "Legado personal y trascendencia",
  "competencia": "Conexión con el propósito (meaning)",
  "conducta": "Transforma el trabajo rutinario en una misión significativa, recordando constantemente el impacto positivo que el equipo tiene en el mundo.",
  "reto": {
   "t": "Reencuadre de rutina",
   "c": "Describa en voz alta cómo una tarea diaria de su equipo cambia algo positivo en la vida de alguien fuera de la organización.",
   "z": "Coloque una ficha de recurso sobre la tarea rutinaria, añada una pieza energía que la conecte hacia Beyond y mueva hacia Out el avatar que representa al beneficiario externo.",
   "p": "¿Qué frase usará la próxima vez para presentar esa tarea como misión ante su equipo?"
  }
 },
 {
  "id": "B19",
  "pilar": "beyond",
  "componente": "Inteligencia cultural e inclusiva",
  "competencia": "Gestión de la diversidad cognitiva",
  "conducta": "Forma deliberadamente equipos con diversidad de pensamiento y antecedentes.",
  "reto": {
   "t": "Voces ausentes",
   "c": "¿Qué perspectiva falta en Beyond para el desafío que muestra su escena? Nómbrela claramente.",
   "z": "Acerque al borde de Beyond la pieza o avatar que represente esa voz ausente.",
   "p": "¿Qué nueva tensión o recurso aparece al acercar esa voz?"
  }
 },
 {
  "id": "B20",
  "pilar": "beyond",
  "componente": "Inteligencia cultural e inclusiva",
  "competencia": "Gestión de la diversidad cognitiva",
  "conducta": "Detecta y mitiga sesgos inconscientes en la contratación y promoción de talento.",
  "reto": {
   "t": "Revele afinidades",
   "c": "Revise su última contratación o promoción y, si advierte que la elección respondió más a afinidad que a méritos, replantee la decisión.",
   "z": "Coloque la candidatura seleccionada, ponga una ficha de tensión sobre el factor de afinidad detectado y cambie el conector entre esa persona y el rol a 'en revisión'.",
   "p": "¿Qué evidencia objetiva añadirá a su proceso para minimizar que la afinidad guíe futuras decisiones?"
  }
 },
 {
  "id": "B21",
  "pilar": "beyond",
  "componente": "Liderazgo regenerativo",
  "competencia": "Conciencia sistémica y comunitaria",
  "conducta": "Conecta los objetivos de negocio con necesidades reales de la comunidad o el medio ambiente.",
  "reto": {
   "t": "Fuera del tablero",
   "c": "Todo lo que puso aquí ocurre dentro de su organización. ¿A quién de afuera le llega, sin que esté en esta escena?",
   "z": "Añada esa pieza en el borde del tablero y únala con lo que la afecta.",
   "p": "¿Qué cambia en su decisión ahora que esa pieza está a la vista?"
  }
 },
 {
  "id": "B22",
  "pilar": "beyond",
  "componente": "Liderazgo regenerativo",
  "competencia": "Conciencia sistémica y comunitaria",
  "conducta": "Actúa como un \"tejedor\" de relaciones externas que traen valor social a la empresa.",
  "reto": {
   "t": "Teja alianzas",
   "c": "Identifique una organización externa hoy y plantee una propuesta de colaboración que aporte valor social a su actividad.",
   "z": "Coloque el avatar de esa organización en Out, conecte su avatar a ella con un conector de 'acuerdo' y añada una ficha de recurso sobre ese vínculo.",
   "p": "¿Qué oferta concreta llevará a la primera conversación para convertir esa conexión en valor social?"
  }
 }
];
