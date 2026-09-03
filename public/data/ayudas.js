/* Instrucciones de fase, escritas para cada escenario de aplicación.
   Se muestran en modal al entrar en la fase y se reabren con el botón de ayuda. */
const AYUDAS = {

/* ═══════════ ÁREA COMERCIAL ═══════════ */
comercial: {
  conecta:{
    titulo:"Ponga la cuenta sobre la mesa",
    idea:"No se responde con palabras: se representa. Coloque lo que hoy compone esta situación comercial —usted, el cliente, su equipo, lo que promete y lo que estorba— y deje que la escena hable antes que usted.",
    pasos:["Arrastre <b>su propio avatar</b> y ubíquelo donde esté de verdad: cerca del cliente, cerca de su equipo o en medio de ambos.",
           "Añada <b>a quienes deciden</b>: el contacto que le compra, quien firma, quien usa el servicio, su jefe. La distancia que les dé significa algo.",
           "Ponga la <b>meta</b> con un foco, lo que la bloquea con una barrera y lo que ya está construido con una base.",
           "Una las piezas con <b>conectores</b>: una relación de cinco años no se dibuja igual que una que se enfrió el mes pasado.",
           "Marque con <b>fichas</b> dónde aprieta el número y dónde tiene apoyo real."],
    nota:"Necesita al menos tres piezas para que la escena pueda leerse. Nombre cada una como la nombraría en su comité de ventas, no como en un manual.",
    advisor:"No interviene mientras construye. Solo mira."},
  comprende:{
    titulo:"Cuente lo que ve, no el pipeline",
    idea:"Ahora narra su escena. El Advisor la lee y devuelve preguntas sobre lo <b>visible</b>: quién quedó lejos, qué separa a quién, qué falta. No le va a preguntar por la técnica de venta.",
    pasos:["Describa la escena como si se la mostrara a alguien que no conoce la cuenta.",
           "El Advisor le hará tres preguntas. <b>Puede mover piezas mientras responde</b>: si aparece alguien que no había puesto, colóquelo.",
           "Responda con lo que ve en el tablero, no con lo que diría en un reporte.",
           "Cuando aparezca algo que no había dicho al principio, marcará <b>«material suficiente»</b>."],
    nota:"Lo que suele aparecer aquí no es el precio: es una conversación que no se ha tenido.",
    advisor:"Pregunta por distancias y ausencias. Nunca opina sobre su estrategia comercial."},
  crea:{
    titulo:"La carta mueve la cuenta",
    idea:"Robe una carta. En el <b>recto</b> trae un reto que altera su escena; el <b>reverso</b> guarda la conducta que entrena y se revela al cierre.",
    pasos:["Elija de qué pilar quiere ser perturbado, o robe del mazo completo.",
           "Haga lo que pide el bloque <b>«En el tablero»</b>: mover, retirar, acercar, cambiar un conector.",
           "Explique cada movimiento y por qué lo hizo.",
           "El sistema <b>comprueba que el tablero cambió</b>. Si nada se movió, la jugada se devuelve."],
    nota:"Aquí no se ensaya el discurso de venta: se decide qué se sostiene cuando el número aprieta.",
    advisor:"Compara la escena antes y después y pregunta por ese cambio."},
  consolida:{
    titulo:"Una conducta, con nombre y fecha",
    idea:"La sesión cierra cuando algo de lo que pasó aquí se convierte en una acción que <b>el cliente o su equipo podrán ver</b> esta semana.",
    pasos:["Voltee la carta que jugó: al otro lado está la conducta que ese reto entrenaba.",
           "Comprométase con esa, o busque otra en el mazo de cualquier pilar.",
           "Diga <b>ante quién y cuándo</b>: una llamada, una visita, un comité. Sin destinatario ni fecha no es un compromiso.",
           "Escriba qué <b>evidencia</b> traerá: cómo sabremos que ocurrió."],
    nota:"Prefiera una conducta que pueda sostener el próximo lunes a cinco que suenen bien en el offsite.",
    advisor:"Cierra recorriendo lo que pasó y señalando lo que quedó sin nombrar."}
},

/* ═══════════ ÁREA GERENCIAL ═══════════ */
gerencial: {
  conecta:{
    titulo:"Construya antes de explicar",
    idea:"No se responde con palabras: se representa. Ponga sobre el tablero lo que hoy compone su situación —los actores, los mandatos, lo que decide y lo que lo frena— y deje que la escena hable antes que usted.",
    pasos:["Arrastre <b>su propio avatar</b> y ubíquelo donde sienta que está: en el centro o desplazado hacia algún pilar.",
           "Añada a <b>quienes intervienen</b>: su equipo, su par de otra área, dirección, el cliente interno. La distancia que les dé significa algo.",
           "Ponga <b>metas, barreras y estructuras</b>: el foco es una prioridad, la barrera lo que bloquea, el puente una transición, la base lo ya construido.",
           "Una las piezas con <b>conectores</b>: no todos los vínculos son iguales. Hay activos, tensos, en revisión y rotos.",
           "Marque con <b>fichas</b> dónde duele y dónde tiene apoyo."],
    nota:"Necesita al menos tres piezas para que la escena pueda leerse. Nombre cada una con las palabras que usaría fuera de esta mesa, no las del organigrama.",
    advisor:"No interviene mientras construye. Solo mira."},
  comprende:{
    titulo:"Cuente lo que ve, no lo que debería ver",
    idea:"Ahora narra su escena. El Advisor la lee y devuelve preguntas sobre lo <b>visible</b>: distancias, ausencias, qué separa a qué. Usted responde, él insiste.",
    pasos:["Describa la escena como si la viera por primera vez: quién está, qué separa a quién, dónde puso la tensión.",
           "El Advisor le hará tres preguntas. <b>Puede mover piezas mientras responde</b>: si algo aparece, colóquelo.",
           "Responda con lo que ve, no con lo que cree que debería decir en un comité.",
           "Cuando considere que apareció algo nuevo, marcará <b>«material suficiente»</b> y podrá avanzar."],
    nota:"Puede seguir conversando aunque ya pueda avanzar. La conversación es donde ocurre el trabajo.",
    advisor:"Pregunta por lo visible. Nunca dice qué significa una pieza ni le da consejos de gestión."},
  crea:{
    titulo:"La carta perturba: el tablero se mueve",
    idea:"Robe una carta del mazo. En el <b>recto</b> trae un reto que altera su escena; el <b>reverso</b> guarda la conducta que ese reto entrena y se revelará al cierre.",
    pasos:["Elija de qué pilar quiere ser perturbado, o robe del mazo completo.",
           "Lea la consigna y haga lo que pide el bloque <b>«En el tablero»</b>: mover, retirar, acercar, cambiar un conector.",
           "Explique cada movimiento que hizo y por qué.",
           "El sistema <b>comprueba que el tablero cambió</b>. Si nada se movió, la jugada se devuelve."],
    nota:"No hay respuestas correctas: hay decisiones visibles. Lo que no se mueve, no ocurrió.",
    advisor:"Compara la escena antes y después, nombra qué cambió y pregunta por ese cambio."},
  consolida:{
    titulo:"Una sola conducta, con fecha",
    idea:"La sesión termina cuando algo de lo que ocurrió aquí se convierte en una acción que <b>otra persona podrá ver</b> esta semana.",
    pasos:["Voltee la carta que jugó: al otro lado está la conducta que ese reto entrenaba.",
           "Comprométase con esa conducta, o busque otra en el mazo de cualquier pilar.",
           "Diga <b>ante quién y cuándo</b>: sin destinatario ni fecha, no es un compromiso.",
           "Escriba qué <b>evidencia</b> traerá: cómo sabremos que ocurrió."],
    nota:"Prefiera una conducta que pueda sostener a cinco que suenen bien.",
    advisor:"Cierra la sesión recorriendo lo que pasó en la mesa y señalando lo que quedó sin nombrar."}
},

/* ═══════════ ÚLTIMO GRADO DE SECUNDARIA ═══════════ */
escolar: {
  conecta:{
    titulo:"Ármalo antes de explicarlo",
    idea:"Esto no se responde hablando: se arma. Pon en el tablero lo que hoy compone tu situación —tú, la gente que está en esto, lo que quieres y lo que se atraviesa— y deja que se vea antes de contarlo.",
    pasos:["Arrastra <b>tu propio avatar</b> y ponlo donde de verdad estás: en el centro o corrido hacia algún lado.",
           "Agrega a <b>quienes están metidos</b>: tu grupo, tus papás, un profe, tus amigos, alguien que ya no está tan cerca. La distancia a la que los pongas dice algo.",
           "Pon <b>lo que quieres</b> con un foco, <b>lo que te frena</b> con una barrera y <b>lo que ya tienes</b> con una base.",
           "Une las piezas con <b>conectores</b>: no todos los vínculos son iguales. Hay activos, tensos, en revisión y rotos.",
           "Marca con <b>fichas</b> dónde te aprieta y dónde tienes apoyo."],
    nota:"Necesitas al menos tres piezas para que se pueda leer. Nómbralas con tus palabras, como se lo dirías a alguien de confianza.",
    advisor:"No dice nada mientras armas. Solo mira."},
  comprende:{
    titulo:"Cuenta lo que ves",
    idea:"Ahora cuentas lo que armaste. El Advisor lo lee y te devuelve preguntas sobre lo que <b>se ve</b>: qué quedó lejos, qué separa a quién, qué falta. Tú respondes, él insiste.",
    pasos:["Describe la escena como si se la mostraras a alguien que no sabe nada de ti.",
           "Te va a hacer tres preguntas. <b>Puedes mover piezas mientras respondes</b>: si aparece algo, ponlo.",
           "Responde con lo que ves, no con lo que crees que suena bien.",
           "Cuando aparezca algo que no habías dicho al principio, va a marcar <b>«material suficiente»</b>."],
    nota:"Puedes seguir conversando aunque ya puedas avanzar. La conversación es donde pasa lo importante.",
    advisor:"Pregunta por lo que se ve. Nunca te dice qué significa una pieza ni te da consejos."},
  crea:{
    titulo:"La carta mueve la escena",
    idea:"Roba una carta. En el <b>frente</b> trae un reto que mueve lo que armaste; en el <b>reverso</b> está lo que ese reto entrena, y se revela al final.",
    pasos:["Elige de qué pilar quieres que te toque, o roba del mazo completo.",
           "Lee la consigna y haz lo que pide <b>«En el tablero»</b>: mover, quitar, acercar, cambiar un conector.",
           "Explica qué moviste y por qué.",
           "El sistema <b>comprueba que el tablero cambió de verdad</b>. Si no se movió nada, te devuelve la jugada."],
    nota:"No hay respuestas correctas: hay decisiones que se ven. Lo que no se mueve, no pasó.",
    advisor:"Compara cómo estaba antes y cómo quedó, dice qué cambió y pregunta por eso."},
  consolida:{
    titulo:"Una sola cosa, con fecha",
    idea:"Esto cierra cuando algo de lo que pasó aquí se convierte en algo que <b>otra persona va a poder ver</b> esta semana.",
    pasos:["Voltea la carta que jugaste: al otro lado está lo que ese reto entrenaba.",
           "Quédate con esa, o busca otra en el mazo de cualquier pilar.",
           "Di <b>ante quién y cuándo</b>: sin persona ni fecha, no es un compromiso.",
           "Escribe qué <b>evidencia</b> vas a traer: cómo sabremos que pasó."],
    nota:"Mejor una cosa que puedas sostener que cinco que suenen bien.",
    advisor:"Cierra repasando lo que pasó y señalando lo que no llegaste a nombrar."}
}
};
