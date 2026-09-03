/* Escenarios de aplicación · El Diamante Vivo
   Cada contexto adapta lenguaje, situaciones, instrucciones y la mediación del Advisor. */
const CONTEXTOS = [
{
  id:"comercial", nombre:"Área comercial", color:"#ed8124", trato:"usted",
  lema:"Vender es sostener relaciones bajo presión de número",
  desc:"Equipos de ventas, key accounts y jefaturas comerciales. La tensión típica: la cuota contra la relación, el corto plazo contra la confianza que tarda años en construirse.",
  perfil:"Ejecutivos y jefes comerciales",
  duracion:"45–60 min",
  mundo:"cliente, cuota, cierre, cartera, propuesta, comité de compras, posventa",
  advisor:"Trate de usted. Use el vocabulario comercial —cliente, cuota, cierre, cartera, relación de largo plazo— sin caer en jerga de ventas motivacional. La tensión de fondo suele ser resultado inmediato contra confianza sostenida: pregunte por lo visible en el tablero, nunca por la técnica de venta.",
  situaciones:[
    {t:"El cliente que se enfría", d:"Su cuenta más grande dejó de responder con la agilidad de antes y usted no sabe si es el precio, el servicio o algo que pasó y nadie le contó."},
    {t:"La cuota y el criterio", d:"Le faltan días para cerrar el mes y la única venta a la vista exige prometer algo que su equipo de operaciones no podrá sostener."},
    {t:"El competidor por dentro", d:"Un colega de su misma empresa está tocando su cuenta por otro canal y ninguno de los dos ha querido hablarlo."},
    {t:"El cliente que exige de más", d:"Un cliente clave pide condiciones que no son rentables, y si le dice que no puede perderlo; si le dice que sí, sienta un precedente."},
    {t:"El equipo desalineado", d:"Su equipo cumple el número pero cada uno vende a su manera, y usted ve que la promesa que llega al cliente cambia según quién la haga."},
    {t:"La conversación de precio", d:"Tiene que subir el precio a un cliente antiguo con quien tiene una relación personal construida en años."}
  ]
},
{
  id:"gerencial", nombre:"Área gerencial", color:"#3988ca", trato:"usted",
  lema:"Decidir con información incompleta y consecuencias sobre otros",
  desc:"Comités directivos, gerencias y mandos medios. La tensión típica: sostener criterio cuando la presión viene de arriba, de abajo y del lado al mismo tiempo.",
  perfil:"Directivos y mandos medios",
  duracion:"60–90 min",
  mundo:"comité, dirección, área, presupuesto, transformación, sucesión, stakeholders",
  advisor:"Trate de usted. Registro ejecutivo y sobrio. El vocabulario es de dirección —comité, área, presupuesto, mandato, stakeholders— pero la conversación no es sobre estrategia sino sobre lo que la persona sostiene o no cuando la presión sube. Pregunte por distancias y ausencias en el tablero, nunca por el modelo de negocio.",
  situaciones:[
    {t:"La decisión que no toma", d:"Hay una decisión que lleva semanas sin tomar y cada día que pasa el costo de no decidir crece más que el de equivocarse."},
    {t:"El equipo que no confía", d:"Después de un cambio que anunció usted, su equipo cumple pero ya no propone. Nadie lo dice, pero está ahí."},
    {t:"Entre dos fuegos", d:"Dirección le pide una cosa y su equipo necesita la contraria. Usted lleva semanas traduciendo en ambas direcciones y desgastándose en el medio."},
    {t:"El talento que se va", d:"La persona más valiosa de su área tiene una oferta. Usted sabe por qué se va y una parte de la razón le corresponde."},
    {t:"El par que no colabora", d:"Un entregable conjunto con otra área falla una y otra vez, y las dos partes tienen razones para culpar a la otra."},
    {t:"La transición que viene", d:"Le ofrecieron un rol mayor o le anunciaron una reestructuración, y no sabe qué de lo que construyó sobrevivirá al cambio."}
  ]
},
{
  id:"escolar", nombre:"Último grado de secundaria", color:"#c13a68", trato:"tu",
  lema:"Decidir quién eres cuando todo el mundo opina",
  desc:"Estudiantes de once o doce grado. La tensión típica: la presión del grupo, la elección de futuro y las primeras conversaciones difíciles de verdad.",
  perfil:"Estudiantes de 16 a 18 años",
  duracion:"45–60 min",
  mundo:"curso, grupo de trabajo, profesor, amigos, familia, proyecto, carrera, redes",
  advisor:"Tutea. Español natural de un adolescente, ni infantil ni corporativo. Nada de moralina ni consejos de adulto: preguntas cortas sobre lo que está en el tablero. El mundo es colegio, curso, grupo, profesores, amigos, familia, redes, proyecto de grado y elección de carrera. Si aparece algo delicado, no lo interpretes: pregunta por lo visible y deja que lo nombre quien lo puso ahí.",
  situaciones:[
    {t:"Elegir carrera", d:"Tienes que decidir qué vas a estudiar y lo que quieres no coincide del todo con lo que esperan en tu casa."},
    {t:"El grupo dividido", d:"Tu grupo de trabajo se partió en dos y el proyecto está parado. Los dos lados esperan que tomes partido."},
    {t:"El amigo que cambió", d:"Alguien cercano se alejó este año y ninguno de los dos ha dicho nada. Ves la distancia crecer y no sabes cómo se arregla."},
    {t:"Cargar con todo", d:"En los trabajos en grupo terminas haciendo la parte de los demás porque te da miedo que salga mal si no la haces tú."},
    {t:"Lo que se dice en redes", d:"Pasó algo en redes que te involucra y no sabes si responder, ignorarlo o hablarlo cara a cara."},
    {t:"Después de graduarme", d:"Se acaba el colegio y con él un grupo, una rutina y un lugar donde sabías quién eras. No sabes qué se sostiene después."}
  ]
}
];
const CTX = id => CONTEXTOS.find(c => c.id === id) || CONTEXTOS[0];
