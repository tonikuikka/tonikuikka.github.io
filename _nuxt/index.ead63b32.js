import{_ as f,t as s,L as x,A as C,M as m,N as y,x as t,v as i,O as u,y as r,P as v,B as S,Q as k,T as E,z as p,R as w,C as N,D as j}from"./entry.44e530fd.js";const B={props:{buttons:{type:Array,default:[]},selected:{type:String},direction:{type:String,default:"row"},hidden:{type:Boolean,default:!1}},emits:["navigatorEvent"]};const M=["disabled","onClick"],L=["onClick"],I=["src"];function P(e,n,l,b,a,c){return s(),x(E,null,{default:C(()=>[m(t("div",{id:"navigator",class:k({"on-columns":l.direction==="column"})},[(s(!0),i(v,null,u(l.buttons,o=>(s(),i("button",{disabled:o===l.selected,onClick:h=>e.$emit("navigatorEvent",{type:"changePage",button:o})},r(o),9,M))),256)),(s(!0),i(v,null,u(e.$i18n.locales,o=>m((s(),i("button",{onClick:h=>e.$emit("navigatorEvent",{type:"switchLanguage",lang:o.code})},[t("img",{class:"flag-icon",src:`/flags/${o.code}.svg`},null,8,I),S(" "+r(o.name),1)],8,L)),[[y,o.code!==e.$i18n.locale]])),256))],2),[[y,!l.hidden]])]),_:1})}const $=f(B,[["render",P],["__scopeId","data-v-0b383fb1"]]),A={props:{skill:{type:Object,required:!0}},methods:{_getClass:function(e){switch(e){case 1:return"novice";case 2:return"advancedBeginner";case 3:return"competent";case 4:return"proficient";case 5:return"expert"}}}};const D={class:"skill-bar-container"},O={class:"tooltip-text"};function V(e,n,l,b,a,c){return s(),i("div",D,[t("span",O,[t("h2",null,r(l.skill.name)+": "+r(e.$t(c._getClass(l.skill.level))),1)]),t("div",null,r(l.skill.name),1),(s(),i(v,null,u(5,o=>t("div",{class:k([c._getClass(l.skill.level),{asd:o>l.skill.level},"indicators"])},null,2)),64)),t("div",null,r(e.$t(c._getClass(l.skill.level))),1)])}const q=f(A,[["render",V],["__scopeId","data-v-c43a7a8b"]]),K={data(){return{tabs:["test1","test2","test3"],selectedTab:"test1",hideMenu:!0,skills:[{name:"Javascript",level:5,description:""},{name:"Python",level:4,description:""},{name:"C",level:1,description:""}]}},watch:{selectedTab:function(){this.changePage()}},methods:{changePage:function(){const e=this.$refs["page-content"];if(!e)return;const n=this.tabs.indexOf(this.selectedTab);e.scrollTo({top:e.scrollTop,left:e.scrollWidth/this.tabs.length*n,behavior:"smooth"})},onScrollEnd:function(){const e=this.$refs["page-content"];if(!e)return;const n=Math.round(e.scrollLeft/e.scrollWidth*this.tabs.length);n!==this.tabs.indexOf(this.selectedTab)&&(this.selectedTab=this.tabs[n])},_onNavigatorEvent:function(e,n={}){switch(e.type){case"changePage":this.selectedTab=e.button;break;case"switchLanguage":this.$i18n.setLocale(e.lang);break}n.closeAfter&&(this.hideMenu=!0)},_footerNavClick:function(e){this.selectedTab=e,window.scrollTo(0,0)}}},z=""+new URL("toni.fdc26669.jpg",import.meta.url).href;const _=e=>(N("data-v-5e160009"),e=e(),j(),e),F={id:"page-wrapper"},R=_(()=>t("h1",null,[t("p",{class:"typing-effect"},"Toni Kuikka")],-1)),W=_(()=>t("span",{class:"material-icons"}," menu ",-1)),G=[W],H={class:"page-tabs"},J={key:0},Q=w('<div id="frontpage-header" data-v-5e160009><img id="toni" src="'+z+'" data-v-5e160009><div data-v-5e160009><h1 data-v-5e160009>Full Stack Developer</h1><div id="programming-lang-icons" data-v-5e160009><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" data-v-5e160009><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" data-v-5e160009><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" data-v-5e160009><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" data-v-5e160009></div></div></div>',1),U=[Q],X={key:1},Y={key:2},Z=_(()=>t("p",null,"asd",-1)),ee=[Z],te=_(()=>t("div",{id:"footer-h-container"},[t("h2",null,[t("p",{class:"typing-effect"},"Toni Kuikka")])],-1)),ne=["onClick"],se=w('<div id="social-media" data-v-5e160009><div data-v-5e160009><p data-v-5e160009><a href="https://github.com/tonikuikka/tonikuikka.github.io" class="fa fa-github" target="_blank" data-v-5e160009></a> The repository of this page is available on GitHub. </p></div><div data-v-5e160009><a href="https://www.linkedin.com/in/toni-kuikka-2875141aa" class="fa fa-linkedin" target="_blank" data-v-5e160009></a><a href="https://www.instagram.com/tonimkuikka/" class="fa fa-instagram" target="_blank" data-v-5e160009></a><a href="https://www.facebook.com/tonimarkuskuikka/" class="fa fa-facebook" target="_blank" data-v-5e160009></a></div><div id="footer-copyright" data-v-5e160009><p data-v-5e160009> © 2023 Toni Kuikka </p></div></div>',1);function ie(e,n,l,b,a,c){const o=$,h=q;return s(),i("div",F,[t("header",null,[R,t("button",{id:"toggle-menu",class:k(["mobile-only",{active:!a.hideMenu}]),onClick:n[0]||(n[0]=d=>a.hideMenu=!a.hideMenu)},G,2),p(o,{buttons:a.tabs,selected:a.selectedTab,class:"desktop-only",onNavigatorEvent:n[1]||(n[1]=d=>c._onNavigatorEvent(d))},null,8,["buttons","selected"])]),p(o,{buttons:a.tabs,selected:a.selectedTab,direction:"column",hidden:a.hideMenu,onNavigatorEvent:n[2]||(n[2]=d=>c._onNavigatorEvent(d,{closeAfter:!0})),class:"mobile-only"},null,8,["buttons","selected","hidden"]),t("div",{id:"page-content",ref:"page-content",onScrollend:n[3]||(n[3]=(...d)=>c.onScrollEnd&&c.onScrollEnd(...d))},[(s(!0),i(v,null,u(a.tabs,(d,g)=>(s(),i("div",H,[g===0?(s(),i("div",J,U)):g===1?(s(),i("div",X,[(s(!0),i(v,null,u(a.skills,T=>(s(),i("div",null,[p(h,{skill:T},null,8,["skill"])]))),256))])):(s(),i("div",Y,ee))]))),256))],544),t("footer",null,[te,t("div",null,[t("ul",null,[(s(!0),i(v,null,u(a.tabs,d=>(s(),i("li",null,[t("button",{onClick:g=>c._footerNavClick(d)},[t("b",null,r(d),1)],8,ne)]))),256))])]),se])])}const oe=f(K,[["render",ie],["__scopeId","data-v-5e160009"]]);export{oe as default};