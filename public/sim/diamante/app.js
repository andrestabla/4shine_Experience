/* ===== El Diamante Vivo · lógica de sesión ===== */
const API = (location.hostname === "127.0.0.1" || location.hostname === "localhost")
  ? (location.port === "8765" ? "/api/advisor" : "http://127.0.0.1:8765/api/advisor")
  : "/api/advisor";

const PAL_AVATARES = [
  {tipo:"avatar", nombre:"Yo",       color:"#d9b54a", label:"Yo"},
  {tipo:"avatar", nombre:"Persona",  color:"#e8ddc8", label:""},
  {tipo:"avatar", nombre:"Persona",  color:"#c13a68", label:""},
  {tipo:"avatar", nombre:"Persona",  color:"#8b59b2", label:""},
  {tipo:"avatar", nombre:"Persona",  color:"#ed8124", label:""},
  {tipo:"avatar", nombre:"Persona",  color:"#3988ca", label:""}
];
const PAL_PIEZAS = [
  {tipo:"cubo",     nombre:"Base",    color:"#3988ca", label:"", desc:"hecho concreto"},
  {tipo:"piramide", nombre:"Foco",    color:"#ed8124", label:"", desc:"prioridad o meta"},
  {tipo:"arco",     nombre:"Puente",  color:"#c13a68", label:"", desc:"apertura o transición"},
  {tipo:"cilindro", nombre:"Energía", color:"#8b59b2", label:"", desc:"continuidad, presencia"},
  {tipo:"muro",     nombre:"Barrera", color:"#5b6880", label:"", desc:"lo que bloquea"}
];
const PAL_TENSION = [
  {tipo:"ficha",sub:"tension",glifo:"⚡",nombre:"Choque",  color:"#c8503f"},
  {tipo:"ficha",sub:"tension",glifo:"!", nombre:"Alerta",  color:"#c8503f"},
  {tipo:"ficha",sub:"tension",glifo:"✕", nombre:"Ruptura", color:"#c8503f"},
  {tipo:"ficha",sub:"tension",glifo:"↯", nombre:"Presión", color:"#d9663f"},
  {tipo:"ficha",sub:"tension",glifo:"⏱", nombre:"Urgencia",color:"#d9663f"}
];
const PAL_RECURSO = [
  {tipo:"ficha",sub:"recurso",glifo:"★",nombre:"Fortaleza",color:"#3f9e7c"},
  {tipo:"ficha",sub:"recurso",glifo:"✓",nombre:"Apoyo",    color:"#3f9e7c"},
  {tipo:"ficha",sub:"recurso",glifo:"◈",nombre:"Criterio", color:"#3d8fa8"},
  {tipo:"ficha",sub:"recurso",glifo:"↑",nombre:"Avance",   color:"#3d8fa8"},
  {tipo:"ficha",sub:"recurso",glifo:"+",nombre:"Cuidado",  color:"#6b9e4a"}
];

const RETOS = [
  {id:"R01",campo:"conecta",  t:"La voz ausente",  c:"¿Quién debería estar en esta escena y no está? Nómbrelo.", z:"Añada su avatar donde le corresponde y conéctelo con el vínculo que refleje la relación real.", p:"¿Qué cambia en la escena ahora que puede verlo?", o:"Up · Gestión de relaciones"},
  {id:"R02",campo:"conecta",  t:"El vínculo tenso",c:"Elija el vínculo que más energía le consume hoy. ¿Qué lo tensó?", z:"Retire ese conector y colóquelo como quiere que sea dentro de noventa días.", p:"¿Cuál es la primera conversación para llegar ahí, y cuándo?", o:"Out · Construcción de confianza"},
  {id:"R03",campo:"conecta",  t:"Pide ayuda",      c:"Esta situación no puede sostenerse en soledad. ¿A quién no le ha pedido apoyo todavía?", z:"Coloque una ficha de recurso sobre ese vínculo.", p:"¿Qué le ha impedido pedirlo hasta hoy?", o:"Within · Apertura al feedback"},
  {id:"R04",campo:"comprende",t:"El detonante",    c:"¿Qué momento de esta escena lo saca de su centro? Descríbalo sin suavizarlo.", z:"Marque con una ficha de tensión el punto exacto donde reacciona en vez de responder.", p:"¿Qué señal temprana lo anuncia, y qué hará al detectarla?", o:"Within · Autoconciencia emocional"},
  {id:"R05",campo:"comprende",t:"La creencia",     c:"¿Qué frase se repite sobre esta situación? Dígala en voz alta, exactamente como suena en su cabeza.", z:"Si esa frase fuera un muro, constrúyalo. Decida dónde está y qué separa.", p:"Reescriba la frase como protagonista: ¿qué puede aprender o aportar aquí?", o:"Within · Gestión de creencias"},
  {id:"R06",campo:"comprende",t:"Los zapatos del otro",c:"Elija a un actor de su escena. Durante un minuto, narre la situación desde su lugar, en primera persona.", z:"Mueva su avatar a la posición de esa persona mientras habla.", p:"¿Qué ve esa persona que usted no estaba viendo?", o:"Out · Escucha activa y empática"},
  {id:"R07",campo:"crea",     t:"Cambio inesperado",c:"El plazo acaba de recortarse a la mitad. La decisión ya no puede esperar.", z:"Reconfigure la escena para responder sin sacrificar su criterio. Explique cada movimiento.", p:"¿Qué soltó y qué protegió? ¿Por qué eso?", o:"Up · Decisión bajo incertidumbre"},
  {id:"R08",campo:"crea",     t:"La regla heredada",c:"¿Qué está haciendo en esta situación solo porque «siempre se ha hecho así»?", z:"Encuentre la pieza que lo representa. Retírela o cámbiela de lugar.", p:"¿Qué probaría como piloto esta semana en su lugar?", o:"Up · Estimulación intelectual"},
  {id:"R09",campo:"crea",     t:"La causa raíz",   c:"Esa tensión que marcó: ¿es la causa o solo el síntoma?", z:"Siga los vínculos hacia atrás hasta la pieza donde empezó. Muévala al centro.", p:"¿Qué evidencia confirma que ahí está el origen?", o:"Up · Resolución de causa raíz"},
  {id:"R10",campo:"consolida",t:"La promesa impecable",c:"Convierta su próximo paso en un pedido: a quién, qué exactamente, con qué condición de satisfacción y para cuándo.", z:"Acerque al destinatario de ese pedido a su avatar.", p:"Si no pudiera cumplir, ¿cuándo y cómo renegociaría?", o:"Out · Ingeniería del lenguaje"},
  {id:"R11",campo:"consolida",t:"La huella",       c:"Imagine esta situación resuelta. ¿Qué debería seguir en pie dentro de un año?", z:"Coloque una pieza que represente lo que quiere que permanezca.", p:"¿Quién más tiene que sostenerlo para que no dependa solo de usted?", o:"Beyond · Institucionalización de cultura"},
  {id:"R12",campo:"consolida",t:"El precio",       c:"Toda decisión cuesta algo. ¿Qué pierde si actúa como acaba de configurar la escena?", z:"Retire del tablero la pieza que representa eso que deja ir.", p:"¿Está dispuesto a pagarlo? ¿Qué lo haría reconsiderar?", o:"Within · Responsabilidad radical"}
];
const CONDUCTAS = [
  {t:"Escucha activa",   d:"Presta atención plena cuando el otro habla; parafrasea para confirmar entendimiento antes de responder.", o:"Out · Escucha activa y empática"},
  {t:"Pausa estratégica",d:"Aplica el método STOP —Parar, Pensar, Observar, Proceder— antes de reaccionar ante una situación de presión.", o:"Within · Regulación emocional"},
  {t:"Pedido impecable", d:"Hace pedidos con condiciones de satisfacción y tiempos claros, evitando ambigüedad y retrabajos.", o:"Out · Ingeniería del lenguaje"},
  {t:"Cumple acuerdos",  d:"Gestiona sus promesas: cumple lo pactado y, si no puede, renegocia a tiempo para sostener la confianza.", o:"Within · Integridad y coherencia"},
  {t:"Habla con claridad",d:"Expresa objetivos y expectativas sin ambigüedad sobre qué se espera, de quién y por qué importa.", o:"Out · Claridad e inspiración"},
  {t:"Pide feedback",    d:"Solicita retroalimentación para identificar puntos ciegos, y la recibe sin ponerse a la defensiva.", o:"Within · Apertura al feedback"},
  {t:"Da crédito",       d:"Reconoce públicamente los logros y atribuye de forma explícita las contribuciones de cada persona.", o:"Out · Reconocimiento y feedback"},
  {t:"Delega de verdad", d:"Define el «qué» y permite al equipo decidir el «cómo», delegando autoridad real y no solo tareas.", o:"Beyond · Empoderamiento"}
];
const EJEMPLOS = [
  "Me ofrecieron liderar una nueva región y llevo tres semanas sin responder.",
  "Tengo que dar feedback difícil a alguien de mi equipo con quien tengo buena relación.",
  "Mi área depende de otra que no cumple, y ya afectó dos entregas.",
  "Quiero cambiar de rol pero siento que dejaría al equipo a la deriva."
];

const FASES = [
  {id:"conecta",  tag:"FASE 01 · CONECTA",  nombre:"Construyo",   color:"#c13a68", pct:25,
   instr:"Represente la situación tal como se vive hoy: ubíquese a usted, a los actores, las metas, las barreras y los vínculos. Las manos van adelante del discurso."},
  {id:"comprende",tag:"FASE 02 · COMPRENDE",nombre:"Narro",       color:"#8b59b2", pct:50,
   instr:"Cuente lo que construyó. El Advisor solo hará preguntas: nadie interpretará su escena por usted."},
  {id:"crea",     tag:"FASE 03 · CREA",     nombre:"Reconfiguro", color:"#ed8124", pct:75,
   instr:"Una Tarjeta de Reto perturba la escena. No basta con comentarla: hay que mover el tablero y explicar cada movimiento."},
  {id:"consolida",tag:"FASE 04 · CONSOLIDA",nombre:"Actúo",       color:"#3988ca", pct:100,
   instr:"Elija una sola conducta observable y conviértala en un compromiso verificable en el Canvas de Acción."}
];

const DV = (() => {
  const $ = id => document.getElementById(id);
  const esc = s => (s||"").replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const st = {quien:"", situacion:"", fase:0, reto:null, huellaAntes:"", conducta:null,
              narracion:"", explicacion:"", log:[], preguntas:[], offline:false};

  /* ---------- setup ---------- */
  function pintarEjemplos(){
    $("ejemplos").innerHTML = EJEMPLOS.map((e,i)=>`<button onclick="DV.usarEjemplo(${i})">${esc(e)}</button>`).join("");
  }
  function usarEjemplo(i){ $("in-situacion").value = EJEMPLOS[i]; revisar(); }
  function revisar(){
    st.quien = $("in-quien").value.trim(); st.situacion = $("in-situacion").value.trim();
    const ok = st.quien.length>=2 && st.situacion.length>=15;
    $("btn-start").disabled = !ok;
    $("setup-hint").textContent = ok ? "Todo listo. El tablero espera." : "Complete quién construye y qué situación va a trabajar.";
  }
  function iniciar(){
    $("hud-quien").innerHTML = `<b>${esc(st.quien)}</b>`;
    $("rec-situacion").textContent = st.situacion;
    pantalla("scr-mesa");
    if(!BOARD._listo){ BOARD.init("tablero", onCambioTablero, onSeleccion); BOARD._listo = true; pintarBandeja(); }
    montarFase();
  }
  const pantalla = id => ["scr-setup","scr-mesa","scr-cierre"].forEach(s=>$(s).classList.toggle("hidden", s!==id));

  /* ---------- bandeja + arrastre ---------- */
  let ghost = null, arrastrando = null;
  function palHTML(def, extra=""){
    const ic = def.tipo==="ficha"
      ? `<i style="background:${def.color};color:#fff;border-radius:${def.sub==="tension"?"3px":"50%"}">${def.glifo}</i>`
      : `<i style="background:${def.color}"></i>`;
    return `${ic}<span>${esc(def.nombre)}${extra}</span>`;
  }
  function pintarBandeja(){
    const mk = (cont, arr) => $(cont).innerHTML = arr.map((d,i)=>
      `<button class="pal" data-grupo="${cont}" data-i="${i}">${palHTML(d, d.desc?`<br><small style="color:#7f8ea6">${d.desc}</small>`:"")}</button>`).join("");
    mk("pal-avatares",PAL_AVATARES); mk("pal-piezas",PAL_PIEZAS);
    mk("pal-tension",PAL_TENSION); mk("pal-recurso",PAL_RECURSO);
    $("pal-conectores").innerHTML = Object.entries(BOARD.TIPOS_VINC).map(([k,v])=>
      `<button class="pal pal-conn" data-conn="${k}"><i style="background:${v.color}"></i><span>${esc(v.label)}</span></button>`).join("");

    document.querySelectorAll(".pal[data-grupo]").forEach(b => {
      b.addEventListener("pointerdown", e => {
        const grupos = {"pal-avatares":PAL_AVATARES,"pal-piezas":PAL_PIEZAS,"pal-tension":PAL_TENSION,"pal-recurso":PAL_RECURSO};
        arrastrando = {...grupos[b.dataset.grupo][+b.dataset.i]};
        ghost = document.createElement("div");
        ghost.style.cssText = "position:fixed;z-index:99;pointer-events:none;padding:7px 11px;border-radius:8px;background:#101f34;border:1px solid #d9b54a;color:#e8eef7;font-size:.75rem;display:flex;gap:7px;align-items:center;box-shadow:0 8px 20px #000a";
        ghost.innerHTML = palHTML(arrastrando);
        ghost.querySelector("i").style.cssText += ";width:18px;height:18px;display:grid;place-items:center";
        document.body.appendChild(ghost); moverGhost(e);
        document.addEventListener("pointermove", moverGhost);
        document.addEventListener("pointerup", soltar, {once:true});
        e.preventDefault();
      });
    });
    document.querySelectorAll(".pal[data-conn]").forEach(b => {
      b.addEventListener("click", () => {
        const activo = b.classList.contains("on");
        document.querySelectorAll(".pal[data-conn]").forEach(x=>x.classList.remove("on"));
        if(activo){ BOARD.cancelarConexion(); nota("Modo conector desactivado."); }
        else { b.classList.add("on"); BOARD.iniciarConexion(b.dataset.conn);
               nota("Toque las dos piezas que quiere unir."); }
      });
    });
  }
  function moverGhost(e){ if(ghost){ ghost.style.left=(e.clientX+12)+"px"; ghost.style.top=(e.clientY+12)+"px"; } }
  function soltar(e){
    document.removeEventListener("pointermove", moverGhost);
    if(ghost){ ghost.remove(); ghost = null; }
    if(!arrastrando) return;
    const cont = $("tablero"), r = cont.getBoundingClientRect();
    if(e.clientX>=r.left && e.clientX<=r.right && e.clientY>=r.top && e.clientY<=r.bottom){
      const escala = r.width / BOARD.W;
      const x = (e.clientX-r.left)/escala, y = (e.clientY-r.top)/escala;
      const def = {...arrastrando};
      if(def.tipo==="ficha") def.label = "";
      const id = BOARD.agregarPieza(def, x, y);
      if(def.tipo!=="ficha" && !def.label){
        const n = prompt(`¿Qué representa este ${def.nombre.toLowerCase()}?`, "");
        if(n) BOARD.renombrar(id, n);
      }
    }
    arrastrando = null;
  }
  function nota(t){ $("sel-info").innerHTML = t; }
  function onSeleccion(p, meta){
    if(meta?.conectorCreado){
      document.querySelectorAll(".pal[data-conn]").forEach(x=>x.classList.remove("on"));
      nota("Vínculo creado."); pintarVinculos(); return;
    }
    $("sel-acciones").classList.toggle("hidden", !p);
    nota(p ? `Seleccionado: <b>${esc(p.label||p.nombre)}</b>` : "Toque una pieza para nombrarla o retirarla.");
  }
  function renombrarSel(){ const id = BOARD.sel; if(!id) return;
    const p = BOARD.estado().piezas.find(x=>x.id===id);
    const n = prompt("¿Qué representa esta pieza?", p?.label||""); if(n!==null) BOARD.renombrar(id,n); }
  function eliminarSel(){ if(BOARD.sel) BOARD.eliminar(BOARD.sel); }
  function pintarVinculos(){
    const vs = BOARD.vinculos;
    $("vinc-lista").innerHTML = !vs.length ? "" : vs.map((v,i)=>{
      const t = BOARD.TIPOS_VINC[v.tipo], e = BOARD.estado().piezas;
      const A = e.find(p=>p.id===v.de), B = e.find(p=>p.id===v.a);
      return `<span class="vinc-chip"><i style="background:${t.color}"></i>${esc(A?.label||A?.nombre||"?")} — ${esc(B?.label||B?.nombre||"?")}
        <button onclick="DV.quitarVinc(${i})" title="Quitar">✕</button></span>`;
    }).join("");
  }
  function quitarVinc(i){ BOARD.quitarVinculo(i); pintarVinculos(); }
  function onCambioTablero(){ pintarVinculos(); actualizarBotonFase(); }

  /* ---------- fases ---------- */
  function montarFase(){
    const f = FASES[st.fase];
    $("fase-bar").style.width = f.pct + "%";
    $("hud-fase").innerHTML = `Fase <b>${st.fase+1}</b> de 4 · ${f.nombre}`;
    $("f-tag").textContent = f.tag; $("f-tag").style.color = f.color;
    $("f-nombre").textContent = f.nombre;
    $("f-instr").textContent = f.instr;
    $("steps").innerHTML = FASES.map((x,i)=>
      `<span class="step ${i===st.fase?"on":(i<st.fase?"done":"")}">${i<st.fase?"✓ ":""}${x.tag.split(" · ")[1]}</span>`).join("")
      + `<span class="step">Cierre</span>`;
    $("av-extra").innerHTML = "";
    const paneles = {conecta:panelConecta, comprende:panelComprende, crea:panelCrea, consolida:panelConsolida};
    paneles[f.id]();
    $("av-msg").textContent = {
      conecta:"Construya primero. No me cuente todavía qué significa: colóquelo sobre el tablero y déjelo verse.",
      comprende:"Ahora cuénteme lo que construyó. Voy a preguntar por distancias, ausencias y tensiones.",
      crea:"Robe la tarjeta. Lo que pida hay que hacerlo sobre el tablero: si nada se mueve, no ocurrió.",
      consolida:"Cierre eligiendo una sola conducta. Prefiero una que pueda sostener a cinco que suenen bien."
    }[f.id];
    actualizarBotonFase();
  }

  function panelConecta(){
    $("fase-panel").innerHTML = `<h3>Construya su escena</h3>
      <p class="hint" style="margin:0 0 14px">Arrastre piezas desde la bandeja. Ubique primero su propio avatar, después los actores, las metas y lo que estorba. Una a las piezas con conectores.</p>
      <div id="progreso-escena" class="mov-alert" style="display:none"></div>
      <div class="btn-row" style="margin-top:8px"><button class="btn" id="btn-fase" onclick="DV.avanzar()">Terminé de construir →</button></div>`;
  }
  function panelComprende(){
    $("fase-panel").innerHTML = `<h3>Narre lo que ve</h3>
      <div class="field" style="margin:0 0 14px"><label>¿Qué muestra su escena?</label>
        <textarea id="in-narracion" placeholder="Describa lo que construyó: quién está, qué separa a quién, dónde duele.">${esc(st.narracion)}</textarea></div>
      <div class="btn-row" style="margin-top:0"><button class="btn" id="btn-fase" onclick="DV.enviarNarracion()">Contarle al Advisor →</button></div>`;
  }
  function panelCrea(){
    if(!st.reto){
      $("fase-panel").innerHTML = `<h3>Tarjeta de Reto</h3>
        <p class="hint" style="margin:0 0 14px">Robe una tarjeta al azar del mazo. No sabrá cuál es hasta que la vea.</p>
        <div class="btn-row" style="margin-top:0"><button class="btn" onclick="DV.robarReto()">Robar tarjeta ▲</button></div>`;
      return;
    }
    const r = st.reto, col = {conecta:"#c13a68",comprende:"#8b59b2",crea:"#ed8124",consolida:"#3988ca"}[r.campo];
    $("fase-panel").innerHTML = `<h3>Su tarjeta</h3>
      <div class="reto-card" style="--rc:${col}">
        <div class="reto-head" style="background:${col}"><b>${r.campo}</b><span>${r.id}</span></div>
        <div class="reto-body"><h4>${esc(r.t)}</h4><p class="consigna">${esc(r.c)}</p>
          <div class="zona"><b>En el tablero</b>${esc(r.z)}</div></div>
        <div class="reto-foot">${esc(r.o)}</div></div>
      <div class="field" style="margin:0 0 12px"><label>¿Qué movió y por qué?</label>
        <textarea id="in-explicacion" placeholder="Explique cada movimiento que hizo sobre el tablero."></textarea></div>
      <div id="alerta-mov"></div>
      <div class="btn-row" style="margin-top:0"><button class="btn" id="btn-fase" onclick="DV.enviarReconfiguracion()">Presentar al Advisor →</button></div>`;
  }
  function panelConsolida(){
    $("fase-panel").innerHTML = `<h3>Una sola conducta</h3>
      <div class="cond-grid">${CONDUCTAS.map((c,i)=>
        `<button class="cond ${st.conducta===i?"sel":""}" onclick="DV.elegirConducta(${i})">
          <b>${esc(c.t)}</b><p>${esc(c.d)}</p><span>${esc(c.o)}</span></button>`).join("")}</div>
      <div class="field" style="margin:16px 0 0"><label>¿Ante quién y cuándo?</label>
        <input type="text" id="in-cuando" placeholder="Ej.: con Marta, en el comité del jueves"></div>
      <div class="field" style="margin:14px 0 0"><label>¿Qué evidencia traerá?</label>
        <textarea id="in-evidencia" placeholder="Cómo sabremos que ocurrió."></textarea></div>
      <div class="btn-row"><button class="btn" id="btn-fase" onclick="DV.cerrar()">Cerrar la sesión →</button></div>`;
  }

  function actualizarBotonFase(){
    if(FASES[st.fase].id !== "conecta") return;
    const e = BOARD.estado(), n = e.piezas.length, v = e.vinculos.length;
    const btn = $("btn-fase"), aviso = $("progreso-escena");
    if(!btn) return;
    const listo = n >= 3;
    btn.disabled = !listo;
    if(aviso){
      aviso.style.display = listo ? "none" : "block";
      aviso.textContent = `La escena necesita al menos 3 piezas para poder leerse. Lleva ${n} ${n===1?"pieza":"piezas"}${v?` y ${v} vínculo${v>1?"s":""}`:""}.`;
    }
  }

  function robarReto(){
    const pool = RETOS.filter(r => r.id !== st.reto?.id);
    st.reto = pool[Math.floor(Math.random()*pool.length)];
    st.huellaAntes = BOARD.huella();
    panelCrea();
    log(`Tarjeta ${st.reto.id} · ${st.reto.t}`);
  }

  /* ---------- llamadas al Advisor ---------- */
  async function pedir(payload){
    try{
      const r = await fetch(API,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
      return await r.json();
    }catch(e){ return {_modo:"offline"}; }
  }
  function pensando(){ $("av-msg").innerHTML = `<span class="av-typing">El Advisor observa su tablero <i></i><i></i><i></i></span>`; $("av-extra").innerHTML=""; }
  function mostrar(txt, extraHTML="", offline=false){
    $("av-msg").textContent = txt;
    $("av-extra").innerHTML = extraHTML + (offline ? `<p class="av-offline">⚠ Advisor IA no disponible: guía local básica.</p>` : "");
  }

  async function enviarNarracion(){
    st.narracion = $("in-narracion").value.trim();
    if(st.narracion.length < 20){ nota("Cuente un poco más: el Advisor lee su escena, no la adivina."); return; }
    $("btn-fase").disabled = true; pensando();
    const o = await pedir({fase:"dv_narrar", quien:st.quien, situacion:st.situacion,
      escena:BOARD.describir(), narracion:st.narracion});
    $("btn-fase").disabled = false;
    const off = o._modo === "offline";
    const preguntas = o.preguntas || ["¿Qué pieza está más lejos de usted y por qué la puso ahí?",
      "¿Qué hay en su escena que no había nombrado hasta ahora?","¿Qué falta en este tablero?"];
    st.preguntas = preguntas;
    mostrar(o.devolucion || "Leo su escena. Responda estas preguntas antes de continuar.",
      `<div class="av-sonda">${preguntas.map(p=>`“${esc(p)}”`).join("<br><br>")}</div>
       <div class="av-flags"><span class="flag ok">✓ escena registrada</span>
       ${o.patron?`<span class="flag mid">patrón: ${esc(o.patron)}</span>`:""}</div>`, off);
    log("Narración registrada"); 
    setTimeout(()=>{ st.fase = 2; montarFase(); }, 3200);
  }

  async function enviarReconfiguracion(){
    st.explicacion = $("in-explicacion").value.trim();
    const cambio = BOARD.huella() !== st.huellaAntes;
    if(!cambio){
      $("alerta-mov").innerHTML = `<div class="mov-alert">El tablero no ha cambiado. La tarjeta pide un movimiento, no un comentario: mueva, añada o retire algo antes de presentar.</div>`;
      return;
    }
    if(st.explicacion.length < 15){ $("alerta-mov").innerHTML = `<div class="mov-alert">Explique qué movió y por qué.</div>`; return; }
    $("alerta-mov").innerHTML = ""; $("btn-fase").disabled = true; pensando();
    const o = await pedir({fase:"dv_reconfigurar", quien:st.quien, situacion:st.situacion,
      reto:{titulo:st.reto.t, consigna:st.reto.c, zona:st.reto.z, cierre:st.reto.p, origen:st.reto.o},
      escena_antes:st.escenaAntesTexto || "(no registrada)", escena_ahora:BOARD.describir(),
      explicacion:st.explicacion, narracion:st.narracion});
    $("btn-fase").disabled = false;
    const off = o._modo === "offline";
    mostrar(o.devolucion || "Registro el movimiento.",
      `<div class="av-sonda">“${esc(o.pregunta_cierre || st.reto.p)}”</div>
       <div class="av-flags"><span class="flag ok">✓ el tablero cambió</span>
       ${o.significativo===false?`<span class="flag mid">movimiento superficial</span>`:`<span class="flag ok">movimiento con sentido</span>`}</div>`, off);
    log(`Reconfiguración: ${st.explicacion.slice(0,60)}…`);
    setTimeout(()=>{ st.fase = 3; montarFase(); }, 3400);
  }

  function elegirConducta(i){ st.conducta = i; panelConsolida(); }

  async function cerrar(){
    if(st.conducta===null){ nota("Elija una conducta observable."); return; }
    const cuando = $("in-cuando").value.trim(), evidencia = $("in-evidencia").value.trim();
    if(!cuando || evidencia.length<10){ $("sel-info").textContent = "Complete ante quién/cuándo y la evidencia."; return; }
    $("btn-fase").disabled = true; pensando();
    const png = BOARD.exportarPNG();
    const o = await pedir({fase:"dv_cierre", quien:st.quien, situacion:st.situacion,
      escena:BOARD.describir(), narracion:st.narracion, explicacion:st.explicacion,
      reto:st.reto?.t || "", conducta:CONDUCTAS[st.conducta], cuando, evidencia});
    pintarCierre(o, png, cuando, evidencia);
    pantalla("scr-cierre");
  }

  function pintarCierre(o, png, cuando, evidencia){
    const c = CONDUCTAS[st.conducta];
    $("cierre-body").innerHTML = `
      <div class="verdict cruzo" style="border-color:#d9b54a;background:linear-gradient(180deg,#151f16,#0b1729)">
        <span class="eyebrow">${esc(st.quien)}</span>
        <h2 style="color:#f0d488">La escena cambió</h2>
        <p>${esc(o.sintesis || "La situación que trajo hoy quedó representada, perturbada y reconfigurada. Lo que sigue ya no es una idea: es una conducta con fecha.")}</p>
      </div>
      <div class="cierre-grid">
        <div class="escena-final"><img src="${png}" alt="Escena final del tablero">
          <div class="cap">Escena final · ${esc(st.situacion)}</div></div>
        <div>
          <div class="carta-final"><div class="diamond"></div>
            <h3>${esc(c.t)}</h3><p>${esc(c.d)}</p><span>${esc(c.o)}</span></div>
          <div class="panel" style="margin-top:16px"><h3>Canvas de Acción</h3>
            <dl class="tr-round" style="border:none;padding:0"><dl>
            <div style="display:grid;grid-template-columns:110px 1fr;gap:8px 14px;font-size:.9rem">
              <dt style="color:#7f8ea6;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase">Situación</dt><dd style="margin:0;color:#d5dce7">${esc(st.situacion)}</dd>
              <dt style="color:#7f8ea6;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase">Tarjeta</dt><dd style="margin:0;color:#d5dce7">${esc(st.reto?.t||"—")}</dd>
              <dt style="color:#7f8ea6;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase">Conducta</dt><dd style="margin:0;color:#d5dce7">${esc(c.t)}</dd>
              <dt style="color:#7f8ea6;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase">Ante quién</dt><dd style="margin:0;color:#d5dce7">${esc(cuando)}</dd>
              <dt style="color:#7f8ea6;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase">Evidencia</dt><dd style="margin:0;color:#d5dce7">${esc(evidencia)}</dd>
            </div></dl>
          </div>
        </div>
      </div>
      ${o.patron_central?`<div class="relato" style="margin-top:24px"><b style="color:#f0d488">Patrón central:</b> ${esc(o.patron_central)}</div>`:""}
      ${o.para_la_proxima?`<div class="insight-grid" style="margin-top:16px"><div class="insight"><b>Para la próxima sesión</b><p>${esc(o.para_la_proxima)}</p></div>
        ${o.lo_que_no_dijo?`<div class="insight"><b>Lo que no llegó a nombrar</b><p>${esc(o.lo_que_no_dijo)}</p></div>`:""}
        <div class="insight"><b>Su narración</b><p>${esc(st.narracion.slice(0,180))}${st.narracion.length>180?"…":""}</p></div></div>`:""}
      <div class="btn-row"><button class="btn" onclick="window.print()">⎙ Guardar el acta</button>
        <a class="btn ghost" href="${png}" download="escena-4shine.png">↓ Descargar la escena</a>
        <button class="btn ghost" onclick="location.reload()">Nueva sesión</button></div>`;
  }

  function log(t){
    st.log.push(t);
    $("log-list").innerHTML = st.log.map(x=>`<div class="log-item"><b>${esc(x)}</b></div>`).join("");
  }
  function avanzar(){
    if(st.fase===0){ st.escenaAntesTexto = BOARD.describir(); log("Escena construida"); }
    st.fase++; montarFase();
  }

  document.addEventListener("DOMContentLoaded", () => {
    pintarEjemplos();
    $("in-quien").addEventListener("input", revisar);
    $("in-situacion").addEventListener("input", revisar);
  });

  return {iniciar, usarEjemplo, avanzar, robarReto, enviarNarracion, enviarReconfiguracion,
          elegirConducta, cerrar, renombrarSel, eliminarSel, quitarVinc};
})();
