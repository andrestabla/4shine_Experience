/* ===== El Diamante Vivo · motor del tablero (Konva) ===== */
const BOARD = (() => {
  const W = 900, H = 680, CX = 450, CY = 340, R = 300;
  const CAMPOS = [
    {id:"conecta",   nombre:"CONECTA",   sub:"Relaciones que inspiran confianza", color:"#c13a68", vs:[[CX,CY],[CX,CY-R],[CX+R,CY]]},
    {id:"comprende", nombre:"COMPRENDE", sub:"Mirada empática, escucha profunda",  color:"#8b59b2", vs:[[CX,CY],[CX+R,CY],[CX,CY+R]]},
    {id:"crea",      nombre:"CREA",      sub:"Ideas y soluciones con propósito",   color:"#ed8124", vs:[[CX,CY],[CX,CY+R],[CX-R,CY]]},
    {id:"consolida", nombre:"CONSOLIDA", sub:"Compromisos que generan impacto",    color:"#3988ca", vs:[[CX,CY],[CX-R,CY],[CX,CY-R]]}
  ];
  const PALETA = {
    avatar:  {neutro:"#e8ddc8", yo:"#d9b54a", magenta:"#c13a68", morado:"#8b59b2", naranja:"#ed8124", azul:"#3988ca"},
  };

  let stage, capaFondo, capaVinculos, capaPiezas, onCambio = () => {}, onSel = () => {};
  let piezas = [], vinculos = [], seq = 0, modoConectar = null, sel = null;
  let historial = [], restaurando = false;

  /* ---------- historial (deshacer) ---------- */
  function instantanea(){
    return JSON.stringify({
      piezas: piezas.map(p => ({id:p.id, tipo:p.tipo, sub:p.sub, glifo:p.glifo, nombre:p.nombre,
                                color:p.color, label:p.label, x:p.nodo.x(), y:p.nodo.y(),
                                rot:p.nodo.rotation()})),
      vinculos: vinculos.map(v => ({...v, nodo:undefined})), seq
    });
  }
  function guardarHistorial(){
    if(restaurando) return;
    historial.push(instantanea());
    if(historial.length > 40) historial.shift();
  }
  function deshacer(){
    if(historial.length < 2) return false;
    historial.pop();                       // estado actual
    const prev = historial[historial.length - 1];
    restaurar(JSON.parse(prev));
    return true;
  }
  function restaurar(e){
    restaurando = true;
    piezas.forEach(p => p.nodo.destroy());
    piezas = []; vinculos = [];
    capaVinculos.destroyChildren();
    e.piezas.forEach(d => { const id = agregarPieza(d, d.x, d.y, d.id); 
      const p = piezas.find(x => x.id === id); if(p && d.rot) p.nodo.rotation(d.rot); });
    seq = e.seq;
    e.vinculos.forEach(v => vinculos.push({de:v.de, a:v.a, tipo:v.tipo}));
    redibujarVinculos(); capaPiezas.draw();
    restaurando = false; sincronizar(); onCambio();
  }

  /* ---------- construcción del tablero ---------- */
  function pintarFondo(){
    capaFondo.destroyChildren();
    capaFondo.add(new Konva.Rect({x:0,y:0,width:W,height:H,
      fillLinearGradientStartPoint:{x:0,y:0}, fillLinearGradientEndPoint:{x:W,y:H},
      fillLinearGradientColorStops:[0,"#0a1930",1,"#061020"]}));
    // rombo base
    capaFondo.add(new Konva.Line({points:[CX,CY-R,CX+R,CY,CX,CY+R,CX-R,CY],closed:true,
      fill:"#0d1c31", stroke:"#d9b54a", strokeWidth:2.5,
      shadowColor:"#000", shadowBlur:40, shadowOpacity:.6, shadowOffset:{x:0,y:14}}));
    // cuadrantes
    CAMPOS.forEach(c => {
      capaFondo.add(new Konva.Line({points:c.vs.flat(), closed:true, fill:c.color, opacity:.14}));
      capaFondo.add(new Konva.Line({points:c.vs.flat(), closed:true, stroke:c.color, strokeWidth:1, opacity:.45}));
    });
    // anillos concéntricos
    [225,150,75].forEach((r,i) => capaFondo.add(new Konva.Line({
      points:[CX,CY-r,CX+r,CY,CX,CY+r,CX-r,CY], closed:true,
      stroke:"#d9b54a", strokeWidth:1, opacity:.14+i*.05, dash:i===1?[6,6]:undefined})));
    // etiquetas de campo
    const pos = {conecta:[CX+128,CY-118], comprende:[CX+128,CY+96], crea:[CX-208,CY+96], consolida:[CX-208,CY-118]};
    CAMPOS.forEach(c => {
      const [x,y] = pos[c.id];
      capaFondo.add(new Konva.Text({x,y,text:c.nombre,fontSize:15,fontStyle:"bold",fontFamily:"Arial",
        fill:c.color,letterSpacing:2.5,width:180}));
      capaFondo.add(new Konva.Text({x,y:y+18,text:c.sub,fontSize:10.5,fontFamily:"Arial",
        fill:"#7f8ea6",width:180,lineHeight:1.3}));
    });
    // diamante central dorado
    capaFondo.add(new Konva.Line({points:[CX,CY-26,CX+26,CY,CX,CY+26,CX-26,CY],closed:true,
      fillLinearGradientStartPoint:{x:-26,y:-26}, fillLinearGradientEndPoint:{x:26,y:26},
      fillLinearGradientColorStops:[0,"#f0d488",.5,"#d9b54a",1,"#a8842c"],
      shadowColor:"#d9b54a", shadowBlur:22, shadowOpacity:.55}));
    capaFondo.add(new Konva.Line({points:[CX,CY-40,CX+40,CY,CX,CY+40,CX-40,CY],closed:true,
      stroke:"#f0d488", strokeWidth:1.2, opacity:.6}));
    capaFondo.draw();
  }

  /* ---------- fábricas de piezas 3D ---------- */
  function sombra(n){ n.shadowColor("#000"); n.shadowBlur(14); n.shadowOpacity(.5); n.shadowOffset({x:3,y:7}); return n; }

  function crearAvatar(color){
    const g = new Konva.Group();
    g.add(sombra(new Konva.Shape({sceneFunc:(c,s)=>{ // cuerpo cónico
      c.beginPath(); c.moveTo(-11,20); c.bezierCurveTo(-11,2,-7,-4,0,-4);
      c.bezierCurveTo(7,-4,11,2,11,20); c.closePath(); c.fillStrokeShape(s);},
      fillLinearGradientStartPoint:{x:-11,y:0}, fillLinearGradientEndPoint:{x:11,y:0},
      fillLinearGradientColorStops:[0,shade(color,-30),.45,color,1,shade(color,-52)]})));
    g.add(new Konva.Circle({y:-13,radius:9.5,
      fillRadialGradientStartPoint:{x:-3,y:-4}, fillRadialGradientStartRadius:1,
      fillRadialGradientEndPoint:{x:0,y:0}, fillRadialGradientEndRadius:12,
      fillRadialGradientColorStops:[0,shade(color,42),.6,color,1,shade(color,-40)]}));
    g.add(new Konva.Ellipse({y:-16,x:-3,radiusX:3.2,radiusY:2,fill:"#ffffff",opacity:.35}));
    return g;
  }
  function crearCubo(color){
    const g = new Konva.Group(), s = 15;
    g.add(sombra(new Konva.Line({points:[0,-s,s*1.15,-s/2,s*1.15,s/2,0,s,-s*1.15,s/2,-s*1.15,-s/2],closed:true,fill:shade(color,-45)})));
    g.add(new Konva.Line({points:[0,-s,s*1.15,-s/2,0,0,-s*1.15,-s/2],closed:true,fill:shade(color,30)}));   // cara sup.
    g.add(new Konva.Line({points:[-s*1.15,-s/2,0,0,0,s,-s*1.15,s/2],closed:true,fill:shade(color,-18)}));   // izq.
    g.add(new Konva.Line({points:[s*1.15,-s/2,s*1.15,s/2,0,s,0,0],closed:true,fill:shade(color,-40)}));     // der.
    return g;
  }
  function crearPiramide(color){
    const g = new Konva.Group();
    g.add(sombra(new Konva.Line({points:[0,-22,17,16,-17,16],closed:true,fill:shade(color,-38)})));
    g.add(new Konva.Line({points:[0,-22,17,16,0,9],closed:true,fill:shade(color,-12)}));
    g.add(new Konva.Line({points:[0,-22,0,9,-17,16],closed:true,fill:shade(color,26)}));
    return g;
  }
  function crearArco(color){
    const g = new Konva.Group();
    g.add(sombra(new Konva.Shape({sceneFunc:(c,s)=>{
      c.beginPath(); c.moveTo(-19,17); c.lineTo(-19,0); c.arc(0,0,19,Math.PI,0,false);
      c.lineTo(19,17); c.lineTo(10,17); c.lineTo(10,2); c.arc(0,2,10,0,Math.PI,true);
      c.lineTo(-10,17); c.closePath(); c.fillStrokeShape(s);},
      fillLinearGradientStartPoint:{x:-19,y:-19}, fillLinearGradientEndPoint:{x:19,y:17},
      fillLinearGradientColorStops:[0,shade(color,32),.55,color,1,shade(color,-42)]})));
    return g;
  }
  function crearCilindro(color){
    const g = new Konva.Group();
    g.add(sombra(new Konva.Rect({x:-11,y:-14,width:22,height:28,
      fillLinearGradientStartPoint:{x:-11,y:0}, fillLinearGradientEndPoint:{x:11,y:0},
      fillLinearGradientColorStops:[0,shade(color,-34),.4,color,1,shade(color,-46)]})));
    g.add(new Konva.Ellipse({y:-14,radiusX:11,radiusY:4.2,fill:shade(color,30)}));
    g.add(new Konva.Ellipse({y:14,radiusX:11,radiusY:4.2,fill:shade(color,-48)}));
    return g;
  }
  function crearMuro(color){
    const g = new Konva.Group();
    g.add(sombra(new Konva.Rect({x:-24,y:-13,width:48,height:26,cornerRadius:2,
      fillLinearGradientStartPoint:{x:0,y:-13}, fillLinearGradientEndPoint:{x:0,y:13},
      fillLinearGradientColorStops:[0,shade(color,18),1,shade(color,-46)]})));
    [-8,0,8].forEach(o => g.add(new Konva.Line({points:[-24,o,24,o],stroke:shade(color,-60),strokeWidth:1,opacity:.55})));
    [[-12,-8],[12,-8],[0,0],[-12,8],[12,8]].forEach(([x,y]) =>
      g.add(new Konva.Line({points:[x,y-8,x,y],stroke:shade(color,-60),strokeWidth:1,opacity:.45})));
    return g;
  }
  function crearFicha(tipo, glifo, color){
    const g = new Konva.Group();
    const base = tipo === "tension"
      ? new Konva.RegularPolygon({sides:6,radius:15,rotation:90,
          fillRadialGradientStartPoint:{x:-4,y:-5}, fillRadialGradientStartRadius:1,
          fillRadialGradientEndPoint:{x:0,y:0}, fillRadialGradientEndRadius:18,
          fillRadialGradientColorStops:[0,shade(color,36),1,shade(color,-30)]})
      : new Konva.Circle({radius:14,
          fillRadialGradientStartPoint:{x:-4,y:-5}, fillRadialGradientStartRadius:1,
          fillRadialGradientEndPoint:{x:0,y:0}, fillRadialGradientEndRadius:17,
          fillRadialGradientColorStops:[0,shade(color,36),1,shade(color,-30)]});
    g.add(sombra(base));
    g.add(new Konva.Text({text:glifo,fontSize:15,fontFamily:"Arial",fill:"#fff",
      width:34,align:"center",x:-17,y:-8,listening:false}));
    return g;
  }
  function shade(hex,p){
    const n=parseInt(hex.slice(1),16); let r=n>>16,g=(n>>8)&255,b=n&255;
    const f=v=>Math.max(0,Math.min(255,Math.round(v+(p>0?(255-v)*p/100:v*p/100))));
    return "#"+[f(r),f(g),f(b)].map(v=>v.toString(16).padStart(2,"0")).join("");
  }

  const FABRICA = {avatar:crearAvatar, cubo:crearCubo, piramide:crearPiramide, arco:crearArco,
                   cilindro:crearCilindro, muro:crearMuro};

  /* ---------- API de piezas ---------- */
  function agregarPieza(def, x, y, idFijo){
    const id = idFijo || ("p" + (++seq));
    const g = new Konva.Group({x, y, draggable:true, id});
    const forma = def.tipo === "ficha"
      ? crearFicha(def.sub, def.glifo, def.color)
      : (FABRICA[def.tipo] || crearCubo)(def.color);
    g.add(forma);
    const etiqueta = new Konva.Text({text:def.label||"", fontSize:11.5, fontFamily:"Arial", fontStyle:"bold",
      fill:"#e8eef7", width:150, x:-75, y:def.tipo==="ficha"?20:28, align:"center", listening:false,
      shadowColor:"#000", shadowBlur:5, shadowOpacity:.9});
    g.add(etiqueta);
    g.on("dragstart", () => { g.moveToTop(); g.opacity(.92); });
    g.on("dragend", () => { g.opacity(1); sincronizar(); guardarHistorial(); onCambio(); });
    g.on("dragmove", () => { redibujarVinculos(); });
    g.on("click tap", e => { e.cancelBubble = true; clicPieza(id); });
    g.on("mouseenter", () => stage.container().style.cursor = "grab");
    g.on("mouseleave", () => stage.container().style.cursor = "default");
    capaPiezas.add(g);
    piezas.push({id, ...def, nodo:g, etiquetaNodo:etiqueta});
    capaPiezas.draw(); sincronizar(); guardarHistorial(); onCambio();
    return id;
  }

  function clicPieza(id){
    if(modoConectar){
      if(!modoConectar.desde){ modoConectar.desde = id; marcarSel(id); }
      else if(modoConectar.desde !== id){
        conectar(modoConectar.desde, id, modoConectar.tipo);
        modoConectar = null; marcarSel(null); onSel(null, {conectorCreado:true});
      }
      return;
    }
    sel = id; marcarSel(id); onSel(piezas.find(p => p.id === id));
  }

  function marcarSel(id){
    piezas.forEach(p => {
      const f = p.nodo.getChildren()[0];
      if(p.id === id){ p.nodo.scale({x:1.12,y:1.12}); f.shadowColor("#d9b54a"); f.shadowBlur(24); f.shadowOpacity(.95); }
      else { p.nodo.scale({x:1,y:1}); f.shadowColor("#000"); f.shadowBlur(14); f.shadowOpacity(.5); }
    });
    capaPiezas.draw();
  }

  function rotar(id, grados){
    const p = piezas.find(x => x.id === id); if(!p) return;
    p.nodo.rotation((p.nodo.rotation() + grados) % 360);
    p.etiquetaNodo.rotation(-p.nodo.rotation());
    capaPiezas.draw(); guardarHistorial(); onCambio();
  }
  function duplicar(id){
    const p = piezas.find(x => x.id === id); if(!p) return null;
    const def = {tipo:p.tipo, sub:p.sub, glifo:p.glifo, nombre:p.nombre, color:p.color, label:p.label};
    return agregarPieza(def, p.nodo.x() + 46, p.nodo.y() + 34);
  }
  function renombrar(id, texto){
    const p = piezas.find(x => x.id === id); if(!p) return;
    p.label = texto; p.etiquetaNodo.text(texto); capaPiezas.draw(); sincronizar(); guardarHistorial(); onCambio();
  }
  function eliminar(id){
    const p = piezas.find(x => x.id === id); if(!p) return;
    vinculos = vinculos.filter(v => { if(v.de===id||v.a===id){ v.nodo?.destroy(); return false; } return true; });
    p.nodo.destroy(); piezas = piezas.filter(x => x.id !== id);
    sel = null; capaPiezas.draw(); redibujarVinculos(); sincronizar(); guardarHistorial(); onCambio(); onSel(null);
  }
  function iniciarConexion(tipo){ modoConectar = {tipo, desde:null}; marcarSel(null); }
  function cancelarConexion(){ modoConectar = null; marcarSel(null); }

  const TIPOS_VINC = {
    solido:{color:"#e8ddc8", dash:null,   label:"vínculo activo"},
    acuerdo:{color:"#3988ca", dash:null,  label:"acuerdo claro"},
    tenso:{color:"#c8503f", dash:[9,6],   label:"vínculo tenso"},
    revision:{color:"#8b59b2", dash:[3,5],label:"en revisión"},
    roto:{color:"#6b7688", dash:[2,8],    label:"vínculo roto"}
  };
  function conectar(de, a, tipo){
    if(vinculos.some(v => (v.de===de&&v.a===a)||(v.de===a&&v.a===de))) return;
    vinculos.push({de, a, tipo}); redibujarVinculos(); sincronizar(); guardarHistorial(); onCambio();
  }
  function redibujarVinculos(){
    capaVinculos.destroyChildren();
    vinculos.forEach(v => {
      const A = piezas.find(p=>p.id===v.de), B = piezas.find(p=>p.id===v.a);
      if(!A||!B) return;
      const t = TIPOS_VINC[v.tipo] || TIPOS_VINC.solido;
      const l = new Konva.Line({points:[A.nodo.x(),A.nodo.y(),B.nodo.x(),B.nodo.y()],
        stroke:t.color, strokeWidth:3.4, dash:t.dash, opacity:.9, lineCap:"round",
        shadowColor:"#000", shadowBlur:6, shadowOpacity:.5});
      capaVinculos.add(l);
      [[A,1],[B,-1]].forEach(([N]) => capaVinculos.add(new Konva.Circle({
        x:N.nodo.x(), y:N.nodo.y(), radius:4.5, fill:t.color, shadowColor:"#000", shadowBlur:4, shadowOpacity:.6})));
    });
    capaVinculos.draw();
  }
  function quitarVinculo(i){ vinculos.splice(i,1); redibujarVinculos(); sincronizar(); guardarHistorial(); onCambio(); }

  /* ---------- lectura de la escena ---------- */
  function campoDe(x, y){
    const dx = x - CX, dy = y - CY;
    if(Math.abs(dx) + Math.abs(dy) > R) return "fuera";
    if(Math.abs(dx) + Math.abs(dy) < 34) return "centro";
    if(dx >= 0 && dy <= 0) return "conecta";
    if(dx >= 0 && dy > 0) return "comprende";
    if(dx < 0 && dy > 0) return "crea";
    return "consolida";
  }
  function sincronizar(){
    piezas.forEach(p => { p.x = Math.round(p.nodo.x()); p.y = Math.round(p.nodo.y()); p.campo = campoDe(p.x,p.y); });
  }
  function estado(){
    sincronizar();
    return {
      piezas: piezas.map(p => ({id:p.id,tipo:p.tipo,sub:p.sub,nombre:p.nombre,label:p.label,campo:p.campo,x:p.x,y:p.y})),
      vinculos: vinculos.map(v => ({de:v.de,a:v.a,tipo:v.tipo}))
    };
  }
  function describir(){
    sincronizar();
    if(!piezas.length) return "(el tablero está vacío)";
    const nom = p => (p.label ? `«${p.label}»` : p.nombre) + (p.tipo!=="ficha"?` (${p.nombre.toLowerCase()})`:"");
    const porCampo = {centro:[],conecta:[],comprende:[],crea:[],consolida:[],fuera:[]};
    piezas.forEach(p => porCampo[p.campo].push(nom(p)));
    let t = [];
    const etiquetas = {centro:"En el CENTRO del diamante", conecta:"En CONECTA", comprende:"En COMPRENDE",
                       crea:"En CREA", consolida:"En CONSOLIDA", fuera:"Fuera del tablero"};
    Object.entries(porCampo).forEach(([k,v]) => { if(v.length) t.push(`${etiquetas[k]}: ${v.join(", ")}.`); });
    if(vinculos.length){
      t.push("Vínculos: " + vinculos.map(v => {
        const A = piezas.find(p=>p.id===v.de), B = piezas.find(p=>p.id===v.a);
        return A&&B ? `${A.label||A.nombre} — ${B.label||B.nombre} (${TIPOS_VINC[v.tipo].label})` : "";
      }).filter(Boolean).join("; ") + ".");
    }
    const dist = piezas.filter(p => p.tipo!=="ficha" && p.campo!=="fuera").map(p => {
      const d = Math.round(Math.hypot(p.x-CX, p.y-CY));
      const q = d < 70 ? "muy cerca del centro" : d < 170 ? "a media distancia del centro" : "lejos del centro";
      return `${p.label||p.nombre} ${q}`;
    });
    if(dist.length) t.push("Distancias: " + dist.join("; ") + ".");
    return t.join(" ");
  }
  function huella(){ sincronizar(); return JSON.stringify(estado()); }
  function exportarPNG(){ return stage.toDataURL({pixelRatio:2}); }
  function limpiar(){
    piezas.forEach(p => p.nodo.destroy()); piezas = []; vinculos = [];
    capaVinculos.destroyChildren(); capaPiezas.draw(); capaVinculos.draw(); onCambio();
  }

  /* ---------- init ---------- */
  function init(contenedor, cbCambio, cbSel){
    onCambio = cbCambio || onCambio; onSel = cbSel || onSel;
    stage = new Konva.Stage({container:contenedor, width:W, height:H});
    capaFondo = new Konva.Layer(); capaVinculos = new Konva.Layer(); capaPiezas = new Konva.Layer();
    stage.add(capaFondo, capaVinculos, capaPiezas);
    pintarFondo();
    stage.on("click tap", e => { if(e.target === stage){ sel = null; marcarSel(null); onSel(null); if(modoConectar) cancelarConexion(); } });
    ajustar(); window.addEventListener("resize", ajustar);
    return stage;
  }
  function ajustar(){
    const cont = stage.container(), ancho = cont.offsetWidth;
    const esc = Math.min(1, ancho / W);
    stage.width(W*esc); stage.height(H*esc); stage.scale({x:esc,y:esc}); stage.draw();
  }
  function posPuntero(){
    const p = stage.getPointerPosition(); if(!p) return null;
    const e = stage.scaleX(); return {x:p.x/e, y:p.y/e};
  }

  function serializar(){ return instantanea(); }
  function cargar(json){ try{ restaurar(JSON.parse(json)); historial = [instantanea()]; return true; }catch(e){ return false; } }

  return {init, agregarPieza, renombrar, eliminar, rotar, duplicar, deshacer,
          iniciarConexion, cancelarConexion, conectar, quitarVinculo,
          estado, describir, huella, exportarPNG, limpiar, posPuntero, serializar, cargar,
          campoDe, TIPOS_VINC, CAMPOS, PALETA, W, H, CX, CY,
          get vinculos(){return vinculos}, get sel(){return sel},
          get puedeDeshacer(){return historial.length > 1}};
})();
