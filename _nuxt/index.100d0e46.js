import{_ as k,t as a,L as P,A as B,M as w,N as C,x as t,v as c,O as m,y as l,P as h,B as E,Q as T,T as V,R as b,S as D,U as S,C as M,D as L,z as f,V as j,W as y,X as z}from"./entry.931db4c2.js";const O={props:{buttons:{type:Array,default:[]},selected:{type:Number,default:0},direction:{type:String,default:"row"},hidden:{type:Boolean,default:!1}},emits:["navigatorEvent"]};const A=["disabled","onClick"],I=["onClick"],x=["src"];function H(e,i,s,r,n,o){return a(),P(V,null,{default:B(()=>[w(t("div",{id:"navigator",class:T({"on-columns":s.direction==="column"})},[(a(!0),c(h,null,m(s.buttons,(d,v)=>(a(),c("button",{disabled:v===s.selected,onClick:$=>e.$emit("navigatorEvent",{type:"changePage",index:v})},l(e.$t(d)),9,A))),256)),(a(!0),c(h,null,m(e.$i18n.locales,d=>w((a(),c("button",{onClick:v=>e.$emit("navigatorEvent",{type:"switchLanguage",lang:d.code})},[t("img",{class:"flag-icon",src:`/flags/${d.code}.svg`},null,8,x),E(" "+l(d.name),1)],8,I)),[[C,d.code!==e.$i18n.locale]])),256))],2),[[C,!s.hidden]])]),_:1})}const W=k(O,[["render",H],["__scopeId","data-v-f7d2e8d1"]]),X={data(){return{tooltip:{left:"-999999px",top:"-999999px"}}},props:{skill:{type:Object,required:!0}},methods:{_getClass:function(e){switch(e){case 1:return"novice";case 2:return"advancedBeginner";case 3:return"competent";case 4:return"proficient";case 5:return"expert"}},_showTooltip:function(e){const i=this.$refs.tooltip;if(!i)return;const s=i.offsetWidth,r=i.offsetHeight,n=e.clientX,o=e.clientY;s+n>(window.innerWidth||document.documentElement.clientWidth)?this.tooltip.left=`${n-s>=0?n-s:0}px`:this.tooltip.left=`${n}px`,r+o>(window.innerHeight||document.documentElement.clientHeight)?this.tooltip.top=`${o-r>=0?o-r:0}px`:this.tooltip.top=`${o}px`},_hideTooltip:function(){this.tooltip.left="-999999px",this.tooltip.top="-999999px"}}};function F(e,i,s,r,n,o){return a(),c(h,null,[t("div",{class:"skill-bar-container",ref:"skill-bar",onMousemove:i[3]||(i[3]=d=>o._showTooltip(d)),onMouseleave:i[4]||(i[4]=d=>o._hideTooltip())},[t("div",{onClick:i[0]||(i[0]=b(()=>{},["prevent"]))},l(s.skill.name),1),(a(),c(h,null,m(5,d=>t("div",{class:T([o._getClass(s.skill.level),{blank:d>s.skill.level},"indicators"]),onClick:i[1]||(i[1]=b(()=>{},["prevent"]))},null,2)),64)),t("div",{onClick:i[2]||(i[2]=b(()=>{},["prevent"]))},l(e.$t(o._getClass(s.skill.level))),1)],544),t("div",{class:"tooltip",style:D(n.tooltip),ref:"tooltip"},[t("h2",null,l(s.skill.name)+": "+l(e.$t(o._getClass(s.skill.level))),1),t("p",null,l(e.$t(s.skill.description)),1)],4)],64)}const R=k(X,[["render",F],["__scopeId","data-v-e728aea4"]]),U={data(){return{map:null,center:[0,0],markers:[]}},emits:["markerClick"],mounted(){this.initMap()},methods:{initMap:async function(){const e=await S(()=>import("./maplibre-gl.b56299a5.js").then(r=>r.m),["./maplibre-gl.b56299a5.js","./_commonjsHelpers.de833af9.js"],import.meta.url),i=await S(()=>import("./index.5b12216a.js"),["./index.5b12216a.js","./_commonjsHelpers.de833af9.js"],import.meta.url),s={type:"FeatureCollection",features:[{type:"Feature",properties:{title:"oulu",desc:"ouluDesc"},geometry:{type:"Point",coordinates:[25.5085619,65.0141138]}},{type:"Feature",properties:{title:"suonenjoki",desc:"suonenjokiDesc"},geometry:{type:"Point",coordinates:[27.0831549,62.6261045]}},{type:"Feature",properties:{title:"tampere",desc:"tampereDesc"},geometry:{type:"Point",coordinates:[23.5006663,61.6318575]}},{type:"Feature",properties:{title:"brno",desc:"brnoDesc"},geometry:{type:"Point",coordinates:[16.2661404,49.2018748]}},{type:"Feature",properties:{title:"prague",desc:"pragueDesc"},geometry:{type:"Point",coordinates:[14.3008164,50.0597734]}}]};this.center=i.center(s).geometry.coordinates||[0,0],this.map=new e.Map({container:"map",center:this.center,zoom:3,pitch:75,attributionControl:!1,style:"https://api.maptiler.com/maps/f34804ce-f73d-45af-9dc4-7e99216d8a25/style.json?key=EjPwybiX5YV8l2YqurXi"}),this.map.on("load",()=>{for(let r=0;r<s.features.length;r++){const n=s.features[r],o=new e.Marker({color:"var(--accent2)",anchor:"bottom",offset:[-.5,-2]}).setLngLat(n.geometry.coordinates).addTo(this.map);o.addClassName("marker"),r===0&&(o.addClassName("selected"),this.$emit("markerClick",n.properties)),o.getElement().addEventListener("click",()=>{this.onMarkerClick(o,n.properties)}),this.markers.push(o)}})},onMarkerClick:function(e,i){if(this.map){this.map.flyTo({center:e.getLngLat(),zoom:6});for(const s of this.markers)s.removeClassName("selected");e.addClassName("selected"),this.$emit("markerClick",i)}},zoomOut:function(){this.map&&this.map.flyTo({center:this.center,zoom:3,pitch:75,bearing:0})}}};const N=e=>(M("data-v-7c776d45"),e=e(),L(),e),q={id:"map-container"},Y=N(()=>t("div",{id:"map"},null,-1)),G=["title"],J=N(()=>t("span",{class:"material-icons"}," zoom_out_map ",-1)),K=[J];function Q(e,i,s,r,n,o){return a(),c("div",q,[Y,t("button",{title:e.$t("zoomOutMap"),onClick:i[0]||(i[0]=(...d)=>o.zoomOut&&o.zoomOut(...d))},K,8,G)])}const Z=k(U,[["render",Q],["__scopeId","data-v-7c776d45"]]),ee={data(){return{tabs:["mainPage","skills","location"],selectedTab:0,hideMenu:!0,skills:[{name:"Javascript",level:5,description:"javascriptDesc"},{name:"HTML",level:5,description:"htmlDesc"},{name:"Nuxt.js",level:5,description:"nuxtDesc"},{name:"Vue.js",level:5,description:"vueDesc"},{name:"Typescript",level:4,description:""},{name:"Python",level:5,description:"pythonDesc"},{name:"CSS",level:4,description:"cssDesc"},{name:"MySQL",level:4,description:""},{name:"PHP",level:3,description:""},{name:"R",level:3,description:""},{name:"Git",level:3,description:""},{name:"REST API",level:3,description:""},{name:"Azure",level:2,description:""},{name:"Java",level:2,description:""},{name:"Scala",level:1,description:""},{name:"C",level:1,description:""},{name:"Linux",level:2,description:""}],sortSkillsBy:"level",location:{}}},watch:{selectedTab:function(){this.changePage()}},mounted(){window.addEventListener("resize",this._toggleTitleVisibility),this._toggleTitleVisibility(),this.skills.sort(this._sortSkills),this.$nextTick(this._fitHeight)},unmounted(){window.removeEventListener("resize",this._toggleTitleVisibility)},methods:{_fitHeight:function(){var n;const e=this.$refs["page-content"],i=this.$refs["page-tabs"];if(!e||!i)return;const s=(n=i[this.selectedTab])==null?void 0:n.lastElementChild,r=(s==null?void 0:s.offsetTop)+(s==null?void 0:s.offsetHeight)+100;e.style.setProperty("height",`${r}px`)},changePage:function(){const e=this.$refs["page-content"];e&&e.scrollTo({top:e.scrollTop,left:e.scrollWidth/this.tabs.length*this.selectedTab,behavior:"smooth"})},onScrollEnd:function(){const e=this.$refs["page-content"];if(!e)return;const i=Math.round(e.scrollLeft/e.scrollWidth*this.tabs.length);i!==this.selectedTab&&(this.selectedTab=i),this.$nextTick(this._fitHeight)},_onNavigatorEvent:function(e,i={}){switch(e.type){case"changePage":e.index!==void 0&&(this.selectedTab=e.index);break;case"switchLanguage":e.lang!==void 0&&this.$i18n.setLocale(e.lang);break}i!=null&&i.closeAfter&&(this.hideMenu=!0)},_footerNavClick:function(e){this.selectedTab=e,window.scrollTo(0,0)},_toggleTitleVisibility:function(){const e=this.$refs["title-container"];if(!e)return;const i="hidden";e.classList.remove(i),e.scrollWidth>e.clientWidth&&e.classList.add(i)},_sortSkills:function(e,i){const s=e[this.sortSkillsBy],r=i[this.sortSkillsBy];return(s>r?1:r>s?-1:0)*(this.sortSkillsBy==="level"?-1:1)}}},te=""+new URL("toni.962a621f.png",import.meta.url).href;const p=e=>(M("data-v-207a6298"),e=e(),L(),e),ie={id:"page-wrapper"},ne={id:"title-container",ref:"title-container"},se=p(()=>t("h1",null,[t("p",{class:"page-title typing-effect"},"Toni Kuikka")],-1)),oe=[se],le=p(()=>t("span",{class:"material-icons"}," menu ",-1)),ae=[le],re={id:"frontpage-header"},ce=p(()=>t("img",{id:"frontpage-header-img",src:te},null,-1)),de={id:"frontpage-header-title-container"},ue=["title"],pe=z('<div id="programming-lang-icons" data-v-207a6298><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" data-v-207a6298><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" data-v-207a6298><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" data-v-207a6298><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" data-v-207a6298></div>',1),he={class:"tab-content"},_e=p(()=>t("span",{class:"material-icons"}," location_on ",-1)),me={class:"location"},ve={class:"tab-content"},ge=p(()=>t("span",{class:"material-icons between-p"}," lightbulb ",-1)),fe=p(()=>t("span",{class:"material-icons between-p"}," lightbulb ",-1)),ke={key:1,class:"tab-content"},be=p(()=>t("span",{class:"material-icons between-p"}," lightbulb ",-1)),ye={id:"sort-skills-container"},we={for:"sort-skills-by"},Te={value:"level"},$e={value:"name"},Ce={class:"tab-content"},Se={key:0},Ee={key:1},Me=p(()=>t("span",{class:"material-icons between-p"}," lightbulb ",-1)),Le={class:"tab-content"},Ne={href:"https://urn.fi/URN:NBN:fi:tuni-202204273944",target:"_blank"},Pe={href:"https://colab.research.google.com/drive/1Eh7lXkkv0XVNJlGMXlAU6flwZLhc_lOt?usp=s",target:"_blank"},Be=p(()=>t("div",{id:"footer-h-container"},[t("h2",null,[t("p",{class:"page-title"},"Toni Kuikka")])],-1)),Ve={id:"footer-nav"},De=["onClick"],je={id:"social-media"},ze={id:"social-media-label"},Oe=p(()=>t("div",null,[t("a",{href:"https://www.linkedin.com/in/toni-kuikka-2875141aa",class:"fa fa-linkedin",target:"_blank"}),t("a",{href:"https://www.instagram.com/tonimkuikka/",class:"fa fa-instagram",target:"_blank"}),t("a",{href:"https://www.facebook.com/tonimarkuskuikka/",class:"fa fa-facebook",target:"_blank"})],-1)),Ae=p(()=>t("div",{id:"footer-copyright"},[t("p",null," © 2024 Toni Kuikka ")],-1));function Ie(e,i,s,r,n,o){const d=W,v=R,$=Z;return a(),c("div",ie,[t("header",null,[t("div",ne,oe,512),t("button",{id:"toggle-menu",class:T(["mobile-only",{active:!n.hideMenu}]),onClick:i[0]||(i[0]=u=>n.hideMenu=!n.hideMenu)},ae,2),f(d,{buttons:n.tabs,selected:n.selectedTab,class:"desktop-only",onNavigatorEvent:i[1]||(i[1]=u=>o._onNavigatorEvent(u))},null,8,["buttons","selected"])]),f(d,{buttons:n.tabs,selected:n.selectedTab,direction:"column",hidden:n.hideMenu,onNavigatorEvent:i[2]||(i[2]=u=>o._onNavigatorEvent(u,{closeAfter:!0})),class:"mobile-only"},null,8,["buttons","selected","hidden"]),t("div",{id:"page-content",ref:"page-content",onScrollend:i[6]||(i[6]=(...u)=>o.onScrollEnd&&o.onScrollEnd(...u))},[(a(!0),c(h,null,m(n.tabs,(u,g)=>(a(),c("div",{class:"page-tab",ref_for:!0,ref:"page-tabs"},[g===0?(a(),c(h,{key:0},[t("div",re,[ce,t("div",de,[t("a",{href:"https://github.com/tonikuikka/tonikuikka.github.io",title:e.$t("availableOnGitHub"),class:"fa fa-github",target:"_blank"},null,8,ue),t("div",null,[t("h1",null,l(e.$t("fullStackDeveloper")),1)]),pe,t("div",he,[_e,t("h2",me,l("Oulu, "+e.$t("finland")),1)])])]),t("div",ve,[ge,t("p",null,l(e.$t("aboutMe")),1),fe,t("p",null,l(e.$t("aboutPage")),1)])],64)):g===1?(a(),c("div",ke,[t("h2",null,l(e.$t(u)),1),be,t("p",null,[E(l(e.$t("mouseOver"))+" ",1),t("div",ye,[t("label",we,l(e.$t("sortBy")),1),w(t("select",{id:"sort-skills-by","onUpdate:modelValue":i[3]||(i[3]=_=>n.sortSkillsBy=_),onChange:i[4]||(i[4]=_=>{n.skills.sort(o._sortSkills)})},[t("option",Te,l(e.$t("level")),1),t("option",$e,l(e.$t("name")),1)],544),[[j,n.sortSkillsBy]])]),(a(!0),c(h,null,m(n.skills,_=>(a(),c("div",null,[f(v,{skill:_},null,8,["skill"])]))),256))])])):g===2?(a(),c(h,{key:2},[t("div",Ce,[t("h2",null,l(e.$t(u)),1),f($,{onMarkerClick:i[5]||(i[5]=_=>n.location=_)}),n.location.title?(a(),c("h2",Se,l(e.$t(n.location.title)),1)):y("",!0),n.location.desc?(a(),c("p",Ee,l(e.$t(n.location.desc)),1)):y("",!0)]),Me,t("div",Le,[t("h2",null,l(e.$t("links")),1),t("ul",null,[t("li",null,[t("a",Ne,l(e.$t("thesis")),1)]),t("li",null,[t("a",Pe,l(e.$t("pythonAssignments")),1)])])])],64)):y("",!0)],512))),256))],544),t("footer",null,[Be,t("div",null,[t("ul",Ve,[(a(!0),c(h,null,m(n.tabs,(u,g)=>(a(),c("li",null,[t("button",{onClick:_=>o._footerNavClick(g)},[t("b",null,l(e.$t(u)),1)],8,De)]))),256))])]),t("div",je,[t("div",ze,[t("p",null,l(e.$t("findMeOn")),1)]),Oe,Ae])])])}const He=k(ee,[["render",Ie],["__scopeId","data-v-207a6298"]]);export{He as default};