/* ===== Cruza el Umbral · motor del simulador ===== */
const API = (location.hostname === "127.0.0.1" || location.hostname === "localhost")
  ? (location.port === "8765" ? "/api/advisor" : "http://127.0.0.1:8765/api/advisor")
  : "/api/advisor";

const SIM = (() => {
  const $ = id => document.getElementById(id);
  const st = {
    equipo:"", sit:null, ronda:1, movsUsados:[], movsSel:[],
    rondas:[], criterioR1:"", intentos:0, offline:false,
    timer:{id:null, seg:180, corriendo:false}
  };

  /* ---------- utilidades ---------- */
  const esc = s => (s||"").replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const pantalla = id => {
    ["scr-setup","scr-ronda","scr-canvas","scr-debrief"].forEach(s => $(s).classList.toggle("hidden", s !== id));
    window.scrollTo({top:0, behavior:"smooth"});
  };
  const mov = id => MOVIMIENTOS.find(m => m.id === id);

  /* ---------- setup ---------- */
  function pintarSituaciones(){
    $("sit-grid").innerHTML = SITUACIONES.map(s => `
      <button class="sit" data-id="${s.id}" onclick="SIM.elegirSit('${s.id}')">
        <span class="ctx">${esc(s.contexto)} · ${s.id}</span>
        <h3>${esc(s.titulo)}</h3>
        <p>${esc(s.rondas[0].slice(0,105))}…</p>
        <span class="prueba">Pone a prueba: ${esc(s.prueba)}</span>
      </button>`).join("");
  }
  function elegirSit(id){
    st.sit = SITUACIONES.find(s => s.id === id);
    document.querySelectorAll(".sit").forEach(b => b.classList.toggle("sel", b.dataset.id === id));
    revisarSetup();
  }
  function revisarSetup(){
    st.equipo = $("in-equipo").value.trim();
    const listo = st.equipo.length >= 2 && st.sit;
    $("btn-start").disabled = !listo;
    $("setup-hint").textContent = listo
      ? `Listos: ${st.sit.titulo} · ${st.sit.contexto}`
      : "Escriban el nombre del equipo y elijan una situación.";
  }

  function iniciar(){
    $("hud-equipo").innerHTML = `Equipo: <b>${esc(st.equipo)}</b>`;
    pantalla("scr-ronda");
    montarRonda();
  }

  /* ---------- ronda ---------- */
  function montarRonda(){
    const meta = RONDAS_META[st.ronda - 1];
    st.movsSel = []; st.intentos = 0;
    $("pressure-bar").style.width = meta.presion + "%";
    $("hud-ronda").innerHTML = `Ronda <b>${st.ronda}</b> de 3 · presión ${meta.presion}%`;
    $("r-tag").textContent = `${meta.etiqueta} · ${meta.nombre.toUpperCase()}`;
    $("r-nombre").textContent = ["La situación","La presión aumenta","El momento de sostener"][st.ronda-1];
    $("r-sit").textContent = `${st.sit.titulo} — ${st.sit.contexto}`;
    $("r-texto").textContent = "«" + st.sit.rondas[st.ronda-1] + "»";
    $("r-instr").innerHTML = `<b style="color:var(--gold-b)">Instrucción:</b> ${esc(meta.instruccion)}`;
    const top = $("reveal-top");
    top.textContent = ["Revelación 1 · Situación inicial","Revelación 2 · Fuerza de retorno","Revelación 3 · Umbral"][st.ronda-1];
    top.style.background = ["#3988ca","#ed8124","#c13a68"][st.ronda-1];
    $("mov-title").textContent = meta.movs === 2 ? "2 · Combinen DOS Movimientos" : "2 · Jueguen un Movimiento";
    $("in-respuesta").value = ""; $("in-pregunta").value = ""; $("in-evidencia").value = "";
    $("lbl-pregunta").textContent = "Pregunta del Movimiento";
    $("lbl-evidencia").textContent = "Evidencia producida";
    $("jugada-hint").textContent = "";
    $("av-extra").innerHTML = "";
    $("av-msg").textContent = [
      "Leo la situación y espero su respuesta. No evalúo lo que saben decir: evalúo lo que pueden sostener.",
      "La presión cambió. No pueden repetir el Movimiento anterior: amplíen la respuesta sin abandonar su criterio.",
      "Este es el umbral. Necesito dos dimensiones integradas de verdad y una conducta que puedan sostener el lunes."
    ][st.ronda-1];
    pintarSteps(); pintarMovs(); resetTimer();
  }

  function pintarSteps(){
    $("steps").innerHTML = RONDAS_META.map(m =>
      `<span class="step ${m.n===st.ronda?"on":(m.n<st.ronda?"done":"")}">${m.n<st.ronda?"✓ ":""}${m.etiqueta} · ${m.nombre}</span>`
    ).join("") + `<span class="step">Canvas</span><span class="step">Veredicto</span>`;
  }

  function pintarMovs(){
    $("mov-grid").innerHTML = MOVIMIENTOS.map(m => {
      const usado = st.movsUsados.length && st.movsUsados[st.movsUsados.length-1].includes(m.id) && st.ronda === 2;
      const sel = st.movsSel.includes(m.id);
      return `<button class="mov ${sel?"sel":""}" style="--c:${m.color}" ${usado?"disabled":""}
        onclick="SIM.toggleMov('${m.id}')">
        ${usado?'<span class="used">jugado en ronda 1</span>':''}
        <span class="dim">${esc(m.dimension)}</span>
        <h4>${m.nombre}</h4><p class="int">${esc(m.intencion)}</p></button>`;
    }).join("");
    pintarDetalle();
  }

  function pintarDetalle(){
    const cont = $("mov-detail");
    if(!st.movsSel.length){ cont.innerHTML = ""; $("lbl-pregunta").textContent = "Pregunta del Movimiento"; return; }
    cont.innerHTML = st.movsSel.map(id => { const m = mov(id);
      return `<div class="mov-detail" style="--c:${m.color}">
        <dl><dt>Carta ${m.nombre} · ${esc(m.dimension)}</dt>
        <dd style="color:${m.color};font-weight:700">${esc(m.pregunta)}</dd>
        <dt>Acción</dt><dd>${esc(m.accion)}</dd>
        <dt>Evidencia esperada</dt><dd>${esc(m.evidencia_esperada)}</dd></dl></div>`;
    }).join("");
    $("lbl-pregunta").textContent = st.movsSel.length > 1
      ? "Respuesta a las preguntas de ambas cartas"
      : `Pregunta: «${mov(st.movsSel[0]).pregunta}»`;
    $("lbl-evidencia").textContent = `Evidencia producida — esperada: ${st.movsSel.map(i=>mov(i).evidencia_esperada).join(" + ")}`;
  }

  function toggleMov(id){
    const max = RONDAS_META[st.ronda-1].movs;
    const i = st.movsSel.indexOf(id);
    if(i >= 0) st.movsSel.splice(i,1);
    else { if(st.movsSel.length >= max) st.movsSel.shift(); st.movsSel.push(id); }
    pintarMovs();
  }

  /* ---------- cronómetro ---------- */
  function resetTimer(){
    clearInterval(st.timer.id); st.timer = {id:null, seg:180, corriendo:false};
    const t = $("timer"); t.className = "timer"; pintarTimer();
    $("btn-timer").textContent = "▶ Iniciar 3 minutos";
  }
  function pintarTimer(){
    const s = Math.max(0, st.timer.seg);
    $("timer").innerHTML = `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}<small id="timer-lbl">${st.timer.seg<=0?"tiempo agotado":"conversación"}</small>`;
  }
  function toggleTimer(){
    const t = $("timer");
    if(st.timer.corriendo){ clearInterval(st.timer.id); st.timer.corriendo=false; $("btn-timer").textContent="▶ Reanudar"; t.classList.remove("run"); return; }
    st.timer.corriendo = true; $("btn-timer").textContent = "⏸ Pausar"; t.classList.add("run");
    st.timer.id = setInterval(() => {
      st.timer.seg--; pintarTimer();
      t.classList.toggle("warn", st.timer.seg <= 60 && st.timer.seg > 0);
      if(st.timer.seg <= 0){ clearInterval(st.timer.id); st.timer.corriendo=false;
        t.className = "timer out"; $("btn-timer").textContent = "↻ Reiniciar";
        if(st.timer.seg < 0){ st.timer.seg = 180; resetTimer(); }
      }
    }, 1000);
  }

  /* ---------- envío al Advisor ---------- */
  async function enviarJugada(){
    const resp = $("in-respuesta").value.trim();
    const preg = $("in-pregunta").value.trim();
    const evid = $("in-evidencia").value.trim();
    const meta = RONDAS_META[st.ronda-1];
    if(!resp || !preg || !evid || st.movsSel.length !== meta.movs){
      $("jugada-hint").textContent = st.movsSel.length !== meta.movs
        ? `Seleccionen ${meta.movs === 2 ? "dos Movimientos" : "un Movimiento"}.`
        : "Completen la respuesta, la pregunta y la evidencia.";
      return;
    }
    $("btn-enviar").disabled = true; $("jugada-hint").textContent = "";
    $("av-msg").innerHTML = `<span class="av-typing">El Advisor está evaluando su jugada <i></i><i></i><i></i></span>`;
    $("av-extra").innerHTML = "";

    const payload = {
      fase:"movimiento", equipo:st.equipo, contexto:st.sit.contexto,
      situacion_titulo:st.sit.titulo, ronda:st.ronda, ronda_nombre:meta.nombre,
      revelacion:st.sit.rondas[st.ronda-1], respuesta_caso:resp,
      respuesta_pregunta:preg, evidencia:evid, criterio_r1:st.criterioR1,
      movimientos:st.movsSel.map(id => { const m = mov(id);
        return {nombre:m.nombre, dimension:m.dimension, pregunta:m.pregunta, evidencia_esperada:m.evidencia_esperada}; }),
      historial:st.rondas.map(r => ({ronda:r.ronda, movimientos:r.movimientos, evidencia:r.evidencia}))
    };

    let out;
    try{
      const r = await fetch(API, {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(payload)});
      out = await r.json();
    }catch(e){
      out = {valido:evid.length>=25, veredicto:"No hay conexión con el Advisor. Registro la jugada localmente.",
             pregunta_sonda:"¿Qué haría visible esta decisión mañana?", coherencia:"mantiene", nota_presion:"", _modo:"offline"};
    }
    st.offline = out._modo === "offline";
    $("btn-enviar").disabled = false;
    mostrarAdvisor(out);

    if(out.valido){
      if(st.ronda === 1) st.criterioR1 = evid;
      st.rondas.push({ronda:st.ronda, ronda_nombre:meta.nombre, revelacion:st.sit.rondas[st.ronda-1],
        respuesta_caso:resp, respuesta_pregunta:preg, evidencia:evid,
        movimientos:st.movsSel.map(i => mov(i).nombre).join(" + "),
        primera:st.intentos === 0, veredicto:out.veredicto, coherencia:out.coherencia});
      st.movsUsados.push([...st.movsSel]);
      pintarLog();
      setTimeout(() => {
        if(st.ronda < 3){ st.ronda++; montarRonda(); }
        else { pantalla("scr-canvas"); $("pressure-bar").style.width = "100%"; }
      }, 2600);
    } else {
      st.intentos++;
      $("jugada-hint").textContent = "El Advisor devolvió la jugada. Ajusten la evidencia y vuelvan a presentar.";
    }
  }

  function mostrarAdvisor(o){
    $("av-msg").textContent = o.veredicto || "";
    const cohMap = {mantiene:["ok","criterio sostenido"], tensiona:["mid","criterio tensionado"], rompe:["no","criterio roto"]};
    const coh = cohMap[o.coherencia] || null;
    let html = "";
    if(o.pregunta_sonda) html += `<div class="av-sonda">“${esc(o.pregunta_sonda)}”</div>`;
    html += `<div class="av-flags">
      <span class="flag ${o.valido?"ok":"no"}">${o.valido?"✓ evidencia aceptada":"✕ evidencia devuelta"}</span>
      ${coh?`<span class="flag ${coh[0]}">${coh[1]}</span>`:""}</div>`;
    if(o.nota_presion) html += `<p class="hint" style="margin-top:12px">${esc(o.nota_presion)}</p>`;
    if(o._modo === "offline") html += `<p class="av-offline">⚠ Advisor IA no disponible: evaluación local básica.</p>`;
    $("av-extra").innerHTML = html;
  }

  function pintarLog(){
    if(!st.rondas.length) return;
    $("log-list").innerHTML = st.rondas.map(r => `
      <div class="log-item"><b>Ronda ${r.ronda} · ${esc(r.movimientos)}</b>
      <p>${esc(r.evidencia.slice(0,120))}${r.evidencia.length>120?"…":""}</p></div>`).join("");
  }

  /* ---------- veredicto ---------- */
  async function pedirVeredicto(){
    const c = {decision:$("c-decision").value.trim(), conducta:$("c-conducta").value.trim(),
      evidencia:$("c-evidencia").value.trim(), responsable:$("c-responsable").value.trim(),
      fecha:$("c-fecha").value.trim(), riesgo:$("c-riesgo").value.trim()};
    if(!c.decision || !c.conducta || !c.responsable || !c.fecha){
      $("canvas-hint").textContent = "Completen al menos decisión, conducta, responsable y fecha."; return;
    }
    $("btn-veredicto").disabled = true;
    $("canvas-hint").innerHTML = `<span class="av-typing">El Advisor revisa la partida completa <i></i><i></i><i></i></span>`;
    let out;
    try{
      const r = await fetch(API, {method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({fase:"debrief", equipo:st.equipo, contexto:st.sit.contexto,
          situacion_titulo:st.sit.titulo, prueba:st.sit.prueba, rondas:st.rondas, canvas:c})});
      out = await r.json();
    }catch(e){ out = {cruzo:false, criterios:{}, relato:"Sin conexión con el Advisor.", _modo:"offline"}; }
    $("btn-veredicto").disabled = false; $("canvas-hint").textContent = "";
    pintarDebrief(out, c);
    pantalla("scr-debrief");
  }

  function pintarDebrief(o, c){
    const nombres = {coherencia:"Coherencia", integracion:"Integración", evidencia:"Evidencia", sostenibilidad:"Sostenibilidad"};
    const crits = Object.entries(nombres).map(([k,label]) => {
      const d = (o.criterios||{})[k] || {cumple:false, razon:"Sin evaluar."};
      return `<div class="crit ${d.cumple?"si":"no"}"><b>${label}</b><span class="mark">${d.cumple?"✓":"✕"}</span>
        <p>${esc(d.razon)}</p></div>`;
    }).join("");
    const tr = st.rondas.map(r => `
      <div class="tr-round"><b>Ronda ${r.ronda} · ${esc(r.ronda_nombre)} — ${esc(r.movimientos)}</b>
        <dl>
          <dt>Revelación</dt><dd>${esc(r.revelacion)}</dd>
          <dt>Su respuesta</dt><dd>${esc(r.respuesta_caso)}</dd>
          <dt>Evidencia</dt><dd>${esc(r.evidencia)}${r.primera?"":" <i style='color:#7f8ea6'>(tras corrección del Advisor)</i>"}</dd>
          <dt>Advisor</dt><dd style="color:#b9c4d4">${esc(r.veredicto)}</dd>
        </dl></div>`).join("");
    $("debrief-body").innerHTML = `
      <div class="verdict ${o.cruzo?"cruzo":"nocruzo"}">
        <span class="eyebrow">${esc(st.sit.titulo)} · ${esc(st.equipo)}</span>
        <h2>${o.cruzo?"Cruzaron el umbral":"No cruzaron el umbral"}</h2>
        <p>${o.cruzo?"La respuesta final integró dimensiones, conservó criterio y se convirtió en una conducta verificable.":"La respuesta no alcanzó a sostenerse bajo presión máxima. Eso también es información valiosa."}</p>
      </div>
      <div class="crit-grid">${crits}</div>
      ${o.relato?`<div class="relato">${esc(o.relato)}</div>`:""}
      <div class="insight-grid">
        <div class="insight"><b>Capacidad revelada</b><p>${esc(o.capacidad_revelada||"—")}</p></div>
        <div class="insight"><b>Fuerza de retorno dominante</b><p>${esc(o.fuerza_retorno||"—")}</p></div>
        <div class="insight"><b>Qué practicar</b><p>${esc(o.recomendacion||"—")}</p></div>
      </div>
      <div class="transcript"><h3>Transcripción de la partida</h3>${tr}
        <div class="tr-round"><b>Canvas de Acción</b><dl>
          <dt>Decisión</dt><dd>${esc(c.decision)}</dd>
          <dt>Conducta</dt><dd>${esc(c.conducta)}</dd>
          <dt>Evidencia</dt><dd>${esc(c.evidencia)}</dd>
          <dt>Responsable</dt><dd>${esc(c.responsable)} · ${esc(c.fecha)}</dd>
          <dt>Riesgo</dt><dd>${esc(c.riesgo)}</dd></dl></div>
      </div>
      <div class="btn-row">
        <button class="btn" onclick="window.print()">⎙ Guardar el acta de la sesión</button>
        <button class="btn ghost" onclick="SIM.reiniciar()">Jugar otra situación</button>
      </div>`;
  }

  function reiniciar(){
    Object.assign(st, {sit:null, ronda:1, movsUsados:[], movsSel:[], rondas:[], criterioR1:"", intentos:0});
    clearInterval(st.timer.id);
    $("pressure-bar").style.width = "0%"; $("hud-ronda").textContent = ""; $("hud-equipo").textContent = "";
    ["c-decision","c-conducta","c-evidencia","c-responsable","c-fecha","c-riesgo"].forEach(i => $(i).value = "");
    document.querySelectorAll(".sit").forEach(b => b.classList.remove("sel"));
    revisarSetup(); pantalla("scr-setup");
    return false;
  }

  /* ---------- init ---------- */
  async function chequearAdvisor(){
    try{
      const r = await fetch(API, {method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({fase:"ping"})});
      if(r.ok || r.status === 400) return true;
    }catch(e){}
    return false;
  }

  document.addEventListener("DOMContentLoaded", async () => {
    pintarSituaciones();
    $("in-equipo").addEventListener("input", revisarSetup);
    const vivo = await chequearAdvisor();
    if(!vivo){
      const box = document.createElement("div");
      box.className = "rules-box";
      box.style.cssText = "border-color:#ed812488;background:#ed812412";
      box.innerHTML = `<h3 style="color:#ffb46b">⚠ El Advisor digital no está activo</h3>
        <p style="color:#d5dce7;margin:0 0 10px">La simulación funcionará, pero sin la evaluación inteligente de las jugadas.
        Para activarlo, ejecute el lanzador <b>«Iniciar simulador 4Shine.command»</b> en la carpeta del proyecto,
        o desde la Terminal:</p>
        <code style="display:block;background:#00000055;padding:12px 14px;border-radius:8px;color:#8fd6a5;font-size:.85rem">cd "Sistema de juego/simulador" &amp;&amp; python3 app.py</code>
        <p style="color:#93a2b8;font-size:.84rem;margin:12px 0 0">Después abra <b>http://127.0.0.1:8765</b></p>`;
      $("scr-setup").querySelector(".wrap").appendChild(box);
    }
  });

  return {elegirSit, iniciar, toggleMov, toggleTimer, enviarJugada, pedirVeredicto, reiniciar};
})();
