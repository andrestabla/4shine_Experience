/* ===== Mazo de Conductas Observables · abanico, barajado y selección ===== */
const MAZO = (() => {
  const $ = id => document.getElementById(id);
  const esc = s => (s||"").replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const st = {pilar:"within", cartas:[], i:0, elegida:null, animando:false, volteada:false};

  /* ---------- el diamante selector ---------- */
  const GEO = {
    within:  {vs:"300,40 300,300 60,300",   lx:150, ly:150, ang:"◤"},
    out:     {vs:"300,40 540,300 300,300",  lx:392, ly:150, ang:"◥"},
    up:      {vs:"300,300 540,300 300,560", lx:392, ly:430, ang:"◢"},
    beyond:  {vs:"300,300 300,560 60,300",  lx:150, ly:430, ang:"◣"}
  };
  function pintarDiamante(){
    const cuenta = p => CONDUCTAS.filter(c => c.pilar === p).length;
    const q = PILARES.map(p => {
      const g = GEO[p.id], on = st.pilar === p.id ? "on" : "";
      return `<g class="q ${on}" data-p="${p.id}" onclick="MAZO.elegirPilar('${p.id}')">
        <polygon class="q-fill" points="${g.vs}" fill="${p.color}" fill-opacity=".16"/>
        <polygon class="q-edge" points="${g.vs}" fill="none" stroke="${p.color}" stroke-width="1.3" stroke-opacity=".75"/>
        <text class="q-label" x="${g.lx}" y="${g.ly}" text-anchor="middle" fill="${p.color}"
          font-size="19">${p.nombre.replace("Shine ","").toUpperCase()}</text>
        <text class="q-verbo" x="${g.lx}" y="${g.ly+19}" text-anchor="middle">${p.verbo.toUpperCase()}</text>
        <text class="q-num" x="${g.lx}" y="${g.ly+38}" text-anchor="middle">${cuenta(p.id)} conductas</text>
      </g>`;
    }).join("");
    const anillos = [230,165,100].map((r,i)=>
      `<polygon points="300,${300-r} ${300+r},300 300,${300+r} ${300-r},300" fill="none"
        stroke="#d9b54a" stroke-opacity="${.12+i*.05}" stroke-width="1" ${i===1?'stroke-dasharray="6 6"':''}/>`).join("");
    $("diamante").innerHTML = `<svg viewBox="0 0 600 600" role="img" aria-label="Diamante 4Shine: los cuatro pilares">
      ${q}${anillos}
      <polygon points="300,40 540,300 300,560 60,300" fill="none" stroke="#d9b54a" stroke-width="2" stroke-opacity=".55"/>
      <line x1="300" y1="40" x2="300" y2="560" stroke="#d9b54a" stroke-opacity=".18"/>
      <line x1="60" y1="300" x2="540" y2="300" stroke="#d9b54a" stroke-opacity=".18"/>
      <polygon points="300,278 322,300 300,322 278,300" fill="#d9b54a"/>
    </svg>`;
  }

  function elegirPilar(id){
    st.pilar = id; st.i = 0; st.elegida = null;
    st.cartas = CONDUCTAS.filter(c => c.pilar === id);
    pintarDiamante(); pintarInfo(); pintarMesa(); $("elegida").innerHTML = "";
    document.querySelector(".mesa").style.setProperty("--pc", PILARES.find(p=>p.id===id).color);
  }

  function pintarInfo(){
    const p = PILARES.find(x => x.id === st.pilar);
    const comps = [...new Set(CONDUCTAS.filter(c=>c.pilar===p.id).map(c=>c.componente))];
    const compets = [...new Set(CONDUCTAS.filter(c=>c.pilar===p.id).map(c=>c.competencia))];
    $("sel-info").innerHTML = `
      <span class="eyebrow" style="color:${p.color}">${esc(p.lema)} · ${esc(p.verbo)}</span>
      <h2>${esc(p.nombre)}</h2>
      <p class="lema">${esc(p.desc)}</p>
      <p class="desc"><b style="color:#e8eef7">${comps.length} componentes · ${compets.length} competencias · ${st.cartas.length} conductas</b> en este mazo.</p>
      <div class="ejes">
        <div class="eje"><b>Los cuadrantes son los pilares</b><p>Cada triángulo del diamante es una dimensión del liderazgo: dónde se coloca una pieza dice desde qué pilar se está mirando la situación.</p></div>
        <div class="eje"><b>Los anillos son la profundidad</b><p>Del centro al borde: pilar → componente → competencia → conducta observable. El borde es lo único que otra persona puede ver.</p></div>
      </div>`;
  }

  /* ---------- la mesa de cartas ---------- */
  const VISIBLES = 7;
  function cartaHTML(c, extra=""){
    const p = PILARES.find(x => x.id === c.pilar);
    const r = c.reto || {};
    return `<article class="carta ${extra}" style="--cc:${p.color}" data-id="${c.id}" onclick="MAZO.clicCarta('${c.id}')">
      <div class="cara recto">
        <div class="c-top"><b>${esc(p.nombre.replace("Shine ",""))} · ${esc(p.verbo)}</b><span>${c.id}</span></div>
        <div class="c-body">
          <h3>${esc(r.t || c.competencia)}</h3>
          <p class="c-cons">${esc(r.c || "")}</p>
          <p class="c-zona"><b>En el tablero</b>${esc(r.z || "")}</p>
          <p class="c-zona"><b>Para cerrar</b>${esc(r.p || "")}</p>
        </div>
        <div class="c-foot"><span>Reto</span><b>4SHINE®</b></div>
      </div>
      <div class="cara reverso">
        <div class="c-top"><b>${esc(p.nombre.replace("Shine ",""))}</b><span>${c.id}</span></div>
        <div class="rev-body">
          <span class="rombo-min"></span>
          <span class="comp">${esc(c.componente)}</span>
          <h4>${esc(c.competencia)}</h4>
          <p>${esc(c.conducta)}</p>
        </div>
        <div class="c-foot"><span>Conducta observable</span><b>4SHINE®</b></div>
      </div>
    </article>`;
  }

  function pintarMesa(){
    const p = PILARES.find(x => x.id === st.pilar);
    $("mesa-cual").textContent = `${p.nombre} · ${p.verbo}`;
    $("mesa-titulo").textContent = `${st.cartas.length} cartas en la mano`;
    pintarTabs();
    render();
  }

  function pintarTabs(){
    const cont = $("tabs-pilar"); if(!cont) return;
    cont.innerHTML = PILARES.map(p => {
      const n = CONDUCTAS.filter(c => c.pilar === p.id).length;
      return `<button class="tab ${p.id === st.pilar ? "on" : ""}" style="--tc:${p.color}"
        onclick="MAZO.elegirPilar('${p.id}')">
        <b>${esc(p.nombre.replace("Shine ",""))}</b>
        <span>${esc(p.verbo)}</span><i>${n}</i></button>`;
    }).join("");
  }
  function render(){
    const n = st.cartas.length; if(!n) return;
    let html = "";
    for(let k = VISIBLES - 1; k >= 0; k--){
      const idx = (st.i + k) % n, c = st.cartas[idx];
      const front = k === 0;
      const ang = k * 4.5, dx = k * 17, dy = k * 5, sc = 1 - k * 0.035, z = VISIBLES - k;
      html += cartaHTML(c, (front ? "frente " : "") + (front && st.volteada ? "volteada" : "")).replace('class="carta',
        `style="transform:translate(${dx}px,${dy}px) rotate(${ang}deg) scale(${sc});z-index:${z};opacity:${k === 0 ? 1 : Math.max(.18, .5 - k*0.07)}" class="carta`);
    }
    $("abanico").innerHTML = html;
    const act = st.cartas[st.i];
    $("posicion").innerHTML = `Carta <b>${st.i + 1}</b> de <b>${n}</b> · ${esc(st.volteada ? act.competencia : (act.reto?.t || act.competencia))}`;
    $("abanico").insertAdjacentHTML("beforeend",
      `<span class="volteo-hint">${st.volteada ? "Reverso · conducta observable" : "Recto · el reto"} — toque la carta para voltearla</span>`);
    $("barra").style.width = ((st.i + 1) / n * 100) + "%";
  }
  function voltear(){
    st.volteada = !st.volteada;
    const frente = $("abanico").querySelector(".carta.frente");
    if(frente) frente.classList.toggle("volteada", st.volteada);
    render();
  }
  function clicCarta(id){
    const act = st.cartas[st.i];
    if(act && act.id === id) voltear(); else elegir(id);
  }
  function siguiente(){ if(!st.cartas.length) return; st.i = (st.i + 1) % st.cartas.length; render(); }
  function anterior(){ if(!st.cartas.length) return; st.i = (st.i - 1 + st.cartas.length) % st.cartas.length; render(); }

  function barajar(){
    if(st.animando) return; st.animando = true;
    const cartas = [...$("abanico").children];
    cartas.forEach((el, k) => {
      el.style.transition = "transform .34s cubic-bezier(.5,0,.3,1),opacity .34s";
      el.style.transform = `translate(${(Math.random()*2-1)*230}px,${(Math.random()*2-1)*90}px) rotate(${(Math.random()*2-1)*38}deg) scale(.9)`;
      el.style.opacity = ".25";
    });
    setTimeout(() => {
      for(let i = st.cartas.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [st.cartas[i], st.cartas[j]] = [st.cartas[j], st.cartas[i]];
      }
      st.i = 0; render(); st.animando = false;
    }, 360);
  }

  function robar(){
    if(st.animando) return;
    st.i = Math.floor(Math.random() * st.cartas.length);
    render();
    const frente = $("abanico").lastElementChild;
    if(frente){
      frente.style.transition = "transform .5s cubic-bezier(.2,.9,.25,1)";
      frente.style.transform = "translateY(-40px) scale(1.07)";
      setTimeout(() => render(), 520);
    }
    setTimeout(() => elegir(st.cartas[st.i].id), 540);
  }

  function elegir(id){
    const c = st.cartas.find(x => x.id === id) || CONDUCTAS.find(x => x.id === id);
    if(!c) return;
    const r = c.reto || {};
    st.elegida = c; st.i = st.cartas.findIndex(x => x.id === id); render();
    const p = PILARES.find(x => x.id === c.pilar);
    $("elegida").innerHTML = `<div class="elegida-box">
      <b>Carta elegida · ${c.id}</b>
      <h3>${esc(r.t || c.competencia)}</h3>
      <p><b style="color:#f0d488">Recto · el reto:</b> ${esc(r.c || "")}</p>
      <p style="margin-top:8px"><b style="color:#f0d488">En el tablero:</b> ${esc(r.z || "")}</p>
      <p style="margin-top:14px;padding-top:14px;border-top:1px solid #ffffff1a">
        <b style="color:#f0d488">Reverso · la conducta:</b> ${esc(c.conducta)}</p>
      <div class="ruta">${esc(p.nombre)} · ${esc(p.verbo)} → ${esc(c.componente)} → ${esc(c.competencia)}</div>
    </div>`;
    $("elegida").scrollIntoView({block:"nearest", behavior:"smooth"});
  }

  document.addEventListener("keydown", e => {
    if(/INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
    if(e.key === "ArrowRight"){ e.preventDefault(); siguiente(); }
    if(e.key === "ArrowLeft"){ e.preventDefault(); anterior(); }
    if(e.key === " "){ e.preventDefault(); barajar(); }
    if(e.key.toLowerCase() === "v"){ e.preventDefault(); voltear(); }
  });

  document.addEventListener("DOMContentLoaded", () => {
    pintarDiamante(); elegirPilar("within");
  });

  return {elegirPilar, siguiente, anterior, barajar, robar, elegir, voltear, clicCarta};
})();
