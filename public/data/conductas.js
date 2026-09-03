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
   "t": "Pausa breve",
   "c": "Ante esta escalada, deténgase un instante y cuente tres respiraciones antes de mover o hablar.",
   "z": "Marque con una ficha de tensión el punto del tablero donde suele actuar o responder de forma inmediata.",
   "p": "Si esperara esas tres respiraciones, ¿qué decisión distinta tomaría?"
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
   "t": "Rutina recargadora",
   "c": "Defina una práctica breve diaria (física o mental) e insértela ahora mismo en su calendario de la escena.",
   "z": "Añada una ficha de recurso a su avatar con el nombre de esa práctica y acérquela a la pieza de energía.",
   "p": "¿Qué obstáculo tendrá que desplazar para sostener esa rutina cada semana?"
  }
 },
 {
  "id": "W14",
  "pilar": "within",
  "componente": "Propósito y valores (integridad)",
  "competencia": "Claridad de propósito (Ikigai)",
  "conducta": "Define y articula un \"para qué\" claro que conecta su trabajo diario con un impacto mayor (ej. \"Estoy aquí para empoderar a otros\").",
  "reto": {
   "t": "Impacto claro",
   "c": "Redacte en una frase el impacto mayor por el que hace este trabajo y colóquelo como guía en la escena.",
   "z": "Coloque una ficha de foco junto a su avatar con esa frase escrita y sitúela frente a las decisiones clave.",
   "p": "¿Cómo modifica esa frase la prioridad de la siguiente decisión en esta escena?"
  }
 },
 {
  "id": "W15",
  "pilar": "within",
  "componente": "Propósito y valores (integridad)",
  "competencia": "Claridad de propósito (Ikigai)",
  "conducta": "Utiliza su propósito como filtro para la toma de decisiones difíciles, asegurando que sus acciones honren su intención de vida.",
  "reto": {
   "t": "Filtro de acción",
   "c": "Frente a este dilema, compare cada opción con la frase que acaba de poner y permita avanzar solo la que encaje con ella.",
   "z": "Mueva la pieza base asociada a la opción que no coincide hacia fuera del tablero para dejarla en revisión.",
   "p": "¿Qué renuncia implicaría priorizar la opción que coincide con esa frase?"
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
   "t": "Sin máscara",
   "c": "Revele una incomodidad real que oculta en el rol y diga cómo actuará la próxima vez siendo auténtico.",
   "z": "Retire la pieza que sirve como máscara sobre su avatar y trasládela al campo Out.",
   "p": "¿Qué riesgo acepta para mantenerse así frente a su equipo?"
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
   "t": "Hora de bitácora",
   "c": "Reserve ahora un bloque semanal para registrar por escrito lo que hizo y cómo lo vivió.",
   "z": "Coloque una ficha de recurso en Within y ponga una ficha de tensión en el campo donde suele postergar esa práctica.",
   "p": "Si falla una semana, ¿qué ajuste hará para sostener la práctica?"
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
   "t": "Pida el espejo",
   "c": "Elija a una persona del tablero y solicite una retroalimentación concreta y medible sobre un comportamiento suyo.",
   "z": "Acerque a esa persona a su avatar, cambie el conector a 'en revisión' y marque con una ficha de tensión el área donde sospecha un punto ciego.",
   "p": "Si recibe retroalimentación inesperada, ¿qué pregunta hará para clarificarla?"
  }
 },
 {
  "id": "W24",
  "pilar": "within",
  "componente": "Aprendizaje y reflexión (self-awareness)",
  "competencia": "Apertura al feedback",
  "conducta": "Recibe la crítica sin ponerse a la defensiva, utilizándola como insumo para su crecimiento personal.",
  "reto": {
   "t": "Escucha sin barrera",
   "c": "Permanezca dos minutos sin justificar ni explicar ante una crítica simulada que alguien del tablero le ofrece.",
   "z": "Coloque una ficha de barrera junto a su avatar y luego retírela mientras mantiene la atención en la fuente de la crítica.",
   "p": "¿Qué emoción apareció primero y cómo la usará como insumo para mejorar?"
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
   "t": "Respire antes",
   "c": "Nombre la próxima situación de alta presión en la que se verá involucrado y la técnica de respiración que usará antes de actuar.",
   "z": "Acerque una ficha de energía a su avatar y marque con una ficha de tensión el umbral donde suele perder la calma.",
   "p": "¿Qué señal corporal será su disparador para empezar esa respiración?"
  }
 },
 {
  "id": "W28",
  "pilar": "within",
  "componente": "Toma de decisiones y resolución de problemas",
  "competencia": "Compostura",
  "conducta": "Mantiene la serenidad en situaciones de crisis, proyectando confianza y evitando que el pánico paralice al equipo.",
  "reto": {
   "t": "Faro en crisis",
   "c": "Describa el tono y el gesto que mantendrá para sostener calma cuando el equipo muestre pánico.",
   "z": "Acerque su avatar al puente que conecta con el equipo y cambie ese conector a 'acuerdo'.",
   "p": "¿Qué palabra o frase dirá primero para anclar esa postura?"
  }
 },
 {
  "id": "W29",
  "pilar": "within",
  "componente": "Toma de decisiones y resolución de problemas",
  "competencia": "Compostura",
  "conducta": "Controla los impulsos y evita reacciones defensivas, permitiendo que otros piensen con claridad y ejecuten tareas críticas.",
  "reto": {
   "t": "Freno visible",
   "c": "Al recibir una crítica que normalmente le provoca defensa, anuncie en voz alta que hará una pausa y qué escuchará primero.",
   "z": "Marque con una ficha de tensión la pieza que suele activar su impulsividad y aleje su avatar dos casillas.",
   "p": "¿Qué hará con los segundos que ganó al anunciar la pausa?"
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
   "t": "Poseer el cargo",
   "c": "Diga en voz alta la frase que sustituye 'ocupo el cargo' por una afirmación que lo ponga como dueño de las decisiones.",
   "z": "Marque con una ficha de recurso la pieza que representa su rol y cambie su conector con el puesto a 'acuerdo'.",
   "p": "¿Qué decisión concreta realizará esta semana para que esa frase tenga evidencia?"
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
   "t": "Meta y norte",
   "c": "Formule en una frase clara el objetivo concreto de esta escena y por qué ese resultado importa para el futuro del equipo.",
   "z": "Coloque la pieza foco en el campo Out y conéctela con un conector 'acuerdo' al avatar que asumirá la responsabilidad.",
   "p": "¿Qué indicador mostrará que nadie sigue confundido sobre lo que se espera?"
  }
 },
 {
  "id": "O02",
  "pilar": "out",
  "componente": "Comunicación de impacto",
  "competencia": "Claridad e inspiración",
  "conducta": "Utiliza un tono entusiasta, historias o metáforas para alinear al equipo bajo un propósito común y motivador.",
  "reto": {
   "t": "La historia motor",
   "c": "Cuente en una frase metafórica o con una imagen entusiasta por qué este trabajo mueve al equipo y quién se verá inspirado.",
   "z": "Acérque una ficha de energía al avatar que quiere alinear y gire la pieza puente hacia la visión que acaba de contar.",
   "p": "¿Qué persona se sintió más llamada por esta historia?"
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
   "t": "Adapte el vocabulario",
   "c": "Reescriba en una frase el mismo mensaje con el tono más apropiado para este interlocutor (técnico o ejecutivo).",
   "z": "Acerque la pieza base al avatar destinatario y cambie el conector a 'activo' si el mensaje cuadra o a 'en revisión' si no.",
   "p": "¿Qué palabra cambió para ganarse la atención del receptor?"
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
   "t": "Comparta lo esencial",
   "c": "Comunique en una frase la información relevante, incluidos los riesgos o malas noticias, y diga a quién afecta ahora.",
   "z": "Mueva la pieza base que contiene esa información al campo Out y conecte con 'activo' a los avatares directamente afectados.",
   "p": "¿Qué riesgo disminuye al decir esto ahora?"
  }
 },
 {
  "id": "O08",
  "pilar": "out",
  "componente": "Influencia positiva",
  "competencia": "Construcción de confianza (Trust)",
  "conducta": "Admite abiertamente cuando \"no sabe\" algo y trata a todos con respeto, eliminando el miedo a represalias por reportar problemas.",
  "reto": {
   "t": "No lo sé",
   "c": "Diga en voz alta 'no lo sé' cuando corresponda y proponga al menos un paso concreto para averiguarlo y un plazo.",
   "z": "Acérque al interlocutor a su avatar y coloque una ficha de recurso entre ambos para mostrar apoyo.",
   "p": "¿Qué acordó para que alguien informe un problema sin temor la próxima vez?"
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
   "t": "Valor compartido",
   "c": "Nombre el ideal que conecta al grupo y proponga una acción concreta que lo encarne.",
   "z": "Añada una pieza 'puente' entre su avatar y el colectivo y marque con una ficha de energía esa conexión.",
   "p": "¿Qué sucedería en esta escena si ese ideal dejara de guiar la acción?"
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
   "c": "Declare en voz alta qué logro alcanzó el equipo y nombre explícitamente a quienes lo hicieron posible.",
   "z": "Marque con una ficha de recurso la pieza del colaborador reconocido y cambie el conector hacia él a 'acuerdo'.",
   "p": "¿Qué orgullo colectivo emergió cuando el mérito fue expuesto así?"
  }
 },
 {
  "id": "O12",
  "pilar": "out",
  "componente": "Influencia positiva",
  "competencia": "Reconocimiento y feedback",
  "conducta": "Brinda feedback privado, específico y centrado en la conducta (no en la persona) para corregir el rumbo y desarrollar talento.",
  "reto": {
   "t": "Corrección dirigida",
   "c": "En privado, señale una conducta observable que quiere cambiar y diga el próximo gesto concreto que espera.",
   "z": "Aleje el avatar del destinatario un paso del colectivo y marque con una ficha de tensión la pieza conductual que quiere corregir.",
   "p": "¿Qué acuerdo observable sellaron para el próximo gesto de corrección?"
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
   "t": "Pedido impecable",
   "c": "Formule un pedido concreto: quién hará qué, con qué condición de satisfacción y para cuándo.",
   "z": "Acerque al destinatario al resultado esperado y marque con una ficha de recurso la tarea; cambie el conector a 'acuerdo'.",
   "p": "Si no se cumple a tiempo, ¿qué señal activará para renegociar?"
  }
 },
 {
  "id": "O16",
  "pilar": "out",
  "componente": "Competencia conversacional (ontológica)",
  "competencia": "Ingeniería del lenguaje (promesas y pedidos)",
  "conducta": "Gestiona sus promesas: si no puede cumplir, revoca o renegocia a tiempo, manteniendo la confianza.",
  "reto": {
   "t": "Promesa revisada",
   "c": "Si no podrá cumplir la promesa anunciada, comuníquelo ahora y proponga una alternativa con nuevo plazo.",
   "z": "Cambie el conector que une su avatar con la promesa a 'en revisión' o retírelo y añada una ficha de recurso sobre la alternativa propuesta.",
   "p": "¿Cómo protegerá la confianza del otro tras este cambio?"
  }
 },
 {
  "id": "U01",
  "pilar": "up",
  "componente": "Networking estratégico",
  "competencia": "Conectividad interna y externa",
  "conducta": "Conecta activamente a su equipo con otras áreas para derribar silos y fomentar la colaboración interdepartamental.",
  "reto": {
   "t": "Puente entre áreas",
   "c": "Invite a una persona de otra área a participar en el próximo hito del proyecto y clarifique qué aportará.",
   "z": "Acerque al avatar de esa otra área al campo Up y únalo con un conector 'acuerdo' al avatar de su equipo.",
   "p": "¿Qué seguimiento hará para sostener ese puente?"
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
   "t": "Abra la puerta",
   "c": "Ofrezca una presentación o referencia de alto valor para una oportunidad concreta del equipo esta semana.",
   "z": "Añada al tablero la pieza 'base' del contacto externo, gírela hacia el avatar del miembro beneficiado y cambie el conector a 'activo'.",
   "p": "¿Qué resultado espera que esa presentación desbloquee?"
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
   "t": "Bloque estratégico",
   "c": "Reserve en su calendario una mañana dedicada a avanzar en una iniciativa de largo plazo y defina dos entregables para ese bloque.",
   "z": "Retire una ficha de tensión del campo Up, mueva su avatar dos pasos hacia la pieza 'foco' de la iniciativa y ponga una ficha de recurso sobre ella.",
   "p": "¿Qué indicador medible usará para juzgar que ese tiempo fue bien invertido?"
  }
 },
 {
  "id": "U09",
  "pilar": "up",
  "componente": "Visión de futuro y estrategia",
  "competencia": "Visión compartida (visioning)",
  "conducta": "Articula un escenario futuro aspiracional de manera vívida (ej. \"ser referentes regionales en 5 años\") logrando que el equipo haga propia esa visión (shared vision).",
  "reto": {
   "t": "Futuro tangible",
   "c": "Describa en una frase concreta y sensorial cómo será este proyecto dentro de cinco años para que alguien del equipo lo pueda sentir y repetir.",
   "z": "Coloque una pieza 'foco' que represente ese futuro, acerque los avatares que lo comparten y marque con fichas de recurso a quienes ya lo sienten propio.",
   "p": "¿Qué frase de 10 palabras resumirá esto cuando alguien le pida el propósito en 30 segundos?"
  }
 },
 {
  "id": "U10",
  "pilar": "up",
  "componente": "Visión de futuro y estrategia",
  "competencia": "Visión compartida (visioning)",
  "conducta": "Comunica el \"por qué\" detrás de las metas, dando un fuerte sentido de finalidad y propósito al trabajo diario.",
  "reto": {
   "t": "Por qué claro",
   "c": "Explique en una sola frase cuál es el propósito profundo que justifica la meta actual y cómo cambia el trabajo diario de un integrante.",
   "z": "Acerque la pieza 'base' de la meta al avatar más impactado y cambie su conector a 'acuerdo' o 'en revisión' según lo sintonice.",
   "p": "¿Qué indicador mostrará que ese propósito está presente en la rutina dentro de dos semanas?"
  }
 },
 {
  "id": "U11",
  "pilar": "up",
  "componente": "Visión de futuro y estrategia",
  "competencia": "Alineación de metas (execution)",
  "conducta": "Traduce la visión abstracta en objetivos SMART (específicos, medibles, alcanzables, relevantes y temporales) y planes de acción concretos",
  "reto": {
   "t": "Visión a objetivo",
   "c": "Transforme la visión que aparece en este tablero en un objetivo concreto con número, plazo y responsable en una línea.",
   "z": "Añada una pieza 'energía' que represente el indicador, coloque una ficha de recurso para el responsable y cambie el conector a 'activo'.",
   "p": "¿Qué evidencia medible mostrará progreso en cuatro semanas?"
  }
 },
 {
  "id": "U12",
  "pilar": "up",
  "componente": "Visión de futuro y estrategia",
  "competencia": "Alineación de metas (execution)",
  "conducta": "Asegura la \"línea de vista\": explica claramente cómo las tareas cotidianas y las metas de corto plazo contribuyen a la estrategia general.",
  "reto": {
   "t": "Línea visible",
   "c": "Señale una tarea cotidiana y explique en una frase cómo esa acción contribuye directamente a la estrategia que está.",
   "z": "Acerque la ficha de esa tarea hacia el pilar Up y cambie su conector a 'acuerdo' si la contribución queda clara o a 'en revisión' si no.",
   "p": "¿Qué ajuste hará a la tarea para que su contribución sea visible en 10 días?"
  }
 },
 {
  "id": "U13",
  "pilar": "up",
  "componente": "Toma de decisiones y resolución de problemas",
  "competencia": "Decisión bajo incertidumbre",
  "conducta": "Reúne datos rápidamente y consulta expertos, pero toma decisiones oportunas incluso con información incompleta, evitando la \"parálisis por análisis\".",
  "reto": {
   "t": "Decidir ya",
   "c": "Frente a una decisión urgente sin toda la información, diga qué mínimo dato solicitaría y a quién consultaría hoy antes de decidir.",
   "z": "Añada una ficha de recurso por la información obtenida, acerque al experto y marque el conector 'activo' con su avatar antes de tomar la decisión.",
   "p": "¿En cuánto tiempo tomará la decisión sin esperar más datos?"
  }
 },
 {
  "id": "U14",
  "pilar": "up",
  "componente": "Toma de decisiones y resolución de problemas",
  "competencia": "Decisión bajo incertidumbre",
  "conducta": "Asume la responsabilidad de las consecuencias de sus decisiones, sean aciertos o errores, sin buscar culpables externos.",
  "reto": {
   "t": "Asume efecto",
   "c": "Describa en una frase concreta qué decisión suya reciente produjo un resultado no esperado y qué parte le corresponde en ese desenlace.",
   "z": "Coloque una ficha de tensión sobre su avatar y retire o cambie a 'roto' el conector que ocultó su responsabilidad en el proceso.",
   "p": "¿Qué acción pública realizará esta semana para asumir esa consecuencia ante el equipo?"
  }
 },
 {
  "id": "U15",
  "pilar": "up",
  "componente": "Toma de decisiones y resolución de problemas",
  "competencia": "Resolución de causa raíz",
  "conducta": "No se queda en la corrección de síntomas superficiales; investiga a fondo para identificar y resolver la causa raíz de los problemas basándose en evidencias y datos.",
  "reto": {
   "t": "Hacia la raíz",
   "c": "Elija el problema recurrente más visible y en una frase proponga la causa subyacente acompañada de la evidencia que la sostiene.",
   "z": "Mueva la pieza 'barrera' que representa el síntoma hacia la pieza que identifica como origen y marque con fichas de recurso las pruebas recogidas.",
   "p": "¿Qué experimento lanzará en quince días para confirmar o refutar esa causa?"
  }
 },
 {
  "id": "U16",
  "pilar": "up",
  "componente": "Toma de decisiones y resolución de problemas",
  "competencia": "Resolución de causa raíz",
  "conducta": "Aplica el pensamiento crítico para cuestionar suposiciones y reducir sesgos antes de decidir",
  "reto": {
   "t": "Gire la suposición",
   "c": "Identifique una suposición clave que sostiene la estrategia y formule en una frase la alternativa contraria a esa suposición.",
   "z": "Gire 180° la pieza que representa esa suposición, cambie su conector a 'en revisión' y añada una ficha de tensión por cada sesgo que identifique.",
   "p": "¿Qué dato o prueba anularía hoy esa suposición?"
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
   "t": "Herramienta y cuidado",
   "c": "En el tablero, añada la pieza que representa la nueva herramienta en Up y acerque una ficha de recurso al avatar del equipo.",
   "z": "La pieza tecnológica en Up está conectada al avatar del equipo con un conector 'en revisión' y junto a ese avatar hay una ficha de recurso.",
   "p": "¿Qué condición exigirá para que la adopción no reduzca ese recurso?"
  }
 },
 {
  "id": "U26",
  "pilar": "up",
  "componente": "Agilidad tecnológica (tech-savviness)",
  "competencia": "Liderazgo en entornos de transformación tecnológica",
  "conducta": "Traduce conceptos tecnológicos complejos a decisiones de negocio estratégicas.",
  "reto": {
   "t": "Conexión accionable",
   "c": "Convierta este concepto tecnológico en una decisión de negocio concreta: qué se decide, quién lo ejecuta y qué indicador medirá el resultado.",
   "z": "Añada una pieza que represente el concepto tecnológico en Up, mueva su avatar para colocarlo entre esa pieza y la pieza del objetivo de negocio y cambie el conector entre ambas piezas a 'activo'.",
   "p": "¿Qué decisión diferente ejecutaría mañana gracias a esta conexión?"
  }
 },
 {
  "id": "B01",
  "pilar": "beyond",
  "componente": "Desarrollo de otros líderes (mentoring & coaching)",
  "competencia": "Mentoría y sucesión",
  "conducta": "Identifica activamente el talento interno y dedica tiempo a formar a sus sucesores para garantizar la continuidad del liderazgo (construcción de pipeline).",
  "reto": {
   "t": "Sustituto señalado",
   "c": "En el tablero, coloque en Beyond el avatar de la persona que podría sucederle y únalo con un conector 'acuerdo' a las piezas clave que tendría que sostener, añadiendo una ficha de recurso que represente tiempo de su parte.",
   "z": "Un avatar en Beyond está unido por un conector 'acuerdo' a las piezas críticas y tiene junto a sí una ficha de recurso que marca formación.",
   "p": "¿Qué primer acto hará esta semana para transferir ese recurso?"
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
   "t": "Suelte el cómo",
   "c": "En el tablero, coloque una ficha que nombre solo el resultado esperado ('qué') sobre la pieza del proyecto y retire cualquier conector que vincule directamente su avatar con las piezas operativas.",
   "z": "Retire el conector entre su avatar y cada pieza de ejecución y acerque el avatar del responsable principal hasta unirlo con un conector activo a esas piezas.",
   "p": "¿Qué indicador observable le permitirá confiar en su equipo sin volver a reconectar con las piezas operativas?"
  }
 },
 {
  "id": "B05",
  "pilar": "beyond",
  "componente": "Desarrollo de otros líderes (mentoring & coaching)",
  "competencia": "Desafío para el crecimiento",
  "conducta": "Asigna proyectos desafiantes (stretch assignments) que obligan a los colaboradores a salir de su zona de confort para desarrollar nuevas habilidades.",
  "reto": {
   "t": "Reto que estira",
   "c": "En el tablero, añada una pieza puente desafiante en Beyond fuera de la zona de confort y únala con un conector 'tenso' al avatar que no suele liderar proyectos grandes.",
   "z": "Una pieza puente en Beyond está conectada por un conector 'tenso' al avatar que ahora lidera un proyecto fuera de su zona habitual.",
   "p": "¿Qué apoyo mínimo pactará para que ese reto sea formativo y no perjudicial?"
  }
 },
 {
  "id": "B06",
  "pilar": "beyond",
  "componente": "Desarrollo de otros líderes (mentoring & coaching)",
  "competencia": "Desafío para el crecimiento",
  "conducta": "Utiliza el coaching para ayudar a los colaboradores a encontrar sus propias soluciones en lugar de dárselas resueltas.",
  "reto": {
   "t": "Preguntas que empoderan",
   "c": "En el tablero, ante la ficha de tensión que representa el problema, coloque una ficha foco frente al avatar del colaborador y cambie su conector hacia él a 'en revisión' sin mover ninguna pieza que resuelva por él.",
   "z": "Su conector hacia el colaborador está en 'en revisión', hay una ficha foco frente a ese avatar y ninguna pieza solución ha sido desplazada por su avatar.",
   "p": "¿Qué pregunta hará para que encuentre su propia solución?"
  }
 },
 {
  "id": "B07",
  "pilar": "beyond",
  "componente": "Impacto social y humano",
  "competencia": "Ética y responsabilidad social",
  "conducta": "Integra consideraciones éticas y de impacto comunitario en la toma de decisiones financieras y estratégicas, priorizando el bien común sobre la ganancia a corto plazo.",
  "reto": {
   "t": "Saldo humano",
   "c": "En el tablero, coloque una ficha de recurso que represente al bien común sobre la pieza que financia esta opción.",
   "z": "Aleje la pieza de ganancia a corto plazo un paso y cambie su conector a 'en revisión' hacia Beyond.",
   "p": "¿Qué perdería hoy si prioriza ese bien común y qué ganaría dentro de un año?"
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
   "t": "Lugar seguro",
   "c": "En el tablero, añada una barrera alrededor del grupo para señalar protección y coloque una ficha de tensión donde exista miedo a hablar.",
   "z": "Gire su avatar hacia el equipo y coloque una pieza 'puente' entre usted y la ficha de tensión.",
   "p": "¿Qué hará la próxima semana para que alguien deje de sentir miedo a expresar desacuerdo?"
  }
 },
 {
  "id": "B11",
  "pilar": "beyond",
  "componente": "Impacto social y humano",
  "competencia": "Inclusión y equidad",
  "conducta": "Promueve activamente la diversidad y crea un entorno inclusivo donde se valoran diferentes perspectivas y antecedentes.",
  "reto": {
   "t": "Voces en cuadro",
   "c": "En el tablero, añada una pieza que represente una perspectiva distinta y únala con un conector al proyecto central.",
   "z": "Marque con una ficha de recurso esa nueva pieza y cambie cualquier conector 'tenso' hacia ella por 'en revisión'.",
   "p": "¿Qué haría para que esa nueva voz tenga espacio real en la próxima decisión?"
  }
 },
 {
  "id": "B12",
  "pilar": "beyond",
  "componente": "Impacto social y humano",
  "competencia": "Inclusión y equidad",
  "conducta": "Trata a todos con justicia e imparcialidad, asegurando equidad en oportunidades y reconocimiento.",
  "reto": {
   "t": "Reparto justo",
   "c": "En el tablero, inspeccione las oportunidades y mueva una ficha de recurso desde quien ya tiene mucho hacia quien tiene menos.",
   "z": "Cambie el conector entre su avatar y la persona beneficiada a 'acuerdo' y marque la redistribución con una ficha de tensión si prevé resistencia.",
   "p": "¿Qué regla sencilla establecería para que este reparto no dependa solo de su criterio?"
  }
 },
 {
  "id": "B13",
  "pilar": "beyond",
  "componente": "Legado personal y trascendencia",
  "competencia": "Institucionalización de cultura",
  "conducta": "Establece rituales, historias y prácticas que anclan los valores y la visión en el ADN de la organización, asegurando que perduren más allá de su rol temporal como líder.",
  "reto": {
   "t": "Ritual en marcha",
   "c": "En el tablero, cree una pieza 'ritual' y colóquela en la intersección entre valores y operaciones.",
   "z": "Añada un conector 'acuerdo' entre esa pieza ritual y al menos dos avatares distintos y deje una ficha de recurso como semilla.",
   "p": "¿Qué frecuencia y quiénes serían responsables de sostener este ritual?"
  }
 },
 {
  "id": "B14",
  "pilar": "beyond",
  "componente": "Legado personal y trascendencia",
  "competencia": "Institucionalización de cultura",
  "conducta": "Documenta lecciones aprendidas y crea sistemas para que el conocimiento crítico (know-how) permanezca en la empresa.",
  "reto": {
   "t": "Archivo vivo",
   "c": "En el tablero, retire una ficha de tensión que represente un fallo y colóquela sobre una nueva pieza 'documento'.",
   "z": "Conecte esa pieza 'documento' al pilar Beyond con un conector 'activo' y deje una ficha de recurso para su mantenimiento.",
   "p": "¿Cómo comprobará que ese conocimiento se usa dentro de seis meses?"
  }
 },
 {
  "id": "B15",
  "pilar": "beyond",
  "componente": "Legado personal y trascendencia",
  "competencia": "Reconocimiento y humildad",
  "conducta": "Pone los focos sobre su equipo: cuando hay éxito, se aparta para que su equipo brille (\"stand back\"); cuando hay fracaso, asume la responsabilidad.",
  "reto": {
   "t": "Ceda el foco",
   "c": "En la próxima celebración regale el protagonismo a un miembro del equipo y, frente a un fallo, póngase al frente y acéptelo como suyo.",
   "z": "Retire su avatar hacia el borde de Beyond, acerque la pieza foco al avatar elegido, coloque sobre ese avatar una ficha de recurso; en la escena del fallo mueva su avatar al centro y cambie el conector entre usted y el resultado a 'activo' colocando una ficha de tensión sobre usted.",
   "p": "¿Qué gesto repetible hará la próxima vez para que el equipo note la entrega del protagonismo y su asunción?"
  }
 },
 {
  "id": "B16",
  "pilar": "beyond",
  "componente": "Legado personal y trascendencia",
  "competencia": "Reconocimiento y humildad",
  "conducta": "Celebra genuinamente los hitos personales y profesionales de los demás, construyendo una cultura de gratitud y apreciación.",
  "reto": {
   "t": "Alabanza concreta",
   "c": "Elija a una persona del equipo y exprese públicamente qué logro suyo valora y por qué, sin comparaciones ni atenuaciones.",
   "z": "Coloque una ficha de recurso sobre el logro de esa persona, acerque su avatar a su lado y añada un conector de 'acuerdo' entre usted y ese logro.",
   "p": "¿Cómo incorporará ese reconocimiento en la rutina del equipo para que no quede aislado?"
  }
 },
 {
  "id": "B17",
  "pilar": "beyond",
  "componente": "Legado personal y trascendencia",
  "competencia": "Conexión con el propósito (meaning)",
  "conducta": "Ayuda a cada miembro del equipo a descubrir su propio propósito y a conectarlo con la misión de la organización (alineación de propósito).",
  "reto": {
   "t": "Mapee el sentido",
   "c": "Pregunte a un miembro qué actividad le da sentido y vincule ese relato con una tarea de la organización.",
   "z": "Sitúe a esa persona en Beyond, coloque su pieza foco junto a su avatar y trace un puente entre ese foco y la pieza que representa la misión del pilar Beyond.",
   "p": "¿Qué paso concreto dará para que ese puente entre su propósito y la misión exista la próxima semana?"
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
   "t": "Diversidad intencional",
   "c": "Recombíne hoy al equipo: elija tres personas con enfoques distintos y asígneles una tarea conjunta concreta.",
   "z": "Agrupe esos tres avatares en Up, coloque puentes entre ellos y cambie sus conectores a 'acuerdo' para visualizar la colaboración diversa.",
   "p": "¿Qué criterio objetivo usó para elegirlos y cómo evaluará si la diversidad de pensamiento aportó valor?"
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
   "t": "Negocio con impacto",
   "c": "Escoja un objetivo comercial y señale una necesidad real de la comunidad que ese objetivo podría comenzar a satisfacer con una acción concreta.",
   "z": "Coloque la pieza base que represente el objetivo, ubique en Out la pieza que represente la necesidad comunitaria y trace un puente entre ambas marcado con una ficha de recurso.",
   "p": "¿Cómo verificará que la acción satisface la necesidad comunitaria además de los resultados del negocio?"
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
