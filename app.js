'use strict';
/* Casa Hogar Cintia Botto · Almanaque administrativo local
   Compatible con la clave de almacenamiento de la versión anterior. */
const STORAGE = 'cintia-botto-guardias-v3';
const ACCOUNT_STORAGE = 'cintia-botto-guardias-users-v1';
const SESSION = 'cintia-botto-guardias-session-v1';
const SEED_ASSIGNMENTS = [
  {
    "id": "original-17-morning",
    "date": "2026-10-17",
    "templateId": "morning",
    "staffId": "marisol",
    "start": "07:00",
    "end": "15:00",
    "note": ""
  },
  {
    "id": "original-17-afternoon",
    "date": "2026-10-17",
    "templateId": "afternoon",
    "staffId": "pochi",
    "start": "15:00",
    "end": "23:00",
    "note": ""
  },
  {
    "id": "original-17-night",
    "date": "2026-10-17",
    "templateId": "night",
    "staffId": "joha",
    "start": "23:00",
    "end": "07:00",
    "note": ""
  },
  {
    "id": "original-18-morning",
    "date": "2026-10-18",
    "templateId": "morning",
    "staffId": "pochi",
    "start": "07:00",
    "end": "15:00",
    "note": ""
  },
  {
    "id": "original-18-afternoon",
    "date": "2026-10-18",
    "templateId": "afternoon",
    "staffId": "joha",
    "start": "15:00",
    "end": "23:00",
    "note": ""
  },
  {
    "id": "original-18-night",
    "date": "2026-10-18",
    "templateId": "night",
    "staffId": "marisol",
    "start": "23:00",
    "end": "07:00",
    "note": ""
  },
  {
    "id": "original-19-morning",
    "date": "2026-10-19",
    "templateId": "morning",
    "staffId": "joha",
    "start": "07:00",
    "end": "15:00",
    "note": ""
  },
  {
    "id": "original-19-afternoon",
    "date": "2026-10-19",
    "templateId": "afternoon",
    "staffId": "marisol",
    "start": "15:00",
    "end": "23:00",
    "note": ""
  },
  {
    "id": "original-19-night",
    "date": "2026-10-19",
    "templateId": "night",
    "staffId": "pochi",
    "start": "23:00",
    "end": "07:00",
    "note": ""
  },
  {
    "id": "original-20-morning",
    "date": "2026-10-20",
    "templateId": "morning",
    "staffId": "marisol",
    "start": "07:00",
    "end": "15:00",
    "note": ""
  },
  {
    "id": "original-20-afternoon",
    "date": "2026-10-20",
    "templateId": "afternoon",
    "staffId": "pochi",
    "start": "15:00",
    "end": "23:00",
    "note": ""
  },
  {
    "id": "original-20-night",
    "date": "2026-10-20",
    "templateId": "night",
    "staffId": "joha",
    "start": "23:00",
    "end": "07:00",
    "note": ""
  },
  {
    "id": "original-21-morning",
    "date": "2026-10-21",
    "templateId": "morning",
    "staffId": "pochi",
    "start": "07:00",
    "end": "15:00",
    "note": ""
  },
  {
    "id": "original-21-afternoon",
    "date": "2026-10-21",
    "templateId": "afternoon",
    "staffId": "joha",
    "start": "15:00",
    "end": "23:00",
    "note": ""
  },
  {
    "id": "original-21-night",
    "date": "2026-10-21",
    "templateId": "night",
    "staffId": "marisol",
    "start": "23:00",
    "end": "07:00",
    "note": ""
  },
  {
    "id": "original-22-morning",
    "date": "2026-10-22",
    "templateId": "morning",
    "staffId": "joha",
    "start": "07:00",
    "end": "15:00",
    "note": ""
  },
  {
    "id": "original-22-afternoon",
    "date": "2026-10-22",
    "templateId": "afternoon",
    "staffId": "marisol",
    "start": "15:00",
    "end": "23:00",
    "note": ""
  },
  {
    "id": "original-22-night",
    "date": "2026-10-22",
    "templateId": "night",
    "staffId": "pochi",
    "start": "23:00",
    "end": "07:00",
    "note": ""
  },
  {
    "id": "original-23-morning",
    "date": "2026-10-23",
    "templateId": "morning",
    "staffId": "marisol",
    "start": "07:00",
    "end": "15:00",
    "note": ""
  },
  {
    "id": "original-23-afternoon",
    "date": "2026-10-23",
    "templateId": "afternoon",
    "staffId": "pochi",
    "start": "15:00",
    "end": "23:00",
    "note": ""
  },
  {
    "id": "original-23-night",
    "date": "2026-10-23",
    "templateId": "night",
    "staffId": "joha",
    "start": "23:00",
    "end": "07:00",
    "note": ""
  },
  {
    "id": "original-24-morning",
    "date": "2026-10-24",
    "templateId": "morning",
    "staffId": "pochi",
    "start": "07:00",
    "end": "15:00",
    "note": ""
  },
  {
    "id": "original-24-afternoon",
    "date": "2026-10-24",
    "templateId": "afternoon",
    "staffId": "joha",
    "start": "15:00",
    "end": "23:00",
    "note": ""
  },
  {
    "id": "original-24-night",
    "date": "2026-10-24",
    "templateId": "night",
    "staffId": "marisol",
    "start": "23:00",
    "end": "07:00",
    "note": ""
  },
  {
    "id": "original-25-morning",
    "date": "2026-10-25",
    "templateId": "morning",
    "staffId": "joha",
    "start": "07:00",
    "end": "15:00",
    "note": ""
  },
  {
    "id": "original-25-afternoon",
    "date": "2026-10-25",
    "templateId": "afternoon",
    "staffId": "marisol",
    "start": "15:00",
    "end": "23:00",
    "note": ""
  },
  {
    "id": "original-25-night",
    "date": "2026-10-25",
    "templateId": "night",
    "staffId": "pochi",
    "start": "23:00",
    "end": "07:00",
    "note": ""
  },
  {
    "id": "original-26-morning",
    "date": "2026-10-26",
    "templateId": "morning",
    "staffId": "marisol",
    "start": "07:00",
    "end": "15:00",
    "note": ""
  },
  {
    "id": "original-26-afternoon",
    "date": "2026-10-26",
    "templateId": "afternoon",
    "staffId": "pochi",
    "start": "15:00",
    "end": "23:00",
    "note": ""
  },
  {
    "id": "original-26-night",
    "date": "2026-10-26",
    "templateId": "night",
    "staffId": "joha",
    "start": "23:00",
    "end": "07:00",
    "note": ""
  },
  {
    "id": "original-27-morning",
    "date": "2026-10-27",
    "templateId": "morning",
    "staffId": "joha",
    "start": "07:00",
    "end": "15:00",
    "note": ""
  },
  {
    "id": "original-27-afternoon",
    "date": "2026-10-27",
    "templateId": "afternoon",
    "staffId": "pochi",
    "start": "15:00",
    "end": "23:00",
    "note": ""
  },
  {
    "id": "original-27-night",
    "date": "2026-10-27",
    "templateId": "night",
    "staffId": "marisol",
    "start": "23:00",
    "end": "07:00",
    "note": ""
  },
  {
    "id": "original-28-morning",
    "date": "2026-10-28",
    "templateId": "morning",
    "staffId": "joha",
    "start": "07:00",
    "end": "15:00",
    "note": ""
  },
  {
    "id": "original-28-afternoon",
    "date": "2026-10-28",
    "templateId": "afternoon",
    "staffId": "marisol",
    "start": "15:00",
    "end": "23:00",
    "note": ""
  },
  {
    "id": "original-28-night",
    "date": "2026-10-28",
    "templateId": "night",
    "staffId": "pochi",
    "start": "23:00",
    "end": "07:00",
    "note": ""
  },
  {
    "id": "original-29-morning",
    "date": "2026-10-29",
    "templateId": "morning",
    "staffId": "marisol",
    "start": "07:00",
    "end": "15:00",
    "note": ""
  },
  {
    "id": "original-29-afternoon",
    "date": "2026-10-29",
    "templateId": "afternoon",
    "staffId": "joha",
    "start": "15:00",
    "end": "23:00",
    "note": ""
  },
  {
    "id": "original-29-night",
    "date": "2026-10-29",
    "templateId": "night",
    "staffId": "pochi",
    "start": "23:00",
    "end": "07:00",
    "note": ""
  },
  {
    "id": "original-30-morning",
    "date": "2026-10-30",
    "templateId": "morning",
    "staffId": "pochi",
    "start": "07:00",
    "end": "15:00",
    "note": ""
  },
  {
    "id": "original-30-afternoon",
    "date": "2026-10-30",
    "templateId": "afternoon",
    "staffId": "joha",
    "start": "15:00",
    "end": "23:00",
    "note": ""
  },
  {
    "id": "original-30-night",
    "date": "2026-10-30",
    "templateId": "night",
    "staffId": "marisol",
    "start": "23:00",
    "end": "07:00",
    "note": ""
  },
  {
    "id": "original-31-morning",
    "date": "2026-10-31",
    "templateId": "morning",
    "staffId": "joha",
    "start": "07:00",
    "end": "15:00",
    "note": ""
  },
  {
    "id": "original-31-afternoon",
    "date": "2026-10-31",
    "templateId": "afternoon",
    "staffId": "marisol",
    "start": "15:00",
    "end": "23:00",
    "note": ""
  },
  {
    "id": "original-31-night",
    "date": "2026-10-31",
    "templateId": "night",
    "staffId": "pochi",
    "start": "23:00",
    "end": "07:00",
    "note": ""
  }
];
const SEED = {
  version:3, facility:'Casa Hogar Cintia Botto', periodStart:'2026-10-17', periodEnd:'2026-10-31',
  minRest:12,maxConsecutive:6,weeklyLimit:48,
  staff:[
    {id:'marisol',name:'Marisol',color:'#cc5687',active:true,notes:''},
    {id:'pochi',name:'Pochi',color:'#517cbe',active:true,notes:''},
    {id:'joha',name:'Joha',color:'#249981',active:true,notes:''}
  ],
  templates:[
    {id:'morning',name:'Mañana',start:'07:00',end:'15:00'},
    {id:'afternoon',name:'Tarde',start:'15:00',end:'23:00'},
    {id:'night',name:'Noche',start:'23:00',end:'07:00'}
  ],
  assignments:SEED_ASSIGNMENTS,publishedSnapshot:null,publishedAt:null,history:[],updatedAt:null
};
const SVG = {
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  list:'<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/>',
  people:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  chart:'<path d="M3 3v18h18M7 16v-4M12 16V8M17 16V5"/>',
  shield:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  history:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  edit:'<path d="m16 5 3 3M4 20l4.5-1 11-11a2.12 2.12 0 0 0-3-3l-11 11L4 20Z"/>',
  trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 10v6M14 10v6"/>',
  camera:'<path d="M14 4H9l-2 3H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-3-3Z"/><circle cx="12" cy="13" r="3"/>',
  chevronLeft:'<path d="m15 18-6-6 6-6"/>',chevronRight:'<path d="m9 18 6-6-6-6"/>',
  download:'<path d="M12 3v12m-4-4 4 4 4-4M4 17v4h16v-4"/>',
  upload:'<path d="M12 21V9m-4 4 4-4 4 4M4 7V3h16v4"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  close:'<path d="M18 6 6 18M6 6l12 12"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  settings:'<path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/><path d="m4 12-1-2 2-3 2 1 2-2V4h4v2l2 2 2-1 2 3-1 2 1 2-2 3-2-1-2 2v2H9v-2l-2-2-2 1-2-3 1-2Z"/>',
  check:'<path d="M5 12l4 4L19 6"/>',
  logout:'<path d="M10 17l5-5-5-5M15 12H3M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7"/>',
  filter:'<path d="M4 7h16M7 12h10M10 17h4"/>',
  information:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
  save:'<path d="M4 3h14l3 3v15H3V3h1Z"/><path d="M7 3v6h10V3M7 21v-8h10v8"/>'
};
function icon(id){return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8">${SVG[id]||SVG.calendar}</svg>`;}
const $ = (selector,root=document)=>root.querySelector(selector);
const $$ = (selector,root=document)=>[...root.querySelectorAll(selector)];
const esc = value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const copy = obj=>JSON.parse(JSON.stringify(obj));
const id = prefix=>prefix+'-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,8);
const validDate = s=>/^\d{4}-\d{2}-\d{2}$/.test(String(s))&&!Number.isNaN(new Date(s+'T12:00:00').getTime());
const dateObj = s=>new Date(s+'T12:00:00');
const dateISO = d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const plusDays = (s,n)=>{const d=dateObj(s);d.setDate(d.getDate()+n);return dateISO(d);};
const formatDate=(date,style='long')=>validDate(date)?dateObj(date).toLocaleDateString('es-AR',style==='long'?{weekday:'long',day:'numeric',month:'long',year:'numeric'}:{day:'2-digit',month:'2-digit',year:'numeric'}):date;
const cap=s=>s.charAt(0).toLocaleUpperCase('es-AR')+s.slice(1);
const formatMonth=s=>cap(dateObj(s).toLocaleDateString('es-AR',{month:'long',year:'numeric'}));
const hexColor=color=>/^#[0-9a-f]{6}$/i.test(color||'')?color:'#a44570';
const initials=name=>String(name||'?').split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase();
function readDB(){try{const raw=localStorage.getItem(STORAGE);if(raw){const data=JSON.parse(raw);if(data?.version===3&&Array.isArray(data.assignments)&&Array.isArray(data.staff)&&Array.isArray(data.templates)){return {...copy(SEED),...data};}}}catch(e){console.warn('Datos anteriores ilegibles',e);}return copy(SEED);}
function readAccounts(){try{const found=JSON.parse(localStorage.getItem(ACCOUNT_STORAGE)||'null');if(Array.isArray(found)&&found.length)return found;}catch(e){}return [{id:'default-botto',username:'botto',password:'botto',role:'admin',active:true}];}
function readSession(){try{const found=JSON.parse(sessionStorage.getItem(SESSION)||'null');return found?.id?found:null;}catch(e){return null;}}
let resumeDayAfterLogin=false;let db=readDB(),accounts=readAccounts(),session=readSession(),tab='calendar',month=(validDate(db.periodStart)?db.periodStart:'2026-10-17').slice(0,7),selectedDate=validDate(db.periodStart)?db.periodStart:'2026-10-17',mobileMenu=false,filterStaff='',filterText='',filterDate='';
const admin=()=>!!session&&accounts.some(a=>a.id===session.id&&a.active!==false&&a.role==='admin');
const staff=id=>db.staff.find(s=>s.id===id);
const template=id=>db.templates.find(t=>t.id===id);
const shiftsOn=date=>db.assignments.filter(a=>a.date===date).sort((a,b)=>a.start.localeCompare(b.start));
const duration=a=>{if(!a)return 0;const [h,m]=(a.start||'00:00').split(':').map(Number),[he,me]=(a.end||'00:00').split(':').map(Number);let dif=(he*60+me)-(h*60+m);if(dif<=0)dif+=24*60;return +(dif/60).toFixed(1);};
function totals(){const list=db.assignments.filter(a=>a.date>=db.periodStart&&a.date<=db.periodEnd);return {shifts:list.length,team:db.staff.filter(s=>s.active!==false).length,hours:list.reduce((s,a)=>s+duration(a),0)};}
function changed(action){db.updatedAt=new Date().toISOString();db.history=Array.isArray(db.history)?db.history:[];db.history.unshift({id:id('h'),at:db.updatedAt,by:session?.username||'Sistema',action});db.history=db.history.slice(0,150);try{localStorage.setItem(STORAGE,JSON.stringify(db));}catch(err){notify('No se pudo guardar. Descargá un respaldo JSON.','error');}render();}
function saveAccounts(){try{localStorage.setItem(ACCOUNT_STORAGE,JSON.stringify(accounts));}catch(e){notify('No se pudieron guardar las cuentas.','error');}}
function notify(message,type='normal'){const root=$('#toast-root');root.innerHTML=`<div class="toast ${type==='error'?'error':''}">${esc(message)}</div>`;clearTimeout(notify.timer);notify.timer=setTimeout(()=>{root.innerHTML='';},3600);}
const btn=(label,act,cls='',props='')=>`<button type="button" class="btn ${cls}" data-action="${act}" ${props}>${label}</button>`;
const iconBtn=(name,act,props='')=>btn(icon(name),act,'icon-btn',props);
const nav=[['calendar','calendar','Almanaque'],['shifts','list','Guardias'],['staff','people','Trabajadoras'],['reports','chart','Informes'],['accounts','shield','Accesos'],['history','history','Actividad']];
function render(){if(!admin()&&!['calendar','shifts','reports'].includes(tab))tab='calendar';if(!validDate(selectedDate))selectedDate=db.periodStart;const title={calendar:'Almanaque general',shifts:'Gestión de guardias',staff:'Trabajadoras',reports:'Informes',accounts:'Usuarios y accesos',history:'Registro de actividad'}[tab];
 $('#app').innerHTML=`<div class="app-shell"><aside class="sidebar ${mobileMenu?'open':''}" id="sidebar"><div class="brand"><div class="brand-mark">CB</div><div><div class="brand-name">Casa Hogar<br>Cintia Botto</div><div class="brand-sub">Organización de guardias</div></div></div><div class="nav-group">${admin()?'Administración':'Consultas'}</div><nav class="sidebar-nav" aria-label="Navegación">${nav.filter(n=>admin()||['calendar','shifts','reports'].includes(n[0])).map(([key,ico,label])=>`<button type="button" class="nav-link ${tab===key?'active':''}" data-nav="${key}" ${tab===key?'aria-current="page"':''}>${icon(ico)}<span>${label}</span></button>`).join('')}</nav><div class="sidebar-foot"><div class="storage-hint">${icon('check')}<span>Guardado local en este navegador. Los cambios no se comparten con otros dispositivos.</span></div></div></aside><div class="mobile-scrim ${mobileMenu?'open':''}" id="mobile-scrim"></div><div class="main-shell"><header class="topbar"><div class="breadcrumb"><button class="mobile-toggle" id="menu-toggle" type="button" aria-label="Abrir menú">${icon('menu')}</button><div>Casa Hogar Cintia Botto<strong>${esc(title)}</strong></div></div><div class="top-actions">${btn(icon('camera')+'<span class="hide-mobile">Sacar foto</span>','photo','', 'aria-label="Sacar foto del calendario"')}${btn(icon(session?'logout':'shield')+`<span class="hide-mobile">${session?'Cerrar sesión':'Ingresar'}</span>`,session?'logout':'login','secondary',`aria-label="${session?'Cerrar sesión':'Ingresar a administración'}"`)}</div></header><main class="main">${tab==='calendar'?calendarPage():tab==='shifts'?shiftsPage():tab==='staff'?staffPage():tab==='reports'?reportsPage():tab==='accounts'?accountsPage():historyPage()}<div class="page-foot">${esc(db.facility)} · Almanaque de guardias · Almacenamiento local</div></main></div></div>`;
}
function header(eyebrow,title,desc,actions=''){return `<div class="page-head"><div><div class="eyebrow">${esc(eyebrow)}</div><h1>${esc(title)}</h1><p class="page-desc">${esc(desc)}</p></div>${actions?`<div class="row-actions">${actions}</div>`:''}</div>`;}
function statsStrip(){const s=totals();return `<div class="kpi-strip"><div class="kpi"><span class="kpi-icon">${icon('calendar')}</span><div><small>Guardias del período</small><strong>${s.shifts}</strong></div></div><div class="kpi"><span class="kpi-icon">${icon('people')}</span><div><small>Trabajadoras activas</small><strong>${s.team}</strong></div></div><div class="kpi"><span class="kpi-icon">${icon('clock')}</span><div><small>Horas programadas</small><strong>${s.hours} h</strong></div></div></div>`;}
function calendarPage(){const actions=admin()?btn(icon('settings')+' Editar almanaque','period')+btn(icon('plus')+' Nueva guardia','new-shift','primary'):btn(icon('download')+' Exportar CSV','csv');return header('Planificación del equipo','Almanaque de guardias',`${formatDate(db.periodStart,'short')} al ${formatDate(db.periodEnd,'short')} · Tocá cualquier fecha para ${admin()?'gestionar':'consultar'} sus turnos.`,actions)+statsStrip()+`<div class="workspace"><section class="panel" aria-label="Calendario mensual"><div class="panel-heading"><div><h2 class="month-title">${formatMonth(month+'-01')}</h2><p>${admin()?'Elegí una fecha para añadir, editar o eliminar guardias.':'Elegí una fecha para ver los turnos. Ingresá como administrador para editarlos.'}</p></div><div class="month-controls">${iconBtn('chevronLeft','previous-month','aria-label="Mes anterior"')}${btn('Hoy','today','small today-btn')}${iconBtn('chevronRight','next-month','aria-label="Mes siguiente"')}</div></div>${monthGrid()}<div class="calendar-footer"><span><i></i> Los puntos indican guardias cargadas</span><span>${admin()?'Tocá un día para editar':'Vista de consulta'}</span></div></section><div class="detail-column"><div class="panel" id="day-panel"><div class="detail-card">${dayDetail(selectedDate)}</div></div><div class="panel"><div class="detail-card note-card"><div class="note-icon">${icon('information')} Accesos rápidos</div><p>${admin()?'Organizá el personal, cambiá horarios y descargá un respaldo de tu almanaque.':'Consultá los turnos de cada fecha. Las modificaciones requieren acceso administrativo.'}</p>${admin()?`<div class="detail-actions">${btn(icon('people')+' Trabajadoras','goto-staff','small')}${btn(icon('download')+' Respaldo','backup','small')}${btn(icon('upload')+' Importar copia','restore','small')}</div>`:''}</div></div></div></div>`;}
function monthGrid(){const [y,m]=month.split('-').map(Number),first=new Date(y,m-1,1),pad=(first.getDay()+6)%7,days=new Date(y,m,0).getDate(),count=Math.ceil((pad+days)/7)*7;let out='<div class="weekdays">'+['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'].map(x=>`<div class="weekday">${x}</div>`).join('')+'</div><div class="month-grid">';const today=dateISO(new Date());for(let i=0;i<count;i++){const date=dateISO(new Date(y,m-1,i-pad+1)),outside=date.slice(0,7)!==month,list=shiftsOn(date),active=date===selectedDate;out+=`<button type="button" class="day ${outside?'outside-month':''} ${date<db.periodStart||date>db.periodEnd?'outside-period':''} ${active?'active-day':''} ${date===today?'today':''}" data-date="${date}" aria-label="${esc(formatDate(date))}; ${list.length} guardias" aria-pressed="${active}"><div class="date-row"><span class="date-number">${Number(date.slice(-2))}</span></div><div class="shift-list-preview">${list.slice(0,3).map(a=>{const person=staff(a.staffId);return `<div class="shift-mini"><i class="shift-dot" style="background:${hexColor(person?.color)}"></i><span class="shift-name">${esc(person?.name||'Sin asignar')}</span><span class="shift-time">${esc(a.start)}</span></div>`}).join('')}${list.length>3?`<span class="more-mini">+${list.length-3} más</span>`:''}</div><div class="day-count">${list.slice(0,4).map(a=>`<i style="background:${hexColor(staff(a.staffId)?.color)}"></i>`).join('')}${list.length>4?'<span class="many">+</span>':''}</div></button>`;}return out+'</div>';}
function personLabel(a){const p=staff(a.staffId);return `<span class="person-pill"><i style="background:${hexColor(p?.color)}"></i>${esc(p?.name||'Sin asignar')}</span>`;}
function dayDetail(date){const arr=shiftsOn(date);return `<div class="detail-kicker">Día seleccionado</div><h2 class="detail-date">${esc(cap(formatDate(date)))}</h2><p class="detail-sub">${arr.length} ${arr.length===1?'guardia programada':'guardias programadas'}</p><div class="detail-actions">${admin()?btn(icon('plus')+' Añadir guardia','new-shift','primary small',`data-date="${date}"`):btn(icon('shield')+' Ingresar para editar','login-day','primary small')}${btn(icon('camera')+' Sacar foto','photo','small')}</div><div class="divider"></div>${arr.length?arr.map(a=>dayShift(a)).join(''):`<div class="empty-state"><strong>No hay guardias cargadas</strong>${admin()?'Seleccioná «Añadir guardia» para organizar este día.':'Ingresá como administrador para crear una guardia.'}</div>`}`;}
function dayShift(a){const t=template(a.templateId);return `<div class="shift-entry"><div class="shift-icon">${icon('clock')}</div><div class="shift-entry-info"><strong>${esc(t?.name||'Guardia personalizada')}</strong><small>${personLabel(a)}</small><div class="shift-entry-meta">${esc(a.start)} a ${esc(a.end)}${a.end<=a.start?' · finaliza al día siguiente':''} · ${duration(a)} h</div>${a.note?`<div class="shift-entry-meta">${esc(a.note)}</div>`:''}</div>${admin()?`<div class="shift-controls">${btn(icon('edit')+' Editar','edit-shift','small',`data-id="${esc(a.id)}" aria-label="Editar ${esc(t?.name||'guardia')}"`)}${btn(icon('trash')+' Eliminar','delete-shift','small danger',`data-id="${esc(a.id)}" aria-label="Eliminar ${esc(t?.name||'guardia')}"`)}</div>`:''}</div>`;}
function dayModal(date){const arr=shiftsOn(date),editable=admin();openModal(cap(formatDate(date)),`${arr.length} ${arr.length===1?'guardia':'guardias'} · ${editable?'Podés editar este día':'Vista de consulta'}`,`${arr.length?arr.map(a=>dayShift(a)).join(''):`<div class="empty-state"><strong>Este día todavía no tiene guardias.</strong>${editable?'Podés crear una ahora.':'Ingresá como administrador para agregar una.'}</div>`}${!editable?`<div class="day-access-hint">${icon('shield')} Para agregar, editar o eliminar guardias, ingresá con tu cuenta administradora.</div>`:''}<div class="modal-actions">${editable?btn(icon('plus')+' Añadir guardia','new-shift','primary',`data-date="${date}"`):btn(icon('shield')+' Ingresar para editar','login-day','primary')}${btn('Cerrar','close-modal')}</div>`);}
function shiftsPage(){let list=[...db.assignments].sort((a,b)=>a.date.localeCompare(b.date)||a.start.localeCompare(b.start));if(filterStaff)list=list.filter(x=>x.staffId===filterStaff);if(filterDate)list=list.filter(x=>x.date===filterDate);if(filterText)list=list.filter(x=>[staff(x.staffId)?.name,template(x.templateId)?.name,x.note].join(' ').toLowerCase().includes(filterText.toLowerCase()));const actions=admin()?btn(icon('plus')+' Nueva guardia','new-shift','primary'):'';return header('Control de turnos','Todas las guardias','Consultá, filtrá y modificá las guardias registradas.',actions)+`<section class="panel"><div class="filter-bar"><input class="form-control search-input" placeholder="Buscar por nombre o turno" aria-label="Buscar guardias" id="shift-search" value="${esc(filterText)}"><select class="form-control" id="shift-staff" aria-label="Filtrar trabajadora"><option value="">Todas las trabajadoras</option>${db.staff.map(s=>`<option value="${esc(s.id)}" ${filterStaff===s.id?'selected':''}>${esc(s.name)}</option>`).join('')}</select><input type="date" class="form-control" id="shift-date" aria-label="Filtrar fecha" value="${esc(filterDate)}">${btn('Limpiar','clear-filters','small')}</div><div class="table-wrap"><table class="data-table"><thead><tr><th>Fecha</th><th>Turno</th><th>Trabajadora</th><th>Horario</th><th>Horas</th><th style="text-align:right">Acción</th></tr></thead><tbody>${list.map(a=>`<tr><td>${formatDate(a.date,'short')}</td><td class="table-name">${esc(template(a.templateId)?.name||'Guardia')}</td><td>${personLabel(a)}</td><td>${esc(a.start)}–${esc(a.end)}</td><td>${duration(a)} h</td><td><div class="table-actions">${btn(icon(admin()?'edit':'information')+' '+(admin()?'Editar':'Ver'),admin()?'edit-shift':'show-shift','small',`data-id="${esc(a.id)}"`)}</div></td></tr>`).join('')}</tbody></table>${!list.length?'<div class="empty-state">No hay guardias que coincidan con los filtros.</div>':''}</div><div class="toolbar-actions">${btn(icon('download')+' Descargar CSV','csv','small')}${admin()?btn(icon('download')+' Copia de seguridad','backup','small')+btn(icon('upload')+' Importar copia','restore','small'):''}<span class="pill">${list.length} resultados</span></div></section>`;}
function staffPage(){return header('Equipo de trabajo','Trabajadoras','Agregá, editá o desactivá trabajadoras sin perder sus guardias.',btn(icon('plus')+' Añadir nueva trabajadora','new-staff','primary'))+`<div class="section-grid"><section class="panel"><div class="panel-heading"><div><h2>Personal registrado</h2><p>${db.staff.length} trabajadoras registradas</p></div></div><div class="item-list">${db.staff.map(s=>{const list=db.assignments.filter(a=>a.staffId===s.id);return `<div class="item-row"><div class="item-icon avatar" style="background:${hexColor(s.color)}19;color:${hexColor(s.color)}">${esc(initials(s.name))}</div><div class="item-content"><strong>${esc(s.name)} <span class="pill ${s.active!==false?'good':''}">${s.active!==false?'Activa':'Inactiva'}</span></strong><small>${list.length} guardias · ${list.reduce((total,a)=>total+duration(a),0)} horas acumuladas</small></div><div class="item-buttons">${btn(icon('edit')+' Editar','edit-staff','small',`data-id="${esc(s.id)}"`)}</div></div>`;}).join('')}</div></section><aside class="panel section-side"><h3>Organización del equipo</h3><p>Al agregar una trabajadora, aparece inmediatamente en el selector de guardias. Podés asignarle un color para identificarla fácilmente en el almanaque.</p><div class="banner" style="margin-top:20px"><strong>Sin pérdida de historial</strong><br>Desactivar una trabajadora evita que aparezca entre las opciones habituales, pero conserva las guardias que ya tenía asignadas.</div></aside></div>`;}
function reportsPage(){const within=db.assignments.filter(a=>a.date>=db.periodStart&&a.date<=db.periodEnd);return header('Información general','Resumen del equipo','Cantidad de guardias y horas por trabajadora dentro del período configurado.',btn(icon('download')+' Exportar CSV','csv'))+statsStrip()+`<section class="panel"><div class="panel-heading"><div><h2>Distribución por trabajadora</h2><p>Del ${formatDate(db.periodStart,'short')} al ${formatDate(db.periodEnd,'short')}</p></div></div><div class="item-list">${db.staff.map(s=>{const list=within.filter(a=>a.staffId===s.id),hours=list.reduce((v,a)=>v+duration(a),0);return `<div class="item-row"><div class="item-icon avatar" style="background:${hexColor(s.color)}19;color:${hexColor(s.color)}">${esc(initials(s.name))}</div><div class="item-content"><strong>${esc(s.name)}</strong><small>${list.length} guardias · ${hours} horas · ${list.filter(x=>x.templateId==='night').length} noches</small></div><span class="pill">${hours} h</span></div>`;}).join('')}</div></section>`;}
function accountsPage(){return header('Administración','Usuarios y accesos','Creá cuentas para edición o solo consulta en este navegador.',btn(icon('plus')+' Nueva cuenta','new-account','primary'))+`<div class="section-grid"><section class="panel"><div class="panel-heading"><h2>Cuentas registradas</h2></div><div class="item-list">${accounts.map(a=>`<div class="item-row"><div class="item-icon avatar" style="background:#f8edf2;color:#a44570">${esc(initials(a.username))}</div><div class="item-content"><strong>${esc(a.username)}</strong><small>${a.role==='admin'?'Administrador':'Solo consulta'} · ${a.active!==false?'Activa':'Inactiva'}</small></div><div class="item-buttons">${btn(icon('edit')+' Editar','edit-account','small',`data-id="${esc(a.id)}"`)}</div></div>`).join('')}</div></section><aside class="panel section-side"><h3>Acceso local</h3><p>Estas cuentas funcionan solamente en este navegador. Como el archivo HTML no tiene servidor, las credenciales no ofrecen seguridad real frente a quien pueda inspeccionar el archivo o los datos locales.</p><div class="banner" style="margin-top:20px">Para acceder desde distintos dispositivos y compartir cambios, hace falta una base de datos y autenticación en un servidor.</div></aside></div>`;}
function historyPage(){return header('Auditoría local','Registro de actividad','Últimas modificaciones del almanaque almacenadas en este navegador.',btn(icon('download')+' Respaldo','backup'))+`<section class="panel section-side">${Array.isArray(db.history)&&db.history.length?db.history.map(h=>`<div class="activity"><strong>${esc(h.action||'Cambio registrado')}</strong><small>${esc(h.by||'Sistema')} · ${new Date(h.at).toLocaleString('es-AR')}</small></div>`).join(''):'<div class="empty-state">Todavía no se registraron cambios.</div>'}</section>`;}
function openModal(title,subtitle,content){$('#modal-root').innerHTML=`<div class="overlay" id="modal-overlay"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-header"><div><h2 id="modal-title">${esc(title)}</h2><p>${esc(subtitle||'')}</p></div><button type="button" class="modal-close" data-action="close-modal" aria-label="Cerrar">×</button></div><div class="modal-body">${content}</div></section></div>`;const first=$('#modal-root input,#modal-root select');if(first)first.focus();}
function closeModal(){$('#modal-root').innerHTML='';}
function field(label,name,type,value='',opts=''){return `<div class="form-field"><label class="form-label" for="f-${name}">${esc(label)}</label><input id="f-${name}" class="form-control" type="${type}" name="${name}" value="${esc(value)}" ${opts}></div>`;}
const formVal=(form,name)=>String(new FormData(form).get(name)??'').trim();
function shiftEditor(itemId='',date=selectedDate){if(!admin())return showLogin();const original=db.assignments.find(a=>a.id===itemId),first=db.templates[0]||{id:'morning',start:'07:00',end:'15:00'};const a=original||{date,templateId:first.id,staffId:'',start:first.start,end:first.end,note:''};openModal(original?'Editar guardia':'Añadir guardia',`Elegí la trabajadora, fecha y horario.`,`<form id="shift-form" data-edit-id="${esc(original?.id||'')}"><div class="form-grid">${field('Fecha','date','date',a.date,'required')}<div class="form-field"><label class="form-label" for="f-templateId">Tipo de turno</label><select class="form-control" id="f-templateId" name="templateId" required>${db.templates.map(t=>`<option value="${esc(t.id)}" ${a.templateId===t.id?'selected':''} data-start="${esc(t.start)}" data-end="${esc(t.end)}">${esc(t.name)}</option>`).join('')}</select></div><div class="form-field wide"><label class="form-label" for="f-staffId">Trabajadora asignada</label><select class="form-control" id="f-staffId" name="staffId"><option value="">Sin asignar</option>${db.staff.filter(s=>s.active!==false||s.id===a.staffId).map(s=>`<option value="${esc(s.id)}" ${a.staffId===s.id?'selected':''}>${esc(s.name)}</option>`).join('')}</select></div>${field('Hora de inicio','start','time',a.start,'required')}${field('Hora de fin','end','time',a.end,'required')}<div class="form-field wide"><label class="form-label" for="f-note">Observaciones (opcional)</label><textarea class="form-control" maxlength="300" name="note" id="f-note" placeholder="Cambio de turno, reemplazo, observaciones...">${esc(a.note||'')}</textarea><p class="form-help">Si el horario de fin es anterior al de inicio, se considera que termina al día siguiente.</p></div></div><div class="modal-actions">${original?btn(icon('trash')+' Eliminar','delete-shift','danger',`data-id="${esc(a.id)}"`):''}${btn('Cancelar','close-modal') }<button class="btn primary" type="submit">${icon('save')} Guardar guardia</button></div></form>`);}
function staffEditor(personId=''){if(!admin())return showLogin();const p=db.staff.find(s=>s.id===personId),v=p||{name:'',color:'#b26689',notes:'',active:true};openModal(p?'Editar trabajadora':'Añadir nueva trabajadora','Los cambios aparecerán en el calendario. ',`<form id="staff-form" data-edit-id="${esc(p?.id||'')}"><div class="form-grid"><div class="form-field wide">${field('Nombre','name','text',v.name,'maxlength="80" required')}</div>${field('Color de identificación','color','color',hexColor(v.color),'required')}<div class="form-field"><label for="f-active" class="form-label">Estado</label><select class="form-control" id="f-active" name="active"><option value="true" ${v.active!==false?'selected':''}>Activa</option><option value="false" ${v.active===false?'selected':''}>Inactiva</option></select></div><div class="form-field wide"><label for="f-notes" class="form-label">Notas (opcional)</label><textarea class="form-control" id="f-notes" name="notes" maxlength="250">${esc(v.notes||'')}</textarea></div></div><div class="modal-actions">${p?btn(icon('trash')+' Eliminar','delete-staff','danger',`data-id="${esc(p.id)}"`):''}${btn('Cancelar','close-modal')}<button type="submit" class="btn primary">${icon('save')} Guardar trabajadora</button></div></form>`);}
function periodEditor(){if(!admin())return showLogin();openModal('Editar almanaque','Configurá el período y los horarios de tus guardias.',`<form id="period-form"><div class="form-grid"><div class="form-field wide">${field('Nombre del hogar','facility','text',db.facility,'required maxlength="95"')}</div>${field('Desde','periodStart','date',db.periodStart,'required')}${field('Hasta','periodEnd','date',db.periodEnd,'required')}</div><hr><div class="panel-title">${icon('clock')}<strong>Horarios de turnos</strong></div><p class="form-help">Los cambios de horario base se aplican a nuevas guardias. Cada guardia existente conserva sus horas hasta que la edites.</p>${db.templates.map(t=>`<div class="item-row"><div class="item-content"><strong>${esc(t.name)}</strong><small>${esc(t.start)} – ${esc(t.end)}</small></div>${btn(icon('edit')+' Editar','edit-template','small',`data-id="${esc(t.id)}"`)}</div>`).join('')}<div class="form-row" style="margin-top:12px">${btn(icon('plus')+' Añadir tipo de turno','new-template','small')}</div><div class="modal-actions">${btn('Cancelar','close-modal')}<button type="submit" class="btn primary">${icon('save')} Guardar período</button></div></form>`);}
function templateEditor(tid=''){if(!admin())return showLogin();const t=db.templates.find(x=>x.id===tid)||{name:'',start:'07:00',end:'15:00'};openModal(tid?'Editar horario':'Nuevo tipo de turno','Definí el nombre y las horas habituales.',`<form id="template-form" data-edit-id="${esc(tid)}"><div class="form-grid"><div class="form-field wide">${field('Nombre del turno','name','text',t.name,'required maxlength="55"')}</div>${field('Comienza','start','time',t.start,'required')}${field('Termina','end','time',t.end,'required')}</div>${tid?`<label class="form-row form-help" style="margin-top:15px"><input type="checkbox" name="apply" value="true"> Aplicar este horario a todas las guardias existentes de este tipo</label>`:''}<div class="modal-actions">${btn('Cancelar','close-modal')}<button type="submit" class="btn primary">Guardar horario</button></div></form>`);}
function accountEditor(accountId=''){if(!admin())return showLogin();const a=accounts.find(x=>x.id===accountId),v=a||{username:'',role:'viewer',active:true};openModal(a?'Editar cuenta':'Nueva cuenta','Administrá usuarios y permisos locales.',`<form id="account-form" data-edit-id="${esc(a?.id||'')}"><div class="form-grid"><div class="form-field wide">${field('Usuario','username','text',v.username,'required maxlength="60" autocomplete="off"')}</div><div class="form-field wide">${field(a?'Nueva contraseña (opcional)':'Contraseña','password','password','','autocomplete="new-password" '+(a?'':'required'))}</div><div class="form-field"><label for="f-role" class="form-label">Permiso</label><select class="form-control" name="role" id="f-role"><option value="viewer" ${v.role==='viewer'?'selected':''}>Solo consulta</option><option value="admin" ${v.role==='admin'?'selected':''}>Administrador</option></select></div><div class="form-field"><label for="f-active" class="form-label">Estado</label><select class="form-control" name="active" id="f-active"><option value="true" ${v.active!==false?'selected':''}>Activo</option><option value="false" ${v.active===false?'selected':''}>Inactivo</option></select></div></div><div class="modal-actions">${btn('Cancelar','close-modal')}<button class="btn primary" type="submit">${icon('save')} Guardar cuenta</button></div></form>`);}
function showLogin(){openModal('Acceso administrativo','Ingresá para administrar el almanaque.',`<form id="login-form"><div class="form-grid"><div class="form-field wide">${field('Usuario','username','text','','required autocomplete="username"')}</div><div class="form-field wide">${field('Contraseña','password','password','','required autocomplete="current-password"')}</div></div><p class="form-help" style="margin-top:15px">El acceso de este HTML es local; no sustituye la autenticación segura de un servidor.</p><div class="modal-actions">${btn('Cancelar','close-modal')}<button type="submit" class="btn primary">Ingresar</button></div></form>`);}
function perform(action,el){const itemId=el?.dataset.id||'',date=el?.dataset.date||selectedDate;switch(action){
 case'close-modal':closeModal();break;
 case'login':resumeDayAfterLogin=false;showLogin();break;
 case'login-day':resumeDayAfterLogin=true;showLogin();break;
 case'logout':session=null;sessionStorage.removeItem(SESSION);closeModal();tab='calendar';render();notify('Sesión cerrada.');break;
 case'photo':captureCalendar();break;
 case'previous-month':changeMonth(-1);break;
 case'next-month':changeMonth(1);break;
 case'today':{const today=dateISO(new Date());month=today.slice(0,7);selectedDate=today;render();break;}
 case'period':periodEditor();break;
 case'new-shift':shiftEditor('',date);break;
 case'edit-shift':shiftEditor(itemId);break;
 case'show-shift':{const a=db.assignments.find(s=>s.id===itemId);if(a)dayModal(a.date);break;}
 case'delete-shift':deleteShift(itemId);break;
 case'goto-staff':tab='staff';render();break;
 case'new-staff':case'new-person':staffEditor();break;
 case'edit-staff':staffEditor(itemId);break;
 case'delete-staff':deleteStaff(itemId);break;
 case'new-template':templateEditor();break;
 case'edit-template':templateEditor(itemId);break;
 case'new-account':accountEditor();break;
 case'edit-account':accountEditor(itemId);break;
 case'csv':exportCSV();break;
 case'backup':exportJSON();break;
 case'restore':importJSON();break;
 case'clear-filters':filterStaff='';filterText='';filterDate='';render();break;
 }}
function changeMonth(steps){const [y,m]=month.split('-').map(Number),d=new Date(y,m-1+steps,1);month=dateISO(d).slice(0,7);selectedDate=month+'-01';render();}
function selectDay(date){selectedDate=date;month=date.slice(0,7);render();dayModal(date);}
function deleteShift(shiftId){if(!admin())return;const a=db.assignments.find(x=>x.id===shiftId);if(!a)return;if(!confirm(`¿Eliminar la guardia del ${formatDate(a.date,'short')} (${a.start}–${a.end})? Esta acción no se puede deshacer.`))return;db.assignments=db.assignments.filter(x=>x.id!==shiftId);closeModal();changed(`Eliminó guardia de ${formatDate(a.date,'short')}`);if(tab==='calendar')dayModal(a.date);notify('Guardia eliminada.');}
function deleteStaff(personId){if(!admin())return;const p=staff(personId);if(!p)return;const count=db.assignments.filter(a=>a.staffId===personId).length;if(count){notify(`No podés eliminar a ${p.name}: tiene ${count} guardias. Podés desactivarla.`, 'error');return;}if(!confirm(`¿Eliminar a ${p.name} del equipo?`))return;db.staff=db.staff.filter(s=>s.id!==personId);closeModal();changed(`Eliminó trabajadora ${p.name}`);notify('Trabajadora eliminada.');}
function saveShift(form){const current=form.dataset.editId,old=db.assignments.find(a=>a.id===current),a={id:old?.id||id('g'),date:formVal(form,'date'),templateId:formVal(form,'templateId'),staffId:formVal(form,'staffId'),start:formVal(form,'start'),end:formVal(form,'end'),note:formVal(form,'note')};if(!validDate(a.date)||!template(a.templateId)||!/^([01]\d|2[0-3]):[0-5]\d$/.test(a.start)||!/^([01]\d|2[0-3]):[0-5]\d$/.test(a.end)||a.staffId&&!staff(a.staffId)){notify('Revisá los datos de la guardia.','error');return;}
 if(a.staffId){const start=new Date(a.date+'T'+a.start+':00'),end=new Date(a.date+'T'+a.end+':00');if(end<=start)end.setDate(end.getDate()+1);const conflict=db.assignments.find(g=>g.id!==a.id&&g.staffId===a.staffId&&(()=>{const s=new Date(g.date+'T'+g.start+':00'),e=new Date(g.date+'T'+g.end+':00');if(e<=s)e.setDate(e.getDate()+1);return s<end&&e>start;})());if(conflict){notify(`Esa trabajadora ya tiene una guardia que se superpone el ${formatDate(conflict.date,'short')}.`,'error');return;}}
 if(old)Object.assign(old,a);else db.assignments.push(a);selectedDate=a.date;month=a.date.slice(0,7);closeModal();changed(`${old?'Editó':'Añadió'} guardia de ${formatDate(a.date,'short')}`);if(tab==='calendar')dayModal(a.date);notify(old?'Guardia actualizada.':'Guardia añadida.');}
function saveStaff(form){const current=form.dataset.editId,old=db.staff.find(s=>s.id===current),name=formVal(form,'name'),color=formVal(form,'color'),active=formVal(form,'active')==='true',notes=formVal(form,'notes');if(name.length<2||db.staff.some(s=>s.id!==current&&s.name.toLocaleLowerCase()===name.toLocaleLowerCase())){notify('Ingresá un nombre válido que no esté repetido.','error');return;}if(old)Object.assign(old,{name,color:hexColor(color),active,notes});else db.staff.push({id:id('p'),name,color:hexColor(color),active,notes});closeModal();changed(`${old?'Editó':'Añadió'} trabajadora ${name}`);notify('Trabajadora guardada.');}
function savePeriod(form){const from=formVal(form,'periodStart'),to=formVal(form,'periodEnd'),facility=formVal(form,'facility');if(!validDate(from)||!validDate(to)||from>to||!facility||(+dateObj(to)-+dateObj(from))/86400000>366){notify('Elegí un período válido de hasta 367 días.','error');return;}db.facility=facility;db.periodStart=from;db.periodEnd=to;selectedDate=from;month=from.slice(0,7);closeModal();changed('Actualizó fechas del almanaque');notify('Almanaque actualizado.');}
function saveTemplate(form){const current=form.dataset.editId,old=db.templates.find(t=>t.id===current),name=formVal(form,'name'),start=formVal(form,'start'),end=formVal(form,'end');if(!name||!/^\d\d:\d\d$/.test(start)||!/^\d\d:\d\d$/.test(end)){notify('Completá el nombre y los horarios.','error');return;}if(old){Object.assign(old,{name,start,end});if(formVal(form,'apply')==='true')for(const a of db.assignments.filter(a=>a.templateId===old.id)){a.start=start;a.end=end;}}else db.templates.push({id:id('t'),name,start,end});closeModal();changed(`${old?'Editó':'Añadió'} tipo de turno ${name}`);notify('Horario actualizado.');}
function saveAccount(form){const current=form.dataset.editId,old=accounts.find(a=>a.id===current),username=formVal(form,'username'),password=formVal(form,'password'),role=formVal(form,'role'),active=formVal(form,'active')==='true';if(!/^[a-zA-Z0-9._-]{3,60}$/.test(username)||accounts.some(a=>a.id!==current&&a.username.toLowerCase()===username.toLowerCase())){notify('Usá un usuario válido y no repetido.','error');return;}if((!old||password)&&password.length<4){notify('La contraseña debe tener al menos 4 caracteres.','error');return;}if(old?.id===session?.id&&(!active||role!=='admin')){notify('No podés desactivar o quitarte tu permiso de administrador.','error');return;}if(!accounts.some(a=>a.id!==current&&a.role==='admin'&&a.active!==false)&&role!=='admin'){notify('Debe existir al menos un administrador activo.','error');return;}if(old){Object.assign(old,{username,role,active,...(password?{password}:{})});if(session?.id===old.id){session.username=username;sessionStorage.setItem(SESSION,JSON.stringify(session));}}else accounts.push({id:id('u'),username,password,role,active});saveAccounts();closeModal();changed(`${old?'Editó':'Creó'} cuenta ${username}`);notify('Cuenta guardada.');}
function loginSubmit(form){const username=formVal(form,'username'),password=formVal(form,'password'),found=accounts.find(a=>a.username.toLowerCase()===username.toLowerCase()&&a.password===password&&a.active!==false);if(!found){notify('Usuario o contraseña incorrectos.','error');return;}session={id:found.id,username:found.username};sessionStorage.setItem(SESSION,JSON.stringify(session));closeModal();tab='calendar';render();if(resumeDayAfterLogin){resumeDayAfterLogin=false;dayModal(selectedDate);}notify('Acceso realizado correctamente.');}
function download(name,data,type){const url=URL.createObjectURL(new Blob([data],{type})),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1800);}
function exportJSON(){download('respaldo-almanaque-botto-'+dateISO(new Date())+'.json',JSON.stringify({...db,exportedAt:new Date().toISOString()},null,2),'application/json;charset=utf-8');notify('Respaldo descargado.');}
function exportCSV(){const cell=x=>'"'+String(x??'').replace(/^[=+@\-]/,"'$&").replaceAll('"','""')+'"';const rows=[['Fecha','Turno','Trabajadora','Inicio','Fin','Horas','Observaciones'],...[...db.assignments].sort((a,b)=>a.date.localeCompare(b.date)||a.start.localeCompare(b.start)).map(a=>[a.date,template(a.templateId)?.name||'',staff(a.staffId)?.name||'Sin asignar',a.start,a.end,duration(a),a.note||''])];download('guardias-casa-hogar-botto.csv','\ufeff'+rows.map(row=>row.map(cell).join(';')).join('\r\n'),'text/csv;charset=utf-8');notify('CSV descargado.');}
function importJSON(){if(!admin())return showLogin();const input=document.createElement('input');input.type='file';input.accept='.json,application/json';input.onchange=async()=>{if(!input.files?.length)return;try{const data=JSON.parse(await input.files[0].text());if(data.version!==3||!Array.isArray(data.staff)||!Array.isArray(data.assignments)||!Array.isArray(data.templates)||!validDate(data.periodStart)||!validDate(data.periodEnd)||!data.staff.every(x=>typeof x.id==='string'&&typeof x.name==='string')||!data.assignments.every(x=>validDate(x.date)&&typeof x.start==='string'&&typeof x.end==='string'))throw new Error('Archivo de respaldo incompatible.');if(!confirm('Esto reemplazará los turnos, trabajadoras y fechas actuales de este navegador. ¿Querés continuar?'))return;db={...copy(SEED),...data,history:Array.isArray(data.history)?data.history.slice(0,150):[]};localStorage.setItem(STORAGE,JSON.stringify(db));month=db.periodStart.slice(0,7);selectedDate=db.periodStart;closeModal();changed('Restauró un respaldo');notify('Respaldo restaurado correctamente.');}catch(e){notify('No se pudo restaurar: '+e.message,'error');}};input.click();}
function captureCalendar(){// Renderiza el mes directo en canvas: sin dependencias, menús ni barras laterales.
 try{const [y,m]=month.split('-').map(Number),pad=(new Date(y,m-1,1).getDay()+6)%7,days=new Date(y,m,0).getDate(),cells=Math.ceil((days+pad)/7)*7,rows=cells/7;
 const W=1850,margin=62,col=(W-margin*2)/7,header=168,weekH=48,rowH=202,H=header+weekH+rows*rowH+80;
 const c=document.createElement('canvas');c.width=W;c.height=H;const ctx=c.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);ctx.fillStyle='#26222a';ctx.font='bold 38px Arial';ctx.fillText('Almanaque de guardias',margin,70);ctx.fillStyle='#a44570';ctx.font='bold 27px Arial';ctx.fillText(formatMonth(month+'-01'),margin,113);ctx.fillStyle='#827882';ctx.font='20px Arial';ctx.fillText(db.facility,margin,147);
 ['LUN','MAR','MIÉ','JUE','VIE','SÁB','DOM'].forEach((name,i)=>{ctx.fillStyle='#faf4f7';ctx.fillRect(margin+i*col,header,col,weekH);ctx.fillStyle='#8c7885';ctx.font='bold 16px Arial';ctx.textAlign='center';ctx.fillText(name,margin+i*col+col/2,header+30);});ctx.textAlign='left';
 for(let i=0;i<cells;i++){const date=dateISO(new Date(y,m-1,i-pad+1)),x=margin+(i%7)*col,z=header+weekH+Math.floor(i/7)*rowH,inMonth=date.slice(0,7)===month,items=shiftsOn(date);ctx.fillStyle=inMonth?'#fff':'#fafafa';ctx.fillRect(x,z,col,rowH);ctx.strokeStyle='#e9e3e8';ctx.lineWidth=1;ctx.strokeRect(x,z,col,rowH);ctx.fillStyle=inMonth?'#4a3040':'#c2b7bf';ctx.font='bold 21px Arial';ctx.fillText(String(+date.slice(-2)),x+13,z+30);items.slice(0,4).forEach((a,j)=>{const p=staff(a.staffId),ty=z+48+j*35;ctx.fillStyle='#f8f4f6';ctx.beginPath();ctx.roundRect(x+10,ty,col-20,29,6);ctx.fill();ctx.fillStyle=hexColor(p?.color);ctx.beginPath();ctx.arc(x+21,ty+15,4,0,Math.PI*2);ctx.fill();ctx.fillStyle='#413740';ctx.font='bold 15px Arial';const person=(p?.name||'Sin asignar');let display=person;while(ctx.measureText(display).width>col-105&&display.length>3)display=display.slice(0,-2)+'…';ctx.fillText(display,x+32,ty+20);ctx.fillStyle='#857b82';ctx.font='13px Arial';ctx.textAlign='right';ctx.fillText(a.start,x+col-16,ty+20);ctx.textAlign='left';});if(items.length>4){ctx.fillStyle='#a44570';ctx.font='bold 14px Arial';ctx.fillText('+'+(items.length-4)+' más',x+12,z+193);}}
 ctx.fillStyle='#99929b';ctx.font='17px Arial';ctx.fillText('Guardias registradas · '+month,margin,H-33);
 c.toBlob(blob=>{if(!blob){notify('No se pudo crear la imagen.','error');return;}const url=URL.createObjectURL(blob),a=document.createElement('a');a.download=`almanaque-botto-${month}.png`;a.href=url;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);notify('Foto del calendario descargada.');},'image/png');
 }catch(e){console.error(e);notify('No se pudo generar la foto.','error');}
}
// Delegación central: botones dinámicos, celdas de día y formularios.
document.addEventListener('click',e=>{
 if(e.target?.id==='mobile-scrim'){mobileMenu=false;render();return;}
 if(e.target?.id==='modal-overlay'){closeModal();return;}
 if(e.target.closest('#menu-toggle')){mobileMenu=!mobileMenu;render();return;}
 const navEl=e.target.closest('[data-nav]');if(navEl){tab=navEl.dataset.nav;mobileMenu=false;render();return;}
 const actionEl=e.target.closest('[data-action]');if(actionEl){e.preventDefault();perform(actionEl.dataset.action,actionEl);return;}
 const dateEl=e.target.closest('[data-date].day');if(dateEl)selectDay(dateEl.dataset.date);
});
document.addEventListener('change',e=>{
 if(e.target.id==='f-templateId'){const t=template(e.target.value);if(t){const form=e.target.closest('form');form.querySelector('[name="start"]').value=t.start;form.querySelector('[name="end"]').value=t.end;}}
 if(e.target.id==='shift-staff'){filterStaff=e.target.value;render();}
 if(e.target.id==='shift-date'){filterDate=e.target.value;render();}
 if(e.target.id==='shift-search'){filterText=e.target.value;render();}
});
let searchDelay;document.addEventListener('input',e=>{if(e.target.id==='shift-search'){filterText=e.target.value;clearTimeout(searchDelay);searchDelay=setTimeout(()=>{const focus=$('#shift-search'),pos=focus?.selectionStart??filterText.length;render();const next=$('#shift-search');next?.focus();next?.setSelectionRange(pos,pos);},180);}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#modal-root .overlay'))closeModal();if(e.target.id==='shift-search'&&e.key==='Enter'){e.preventDefault();render();}});
document.addEventListener('submit',e=>{const form=e.target;if(!form?.id)return;e.preventDefault();if(!['login-form'].includes(form.id)&&!admin())return notify('Ingresá como administrador.','error');const cb={'shift-form':saveShift,'staff-form':saveStaff,'period-form':savePeriod,'template-form':saveTemplate,'account-form':saveAccount,'login-form':loginSubmit}[form.id];if(cb)cb(form);});
window.addEventListener('storage',e=>{if(e.key===STORAGE){db=readDB();render();notify('El almanaque se actualizó en otra pestaña.');}if(e.key===ACCOUNT_STORAGE){accounts=readAccounts();render();}});
if(session&&!accounts.some(a=>a.id===session.id&&a.active!==false))session=null;
render();
