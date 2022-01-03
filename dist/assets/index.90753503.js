import{j as R,u as P,r as o,L as b,B as q,S as Y,R as L,a as D,b as H}from"./vendor.642339ee.js";const $=function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function u(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(a){if(a.ep)return;a.ep=!0;const n=u(a);fetch(a.href,n)}};$();var F="/assets/1.2ba89f12.jpg";const e=R.exports.jsx,i=R.exports.jsxs,v=R.exports.Fragment;function w(){return e(v,{children:i("div",{className:"all-modal",children:[e("div",{id:"id01",className:"modal login",children:i("form",{className:"modal-content",id:"form_content",action:"#",children:[i("div",{className:"imgcontainer",children:[e("i",{className:"fas fa-user fa-2x foto",title:"Portafolio"}),e("br",{}),e("span",{className:"btn",id:"btn_login",children:"Login"}),e("span",{className:"btn",id:"btn_registro",children:"Registro"})]}),i("div",{className:"container",children:[e("label",{children:e("b",{children:"Username"})}),e("input",{className:"input-form",type:"text",placeholder:"Enter Username",name:"uname"}),e("label",{children:e("b",{children:"Password"})}),e("input",{className:"input-form",type:"password",placeholder:"Enter Password",name:"psw"}),e("button",{className:"boton-form",type:"submit",children:"Login"}),e("input",{type:"checkbox"})," Remember me"]}),e("div",{className:"container"})]})}),e("div",{id:"id02",className:"modal registro",children:i("form",{className:"modal-content",id:"form_content2",action:"#",children:[i("div",{className:"imgcontainer",children:[e("i",{className:"fas fa-user fa-2x foto",title:"Portafolio"}),e("br",{}),e("span",{className:"btn",id:"btn_login2",children:"Login"}),e("span",{className:"btn",id:"btn_registro2",children:"Registro"})]}),i("div",{className:"container",children:[e("label",{children:e("b",{children:"Name"})}),e("input",{className:"input-form",type:"text",placeholder:"Enter Name",name:"uname",required:!0}),e("label",{children:e("b",{children:"Email"})}),e("input",{className:"input-form",type:"Email",placeholder:"prueba@123.com",name:"psw",required:!0}),e("label",{children:e("b",{children:"Password"})}),e("input",{className:"input-form",type:"password",placeholder:"Enter Password",name:"psw",required:!0}),e("button",{className:"boton-form",type:"submit",children:"Registrarse"})]}),e("div",{className:"container"})]})})]})})}const G="api_key=cfe422613b250f702980a3bbf9e90716",y=G,_="https://api.themoviedb.org/3/",U=_+"discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1&"+y,V=_+"discover/movie?sort_by=vote_average.desc&vote_count.gte=300&page=1&"+y,k=_+"tv/popular?"+y+"&page=1";var C=new Date;C.setMonth(C.getMonth()-3);const Q=C.toISOString().slice(0,10);var W=new Date;const K=W.toISOString().slice(0,10),O=_+"discover/movie?primary_release_date.gte="+Q+"&primary_release_date.lte="+K+"&include_video=false&page=1&"+y,j=_+"search/movie?query=",z=_+"search/tv?query=",E="https://image.tmdb.org/t/p/w500",J=_+"discover/movie?sort_by=popularity.desc&vote_count.gte=2000&"+y+"&with_genres=",X={Action:28,Adventure:12,Animation:16,Comedy:35,Crime:80,Documentary:99,Drama:18,Family:10751,Fantasy:14,History:36,Horror:27,Music:10402,Mystery:9,Romance:10749,Thriller:53,War:10752,"Action & Adventure":10759,Western:37,"Science Fiction":878};function x(){return e(v,{children:e("footer",{className:"footer",children:i("div",{className:"maindiv",children:[e("div",{className:"footerlogo"}),i("div",{children:[e("h3",{children:"THE BASICS"}),i("ul",{children:[e("li",{children:"About TMDB"}),e("li",{children:"Contact Us"}),e("li",{children:"Support Forums"}),e("li",{children:"API"}),e("li",{children:"System Status"})]})]}),i("div",{children:[e("h3",{children:"GET INVOLVED"}),i("ul",{children:[e("li",{children:"Contribution Bible"}),e("li",{children:"3rd Party Application"}),e("li",{children:"Add New Movie"}),e("li",{children:"Add New TV Show"})]})]}),i("div",{children:[e("h3",{children:"COMMUNITY"}),i("ul",{children:[e("li",{children:"Guidelines"}),e("li",{children:"Discussions"}),e("li",{children:"Leaderboard"}),e("li",{children:"Twitter"})]})]}),i("div",{children:[e("h3",{children:"LEGAL"}),i("ul",{children:[e("li",{children:"Terms ofUse API Terms of Use"}),e("li",{children:"Contact Us"}),e("li",{children:"Privacy Policy"})]})]})]})})})}function Z({movieInfo:r}){const{original_title:m,backdrop_path:u,release_date:c,vote_average:a,overview:n,poster_path:p}=r;return e("div",{className:"poster",children:e("img",{src:E+p,style:{width:"100%"},alt:"Imagen portada"})})}const ee=()=>{const{categoria:r}=P(),[m,u]=o.exports.useState([]),[c,a]=o.exports.useState(!1);o.exports.useState([r]);const n=s=>fetch(s).then(t=>t.json()).then(t=>t.results);function p(){const s=[];a(!0),n(U).then(t=>{if(t.length<19)t.map(l=>{s.push(l)});else for(let l=0;l<=19;l++)s.push(t[l]);u(s),a(!1)})}return o.exports.useEffect(p,[r]),i(v,{children:[e(M,{}),e(w,{}),i("div",{className:"row",id:"contenedor_main",children:[e("h3",{id:"titulos",className:"titulo",children:"Peliculas"}),e("div",{className:"peliculas",id:"list_pelis",children:c?e("p",{children:"Cargando..."}):m.map(s=>e(b,{to:"/pelicula/"+s.original_title+"/"+s.id,children:e("div",{children:e(Z,{movieInfo:s},s.id)},s.id)},s.id))})]}),e(x,{})]})};function te({movieInfo:r}){const{original_title:m,backdrop_path:u,release_date:c,vote_average:a,overview:n,poster_path:p}=r;return e("div",{className:"poster",children:e("img",{src:E+p,style:{width:"100%"},alt:"Imagen portada"})})}const ie=()=>{const{categoria:r}=P(),[m,u]=o.exports.useState([]),[c,a]=o.exports.useState(!1);o.exports.useState([r]);const n=s=>fetch(s).then(t=>t.json()).then(t=>t.results);function p(){const s=[];a(!0),n(k).then(t=>{if(console.log(k),t.length<19)t.map(l=>{s.push(l)});else for(let l=0;l<=19;l++)s.push(t[l]);u(s),a(!1)})}return o.exports.useEffect(p,[r]),i(v,{children:[e(M,{}),e(w,{}),i("div",{className:"row",id:"contenedor_main",children:[e("h3",{id:"titulos",className:"titulo",children:"Peliculas"}),e("div",{className:"peliculas",id:"list_pelis",children:c?e("p",{children:"Cargando..."}):m.map(s=>e(b,{to:"/serie/"+s.name+"/"+s.id,children:e("div",{children:e(te,{movieInfo:s},s.id)},s.id)},s.id))})]}),e(x,{})]})};const se=()=>i(v,{children:[e(M,{}),e(w,{}),e("div",{className:"container",id:"cajaPrincipal",children:i("div",{className:"container-form",children:[e("h2",{children:"Formulario de contacto"}),e("p",{children:"Por favor, complete sus datos antes de enviar la informaci\xF3n."}),i("form",{action:"#",children:[i("div",{className:"row",children:[e("div",{className:"col-25",children:e("label",{htmlFor:"nombre",children:"Nombre"})}),e("div",{className:"col-36",children:e("input",{type:"text",id:"nombre",name:"nombre",placeholder:"Nombre"})}),e("div",{className:"col-36 right",children:e("input",{type:"text",id:"apellidos",name:"apellidos",placeholder:"Apellidos"})})]}),i("div",{className:"row",children:[e("div",{className:"col-25",children:e("label",{htmlFor:"email",children:"Email"})}),e("div",{className:"col-75",children:e("input",{type:"text",id:"email",name:"email",placeholder:"Email"})})]}),i("div",{className:"row",children:[e("div",{className:"col-25",children:e("label",{htmlFor:"telefono",children:"Tel\xE9fono"})}),e("div",{className:"col-75",children:e("input",{type:"text",id:"telefono",name:"telefono",placeholder:"Tel\xE9fono"})})]}),i("div",{className:"row",children:[e("div",{className:"col-25",children:e("label",{htmlFor:"asunto",children:"Asunto del mensaje"})}),e("div",{className:"col-75",children:i("select",{id:"asunto",children:["Asunto del mensaje",e("option",{children:"Quejas y reclamaciones"}),e("option",{children:"Sugerencia"}),e("option",{children:"Otro"})]})})]}),i("div",{className:"row",children:[e("div",{className:"col-25",children:e("label",{htmlFor:"mensaje",children:"Mensaje"})}),e("div",{className:"col-75",children:e("textarea",{id:"mensaje",name:"mensaje",placeholder:"Escriba su mensaje...",style:{height:"200px"}})})]}),e("br",{}),e("div",{className:"row bottom",children:e("input",{type:"submit",value:"Enviar"})})]})]})}),e(x,{})]});function ae({searchValue:r,changeSearchValueFunction:m}){const[u,c]=o.exports.useState(!1),[a,n]=o.exports.useState([]);document.getElementById("textoPredict"),document.getElementById("textoPredict"),o.exports.useEffect(()=>{r.length>1&&(c(!0),fetch(j+r+"&"+y).then(t=>t.json()).then(t=>{n(s(t.results)),c(!1)}))},[r]);const p=t=>{m(t.target.value)};function s(t){let l=[];if(t.length<10)return console.log(l),l;for(let f=0;f<10;f++)l.push(t[f]);return console.log(l),l}return i("ul",{className:"icons-ul",children:[e(b,{to:"/busquedas/"+r,children:i("form",{className:"log",id:"myForm",children:[e("input",{type:"text",className:"input-search",id:"mySearch",placeholder:"Search movies",value:r,onChange:t=>{p(t)},autoComplete:"off"}),e("button",{className:"boton-search",type:"submit",children:e("i",{className:"fas fa-search"})}),r.length>1?u?null:e("div",{id:"textoPredict",className:"textoPredict",style:{display:"block",border:"thick solid red"},children:a.map(t=>i("li",{className:"lista_predict",children:[e("p",{children:t.title}),e("p",{children:t.release_date})]},t.id))}):null]})}),e("li",{children:e("a",{href:"#",children:e("i",{style:{width:"auto"},className:"fas fa-user",id:"btn_login_nav",title:"Portafolio"})})})]})}const M=()=>{const r=["fas fa-bomb","fas fa-running","fab fa-d-and-d","fas fa-grin-squint","fas fa-user-secret","fas fa-theater-masks","fas fa-dragon","fas fa-baby","fas fa-dizzy","fas fa-book","fas fa-hand-holding-heart","fas fa-rocket","fas fa-mask","fas fa-fighter-jet","fas fa-hat-cowboy"],m=["Action","Adventure","Animation","Comedy","Crime","Drama","Fantasy","Family","Horror","History","Romance","Science Fiction","Thriller","War","Western"],[u,c]=o.exports.useState("");return i(v,{children:[i("nav",{children:[i("ul",{className:"logo-ul",children:[e("li",{className:"toggle",id:"btn_movil",children:e("i",{className:"fas fa-bars"})}),e(b,{to:"/",className:"logo"}),e("li",{className:"menu_options categorias",children:"Categorias"}),e("li",{className:"menu_options",children:e(b,{to:"/peliculas",children:"Peliculas"})}),e("li",{className:"menu_options",children:e(b,{to:"/series",children:"Series"})}),e("li",{className:"menu_options",children:e(b,{to:"/formulario",children:"Contacto"})})]}),e(ae,{searchValue:u,changeSearchValueFunction:c})]}),e("div",{className:"menu__side",id:"menu_side",children:e("div",{className:"options__menu",children:m.map((a,n)=>e(b,{to:"/categorias/"+a,children:i("div",{className:"option",children:[e("i",{className:r[n]+" fa-2x",title:a}),e("h4",{className:"text_category",children:a})]})},n))})})]})},re="https://image.tmdb.org/t/p/w500/";function le({movieInfo:r,index:m}){const{original_title:u,backdrop_path:c,release_date:a,vote_average:n,overview:p,title:s}=r;return i("div",{className:"movie-card carrusel"+m,children:[i("div",{className:"delante",children:[e("div",{className:"movie-image",children:e("img",{style:{width:"100%"},src:re+c})}),e("h4",{className:"movie-title",children:s}),e("h6",{children:a}),e("div",{className:"movie-rating",children:n}),e("button",{className:"boton-card flip",children:"Trailer"})]}),i("div",{className:"detras",children:[e("strong",{children:p}),e("br",{}),e("button",{className:"boton-card flp",children:"Pelicula"})]})]})}function B({sliderNumber:r,movieList:m,title:u}){return i(v,{children:[e("h1",{children:u}),e("div",{className:"freetowatch-cards",children:e("div",{className:"slider"+r,id:"carruseles"+r,"data-pause":"false",children:m.map(c=>e(le,{movieInfo:c,index:r},c.id))})})]})}function ne(){const[r,m]=o.exports.useState([]),[u,c]=o.exports.useState([]),[a,n]=o.exports.useState([]),[p,s]=o.exports.useState(!1),t=g=>fetch(g).then(N=>N.json()).then(N=>N.results);function l(){s(!0),t(U).then(g=>{m(I(g)),s(!1)})}function f(){s(!0),t(V).then(g=>{c(I(g)),s(!1)})}function A(){s(!0),t(O).then(g=>{n(I(g)),s(!1),console.log(O)})}function I(g){let N=[];if(g.length<10)return console.log(N),N;for(let S=0;S<10;S++)N.push(g[S]);return console.log(N),N}return o.exports.useEffect(()=>{l(),f(),A()},[]),e(v,{children:e("div",{className:"container",children:p?e(v,{children:e("h3",{children:"Cargando..."})}):e(v,{children:i("div",{className:"container",children:[e(B,{sliderNumber:1,movieList:r,title:"Las m\xE1s populares"}),e("br",{}),e("br",{}),e(B,{sliderNumber:2,movieList:u,title:"Las m\xE1s valoradas"}),e("br",{}),e("br",{}),e(B,{sliderNumber:3,movieList:a,title:"Las nuevas"})]})})})})}const oe=()=>i(v,{children:[e(M,{}),e(w,{}),e("div",{className:"container",children:e("div",{className:"background"})}),e("div",{id:"contenedor",children:e("div",{id:"pelis_header",children:i("div",{className:"mySlides fade",children:[e("img",{id:"foto",src:F}),e("div",{className:"text_title",children:"Batman"}),e("div",{className:"text",children:"1"})]})})}),e(ne,{}),e(x,{})]});function ce({movieInfo:r}){const{original_title:m,backdrop_path:u,release_date:c,vote_average:a,overview:n,poster_path:p}=r;return e("div",{className:"poster",children:e("img",{src:E+p,style:{width:"100%"},alt:"Imagen portada"})})}const de=()=>{const{categoria:r}=P(),[m,u]=o.exports.useState([]),[c,a]=o.exports.useState(!1);o.exports.useState([r]);const n=J+X[r],p=t=>fetch(t).then(l=>l.json()).then(l=>l.results);function s(){const t=[];a(!0),p(n).then(l=>{if(l.length<19)l.map(f=>{t.push(f)});else for(let f=0;f<=19;f++)t.push(l[f]);u(t),a(!1)})}return o.exports.useEffect(s,[r]),i(v,{children:[e(M,{}),e(w,{}),i("div",{className:"row",id:"contenedor_main",children:[e("h3",{id:"titulos",className:"titulo",children:r}),e("div",{className:"peliculas",id:"list_pelis",children:c?e("p",{children:"Cargando..."}):m.map(t=>e(b,{to:"/pelicula/"+t.original_title+"/"+t.id,children:e("div",{children:e(ce,{movieInfo:t},t.id)},t.id)},t.id))})]}),e(x,{})]})};const he=()=>{const{title:r,id:m}=P(),u=j+r+"&"+y,c=_+"movie/"+m+"?"+y+"&append_to_response=videos&language=es-ES";document.getElementById("mytrailer");const[a,n]=o.exports.useState([]),[p,s]=o.exports.useState(!1),t=d=>fetch(d).then(h=>h.json()).then(h=>h.results);function l(){const d=[];s(!0),t(u).then(h=>{d.push(h[0]),n(d),s(!1)})}const[f,A]=o.exports.useState([]),[I,g]=o.exports.useState(!1),N=d=>fetch(d).then(h=>h.json()).then(h=>h.videos.results);function S(){g(!0),N(c).then(d=>{A(d),g(!1)})}function T(d){setTimeout(()=>{f.map(h=>{h.type=="Trailer"&&h.site=="YouTube"||h.name.includes("Trailer")&&h.site=="YouTube"?document.getElementById("mytrailer").innerHTML=`<iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/${h.key}" 
            title="YouTube video player" 
            frameborder="0" 
            allow=
            "accelerometer;
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture" 
            allowfullscreen>
            </iframe>`:document.getElementById("mytrailer").innerHTML=`<iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/_s4qXyZOJSQ" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer;
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture" 
            allowfullscreen>
            </iframe>`})},10)}return o.exports.useEffect(()=>{l(),S()},[]),i(v,{children:[e(M,{}),e(w,{}),p?e("div",{className:"container",id:"listas_pelis",children:i("div",{className:"contenedor-pelicula",children:[e("img",{id:"foto",src:F,style:{width:"35%"}}),i("div",{className:"content_film",id:1,children:[i("div",{className:"text_Film",children:[e("h3",{className:"titulo",children:"Venom"}),e("p",{className:"descripcion",children:"un hombre mutante"})]}),e("div",{className:"youtube-wrapper",children:e("div",{className:"trailer",children:e("strong",{id:"mytrailer"})})})]})]})},1):a.map(d=>e("div",{className:"container",id:"listas_pelis",children:i("div",{className:"contenedor-pelicula",children:[e("img",{id:"foto",src:E+d.poster_path,style:{width:"35%"}}),i("div",{className:"content_film",id:d.id,children:[e("h3",{className:"titulo",children:d.original_title}),e("p",{className:"descripcion",children:d.overview}),e("div",{className:"youtube-wrapper",children:e("div",{className:"trailer",children:e("strong",{id:"mytrailer"})})})]})]})},d.id)),I?e("p",{children:"Cargando.."}):T(),e(x,{})]})},me=()=>{const{title:r,id:m}=P(),u=z+r+"&"+y,c=_+"tv/"+m+"?"+y+"&append_to_response=videos&language=es-ES";document.getElementById("mytrailer");const[a,n]=o.exports.useState([]),[p,s]=o.exports.useState(!1),t=d=>fetch(d).then(h=>h.json()).then(h=>h.results);function l(){const d=[];s(!0),t(u).then(h=>{console.log(u),d.push(h[0]),n(d),s(!1)})}const[f,A]=o.exports.useState([]),[I,g]=o.exports.useState(!1),N=d=>fetch(d).then(h=>h.json()).then(h=>h.videos.results);function S(){g(!0),N(c).then(d=>{console.log(c),A(d),g(!1)})}function T(d){setTimeout(()=>{f.map(h=>{h.type=="Trailer"&&h.site=="YouTube"||h.name.includes("Trailer")&&h.site=="YouTube"?document.getElementById("mytrailer").innerHTML=`<iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/${h.key}" 
            title="YouTube video player" 
            frameborder="0" 
            allow=
            "accelerometer;
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture" 
            allowfullscreen>
            </iframe>`:document.getElementById("mytrailer").innerHTML=`<iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/_s4qXyZOJSQ" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer;
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture" 
            allowfullscreen>
            </iframe>`})},10)}return o.exports.useEffect(()=>{l(),S()},[]),i(v,{children:[e(M,{}),e(w,{}),p?e("div",{className:"container",id:"listas_pelis",children:i("div",{className:"contenedor-pelicula",children:[e("img",{id:"foto",src:F,style:{width:"35%"}}),i("div",{className:"content_film",id:1,children:[i("div",{className:"text_Film",children:[e("h3",{className:"titulo",children:"Venom"}),e("p",{className:"descripcion",children:"un hombre mutante"})]}),e("div",{className:"youtube-wrapper",children:e("div",{className:"trailer",children:e("strong",{id:"mytrailer"})})})]})]})},1):a.map(d=>e("div",{className:"container",id:"listas_pelis",children:i("div",{className:"contenedor-pelicula",children:[e("img",{id:"foto",src:E+d.poster_path,style:{width:"35%"}}),i("div",{className:"content_film",id:d.id,children:[e("h3",{className:"titulo",children:d.name}),e("p",{className:"descripcion",children:d.overview}),e("div",{className:"youtube-wrapper",children:e("div",{className:"trailer",children:e("strong",{id:"mytrailer"})})})]})]})},d.id)),I?e("p",{children:"Cargando.."}):T(),e(x,{})]})};function ue({movieInfo:r}){const{title:m,backdrop_path:u,overview:c,vote_average:a,poster_path:n}=r;return e(v,{children:i("div",{className:"movie",children:[e("img",{id:"foto",src:E+n,style:{width:"8%"}}),i("div",{className:"content_film",id:"${id}",children:[e("h3",{className:"titulo",children:m}),e("p",{className:"titulo-secundario",children:"Sinopsis:"}),e("p",{className:"descripcion",children:c})]})]})})}const pe=()=>{const{title:r}=P(),[m,u]=o.exports.useState([]),[c,a]=o.exports.useState(!1),n=j+r+"&"+y,p=t=>fetch(t).then(l=>l.json()).then(l=>l.results);function s(){const t=[];a(!0),p(n).then(l=>{if(l.length<6)l.map(f=>{t.push(f)});else for(let f=0;f<=6;f++)t.push(l[f]);u(t),a(!1)})}return o.exports.useEffect(s,[]),i(v,{children:[e(M,{}),e(w,{}),e("div",{className:"container2",children:i("div",{className:"row",id:"listas_pelis",children:[c?e("p",{children:"Cargando..."}):m.map(t=>e(b,{to:"/pelicula/"+t.original_title+"/"+t.id,children:e("div",{children:e(ue,{movieInfo:t},t.id)},t.id)},t.id)),e("button",{className:"btn_mas",children:"Mostrar mas"})]})}),e(x,{})]})};function fe(){return o.exports.useState(0),e(v,{children:e(q,{children:i(Y,{children:[e(L,{path:"/peliculas",children:e(ee,{})}),e(L,{path:"/series",children:e(ie,{})}),e(L,{path:"/formulario",children:e(se,{})}),e(L,{path:"/categorias/:categoria",children:e(de,{})}),e(L,{path:"/pelicula/:title/:id",children:e(he,{})}),e(L,{path:"/serie/:title/:id",children:e(me,{})}),e(L,{path:"/busquedas/:title",children:e(pe,{})}),e(L,{path:"/",children:e(oe,{})})]})})})}D.render(e(H.StrictMode,{children:e(fe,{})}),document.getElementById("root"));
