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

/* Los retos son el RECTO de las cartas del mazo unificado (data/conductas.js).
   El REVERSO de esa misma carta es la conducta observable que se compromete al cierre. */
let CTX_ACTUAL = null;   // lo fija DV al elegir escenario; el mazo se adapta a él
function mazoCompleto(){
  const base = (typeof CONDUCTAS !== "undefined" ? CONDUCTAS : []).filter(c => c.reto && c.reto.t);
  if(CTX_ACTUAL !== "escolar") return base;
  // variante escolar: mismo mapa de competencias, lenguaje del estudiante
  return base.map(c => c.escolar ? {...c, reto:c.escolar.reto, conducta:c.escolar.conducta} : c);
}


/* Las conductas vienen del mazo completo (data/conductas.js): 96 cartas, 4 pilares. */
const PIL_META = {
  within:{nombre:"Shine Within", verbo:"Comprende", color:"#8b59b2"},
  out:   {nombre:"Shine Out",    verbo:"Conecta",   color:"#c13a68"},
  up:    {nombre:"Shine Up",     verbo:"Crea",      color:"#ed8124"},
  beyond:{nombre:"Shine Beyond", verbo:"Consolida", color:"#3988ca"}
};

const EJEMPLOS = [
  "Me ofrecieron liderar una nueva región y llevo tres semanas sin responder.",
  "Tengo que dar feedback difícil a alguien de mi equipo con quien tengo buena relación.",
  "Mi área depende de otra que no cumple, y ya afectó dos entregas.",
  "Quiero cambiar de rol pero siento que dejaría al equipo a la deriva."
];

const FASES = [
  {id:"conecta",  tag:"FASE 01 · CONECTA",  nombre:"Construyo",   nombreTu:"Armo",   color:"#c13a68", pct:25,
   instr:"Represente la situación tal como se vive hoy."},
  {id:"comprende",tag:"FASE 02 · COMPRENDE",nombre:"Narro",       nombreTu:"Cuento", color:"#8b59b2", pct:50,
   instr:"Cuente lo que construyó. El Advisor solo hará preguntas."},
  {id:"crea",     tag:"FASE 03 · CREA",     nombre:"Reconfiguro", nombreTu:"Muevo",  color:"#ed8124", pct:75,
   instr:"Una carta perturba la escena: hay que mover el tablero."},
  {id:"consolida",tag:"FASE 04 · CONSOLIDA",nombre:"Actúo",       nombreTu:"Actúo",  color:"#3988ca", pct:100,
   instr:"Una sola conducta observable, con responsable y fecha."}
];



const DV = (() => {
  const $ = id => document.getElementById(id);
  const esc = s => (s||"").replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  /* ---------- adaptación de lenguaje por escenario ---------- */
  const tuteo = () => (st.ctx?.trato === "tu");
  // T(textoUsted, textoTú) — elige según el escenario
  const T = (u, t) => tuteo() ? t : u;
  function esc2(s){ return esc(s); }
  const st = {ctx:null, quien:"", situacion:"", fase:0, reto:null, huellaAntes:"", conducta:null,
              narracion:"", explicacion:"", log:[], offline:false,
              hilo:[], listoParaAvanzar:false, hallazgo:"",
              pngAntes:"", escenaAntesTexto:"", pendiente:""};

  /* ---------- paso 1 · escenario ---------- */
  function pintarEscenarios(){
    $("escenarios").innerHTML = CONTEXTOS.map(c => `
      <button class="esc" style="--ec:${c.color}" onclick="DV.elegirEscenario('${c.id}')">
        <span class="esc-perfil">${esc(c.perfil)} · ${esc(c.duracion)}</span>
        <h3>${esc(c.nombre)}</h3>
        <p class="esc-lema">${esc(c.lema)}</p>
        <p class="esc-desc">${esc(c.desc)}</p>
        <span class="esc-mundo">${esc(c.mundo)}</span>
        <span class="esc-go">Elegir este escenario →</span>
      </button>`).join("");
  }

  function elegirEscenario(id){
    st.ctx = CTX(id); CTX_ACTUAL = st.ctx.id;
    document.body.style.setProperty("--ctx", st.ctx.color);
    pintarPaso2();
    pantalla("scr-setup");
  }
  function volverEscenario(){ pantalla("scr-escenario"); }

  /* ---------- paso 2 · situación ---------- */
  function pintarPaso2(){
    const c = st.ctx;
    $("s2-eyebrow").textContent = `Paso 2 de 2 · ${c.nombre}`;
    $("s2-eyebrow").style.color = c.color;
    $("s2-titulo").innerHTML = T("¿Qué pone <em>sobre la mesa</em>?", "¿Qué pones <em>sobre la mesa</em>?");
    $("s2-lead").textContent = T(
      "Elija una situación real, vigente y suya. No se responde con palabras: se representa con piezas, y después una tarjeta la perturba.",
      "Elige una situación real, de ahora y tuya. No se responde hablando: se arma con piezas, y después una carta la mueve.");
    $("lbl-quien").textContent = T("¿Quién construye?", "¿Quién juega?");
    $("in-quien").placeholder = T("Nombre y rol · Ej.: Laura, directora comercial",
                                  "Tu nombre · Ej.: Sara, once B");
    $("lbl-sit").textContent = T("Elija la situación que va sobre la mesa", "Elige la situación que va sobre la mesa");
    $("in-situacion").placeholder = T("…o escriba aquí la suya.", "…o escribe aquí la tuya.");
    $("situaciones").innerHTML = c.situaciones.map((x,i) => `
      <button class="sit-op" onclick="DV.elegirSituacion(${i})" data-i="${i}">
        <b>${esc(x.t)}</b><span>${esc(x.d)}</span></button>`).join("");
    $("como-funciona").innerHTML = `<h3>${T("Cómo funciona","Cómo se juega")}</h3><ol>
      <li><b>Conecta · ${T("Construyo","Armo")}</b> — ${T("represente la situación con avatares, piezas y vínculos.","arma la situación con avatares, piezas y vínculos.")}</li>
      <li><b>Comprende · ${T("Narro","Cuento")}</b> — ${T("cuente lo que construyó. El Advisor solo pregunta.","cuentas lo que armaste. El Advisor solo pregunta.")}</li>
      <li><b>Crea · ${T("Reconfiguro","Muevo")}</b> — ${T("una carta perturba la escena: hay que mover el tablero.","una carta mueve la escena: hay que cambiar el tablero.")}</li>
      <li><b>Consolida · ${T("Actúo","Actúo")}</b> — ${T("elija una conducta observable con fecha.","eliges algo concreto que vas a hacer, con fecha.")}</li>
    </ol>`;
    $("btn-start").textContent = T("Abrir el tablero →", "Abrir el tablero →");
    revisar();
  }
  function elegirSituacion(i){
    const x = st.ctx.situaciones[i];
    $("in-situacion").value = x.d;
    document.querySelectorAll(".sit-op").forEach(b => b.classList.toggle("on", +b.dataset.i === i));
    revisar();
  }
  function revisar(){
    st.quien = $("in-quien").value.trim(); st.situacion = $("in-situacion").value.trim();
    const ok = st.quien.length>=2 && st.situacion.length>=15;
    $("btn-start").disabled = !ok;
    $("setup-hint").textContent = ok
      ? T("Todo listo. El tablero espera.", "Listo. El tablero espera.")
      : T("Complete quién construye y qué situación va a trabajar.", "Escribe tu nombre y elige una situación.");
  }
  function iniciar(){
    $("hud-quien").innerHTML = `<b>${esc(st.quien)}</b>`;
    $("rec-situacion").textContent = st.situacion;
    document.querySelector(".sit-recordatorio b").textContent = T("Su situación","Tu situación");
    pantalla("scr-mesa");
    if(!BOARD._listo){ BOARD.init("tablero", onCambioTablero, onSeleccion); BOARD._listo = true; pintarBandeja(); }
    montarFase();
  }
  const pantalla = id => ["scr-escenario","scr-setup","scr-mesa","scr-cierre"].forEach(s=>$(s).classList.toggle("hidden", s!==id));

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
        pedirNombre(`¿Qué representa este ${def.nombre.toLowerCase()}?`, "").then(n => { if(n) BOARD.renombrar(id, n); guardar(); });
      } else guardar();
    }
    arrastrando = null;
  }
  function nota(t){ $("sel-info").innerHTML = t; }
  function onSeleccion(p, meta){
    if(meta?.conectorCreado){
      document.querySelectorAll(".pal[data-conn]").forEach(x=>x.classList.remove("on"));
      nota("Vínculo creado."); pintarVinculos(); return;
    }
    document.querySelector(".sel-solo").classList.toggle("hidden", !p);
    nota(p ? `Seleccionado: <b>${esc(p.label||p.nombre)}</b>` : "Toque una pieza para nombrarla o retirarla.");
  }
  function renombrarSel(){ const id = BOARD.sel; if(!id) return;
    const p = BOARD.estado().piezas.find(x=>x.id===id);
    pedirNombre("¿Qué representa esta pieza?", p?.label||"").then(n => { BOARD.renombrar(id, n); guardar(); }); }
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
  let guardarPendiente = null;
  function onCambioTablero(){
    pintarVinculos(); actualizarBotonFase();
    clearTimeout(guardarPendiente);
    guardarPendiente = setTimeout(guardar, 700);   // autoguardado tras cada movimiento
  }

  /* ---------- fases ---------- */
  function montarFase(){
    const f = FASES[st.fase];
    $("fase-bar").style.width = f.pct + "%";
    $("hud-fase").innerHTML = `Fase <b>${st.fase+1}</b> de 4 · ${f.nombre}`;
    $("f-tag").textContent = f.tag; $("f-tag").style.color = f.color;
    $("f-nombre").textContent = tuteo() ? f.nombreTu : f.nombre;
    $("f-instr").innerHTML = `<button class="ayuda-btn" onclick="DV.abrirAyudaFase(true)">
        <i>?</i> ${T("Cómo funciona esta fase","Qué toca hacer aquí")}</button>
      <button class="ayuda-btn" onclick="DV.abrirAyudaAdvisor()"><i>◆</i> ¿Qué hace el Advisor?</button>`;
    $("steps").innerHTML = FASES.map((x,i)=>
      `<span class="step ${i===st.fase?"on":(i<st.fase?"done":"")}">${i<st.fase?"✓ ":""}${x.tag.split(" · ")[1]}</span>`).join("")
      + `<span class="step">Cierre</span>`;
    $("av-extra").innerHTML = "";
    const paneles = {conecta:panelConecta, comprende:panelComprende, crea:panelCrea, consolida:panelConsolida};
    paneles[f.id]();
    setTimeout(() => abrirAyudaFase(false), 260);
    $("av-msg").textContent = tuteo() ? {
      conecta:"Arma primero. No me cuentes todavía qué significa: ponlo en el tablero y deja que se vea.",
      comprende:"Ahora cuéntame lo que armaste. Voy a preguntar por distancias, ausencias y tensiones.",
      crea:"Roba la carta. Lo que pida hay que hacerlo en el tablero: si nada se mueve, no pasó.",
      consolida:"Cierra eligiendo una sola cosa. Prefiero una que puedas sostener a cinco que suenen bien."
    }[f.id] : {
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
    if(!st.hilo.length){
      $("fase-panel").innerHTML = `<h3>Narre lo que ve</h3>
        <div class="field" style="margin:0 0 14px"><label>¿Qué muestra su escena?</label>
          <textarea id="in-narracion" placeholder="Describa lo que construyó: quién está, qué separa a quién, dónde duele.">${esc(st.narracion)}</textarea></div>
        <div class="btn-row" style="margin-top:0"><button class="btn" id="btn-fase" onclick="DV.enviarNarracion()">Contarle al Advisor →</button></div>`;
      return;
    }
    $("fase-panel").innerHTML = `<h3>Conversación</h3>
      ${st.pendiente ? `<div class="pregunta-viva">“${esc(st.pendiente)}”</div>` : ""}
      <div class="field" style="margin:0 0 12px"><label>Su respuesta</label>
        <textarea id="in-respuesta-dialogo" placeholder="Responda con lo que ve en el tablero. Puede mover piezas mientras responde."></textarea></div>
      <div class="btn-row" style="margin-top:0;gap:10px">
        <button class="btn" id="btn-fase" onclick="DV.responderAdvisor()">Responder →</button>
        ${st.listoParaAvanzar ? `<button class="btn ghost" onclick="DV.avanzar()">Pasar al Reto ▸</button>` : ""}
      </div>
      ${st.listoParaAvanzar ? `<p class="hint" style="margin-top:12px;color:#8fd6a5">El Advisor considera que ya hay material suficiente. Puede seguir conversando o avanzar.</p>` : ""}`;
  }
  /* ---------- la carta física ---------- */
  function cartaHTML(c, opts={}){
    const p = PIL_META[c.pilar] || {};
    const r = c.reto || {};
    return `<article class="jcarta ${opts.volteada?"volteada":""} ${opts.entrando?"entrando":""}"
        style="--cc:${p.color}" ${opts.onclick?`onclick="${opts.onclick}"`:""}>
      <div class="jcara recto">
        <div class="jc-top"><b>${esc((p.nombre||"").replace("Shine ",""))} · ${esc(p.verbo||"")}</b><span>${c.id}</span></div>
        <div class="jc-body">
          <h4>${esc(r.t||"")}</h4>
          <p class="jc-cons">${esc(r.c||"")}</p>
          <p class="jc-zona"><b>En el tablero</b>${esc(r.z||"")}</p>
        </div>
        <div class="jc-foot"><span>Recto · el reto</span><b>4SHINE®</b></div>
      </div>
      <div class="jcara reverso">
        <div class="jc-top"><b>${esc((p.nombre||"").replace("Shine ",""))}</b><span>${c.id}</span></div>
        <div class="jrev">
          <span class="jrombo"></span>
          <span class="jcomp">${esc(c.componente||"")}</span>
          <h4>${esc(c.competencia||"")}</h4>
          <p>${esc(c.conducta||"")}</p>
        </div>
        <div class="jc-foot"><span>Reverso · la conducta</span><b>4SHINE®</b></div>
      </div>
    </article>`;
  }

  function panelCrea(){
    if(!st.reto){
      $("fase-panel").innerHTML = `<h3>Robe una carta</h3>
        <p class="hint" style="margin:0 0 12px">El mazo tiene 96 cartas. El recto es un reto que perturba su escena; el reverso, la conducta que entrena. Elija desde qué pilar quiere ser perturbado, o deje que el azar decida.</p>
        <div class="pilar-tabs">${Object.entries(PIL_META).map(([id,p]) =>
          `<button class="ptab" style="--pc:${p.color}" onclick="DV.robarReto('${id}')">${esc(p.nombre.replace("Shine ",""))}<small>${mazoCompleto().filter(c=>c.pilar===id).length}</small></button>`).join("")}</div>
        <div class="btn-row" style="margin-top:14px"><button class="btn" onclick="DV.robarReto()">▲ Robar del mazo completo</button></div>`;
      return;
    }
    const r = st.reto;
    $("fase-panel").innerHTML = `<h3>Su carta</h3>
      <div class="carta-mesa">${cartaHTML(st.carta, {entrando:true})}</div>
      <p class="jc-pregunta"><b>Para cerrar</b>${esc(r.p||"")}</p>
      <div class="field" style="margin:14px 0 12px"><label>¿Qué movió y por qué?</label>
        <textarea id="in-explicacion" placeholder="Explique cada movimiento que hizo sobre el tablero.">${esc(st.explicacion||"")}</textarea></div>
      <div id="alerta-mov"></div>
      <div class="btn-row" style="margin-top:0;gap:10px">
        <button class="btn" id="btn-fase" onclick="DV.enviarReconfiguracion()">Presentar al Advisor →</button>
        ${st.listoParaAvanzar ? `<button class="btn ghost" onclick="DV.avanzar()">Pasar al cierre ▸</button>` : ""}
      </div>`;
    setTimeout(() => document.querySelector(".jcarta")?.classList.remove("entrando"), 60);
  }

  function panelConsolida(){
    const jugada = st.carta;
    const pil = st.pilarConducta || (jugada ? jugada.pilar : "within");
    const sel = st.conducta ? mazoCompleto().find(c => c.id === st.conducta) : null;
    $("fase-panel").innerHTML = `<h3>Una sola conducta</h3>
      ${jugada ? `<p class="hint" style="margin:0 0 10px">Voltee la carta que jugó: al otro lado está la conducta que ese reto entrenaba.</p>
      <div class="carta-mesa">${cartaHTML(jugada, {volteada:st.volteoCierre !== false, onclick:"DV.voltearJugada()"})}</div>
      <div class="btn-row" style="margin-top:10px;gap:8px;justify-content:center">
        <button class="ctrl-mini" onclick="DV.voltearJugada()">⟲ Voltear</button>
        <button class="ctrl-mini ${st.conducta===jugada.id?"":"fuerte"}" onclick="DV.tomarJugada()">
          ${st.conducta===jugada.id ? "✓ Es su compromiso" : "Comprometerme con esta conducta"}</button>
      </div>
      <p class="hint" style="margin:18px 0 10px;padding-top:16px;border-top:1px solid var(--line)">O busque otra en el mazo:</p>` : ""}
      <div class="pilar-tabs">${Object.entries(PIL_META).map(([id,p]) =>
        `<button class="ptab ${id===pil?"on":""}" style="--pc:${p.color}" onclick="DV.elegirPilarConducta('${id}')">
          ${esc(p.nombre.replace("Shine ",""))}<small>${mazoCompleto().filter(c=>c.pilar===id).length}</small></button>`).join("")}</div>
      <div class="mini-abanico" id="mini-abanico"></div>
      <div class="btn-row" style="margin-top:12px;gap:8px">
        <button class="ctrl-mini" onclick="DV.barajarConductas()">⤮ Barajar</button>
        <button class="ctrl-mini" onclick="DV.pasarConducta(-1)">‹</button>
        <button class="ctrl-mini" onclick="DV.pasarConducta(1)">›</button>
        <button class="ctrl-mini fuerte" onclick="DV.tomarConducta()">Tomar esta carta</button>
      </div>
      ${sel && sel.id !== jugada?.id ? `<div class="conducta-elegida"><b>Su compromiso</b><h4>${esc(sel.competencia)}</h4>
        <p>${esc(sel.conducta)}</p><span>${esc(PIL_META[sel.pilar].nombre)} → ${esc(sel.componente)}</span></div>` : ""}
      <div class="field" style="margin:16px 0 0"><label>¿Ante quién y cuándo?</label>
        <input type="text" id="in-cuando" value="${esc(st.cuando||"")}" placeholder="Ej.: con Marta, en el comité del jueves"></div>
      <div class="field" style="margin:14px 0 0"><label>¿Qué evidencia traerá?</label>
        <textarea id="in-evidencia" placeholder="Cómo sabremos que ocurrió.">${esc(st.evidencia||"")}</textarea></div>
      <div class="btn-row"><button class="btn" id="btn-fase" onclick="DV.cerrar()">Cerrar la sesión →</button></div>`;
    pintarMiniAbanico();
  }
  function voltearJugada(){ st.volteoCierre = st.volteoCierre === false; panelConsolida(); }
  function tomarJugada(){
    if(!st.carta) return;
    st.conducta = st.carta.id;
    st.cuando = ($("in-cuando")?.value)||""; st.evidencia = ($("in-evidencia")?.value)||"";
    panelConsolida(); guardar();
  }

  function pintarMiniAbanico(){
    const cont = $("mini-abanico"); if(!cont) return;
    const pil = st.pilarConducta || "within";
    if(!st.mazo || st.mazoPilar !== pil){
      st.mazo = mazoCompleto().filter(c => c.pilar === pil);
      st.mazoPilar = pil; st.mazoI = 0;
    }
    const n = st.mazo.length; if(!n){ cont.innerHTML = ""; return; }
    const p = PIL_META[pil];
    let html = "";
    for(let k = 4; k >= 0; k--){
      const c = st.mazo[(st.mazoI + k) % n];
      const dx = k*14 - 28, dy = k*6, ang = k*4 - 8, sc = 1 - k*0.05;
      html += `<article class="mcarta" style="--cc:${p.color};transform:translate(${dx}px,${dy}px) rotate(${ang}deg) scale(${sc});z-index:${5-k};opacity:${1-k*0.1}">
        <div class="mc-top">${esc(p.nombre.replace("Shine ",""))}<span>${c.id}</span></div>
        <div class="mc-body"><b>${esc(c.competencia)}</b><p>${esc(c.conducta)}</p></div>
        <div class="mc-foot">${esc(c.componente)}</div></article>`;
    }
    cont.innerHTML = html;
    const act = st.mazo[st.mazoI];
    cont.insertAdjacentHTML("beforeend",
      `<span class="mini-pos">${st.mazoI+1} / ${n} · ${esc(act.competencia)}</span>`);
  }
  function elegirPilarConducta(id){ st.pilarConducta = id; st.mazo = null; st.conducta = null; panelConsolida(); }
  function pasarConducta(d){
    if(!st.mazo) return;
    st.mazoI = (st.mazoI + d + st.mazo.length) % st.mazo.length; pintarMiniAbanico();
  }
  function barajarConductas(){
    if(!st.mazo) return;
    const cont = $("mini-abanico");
    [...cont.querySelectorAll(".mcarta")].forEach(el => {
      el.style.transition = "transform .3s,opacity .3s";
      el.style.transform = `translate(${(Math.random()*2-1)*130}px,${(Math.random()*2-1)*50}px) rotate(${(Math.random()*2-1)*30}deg) scale(.9)`;
      el.style.opacity = ".2";
    });
    setTimeout(() => {
      for(let i = st.mazo.length-1; i>0; i--){ const j = Math.floor(Math.random()*(i+1)); [st.mazo[i],st.mazo[j]]=[st.mazo[j],st.mazo[i]]; }
      st.mazoI = 0; pintarMiniAbanico();
    }, 320);
  }
  function tomarConducta(){
    if(!st.mazo) return;
    st.conducta = st.mazo[st.mazoI].id;
    st.cuando = ($("in-cuando")?.value)||""; st.evidencia = ($("in-evidencia")?.value)||"";
    panelConsolida(); guardar();
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

  function robarReto(pilar){
    const mazo = mazoCompleto().filter(c => !pilar || c.pilar === pilar);
    if(!mazo.length) return;
    const pool = mazo.filter(c => c.id !== st.carta?.id);
    st.carta = pool[Math.floor(Math.random() * pool.length)];
    st.reto = {...st.carta.reto, id:st.carta.id, campo:st.carta.pilar, o:`${(PIL_META[st.carta.pilar]||{}).nombre} · ${st.carta.competencia}`};
    st.huellaAntes = BOARD.huella();
    st.pngAntes = BOARD.exportarPNG();
    st.listoParaAvanzar = false;
    panelCrea();
    log(`Carta ${st.carta.id} · ${st.reto.t}`);
    guardar();
  }

  /* ---------- llamadas al Advisor ---------- */
  async function pedir(payload){
    if(st.ctx) payload.contexto_id = st.ctx.id, payload.contexto_nombre = st.ctx.nombre,
               payload.contexto_advisor = st.ctx.advisor, payload.trato = st.ctx.trato;
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
    st.hilo.push({rol:"persona", texto:st.narracion});
    st.hilo.push({rol:"advisor", texto:(o.devolucion||"") + " " + preguntas.join(" ")});
    st.pendiente = preguntas[0];
    st.patron = o.patron || "";
    pintarHilo();
    mostrar(o.devolucion || "Leo su escena.",
      `<div class="av-sonda">${preguntas.map(p=>`“${esc(p)}”`).join("<br><br>")}</div>
       <div class="av-flags"><span class="flag ok">✓ escena registrada</span>
       ${o.patron?`<span class="flag mid">patrón: ${esc(o.patron)}</span>`:""}</div>`, off);
    log("Narración registrada");
    panelComprende();
  }

  /* ---------- diálogo con el Advisor ---------- */
  async function responderAdvisor(){
    const r = ($("in-respuesta-dialogo").value || "").trim();
    if(r.length < 8){ nota("Responda con algo más que una palabra."); return; }
    $("btn-fase").disabled = true; pensando();
    st.hilo.push({rol:"persona", texto:r});
    const o = await pedir({fase:"dv_dialogo", quien:st.quien, situacion:st.situacion,
      escena:BOARD.describir(), hilo:st.hilo.slice(0,-1), respuesta:r});
    const off = o._modo === "offline";
    st.hilo.push({rol:"advisor", texto:(o.respuesta||"") + (o.siguiente_pregunta ? " " + o.siguiente_pregunta : "")});
    st.pendiente = o.siguiente_pregunta || "";
    if(o.listo){ st.listoParaAvanzar = true; if(o.hallazgo) st.hallazgo = o.hallazgo; }
    pintarHilo();
    mostrar(o.respuesta || "",
      `${o.siguiente_pregunta ? `<div class="av-sonda">“${esc(o.siguiente_pregunta)}”</div>` : ""}
       <div class="av-flags">
        ${o.listo ? `<span class="flag ok">✓ material suficiente</span>` : `<span class="flag mid">seguimos</span>`}
        ${o.hallazgo ? `<span class="flag ok">hallazgo</span>` : ""}
       </div>
       ${o.hallazgo ? `<p class="hint" style="margin-top:10px;color:#d5dce7"><b style="color:#f0d488">Hizo visible:</b> ${esc(o.hallazgo)}</p>` : ""}`, off);
    log("Intercambio con el Advisor");
    panelComprende(); $("btn-fase") && ($("btn-fase").disabled = false);
  }

  function pintarHilo(){
    const box = $("hilo-box"); if(!box) return;
    box.classList.remove("hidden");
    box.innerHTML = `<h3>Conversación</h3>` + st.hilo.map(m =>
      `<div class="msg ${m.rol}"><b>${m.rol === "advisor" ? "Advisor" : esc(st.quien.split(",")[0] || "Usted")}</b>
       <p>${esc(m.texto)}</p></div>`).join("");
    box.scrollTop = box.scrollHeight;
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
    st.listoParaAvanzar = true;
    st.hilo.push({rol:"persona", texto:"[movió el tablero] " + st.explicacion});
    st.hilo.push({rol:"advisor", texto:o.devolucion || ""});
    pintarHilo();
    log(`Reconfiguración: ${st.explicacion.slice(0,60)}…`);
    panelCrea();
  }



  async function cerrar(){
    if(!st.conducta){ nota("Saque una carta del mazo y tómela."); return; }
    const carta = mazoCompleto().find(c => c.id === st.conducta);
    if(!carta){ nota("No fue posible leer la carta."); return; }
    const cuando = $("in-cuando").value.trim(), evidencia = $("in-evidencia").value.trim();
    if(!cuando || evidencia.length<10){ $("sel-info").textContent = "Complete ante quién/cuándo y la evidencia."; return; }
    $("btn-fase").disabled = true; pensando();
    const png = BOARD.exportarPNG();
    const o = await pedir({fase:"dv_cierre", quien:st.quien, situacion:st.situacion,
      escena:BOARD.describir(), narracion:st.narracion, explicacion:st.explicacion,
      reto:st.reto?.t || "",
      conducta:{t:carta.competencia, d:carta.conducta, o:`${PIL_META[carta.pilar].nombre} · ${carta.componente}`},
      cuando, evidencia});
    try{
      localStorage.removeItem("4shine.diamante.sesion");
      pintarCierre(o, png, cuando, evidencia);
      pantalla("scr-cierre");
    }catch(err){
      $("btn-fase").disabled = false;
      nota("No fue posible cerrar la sesión. Inténtelo de nuevo.");
      return;
    }
  }

  function pintarCierre(o, png, cuando, evidencia){
    const k = mazoCompleto().find(x => x.id === st.conducta) || {};
    const c = {t:k.competencia||"—", d:k.conducta||"", o:`${(PIL_META[k.pilar]||{}).nombre||""} · ${k.componente||""}`};
    $("cierre-body").innerHTML = `
      <div class="verdict cruzo" style="border-color:#d9b54a;background:linear-gradient(180deg,#151f16,#0b1729)">
        <span class="eyebrow">${esc(st.quien)}</span>
        <h2 style="color:#f0d488">La escena cambió</h2>
        <p>${esc(o.sintesis || "La situación que trajo hoy quedó representada, perturbada y reconfigurada. Lo que sigue ya no es una idea: es una conducta con fecha.")}</p>
      </div>
      ${st.pngAntes ? `<div class="antes-despues">
        <figure><img src="${st.pngAntes}" alt="La escena antes de la tarjeta"><figcaption><b>Antes</b> · como llegó la situación a la mesa</figcaption></figure>
        <div class="flecha">→</div>
        <figure><img src="${png}" alt="La escena después del movimiento"><figcaption><b>Después</b> · tras la tarjeta «${esc(st.reto?.t||"")}»</figcaption></figure>
      </div>` : ""}
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
        ${st.hallazgo?`<div class="insight"><b>Lo que hizo visible</b><p>${esc(st.hallazgo)}</p></div>`:""}</div>`:""}
      ${st.hilo.length?`<div class="transcript" style="margin-top:24px"><h3>La conversación completa</h3>
        ${st.hilo.map(m=>`<div class="msg ${m.rol}"><b>${m.rol==="advisor"?"Advisor":esc(st.quien.split(",")[0]||"Usted")}</b><p>${esc(m.texto)}</p></div>`).join("")}</div>`:""}
      <div class="btn-row"><button class="btn" onclick="window.print()">⎙ Guardar el acta</button>
        <a class="btn ghost" href="${png}" download="escena-4shine.png">↓ Descargar la escena</a>
        <button class="btn ghost" onclick="location.reload()">Nueva sesión</button></div>`;
  }

  function log(t){
    st.log.push(t);
    $("log-list").innerHTML = st.log.map(x=>`<div class="log-item"><b>${esc(x)}</b></div>`).join("");
  }
  function avanzar(){
    if(st.fase >= FASES.length - 1) return;          // la última fase cierra con DV.cerrar()
    if(st.fase===0){ st.escenaAntesTexto = BOARD.describir(); log("Escena construida"); }
    st.listoParaAvanzar = false; st.pendiente = "";
    st.fase++; montarFase(); guardar();
  }

  /* ---------- persistencia ---------- */
  const CLAVE = "4shine.diamante.sesion";
  function guardar(){
    try{
      localStorage.setItem(CLAVE, JSON.stringify({
        ctxId:st.ctx?.id, quien:st.quien, situacion:st.situacion, fase:st.fase, narracion:st.narracion,
        explicacion:st.explicacion, hilo:st.hilo, hallazgo:st.hallazgo, patron:st.patron,
        reto:st.reto, conducta:st.conducta, log:st.log, tablero:BOARD.serializar(), ts:Date.now()
      }));
    }catch(e){}
  }
  function haySesion(){
    try{ const d = JSON.parse(localStorage.getItem(CLAVE) || "null");
      return d && d.quien && (Date.now() - d.ts) < 1000*60*60*24*7 ? d : null; }catch(e){ return null; }
  }
  function retomar(){
    const d = haySesion(); if(!d) return;
    st.ctx = CTX(d.ctxId || "gerencial"); CTX_ACTUAL = st.ctx.id;
    document.body.style.setProperty("--ctx", st.ctx.color);
    Object.assign(st, {quien:d.quien, situacion:d.situacion, fase:d.fase, narracion:d.narracion||"",
      explicacion:d.explicacion||"", hilo:d.hilo||[], hallazgo:d.hallazgo||"", patron:d.patron||"",
      reto:d.reto||null, conducta:d.conducta, log:d.log||[]});
    pintarPaso2();
    $("in-quien").value = st.quien; $("in-situacion").value = st.situacion; revisar();
    $("hud-quien").innerHTML = `<b>${esc(st.quien)}</b>`;
    $("rec-situacion").textContent = st.situacion;
    document.querySelector(".sit-recordatorio b").textContent = T("Su situación","Tu situación");
    pantalla("scr-mesa");
    if(!BOARD._listo){ BOARD.init("tablero", onCambioTablero, onSeleccion); BOARD._listo = true; pintarBandeja(); }
    if(d.tablero) BOARD.cargar(d.tablero);
    montarFase(); pintarHilo(); pintarVinculos();
    st.log.length && ($("log-list").innerHTML = st.log.map(x=>`<div class="log-item"><b>${esc(x)}</b></div>`).join(""));
  }
  function descartarSesion(){ try{ localStorage.removeItem(CLAVE); }catch(e){} location.reload(); }

  /* ---------- modal de nombre ---------- */
  function pedirNombre(titulo, valor){
    return new Promise(res => {
      const m = document.createElement("div");
      m.className = "modal";
      m.innerHTML = `<div class="modal-caja">
        <h3>${esc(titulo)}</h3>
        <input type="text" id="modal-in" value="${esc(valor||"")}" maxlength="42" placeholder="Ej.: Mi jefe · La decisión · Hacerlo sola">
        <p class="hint">Nombre la pieza con las palabras que usaría fuera de esta mesa.</p>
        <div class="btn-row" style="margin-top:16px"><button class="btn" id="modal-ok">Aceptar</button>
          <button class="btn ghost" id="modal-x">Sin nombre</button></div></div>`;
      document.body.appendChild(m);
      const inp = m.querySelector("#modal-in"); inp.focus(); inp.select();
      const cerrar = v => { m.remove(); res(v); };
      m.querySelector("#modal-ok").onclick = () => cerrar(inp.value.trim());
      m.querySelector("#modal-x").onclick = () => cerrar("");
      inp.onkeydown = e => { if(e.key === "Enter") cerrar(inp.value.trim()); if(e.key === "Escape") cerrar(""); };
      m.onclick = e => { if(e.target === m) cerrar(""); };
    });
  }

  /* ---------- modales de ayuda ---------- */
  const VISTAS = "4shine.diamante.ayudaVista";
  function yaVista(id){
    try{ return (JSON.parse(localStorage.getItem(VISTAS)||"[]")).includes(id); }catch(e){ return false; }
  }
  function marcarVista(id){
    try{ const v = JSON.parse(localStorage.getItem(VISTAS)||"[]");
      if(!v.includes(id)){ v.push(id); localStorage.setItem(VISTAS, JSON.stringify(v)); } }catch(e){}
  }
  function cerrarModal(){ document.querySelector(".modal-ayuda")?.remove(); }

  function ayudaDe(faseId){
    const set = (typeof AYUDAS !== "undefined" && AYUDAS[st.ctx?.id]) || (typeof AYUDAS !== "undefined" ? AYUDAS.gerencial : null);
    return set ? set[faseId] : null;
  }
  function abrirAyudaFase(forzar){
    const f = FASES[st.fase], a = ayudaDe(f.id);
    if(!a) return;
    const clave = `${st.ctx?.id || "x"}:${f.id}`;
    if(!forzar && yaVista(clave)) return;
    cerrarModal();
    const m = document.createElement("div");
    m.className = "modal modal-ayuda";
    m.innerHTML = `<div class="modal-caja ancha" style="--mc:${f.color}">
      <span class="m-tag">${esc(f.tag)} · ${esc(st.ctx?.nombre || "")}</span>
      <h3>${esc(a.titulo)}</h3>
      ${st.situacion ? `<p class="m-sit"><b>${T("Su situación","Tu situación")}</b>${esc(st.situacion)}</p>` : ""}
      <p class="m-idea">${a.idea}</p>
      <ol class="m-pasos">${a.pasos.map(p=>`<li>${p}</li>`).join("")}</ol>
      <p class="m-nota">${esc(a.nota)}</p>
      <p class="m-advisor"><b>El Advisor en esta fase</b>${esc(a.advisor)}</p>
      <div class="btn-row" style="margin-top:20px"><button class="btn" id="m-ok">${T("Entendido, a la mesa →","Listo, a la mesa →")}</button></div>
    </div>`;
    document.body.appendChild(m);
    m.querySelector("#m-ok").onclick = () => { marcarVista(clave); cerrarModal(); };
    m.onclick = e => { if(e.target === m){ marcarVista(clave); cerrarModal(); } };
    document.addEventListener("keydown", function esc_(e){
      if(e.key === "Escape"){ marcarVista(clave); cerrarModal(); document.removeEventListener("keydown", esc_); }
    });
  }

  function abrirAyudaAdvisor(){
    cerrarModal();
    const m = document.createElement("div");
    m.className = "modal modal-ayuda";
    m.innerHTML = `<div class="modal-caja ancha" style="--mc:#d9b54a">
      <span class="m-tag">El facilitador</span>
      <h3>¿Qué hace el Advisor?</h3>
      <p class="m-idea">El Advisor es el facilitador certificado 4Shine. Aquí es digital, pero se comporta
        igual que en la mesa real: <b>acompaña sin interpretar</b>.</p>
      <div class="m-dos">
        <div class="m-si"><b>Sí hace</b><ul>
          <li>Lee la escena que ${T("usted construyó","construiste")} y pregunta por lo <b>visible</b>: distancias, ausencias, qué separa a qué.</li>
          <li>${T("Le devuelve <b>sus propias palabras</b>","Te devuelve <b>tus propias palabras</b>")} cuando pregunta.</li>
          <li>Señala lo que ${T("nombró","nombraste")} en voz alta pero no está en el tablero.</li>
          <li>Exige evidencia concreta: un nombre, una frase textual, un ajuste específico.</li>
          <li>Protege el ritmo y el cierre con una conducta verificable.</li>
        </ul></div>
        <div class="m-no"><b>Nunca hace</b><ul>
          <li>${T("Decirle","Decirte")} qué significa una pieza, un muro o una distancia.</li>
          <li>${T("Interpretar su situación o diagnosticarlo.","Interpretar tu situación o diagnosticarte.")}</li>
          <li>${T("Darle consejos o proponerle la solución.","Darte consejos o proponerte la solución.")}</li>
          <li>Aceptar respuestas abstractas que nadie podría verificar mañana.</li>
          <li>${T("Resolver por usted lo que le toca decidir.","Resolver por ti lo que te toca decidir.")}</li>
        </ul></div>
      </div>
      <p class="m-advisor" style="margin-bottom:14px"><b>En este escenario</b>${esc(st.ctx?.advisor || "")}</p>
      <p class="m-nota">Si el Advisor digital no está disponible, la sesión sigue siendo jugable y se
        ${T("le avisará","te avisará")} en pantalla: nunca finge una evaluación que no hizo.</p>
      <div class="btn-row" style="margin-top:20px"><button class="btn" id="m-ok">Cerrar</button></div>
    </div>`;
    document.body.appendChild(m);
    m.querySelector("#m-ok").onclick = cerrarModal;
    m.onclick = e => { if(e.target === m) cerrarModal(); };
  }

  /* ---------- herramientas de pieza ---------- */
  function rotarSel(){ if(BOARD.sel){ BOARD.rotar(BOARD.sel, 30); guardar(); } }
  function duplicarSel(){ if(BOARD.sel){ BOARD.duplicar(BOARD.sel); guardar(); } }
  function deshacer(){ if(BOARD.deshacer()){ pintarVinculos(); nota("Deshecho."); guardar(); } else nota("No hay nada que deshacer."); }

  document.addEventListener("keydown", e => {
    if($("scr-mesa").classList.contains("hidden")) return;
    const escribiendo = /INPUT|TEXTAREA/.test(document.activeElement.tagName);
    if(escribiendo) return;
    if((e.metaKey || e.ctrlKey) && e.key === "z"){ e.preventDefault(); deshacer(); }
    if(e.key === "r" && BOARD.sel) rotarSel();
    if(e.key === "d" && BOARD.sel) duplicarSel();
    if((e.key === "Backspace" || e.key === "Delete") && BOARD.sel){ e.preventDefault(); eliminarSel(); }
  });

  document.addEventListener("DOMContentLoaded", () => {
    pintarEscenarios();
    const prev = haySesion();
    if(prev){
      const aviso = document.createElement("div");
      aviso.className = "rules-box";
      aviso.style.cssText = "border-color:#d9b54a88;background:#d9b54a12";
      aviso.innerHTML = `<h3 style="color:#f0d488">Hay una sesión sin terminar</h3>
        <p style="color:#d5dce7;margin:0 0 14px">«${esc(prev.situacion.slice(0,90))}${prev.situacion.length>90?"…":""}» —
        quedó en la fase ${prev.fase+1} de 4.</p>
        <div class="btn-row" style="margin-top:0"><button class="btn" onclick="DV.retomar()">Retomar donde quedé →</button>
          <button class="btn ghost" onclick="DV.descartarSesion()">Empezar de cero</button></div>`;
      $("scr-escenario").querySelector(".wrap").appendChild(aviso);
    }
    $("in-quien").addEventListener("input", revisar);
    $("in-situacion").addEventListener("input", revisar);
  });

  return {abrirAyudaFase, abrirAyudaAdvisor, cerrarModal, elegirEscenario, volverEscenario, elegirSituacion,
          iniciar, avanzar, robarReto, enviarNarracion, responderAdvisor,
          enviarReconfiguracion, cerrar, renombrarSel, eliminarSel,
          elegirPilarConducta, pasarConducta, barajarConductas, tomarConducta, tomarJugada, voltearJugada,
          rotarSel, duplicarSel, deshacer, quitarVinc, retomar, descartarSesion};
})();
