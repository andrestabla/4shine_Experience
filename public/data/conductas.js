/* Mazo unificado 4Shine · 96 cartas de dos caras.
   RECTO   = reto: perturba la escena y exige mover el tablero
   REVERSO = conducta observable, literal del Mapa de competencias V3
   escolar = misma carta traducida al mundo de un estudiante de último grado */
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
  },
  "escolar": {
   "reto": {
    "t": "Paso adelante",
    "c": "«Paso hacia adelante» — ¿Qué riesgo exigente en este tablero estás dispuesto a asumir ahora para mostrar confianza y motivar a tu grupo a seguirte?",
    "z": "Acerca tu avatar al foco más desafiante, coloca una pieza puente hacia el grupo y pon una ficha de energía sobre ese puente.",
    "p": "¿Qué harás en el primer paso para que el grupo quiera acompañarte?"
   },
   "conducta": "Afronta desafíos con seguridad en sus capacidades sin caer en arrogancia, motivando a su grupo a perseguir metas exigentes."
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
  },
  "escolar": {
   "reto": {
    "t": "Palabra y obra",
    "c": "¿Qué compromiso tuyo en esta escena aún no se ha vuelto acto visible y cómo lo corregirás ahora para que se vea?",
    "z": "Ubica la pieza que representa esa promesa, ponle una ficha de recurso y acerca tu avatar para ejecutarla.",
    "p": "Si no la ejecutas hoy, ¿qué cambiarás en la escena para que tu palabra y tu acción coincidan?"
   },
   "conducta": "Muestra consistencia entre lo que dice y hace, generando credibilidad y confianza entre sus compañeros y profesores."
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
  },
  "escolar": {
   "reto": {
    "t": "Creencia a acción",
    "c": "¿Qué creencia limitante aparece en este tablero y cómo la formularías ahora en términos de aprendizaje y progreso?",
    "z": "Retira la pieza barrera que simboliza esa creencia y sustitúyela por una pieza energía etiquetada con la nueva frase.",
    "p": "¿Qué acción medible demostrará que la nueva creencia te impulsa?"
   },
   "conducta": "Identifica activamente creencias limitantes (ej. “no soy bueno en esto”) y las reescribe hacia un lenguaje de aprendizaje y empoderamiento (ej. “estoy aprendiendo a dominar esto”)."
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
  },
  "escolar": {
   "reto": {
    "t": "Cambio de pregunta",
    "c": "¿Qué pregunta de víctima aparece en esta escena y cuál sería la pregunta alternativa que te pone en acción aquí mismo?",
    "z": "Coloca una ficha de tensión sobre la pregunta de víctima y una ficha de recurso sobre la pregunta protagonista; acerca tu avatar a la ficha de recurso.",
    "p": "¿Cuál de las dos preguntas te moviliza ahora mismo?"
   },
   "conducta": "Sustituye preguntas de víctima (¿Por qué a mí?) por preguntas de protagonista (¿Qué puedo aprender? ¿Cómo puedo aportar?)."
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
  },
  "escolar": {
   "reto": {
    "t": "Excusa o decisión",
    "c": "«Excusa a decisión» — ¿Qué excusa aparece en este tablero para evitar decidir y cuál será la decisión concreta que pondrás en su lugar?",
    "z": "Retira la ficha que representa la excusa, añade una ficha de recurso que nombre la decisión y conecta esa ficha a tu avatar con un conector activo.",
    "p": "¿Qué primer gesto demostrará que elegiste la decisión y no la excusa?"
   },
   "conducta": "Pasa de poner excusas a tomar decisiones; reconoce que tiene control sobre su vida y asume responsabilidad por sus resultados."
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
  },
  "escolar": {
   "reto": {
    "t": "Error y reparación",
    "c": "¿Qué error tuyo reciente sostiene esta escena y qué reparación concreta propones sin atribuir la culpa a factores externos?",
    "z": "Mueve la pieza que representa el error hacia tu avatar, coloca una ficha de recurso que describa la reparación y cambia el conector hacia la solución a 'en revisión'.",
    "p": "¿Qué evidencia será suficiente para que consideres la reparación efectiva?"
   },
   "conducta": "No culpa a factores externos; asume la propiedad de sus errores y busca soluciones proactivas."
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
  },
  "escolar": {
   "reto": {
    "t": "Marca tu ánimo",
    "c": "¿Qué ánimo domina tu avatar en esta escena (clase, proyecto, chat, casa) y qué decisión reciente lo condicionó?",
    "z": "Marca tu avatar con una ficha que nombre ese ánimo y coloca una ficha de tensión sobre la decisión que lo provocó.",
    "p": "¿Qué señal detectable te avisará pronto ese ánimo la próxima vez?"
   },
   "conducta": "Reconoce sus estados de ánimo en tiempo real y cómo influyen en sus decisiones y en las personas de su entorno (compañeros, profes, familia)."
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
  },
  "escolar": {
   "reto": {
    "t": "Aleja el detonante",
    "c": "¿Cuál es el detonante en esta escena que suele activarte (ej. un comentario en clase, un mensaje del chat, una crítica) antes de que reacciones impulsivamente?",
    "z": "Identifica el elemento detonante en el tablero, pon una ficha de tensión sobre él y muévelo un espacio lejos de tu avatar para crear un margen de espera.",
    "p": "¿Qué reacción práctica harás en los primeros cinco segundos cuando detectes ese detonante?"
   },
   "conducta": "Identifica sus 'detonantes' emocionales (por ejemplo, sentirse cuestionado) antes de que provoquen una reacción impulsiva."
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
  },
  "escolar": {
   "reto": {
    "t": "Antes del estallido",
    "c": "Mira la ficha de tensión más caliente de tu escena: ¿qué haces en el segundo antes de estallar ahí?",
    "z": "Coloca una ficha de recurso justo antes de esa tensión, en el punto del tablero donde todavía puedes elegir qué hacer.",
    "p": "¿Qué te dará la señal de que ese segundo llegó?"
   },
   "conducta": "Aplica la pausa estratégica (método STOP: Parar, Pensar, Observar, Proceder) antes de reaccionar en una crisis con compañeros, profes o familia."
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
  },
  "escolar": {
   "reto": {
    "t": "Ancla serena",
    "c": "Elige ahora un gesto, palabra corta u objeto que te centre: ¿cuál vas a usar y cómo funcionaría en esta escena?",
    "z": "Añade una ficha de recurso junto a tu avatar que represente ese ancla y acércala al área donde se concentra la tensión.",
    "p": "¿Qué señal concreta hará que uses ese ancla antes de que suba la temperatura?"
   },
   "conducta": "Utiliza anclas de calma (respiración consciente, objetos, mantras) para volver a su centro en momentos de estrés."
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
  },
  "escolar": {
   "reto": {
    "t": "Centro estable",
    "c": "En la próxima confrontación de esta escena, ¿qué harás para mantener tono y postura neutrales y no permitir que la escalada cambie tu gesto?",
    "z": "Acerca tu avatar un paso hacia el centro del tablero y coloca sobre él una ficha de recurso que signifique estabilidad.",
    "p": "¿Qué frase neutra dirás para sostener esa calma cuando suba la presión?"
   },
   "conducta": "Mantiene la calma frente a la frustración y proyecta estabilidad al grupo (compañeros, proyecto, entrenador)."
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
  },
  "escolar": {
   "reto": {
    "t": "Tiempo desconexión",
    "c": "¿Qué periodo vas a bloquear ahora en tu agenda como tiempo sin interrupciones y cómo lo anunciarías en esta escena para que sea no negociable?",
    "z": "Retira una pieza de energía del tablero y colócala fuera del campo para representar ese tiempo de desconexión.",
    "p": "¿Qué barrera deberás mover o reforzar para que ese tiempo realmente se mantenga?"
   },
   "conducta": "Prioriza su descanso y desconexión para mantener claridad mental, sabiendo que el agotamiento reduce la calidad de sus decisiones."
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
  },
  "escolar": {
   "reto": {
    "t": "Batería visible",
    "c": "¿Qué pieza en Within representa tu nivel de energía hoy y qué la está agotando? Ubícala tal como está en la escena.",
    "z": "Coloca una ficha de recurso en el campo donde tu energía se sostiene, y una ficha de tensión donde se agota.",
    "p": "Si esa pieza no cambia, ¿qué impacto tendrá en tu participación la próxima semana?"
   },
   "conducta": "Incorpora rutinas de bienestar físico y mental para recargar su 'batería' y sostener su rendimiento en el colegio."
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
  },
  "escolar": {
   "reto": {
    "t": "Norte claro",
    "c": "¿Qué 'para qué' aparece cuando miras la pieza base en Within? Dilo en una frase, tal como lo sientes.",
    "z": "Acerca una ficha de energía a la pieza en Within que más refleja ese paraqué.",
    "p": "¿Qué decisión reciente habría sido distinta si ese paraqué te hubiera guiado?"
   },
   "conducta": "Define y articula un 'para qué' claro que conecta su día a día en el curso con un impacto mayor (ej. \"Estoy aquí para ayudar al grupo a aprender\")."
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
  },
  "escolar": {
   "reto": {
    "t": "Filtro personal",
    "c": "Frente al dilema que muestra tu escena, ¿qué pieza en Within habla por tu propósito? ¿Cuál te pide avanzar y cuál te pide frenar?",
    "z": "Aleja una ficha de decisión de la pieza que contradice tu sentido personal dentro de Within.",
    "p": "¿Qué ganancia y qué costo ves si priorizas lo que tu propósito señala?"
   },
   "conducta": "Usa su propósito como filtro para decisiones difíciles, asegurando que sus acciones respeten su intención personal."
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
  },
  "escolar": {
   "reto": {
    "t": "Palabra y acto",
    "c": "¿Dónde hay una discrepancia entre lo que dices y lo que haces en esta escena? Reemplaza mentalmente la acción contradictoria por otra que refleje tu mensaje.",
    "z": "Gira la pieza que te representa para mostrar la nueva acción y cambia su conector hacia el valor correspondiente por 'acuerdo'.",
    "p": "¿Qué costo aceptas para mantener ahora esa alineación entre palabra y acto?"
   },
   "conducta": "Actúa según lo que dice; sus actos en clase y fuera son coherentes con sus valores."
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
  },
  "escolar": {
   "reto": {
    "t": "Palabra cumplida",
    "c": "Mirando la escena, ¿qué compromiso público podrías declarar ahora y con qué fecha concreta de entrega?",
    "z": "Añade una ficha de recurso a la pieza que representa ese compromiso y cambia su conector a 'acuerdo'.",
    "p": "Si no cumples esa fecha, ¿qué acción concreta harás para recuperar la confianza?"
   },
   "conducta": "Cumple sus promesas en el curso y en su grupo, generando confianza y previsibilidad."
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
  },
  "escolar": {
   "reto": {
    "t": "Firme por principio",
    "c": "En esta escena, ¿qué decisión sacrificarías una ganancia inmediata para mantener un principio tuyo?",
    "z": "Separa la pieza que representa la ganancia a corto plazo de tu avatar y coloca una ficha de barrera entre ambas piezas.",
    "p": "¿Qué línea ética no negociarías aunque te ofrecieran un beneficio inmediato?"
   },
   "conducta": "Defiende sus principios incluso bajo presión o ante la posibilidad de beneficios a corto plazo."
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
  },
  "escolar": {
   "reto": {
    "t": "Máscara fuera",
    "c": "¿Qué barrera o conector en tu tablero impide que tu avatar muestre cómo eres realmente? Descríbelo.",
    "z": "Retira o gira la barrera frente a tu avatar que simbolice esa incomodidad.",
    "p": "Al hacerlo, ¿qué palabra auténtica aparece para describir cómo lideras en el curso o proyecto?"
   },
   "conducta": "Se muestra genuino, sin fingir roles del grupo; tiene la valentía de ser sí mismo mientras coordina o lidera."
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
  },
  "escolar": {
   "reto": {
    "t": "Intención clara",
    "c": "¿Cuál es la motivación real que te mueve en la acción representada en esta escena del tablero? Dilo en voz alta.",
    "z": "Marca tu avatar con una ficha de foco que exprese esa intención y acerca una ficha de energía hacia la persona más afectada.",
    "p": "¿Qué reacción esperas y cómo la integrarás en la relación con esa persona?"
   },
   "conducta": "Es transparente sobre sus intenciones y valores, lo que facilita la conexión con sus compañeras y compañeros."
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
  },
  "escolar": {
   "reto": {
    "t": "Mirada interna",
    "c": "¿Qué sensación o patrón aparece con más fuerza alrededor de tu avatar en esta escena y cómo lo notas en ti?",
    "z": "Coloca una ficha 'registro' junto a tu avatar y marca con una ficha de tensión el patrón emocional más frecuente.",
    "p": "Si leyeras esa ficha dentro de siete días, ¿qué insight distinto podrías obtener?"
   },
   "conducta": "Se toma tiempo para observarse y analizar su actuación (por ejemplo, llevar un diario o bitácora emocional)."
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
  },
  "escolar": {
   "reto": {
    "t": "Yo que viene",
    "c": "¿Quién quieres llegar a ser en este rol dentro de un año y qué vas a dejar de hacer para lograrlo?",
    "z": "Añade en Up una pieza que represente esa versión futura y conéctala por 'acuerdo' con las acciones que mantendrás.",
    "p": "¿Cuál es el primer gesto observable que te acercará a esa versión?"
   },
   "conducta": "Se hace preguntas poderosas sobre su identidad y futuro (¿En quién quiero convertirme? ¿Qué puedo aportar?)."
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
  },
  "escolar": {
   "reto": {
    "t": "Punto ciego",
    "c": "De las personas que pusiste en el tablero, ¿quién ve algo de ti que tú no ves? ¿Por qué no se lo has preguntado?",
    "z": "Gira el avatar de esa persona hasta que quede mirando hacia el tuyo.",
    "p": "Si supieras que responderá con franqueza, ¿qué pregunta exacta le harías?"
   },
   "conducta": "Pide retroalimentación constructiva a pares, profes y amigos para identificar sus puntos ciegos."
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
  },
  "escolar": {
   "reto": {
    "t": "Escucha abierta",
    "c": "¿Qué conector en Within indica que te cierras ante la crítica y qué ficha lo vuelve visible en la escena?",
    "z": "Marca ese conector con una ficha de tensión en el tablero.",
    "p": "Al verlo marcado, ¿qué observación concreta surge sobre tu reacción?"
   },
   "conducta": "Recibe la crítica sin ponerse a la defensiva, utilizándola como insumo para su crecimiento personal."
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
  },
  "escolar": {
   "reto": {
    "t": "Fallo como dato",
    "c": "En tu tablero, ¿qué pieza representa el último resultado que etiquetaste como “fracaso” (ej. un examen, una entrega, una discusión) y qué dato concreto te aportó ese resultado?",
    "z": "Marca con una ficha de recurso la pieza que representa ese evento y acerca tu avatar hacia ella.",
    "p": "¿Qué experimento repetirás para convertir esa información en mejora?"
   },
   "conducta": "Interpreta los errores y fracasos no como etiquetas sobre su valía, sino como datos para aprender y mejorar."
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
  },
  "escolar": {
   "reto": {
    "t": "Suelta lo viejo",
    "c": "En tu tablero, ¿qué pieza simboliza una práctica que ya no te sirve (por ejemplo estudiar a última hora o evitar preguntar en clase) y qué hábito nuevo quieres poner en su lugar?",
    "z": "Retira o gira la pieza que simboliza el hábito viejo y coloca una ficha foco para la nueva competencia.",
    "p": "¿Cuál será el primer gesto concreto esta semana para empezar a aprenderlo?"
   },
   "conducta": "Desaprende hábitos que ya no funcionan y adquiere nuevas habilidades para adaptarse a los retos del curso o del proyecto."
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
  },
  "escolar": {
   "reto": {
    "t": "Respira en juego",
    "c": "En tu tablero, ¿qué ficha de tensión en Within se activa ante la pieza Out que hoy te aprieta y cómo lo notas en tu cuerpo (respiración, pecho, manos, cabeza)?",
    "z": "Mueve esa ficha de tensión un paso hacia tu avatar.",
    "p": "¿Qué variación en la escena anticipas cuando esa ficha cambie de posición?"
   },
   "conducta": "Aplica técnicas de respiración consciente antes de situaciones de alta presión, como exámenes o presentaciones."
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
  },
  "escolar": {
   "reto": {
    "t": "Punto de calma",
    "c": "En tu tablero, ¿qué avatar dentro de Within proyecta compostura frente a la ficha de tensión más grande y qué gesto suyo reconoces primero?",
    "z": "Acerca una ficha foco al avatar que elijas.",
    "p": "¿Qué muestra ese acercamiento sobre cómo tu presencia impacta al grupo?"
   },
   "conducta": "Mantiene la calma en situaciones de crisis, proyectando seguridad y evitando que el resto se bloquee."
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
  },
  "escolar": {
   "reto": {
    "t": "Calma en escena",
    "c": "En tu tablero, ¿qué pieza o vínculo dispara tu reacción defensiva cuando recibes crítica?",
    "z": "Aleja dos centímetros la pieza que simboliza la crítica respecto a tu avatar y pon una ficha de tensión en el conector.",
    "p": "¿Qué revela este ajuste sobre tu impulso a ponerte a la defensiva?"
   },
   "conducta": "Controla los impulsos y evita reacciones defensivas, permitiendo que otros piensen y actúen con claridad."
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
  },
  "escolar": {
   "reto": {
    "t": "Protege tu ciclo",
    "c": "En tu tablero, ¿qué base representa tu rutina nocturna y qué cambio concreto en esa rutina vas a implementar esta semana para rendir mejor al día siguiente?",
    "z": "Coloca una ficha de recurso en la base que representa tu rutina nocturna y gira esa pieza 90°.",
    "p": "¿Qué obstáculo practicarás neutralizar hoy para asegurar ese cambio esta noche?"
   },
   "conducta": "Gestiona su sueño y ritmos para asegurar un rendimiento cognitivo óptimo al día siguiente."
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
  },
  "escolar": {
   "reto": {
    "t": "Narrativa propia",
    "c": "«Frase repetida» — En el tablero, ¿qué frase se repite en tu cabeza sobre pertenecer al rol que marcaste (por ejemplo en el proyecto, como delegado, en la prueba)? Dila exactamente como suena.",
    "z": "Acerca tu avatar al centro del diamante hasta que la distancia refleje cuánto te sientes dueño de ese rol.",
    "p": "¿Qué cambiaría en la escena si esa frase sonara diferente?"
   },
   "conducta": "Reescribe narrativas internas de duda ('no soy quien para liderar') por narrativas de propiedad ('merezco estar aquí')."
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
  },
  "escolar": {
   "reto": {
    "t": "Valores activos",
    "c": "«Valores en acto» — En el tablero, identifica la decisión o foco donde tus valores chocan con lo que se espera de tu rol en el curso o proyecto: ¿cuál es esa decisión y qué acción puntual harás para expresar tu valor?",
    "z": "Coloca una pieza 'foco' sobre el valor en conflicto y únela mediante un conector 'activo' a tu avatar.",
    "p": "¿Qué indicador objetivo mirarás para comprobar que actuaste desde tu valor y no por apariencia?"
   },
   "conducta": "Integra sus valores personales con su rol en el curso o proyecto sin sentir que está 'actuando'."
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
  },
  "escolar": {
   "reto": {
    "t": "Foco claro",
    "c": "En el tablero, ¿qué foco aparece más ambiguo y qué genera esa confusión sobre su propósito dentro del curso/proyecto?",
    "z": "Acércalo al avatar que lo lidera y marca con una ficha de recurso la distancia restante.",
    "p": "¿Qué palabra o imagen cambiarías para que ese foco sea comprensible ahora?"
   },
   "conducta": "Expresa objetivos y la visión de futuro de forma clara, evitando ambigüedad sobre qué se espera y por qué importa."
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
  },
  "escolar": {
   "reto": {
    "t": "Imagen que une",
    "c": "En el tablero, ¿qué pieza funciona ya como relato que motiva y qué barrera la fragmenta ante quienes debería inspirar (compañeros, profesores, familia)?",
    "z": "Acerca la pieza 'foco' a la persona que aparece más distante en el tablero.",
    "p": "¿Qué revela ese movimiento sobre quién necesita oír esa historia?"
   },
   "conducta": "Utiliza un tono entusiasta, historias o metáforas para alinear al grupo bajo un propósito común y motivador."
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
  },
  "escolar": {
   "reto": {
    "t": "Escucha empática",
    "c": "«Repita y confirme» — En el tablero, elige la pieza de una persona que habló: cuando lo haga, ¿qué frase usarás para parafrasear en una línea y qué añadirás para validar su aporte?",
    "z": "Marca con una ficha de recurso la pieza del interlocutor y acerca tu avatar hacia ella un paso.",
    "p": "¿Qué palabra elegiste parafrasear y qué cambió en la expresión del otro?"
   },
   "conducta": "Presta atención plena (mindfulness) cuando un compañero habla, parafraseando para confirmar entendimiento y validando los aportes."
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
  },
  "escolar": {
   "reto": {
    "t": "Ponte en su lugar",
    "c": "En el tablero, elige el campo de un compañero: describe en una frase cómo vivirías la situación desde su posición y cuál sería tu primera acción para aliviar su tensión.",
    "z": "Mueve tu avatar al campo del compañero y marca con una ficha de tensión la preocupación que imaginas.",
    "p": "¿Qué diferencia esencial encontraste entre tu perspectiva y la del otro?"
   },
   "conducta": "Se 'pone en los zapatos' de sus compañeros para construir relaciones de confianza y seguridad psicológica."
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
  },
  "escolar": {
   "reto": {
    "t": "Tono a medida",
    "c": "«Mensaje a medida» — ¿Qué pieza o qué distancia en tu tablero señala quién necesita un tono más técnico o más estratégico (por ejemplo, un profesor, un compañero del proyecto o un familiar)?",
    "z": "En el tablero: acerca el mensaje que representa tu comunicación al avatar de esa persona y marca su tono con una ficha 'técnico' o 'estratégico'.",
    "p": "¿Qué cambió en la forma en que recibieron tu mensaje al ajustar la proximidad y la etiqueta?"
   },
   "conducta": "Lee a sus compañeros, profesores o familia y ajusta su estilo y lenguaje (ej. técnico vs. estratégico) según con quién hable."
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
  },
  "escolar": {
   "reto": {
    "t": "Sintoniza el ritmo",
    "c": "«Sintonice el ritmo» — ¿Qué pieza en tu tablero muestra la señal no verbal de incomodidad y quién la está dando?",
    "z": "En el tablero: marca con una ficha de tensión la pieza que mostró la señal no verbal y aleja tu avatar un paso para bajar el ritmo.",
    "p": "¿Qué gesto o silencio te invitó a bajar el ritmo?"
   },
   "conducta": "Reconoce señales no verbales en compañeros, amigos o profesores y modifica la velocidad o el enfoque de su explicación para mantener la sintonía y asegurarse de que lo entiendan."
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
  },
  "escolar": {
   "reto": {
    "t": "Info clave",
    "c": "«Información clave» — ¿Qué pieza en tu tablero contiene algo que otros necesitan saber y qué la está bloqueando?",
    "z": "En el tablero: acerca esa pieza al avatar afectado y marca el conector entre ambos como activo o tenso.",
    "p": "¿Qué cambio en ese conector sería prueba de mayor transparencia?"
   },
   "conducta": "Comparte información relevante de manera oportuna y honesta (transparencia), incluso las malas noticias, con compañeros, profes o familia."
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
  },
  "escolar": {
   "reto": {
    "t": "Admisión abierta",
    "c": "¿Dónde en tu tablero se siente una barrera por miedo a preguntar o admitir que no sabes algo?",
    "z": "En el tablero: gira la pieza barrera y coloca una ficha de tensión sobre el vínculo que más la activa.",
    "p": "¿Qué haría que admitir 'no saber' fuese seguro para esa persona?"
   },
   "conducta": "Admite abiertamente cuando 'no sabe' algo y trata a los demás con respeto, reduciendo el miedo a represalias por reportar problemas."
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
  },
  "escolar": {
   "reto": {
    "t": "Hecho y ejemplo",
    "c": "¿Qué argumento concreto en tu tablero puedes presentar y qué gesto deberías hacer primero para respaldarlo?",
    "z": "En el tablero: acerca la pieza 'foco' al avatar del destinatario y marca con una ficha de recurso tu propio avatar.",
    "p": "¿Qué evidencia mostraste y qué acción ejecutaste primero para sostenerla?"
   },
   "conducta": "Utiliza la persuasión racional (datos/hechos) y predica con el ejemplo en lugar de la manipulación o la amenaza."
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
  },
  "escolar": {
   "reto": {
    "t": "Interés compartido",
    "c": "«Lo que compartimos» — Frente a la pieza que representa lo que quieres lograr, ¿qué de eso le importa también a la otra persona en tu tablero?",
    "z": "En el tablero: coloca una pieza base entre ambos avatares que represente algo que ninguno de los dos esté dispuesto a perder.",
    "p": "Si mañana empezaras la conversación por esa pieza, ¿qué cambiaría?"
   },
   "conducta": "Apela a valores e ideales compartidos para generar una voluntad genuina de colaboración en el curso, proyecto o grupo."
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
  },
  "escolar": {
   "reto": {
    "t": "Crédito visible",
    "c": "¿Qué logro en tu tablero no tiene reconocimiento visible? ¿Puedes nombrarlo en voz alta?",
    "z": "En el tablero: coloca junto a la pieza correspondiente una ficha de reconocimiento.",
    "p": "¿Qué vínculo fuera cambiaría si ese reconocimiento fuese explícito?"
   },
   "conducta": "Reconoce públicamente los logros y da crédito explícito a compañeros por sus contribuciones, fomentando orgullo compartido."
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
  },
  "escolar": {
   "reto": {
    "t": "Reconocimiento certero",
    "c": "¿Qué pieza en el campo fuera merece un reconocimiento privado y qué conector actual dificulta que lo reciba?",
    "z": "En el tablero: retira ese conector y cámbialo por 'acuerdo' entre ambas piezas.",
    "p": "¿Qué te dice ahora el tablero sobre la forma y el lugar del reconocimiento?"
   },
   "conducta": "Da retroalimentación privada, concreta y centrada en la conducta (no en la persona) para corregir el rumbo y ayudar a crecer."
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
  },
  "escolar": {
   "reto": {
    "t": "Presencia virtual",
    "c": "«Presencia igualada» — ¿Qué postura y frase de apertura elegirías para preparar tu próxima reunión remota como si fuera cara a cara?",
    "z": "En el tablero: mueve tu avatar al borde del pilar fuera y marca con una ficha de energía tu foco.",
    "p": "¿Qué diferencia notaste en la percepción del grupo cuando mantuviste esa postura?"
   },
   "conducta": "Mantiene presencia y calidez en videollamadas como si fuera cara a cara."
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
  },
  "escolar": {
   "reto": {
    "t": "Narrativa pública",
    "c": "¿Publicarías o ajustarías ahora un mensaje público que destaque tu contribución y su impacto medible? ¿Qué dirías?",
    "z": "En el tablero: añade una ficha de recurso en el campo fuera y acerca una pieza 'puente' desde tu avatar hacia esa ficha.",
    "p": "¿Qué aspecto de tu historia elegiste destacar y por qué?"
   },
   "conducta": "Gestiona su presencia pública en redes y plataformas mostrando contribuciones y su impacto de forma estratégica."
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
  },
  "escolar": {
   "reto": {
    "t": "Pedidos claros",
    "c": "«Lo que diste por hecho» — ¿Qué vínculo de tu escena esperas que haga algo alguien? ¿Esa persona sabe exactamente qué y para cuándo?",
    "z": "En el tablero: cambia ese conector a 'en revisión' hasta que puedas decir en voz alta qué pediste y con qué plazo.",
    "p": "¿Qué se ha roto antes por dar ese pedido por entendido?"
   },
   "conducta": "Hace pedidos claros, con condiciones de satisfacción y plazos definidos, para evitar retrabajos."
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
  },
  "escolar": {
   "reto": {
    "t": "Promesa en juego",
    "c": "¿Qué promesa en el campo fuera está hoy más expuesta en tu tablero y qué conector la vincula al resto?",
    "z": "En el tablero: marca esa pieza con una ficha de tensión.",
    "p": "¿Qué cambiaría en la escena si esa ficha se moviera a otro vínculo?"
   },
   "conducta": "Gestiona sus promesas: si no puede cumplir, revoca o renegocia a tiempo para mantener la confianza."
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
  },
  "escolar": {
   "reto": {
    "t": "Vínculo externo",
    "c": "¿Qué pieza 'puente' conecta a tu avatar con otras áreas del cole, curso o proyecto que aparecen en este tablero? Di su nombre tal como suena.",
    "z": "Acerca la pieza 'puente' que une tu avatar con la pieza de la otra área.",
    "p": "¿Qué cambia en la energía del vínculo al acercarla?"
   },
   "conducta": "Conecta activamente a su grupo con otras áreas para derribar silos y fomentar la colaboración entre cursos y proyectos."
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
  },
  "escolar": {
   "reto": {
    "t": "Radar externo",
    "c": "¿Qué evento o contacto fuera del cole que está en tu tablero no has atendido en seis meses? ¿Cuál es y qué acción concreta vas a programar en tu calendario?",
    "z": "Coloca una pieza 'puente' en la zona externa y acerca tu avatar un paso hacia ella; marca el evento con una ficha de recurso.",
    "p": "¿Qué señal buscarás en ese contacto para ajustar tu radar?"
   },
   "conducta": "Participa en eventos externos y mantiene vínculos con contactos fuera del cole (mentores, entrenadores, empresas) para detectar tendencias."
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
  },
  "escolar": {
   "reto": {
    "t": "Tejedor activo",
    "c": "¿Qué contacto fuera del cole podrías pedirle acceso a un recurso clave para tu curso o proyecto (laboratorio, mentor, material) y cuándo lo acordarías?",
    "z": "Coloca la pieza 'foco' que representa ese recurso en la zona superior (Up), únala con un conector 'acuerdo' al avatar del contacto y pon una ficha de recurso encima.",
    "p": "¿Qué estarás dispuesto a ofrecer a cambio para que ese acuerdo prospere?"
   },
   "conducta": "Actúa como un 'tejedor', facilitando el acceso a recursos y conocimientos críticos para su curso a través de su red de contactos."
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
  },
  "escolar": {
   "reto": {
    "t": "Puente visible",
    "c": "¿Qué puente en tu tablero conecta a tu grupo con oportunidades fuera del cole (prácticas, ferias, talleres) y qué le falta para funcionar mejor?",
    "z": "Marca con una ficha de recurso ese puente.",
    "p": "¿Quién sostendría ese puente si no pudieras hacerlo tú?"
   },
   "conducta": "Utiliza su capital social para apoyar a su grupo y abrir puertas a nuevas oportunidades de estudio o prácticas."
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
  },
  "escolar": {
   "reto": {
    "t": "Voz en reunión",
    "c": "¿Qué tema crítico vas a defender en tu próxima reunión de curso o con profesores y cuál será la postura concreta que sostendrás?",
    "z": "Coloca una pieza 'foco' en la zona superior que represente la reunión, únala con un conector 'activo' a tu avatar y pon una ficha de energía sobre tu aporte.",
    "p": "¿Qué reacción específica quieres provocar con esa intervención?"
   },
   "conducta": "Se posiciona no solo como experto técnico, sino como referente que aporta valor en reuniones del curso y con profesores."
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
  },
  "escolar": {
   "reto": {
    "t": "Reciprocidad activa",
    "c": "¿Qué contacto con el que tu relación es solo transaccional (por ejemplo alguien que solo te ayuda con un tema puntual) podrías convertir en un intercambio de valor mutuo esta quincena? ¿Qué propondrías?",
    "z": "Acerca el avatar de ese contacto un campo hacia el tuyo, mueve tu pieza 'foco' al espacio entre ambos, cambia el conector entre los avatares a 'en revisión' y coloca una ficha de recurso junto a cada avatar.",
    "p": "¿Qué ofrecerás primero para equilibrar la relación y qué recibirás a cambio?"
   },
   "conducta": "Construye relaciones basadas en la reciprocidad y el valor mutuo, no solo en intercambios puntuales."
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
  },
  "escolar": {
   "reto": {
    "t": "Mapa futuro",
    "c": "¿Qué tendencia grande (por ejemplo: cambios en la uni, redes sociales, IA, economía local) ves relevante para tu curso o proyecto y qué tres impactos concretos tendría en tu situación durante el próximo año? Descríbelos brevemente.",
    "z": "Coloca tres fichas de tensión en los campos del tablero que representen esos impactos y etiqueta cada ficha con una palabra breve.",
    "p": "¿Cuál de esos impactos exige que cambies hoy una decisión clave?"
   },
   "conducta": "Reconoce tendencias grandes (p. ej. cambios en la universidad, redes, tecnología o economía) y anticipa cómo influirán en su curso, proyecto o vida escolar."
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
  },
  "escolar": {
   "reto": {
    "t": "Largo plazo",
    "c": "¿Qué pieza de tu tablero está hoy más alejada de las urgencias del día a día y qué te indica esa distancia sobre su estado real?",
    "z": "Marca con una ficha de recurso la pieza que represente una iniciativa de largo plazo.",
    "p": "¿Qué revela esa ficha sobre la prioridad real que le das al futuro?"
   },
   "conducta": "Evita quedarse solo con lo urgente; dedica tiempo y recursos a iniciativas de largo plazo en el colegio o en su proyecto de grado."
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
  },
  "escolar": {
   "reto": {
    "t": "Futuro compartido",
    "c": "¿Qué pieza falta en tu tablero para que la visión a cinco años se sienta compartida por quienes participan en tu curso o proyecto? Nómbrala.",
    "z": "Coloca una ficha 'visión' junto a la pieza foco que imagines para dentro de cinco años.",
    "p": "¿Quién en la escena podría repetir esa visión y qué cambia si lo hace?"
   },
   "conducta": "Formula una visión aspiracional clara y atractiva que compañeros, profes o familia puedan repetir y hacer propia."
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
  },
  "escolar": {
   "reto": {
    "t": "Para qué",
    "c": "Señala la meta más lejana de tu tablero. Si alguien de tu curso preguntara ‘¿y esto para qué?’, ¿qué responderías hoy?",
    "z": "Traza un puente desde esa meta hasta el avatar de la persona a quien más le costaría entenderla o a quien más deberías convencer.",
    "p": "¿Qué parte de esa respuesta todavía no has dicho en voz alta?"
   },
   "conducta": "Comunica el 'para qué' de las metas, dando sentido y propósito al trabajo diario del curso o proyecto."
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
  },
  "escolar": {
   "reto": {
    "t": "Meta en juego",
    "c": "Mirando la pieza que representa la visión en tu tablero: ¿qué número, plazo o persona responsable sugiere y qué es lo que aún falta para que quede claro?",
    "z": "Coloca una ficha 'número' junto a la pieza de visión y acerca una ficha 'plazo' hacia ella.",
    "p": "¿Qué se vuelve más claro o más riesgoso para vos al tener esas cifras visibles?"
   },
   "conducta": "Convierte la visión en objetivos concretos, medibles y con plazos y responsables claros."
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
  },
  "escolar": {
   "reto": {
    "t": "Conexión clara",
    "c": "¿Qué pieza en la parte alta de tu tablero contiene hoy una tarea cotidiana y qué conector muestra su distancia a la meta estratégica?",
    "z": "Acerca esa pieza una casilla hacia la meta y cambia su conector a 'activo'.",
    "p": "¿Qué evidencia de alineación aparece tras ese movimiento?"
   },
   "conducta": "Explica cómo las tareas cotidianas y los plazos cortos contribuyen a la meta general y muestra esa conexión de forma visible."
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
  },
  "escolar": {
   "reto": {
    "t": "Decisión incierta",
    "c": "Dato mínimo — ¿Qué conector en Up bloquea tu decisión por falta de información y qué dato mínimo ya en el tablero podría liberarte?",
    "z": "En el tablero: Marca ese dato mínimo con una ficha de recurso en Up.",
    "p": "Si ese dato apareciera ahora, ¿quién en tu tablero estaría listo para decidir?"
   },
   "conducta": "Recopila información rápido y pregunta a quien sabe, pero toma decisiones a tiempo aunque tenga info incompleta, evitando la parálisis por análisis."
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
  },
  "escolar": {
   "reto": {
    "t": "Responsabilidad marcada",
    "c": "Responsabilidad marcada — ¿Qué pieza en Up representa la decisión más incierta y qué conector muestra quién la respalda o la aísla?",
    "z": "En el tablero: Marca esa pieza con una ficha de tensión.",
    "p": "¿Cómo cambia tu lectura de responsabilidad al verla marcada?"
   },
   "conducta": "Asume la responsabilidad de las consecuencias de sus decisiones, sean aciertos o errores, sin buscar culpables fuera."
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
  },
  "escolar": {
   "reto": {
    "t": "Síntoma persistente",
    "c": "Síntoma persistente — ¿Qué síntoma recurrente ves en Up que no se resuelve del todo? Dilo como la frase que se repite en tu cabeza.",
    "z": "En el tablero: Marca con una ficha de tensión la recurrencia en Up que más te preocupa.",
    "p": "¿Qué evidencia en el tablero sugiere dónde podría estar la causa raíz?"
   },
   "conducta": "No se queda en la corrección de síntomas superficiales; investiga a fondo para identificar y resolver la causa raíz basándose en evidencias y datos."
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
  },
  "escolar": {
   "reto": {
    "t": "Suposición central",
    "c": "Suposición central — ¿Qué suposición sostiene la pieza foco en Up para ti? Dila en voz alta tal como suena.",
    "z": "En el tablero: Marca con una ficha roja la suposición que más fragiliza la estrategia en Up.",
    "p": "Si esa suposición fuera falsa, ¿qué pieza en Up cambiarías primero?"
   },
   "conducta": "Aplica pensamiento crítico para cuestionar suposiciones y reducir sesgos antes de decidir."
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
  },
  "escolar": {
   "reto": {
    "t": "Estrategia obsoleta",
    "c": "Estrategia en juego — ¿Qué idea o plan que hoy sostienes se volvió menos válido por un cambio tecnológico o por nuevas normas?",
    "z": "En el tablero: Retira o desplaza la pieza que representa esa estrategia y cambia su conector a 'en revisión' o a 'roto'.",
    "p": "¿Qué pequeño experimento pondrás en marcha esta semana para comprobar si esa estrategia aún sirve?"
   },
   "conducta": "Revisa y ajusta estrategias establecidas cuando surgen cambios en tecnología o normas, y está dispuesto a abandonar ideas que ya no funcionan."
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
  },
  "escolar": {
   "reto": {
    "t": "Cambio oportunidad",
    "c": "Cambio como oportunidad — ¿Qué acción concreta demostraría ahora que el cambio aporta ventaja y no amenaza a tu grupo?",
    "z": "En el tablero: Acerca una pieza que simbolice el cambio al avatar del grupo y coloca una ficha de recurso junto a ella.",
    "p": "¿Qué gesto repetible incorporarás para que ese acercamiento se convierta en norma?"
   },
   "conducta": "Fomenta que el cambio se interprete como oportunidad y no como amenaza."
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
  },
  "escolar": {
   "reto": {
    "t": "Cuestiona lo dado",
    "c": "¿Qué práctica que aparece en tu tablero y que aceptas por costumbre en el curso contribuiría más si la cambiaras de raíz?",
    "z": "Encuentra la pieza que representa esa práctica, retírala o muévela a otro pilar y marca su conector como 'en revisión'.",
    "p": "¿Qué pequeña prueba pedirás a tu grupo para reemplazarla este mes?"
   },
   "conducta": "Cuestiona el 'así se ha hecho siempre', desafía lo establecido y anima al grupo a proponer nuevas maneras de hacer las cosas."
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
  },
  "escolar": {
   "reto": {
    "t": "Prueba piloto",
    "c": "¿Qué solución que ya está en tu tablero podrías someter a un piloto de bajo alcance antes de aplicarla a todo el proyecto o al curso?",
    "z": "Añade una pieza que represente el piloto, únela al pilar correspondiente y coloca una ficha de tensión que limite su alcance.",
    "p": "¿Qué criterio medible usarás para decidir si ese piloto se aplica a todo el proyecto?"
   },
   "conducta": "Diseña pruebas a pequeña escala (pilotos) para testear ideas en entornos controlados antes de aplicarlas por completo."
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
  },
  "escolar": {
   "reto": {
    "t": "Fallar adelante",
    "c": "En el tablero hay un experimento fallido: ¿cómo responderás ahora para que tu grupo lo vea como aprendizaje y no como castigo?",
    "z": "Coloca una ficha de recurso sobre la pieza del experimento fallido y cambia su conector de 'roto' o 'tenso' a 'en revisión' o 'acuerdo'.",
    "p": "¿Qué cambio inmediato harás para que tu grupo perciba el fallo como avance?"
   },
   "conducta": "Apoya iniciativas del grupo cuando un experimento bien intencionado falla, enfocándose en extraer aprendizajes en vez de castigos."
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
  },
  "escolar": {
   "reto": {
    "t": "Reduce el miedo",
    "c": "Mira en tu tablero quién podría asumir un riesgo calculado (compañero, tutor, entrenador): ¿qué gesto material harás para que lo intente sin temor a represalias?",
    "z": "Añade una ficha de energía junto al avatar que asumirá el riesgo y cambia el conector con su profesor, tutor o responsable a 'acuerdo' u 'activo'.",
    "p": "¿Qué límite claro y qué respaldo darás antes de que empiece el experimento?"
   },
   "conducta": "Elimina el factor miedo, empoderando a compañeros para asumir riesgos calculados en proyectos o pruebas."
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
  },
  "escolar": {
   "reto": {
    "t": "Busca patrocinador",
    "c": "¿Quién en el colegio, entre profesores, familias o entrenadores que aparece en tu tablero podría hablar de ti en espacios de decisión si le facilitas contexto y resultados?",
    "z": "Coloca a esa persona junto a tu avatar en el tablero, únelos con un conector 'activo' o 'acuerdo' y pon entre ambos una ficha de recurso.",
    "p": "¿Qué primer aporte concreto le ofrecerás para que hable a tu favor?"
   },
   "conducta": "Identifica y cultiva activamente a personas influyentes que puedan defender su proyecto en espacios de decisión."
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
  },
  "escolar": {
   "reto": {
    "t": "Mapa de poder",
    "c": "¿Qué relación informal que ya aparece en tu tablero (compañero influyente, profe con peso, familiar) está frenando este proyecto aunque no figure en el organigrama del colegio?",
    "z": "Agrega avatares que representen influencias informales, conecta sus vínculos como 'tenso' o 'activo' según corresponda y marca con fichas de tensión los puntos de bloqueo.",
    "p": "¿Qué pequeña intervención harás para convertir un vínculo 'tenso' en 'acuerdo'?"
   },
   "conducta": "Mapea las dinámicas de poder informales en el curso o el colegio para destrabar proyectos."
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
  },
  "escolar": {
   "reto": {
    "t": "Nueva herramienta",
    "c": "«Herramienta visible» — ¿Dónde está la pieza que simboliza la nueva herramienta (app/plataforma/red) y qué distancia guarda con el avatar de tu grupo o curso?",
    "z": "Acerca la pieza de la nueva herramienta hacia el avatar del grupo/curso.",
    "p": "¿Qué tensión o recurso aparece al estrechar esa distancia?"
   },
   "conducta": "Promueve el uso de nuevas herramientas digitales sin perder el foco en el bienestar del grupo."
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
  },
  "escolar": {
   "reto": {
    "t": "Idea tech",
    "c": "«Concepto en escena» — ¿Dónde, en Up, está el concepto tecnológico en tu tablero y qué pieza del proyecto o la asignatura debería acercarse para hacerlo relevante?",
    "z": "Acércalo: mueve la pieza del proyecto/tema un paso hacia ese concepto tecnológico.",
    "p": "¿Qué necesitaría esa pieza para sostener la conexión sin tensarla?"
   },
   "conducta": "Traduce conceptos tecnológicos complejos en decisiones prácticas para el proyecto o la elección de carrera."
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
  },
  "escolar": {
   "reto": {
    "t": "Sucesor visible",
    "c": "¿Qué persona fuera del tablero (otro alumno, profe, entrenador, familiar) debería estar en Beyond para sostener la pieza base y qué conector imaginas entre ustedes?",
    "z": "Coloca en Beyond el avatar de esa persona.",
    "p": "¿Qué indicio en el tablero te diría si esa persona está dispuesta a sostenerte?"
   },
   "conducta": "Detecta talento entre sus compañeros y dedica tiempo a formar a quien pueda asumir su lugar en el proyecto."
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
  },
  "escolar": {
   "reto": {
    "t": "Guía abierta",
    "c": "«Guía sin reservas» — ¿Qué experiencia podrías mover desde tu avatar hacia un avatar emergente en Beyond para que aprenda, y cómo lo marcarías?",
    "z": "Desplaza una pieza 'experiencia' desde tu avatar hasta el avatar emergente en Beyond y pon un conector 'activo' entre ambos.",
    "p": "¿Qué pedirás para comprobar que esa experiencia quedó incorporada?"
   },
   "conducta": "Comparte experiencias y conocimientos sin reservas para acelerar el aprendizaje de quienes están empezando."
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
  },
  "escolar": {
   "reto": {
    "t": "Ceder autoridad",
    "c": "«Transferir autoridad» — ¿Qué decisión crucial de este proyecto podrías permitir hoy que otro tome sin pedirte validación previa?",
    "z": "Cambia el conector de la pieza que representa esa decisión desde tu avatar al avatar del compañero a 'activo'; mueve una ficha de energía desde tu avatar al suyo y acerca el foco del proyecto al avatar del compañero.",
    "p": "¿Qué resultado verificable exigirás para confiar plenamente en esa autoridad?"
   },
   "conducta": "Delegar autoridad real en decisiones importantes para fomentar la autonomía de sus compañeros en el proyecto."
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
  },
  "escolar": {
   "reto": {
    "t": "Menos control",
    "c": "«Distancia de mando» — ¿Qué conector muestra hoy el grado de control de tu avatar sobre las piezas operativas? Léelo en voz alta.",
    "z": "Retira el conector que une tu avatar con la pieza operativa que más te pesa en el tablero.",
    "p": "¿Qué revela esa retirada sobre quién decide el 'cómo' aquí?"
   },
   "conducta": "Evita el microcontrol; define el 'qué' y permite al grupo decidir el 'cómo', confiando en sus capacidades."
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
  },
  "escolar": {
   "reto": {
    "t": "Reto visible",
    "c": "¿Qué avatar en el campo 'Más allá' rara vez lidera proyectos grandes y qué puente le falta en el tablero para empujar su crecimiento?",
    "z": "Coloca una pieza 'puente' en el campo 'Más allá' junto al avatar que identificaste.",
    "p": "Si ese puente existiera, ¿qué se abriría o se cerraría en la red de conectores?"
   },
   "conducta": "Propone proyectos retadores que obligan a los compañeros a salir de su zona de confort para desarrollar nuevas habilidades."
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
  },
  "escolar": {
   "reto": {
    "t": "Guía lateral",
    "c": "¿Qué frase se repite entre tu avatar y el compañero que está junto a la ficha de tensión en el tablero?",
    "z": "Acerca una ficha 'foco' al avatar del compañero y marca el conector entre ambos como 'en revisión'.",
    "p": "¿Qué conversación o postura pone a prueba esa modificación para ti?"
   },
   "conducta": "Emplea el coaching para ayudar a los compañeros a encontrar sus propias soluciones en lugar de dárselas hechas."
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
  },
  "escolar": {
   "reto": {
    "t": "Bien común",
    "c": "¿Qué ausencia ética identificas junto a la pieza que financia esta opción en tu tablero?",
    "z": "Coloca junto a esa pieza una ficha que nombre el impacto comunitario que falta.",
    "p": "¿Cómo cambiaría tu decisión si esa ficha tuviera la misma prioridad que la pieza financiera?"
   },
   "conducta": "Integra consideraciones éticas y el impacto en la comunidad al tomar decisiones sobre recursos y prioridades, priorizando el bien común frente a la ganancia a corto plazo."
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
  },
  "escolar": {
   "reto": {
    "t": "Integridad en acto",
    "c": "¿Qué iniciativa social falta en el tablero como 'foco' y cómo la conectarías a tu avatar?",
    "z": "Añade una pieza 'foco' que represente esa iniciativa social, conéctala a tu avatar, marca esa iniciativa con una ficha de recurso y ajusta su conector a 'acuerdo'.",
    "p": "¿Qué gesto público harás esta semana para que esa iniciativa deje de ser solo simbólica?"
   },
   "conducta": "Impulsa iniciativas que aporten valor social (sostenibilidad, diversidad, inclusión) y modela la integridad con acciones concretas."
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
  },
  "escolar": {
   "reto": {
    "t": "Custodia primero",
    "c": "¿Qué pieza en el tablero representa a tu grupo o curso y qué moverías para dejarla más cerca del centro y más conectada a tu avatar?",
    "z": "Acerca la pieza que representa a tu grupo hacia el centro del campo 'Más allá' y reduce la distancia entre esa pieza y tu avatar. Retira una ficha de recurso de tu propia base y colócala junto a la pieza del grupo.",
    "p": "¿Qué renuncia concreta estás dispuesto a hacer hoy para cubrir esa necesidad?"
   },
   "conducta": "Actúa como custodio de los recursos y las personas, priorizando las necesidades del grupo por encima del interés propio."
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
  },
  "escolar": {
   "reto": {
    "t": "Protección real",
    "c": "¿Qué pieza en el tablero indica quién vela por la seguridad física y emocional en tu escena? Di cuál es tal como la ves.",
    "z": "Marca con una ficha la pieza que identifica esa custodia (quién cuida la seguridad emocional/ física).",
    "p": "¿Qué te dice esa señal sobre lo que ya sostienes o dejas sin sostener?"
   },
   "conducta": "Fomenta un clima de seguridad psicológica donde el bienestar emocional y físico del grupo sea una prioridad tangible."
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
  },
  "escolar": {
   "reto": {
    "t": "Voz faltante",
    "c": "¿Qué voz o perspectiva falta en esta escena (curso, grupo de trabajo, familia, redes) y cómo cambia lo que ocurre cuando la imaginas presente?",
    "z": "Coloca una ficha de recurso en la casilla Beyond que señale esa ausencia.",
    "p": "¿Quién podría traer esa voz y cómo lo invitarías a participar?"
   },
   "conducta": "Promueve activamente distintas perspectivas y crea un ambiente donde se valoren diferentes historias y maneras de pensar."
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
  },
  "escolar": {
   "reto": {
    "t": "Equidad visible",
    "c": "¿Dónde en el tablero se concentran las fichas de recurso (tiempo, apoyo, atención) y quién queda claramente más alejado dentro del curso o del grupo?",
    "z": "Coloca una ficha de tensión en el lugar que muestre la falta de equidad.",
    "p": "Si esa distancia no cambia, ¿qué efecto tendrá en la escena dentro de un mes?"
   },
   "conducta": "Trata a todos con justicia, asegurando que todos tengan oportunidades parecidas y reconocimiento en el grupo."
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
  },
  "escolar": {
   "reto": {
    "t": "Ritual colectivo",
    "c": "¿Qué falta que impide que los valores del tablero se conviertan en prácticas del día a día del curso o del proyecto?",
    "z": "Retira una pieza 'valor' de su agrupación actual y acerca una pieza 'práctica' hacia la zona de actividades/operaciones.",
    "p": "¿Qué indicio te da ese movimiento sobre cuánto pueden mantener otros esos valores sin ti?"
   },
   "conducta": "Crea rutinas, historias y hábitos que anclan los valores del curso para que perduren aunque cambien las personas."
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
  },
  "escolar": {
   "reto": {
    "t": "Saber permanente",
    "c": "¿Qué lección o saber práctico en el tablero no está documentada y corre riesgo de desaparecer si alguien se va?",
    "z": "Coloca una ficha de recurso junto a la pieza que representa ese saber.",
    "p": "¿Qué señal te indicará que ese conocimiento ya no depende de una sola persona?"
   },
   "conducta": "Documenta lo que se aprende y pone en marcha formas para que el saber clave del proyecto no dependa de una sola persona."
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
  },
  "escolar": {
   "reto": {
    "t": "Luz compartida",
    "c": "¿Qué avatar de tu grupo está más cerca de la pieza de logro y cuál queda más apartado en tu tablero?",
    "z": "Acerca la pieza foco al avatar del miembro más alejado del logro y aleja tu propio avatar un paso.",
    "p": "¿Qué percepción sobre el reconocimiento cambia para ti al ver esas posiciones alteradas?"
   },
   "conducta": "Se aparta para que el grupo brille cuando hay éxito; asume la responsabilidad cuando algo sale mal."
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
  },
  "escolar": {
   "reto": {
    "t": "Valor visible",
    "c": "¿Qué pieza en Beyond muestra que el grupo recibe reconocimiento sincero? Nómbrala y di qué le falta en tu presencia.",
    "z": "Marca con una ficha la pieza que representa gratitud o reconocimiento.",
    "p": "¿Qué cambia en tu forma de liderar si esa pieza estuviera más presente?"
   },
   "conducta": "Celebra los hitos y logros de los demás, construyendo una cultura de gratitud y aprecio en el grupo."
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
  },
  "escolar": {
   "reto": {
    "t": "Puente al sentido",
    "c": "Reto: 'Sentido visible' — ¿Qué conexiones en Beyond unen a cada avatar con la misión del proyecto o curso? ¿Qué piezas o avatares no tienen puente al propósito?",
    "z": "Marca con una ficha de tensión los avatares o piezas que no tengan puente al propósito.",
    "p": "¿Dónde vas a concentrar tu atención para dar más sentido a la escena?"
   },
   "conducta": "Ayuda a cada compañero a descubrir su propio propósito y a conectarlo con la misión del proyecto o del curso."
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
  },
  "escolar": {
   "reto": {
    "t": "Rutina con sentido",
    "c": "Reto: 'Reencuadre de rutina' — ¿Qué tarea rutinaria que aparece en el tablero cambia algo positivo en la vida de alguien fuera del colegio o curso? ¿Cómo lo haría?",
    "z": "Coloca una ficha de recurso sobre esa tarea rutinaria, añade una pieza energía que la conecte hacia Beyond y mueve hacia Out el avatar que representa al beneficiario externo.",
    "p": "¿Qué frase usarás la próxima vez para presentar esa tarea como misión ante tu grupo?"
   },
   "conducta": "Convierte tareas rutinarias en misiones significativas, mostrando el impacto positivo que generan fuera del curso."
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
  },
  "escolar": {
   "reto": {
    "t": "Voces ausentes",
    "c": "Reto: 'Voces ausentes' — ¿Qué perspectiva falta en Beyond para el desafío que muestra la escena? Nómbrala claramente.",
    "z": "Acerca al borde de Beyond la pieza o avatar que represente esa voz ausente.",
    "p": "¿Qué nueva tensión o recurso aparece al acercar esa voz?"
   },
   "conducta": "Forma deliberadamente grupos con diversidad de pensamiento y experiencias."
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
  },
  "escolar": {
   "reto": {
    "t": "Afinidad detectada",
    "c": "Reto: 'Revele afinidades' — Mirando la escena, ¿la última selección (por ejemplo, líder de proyecto o pareja de trabajo) se hizo por afinidad más que por méritos?",
    "z": "Coloca en el tablero la candidatura seleccionada, añade una ficha de tensión sobre el factor de afinidad detectado y cambia el conector entre esa persona y el rol a 'en revisión'.",
    "p": "¿Qué evidencia objetiva añadirás al proceso para reducir que la afinidad guíe decisiones futuras?"
   },
   "conducta": "Detecta y corrige sesgos inconscientes al elegir compañeros o líderes de proyecto."
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
  },
  "escolar": {
   "reto": {
    "t": "Fuera del tablero",
    "c": "Reto: 'Fuera del tablero' — Todo lo que pusiste aquí ocurre dentro del colegio o curso: ¿a quién de afuera le llega esto, aunque no esté en la escena?",
    "z": "Añade esa pieza en el borde del tablero y conéctala con lo que la afecta.",
    "p": "¿Qué cambia en tu decisión ahora que esa pieza está a la vista?"
   },
   "conducta": "Conecta las metas del curso con necesidades reales de la comunidad o del entorno."
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
  },
  "escolar": {
   "reto": {
    "t": "Teje alianzas",
    "c": "Reto: 'Teja alianzas' — ¿Qué grupo externo (otra clase, ONG, club local, asociación) podrías sumar hoy y qué propuesta concreta de colaboración social aportarías?",
    "z": "Coloca el avatar de esa entidad en Out, conecta tu avatar a ella con un conector de 'acuerdo' y añade una ficha de recurso sobre ese vínculo.",
    "p": "¿Qué oferta concreta llevarás a la primera conversación para convertir esa conexión en valor social?"
   },
   "conducta": "Teje relaciones externas que aporten valor social al proyecto o al colegio."
  }
 }
];
