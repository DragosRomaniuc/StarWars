(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{107:function(e,t,a){e.exports=a.p+"static/media/lightsaber.1742b375.png"},108:function(e,t,a){e.exports=a.p+"static/media/lightsaber_2.87633dd4.png"},109:function(e,t,a){e.exports=a.p+"static/media/glow.6cd54b7f.png"},129:function(e,t,a){e.exports=a(165)},134:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(10),i=a.n(o),l=(a(134),a(82)),s=a(44),u=a(216),m=a(12);!function(e){e.Index="/",e.Films="/films"}(n||(n={}));var d,p,f=a(115),E=a(29),g=a.n(E),b=a(45),h=a(23),v=a(99),O=a(208),x=a(214),y=a(221),S=a(217),j=a(81),I=a(218),R=a(114),w=a.n(R),_=a(104),C=a(105),M=a(116),L=a(117),A=a(106),D=a.n(A),F=function(e){var t=Object.keys(e),a="";return t.forEach((function(t){var n="object"===typeof e[t],r=n&&e[t].length>=0;n||(a+="".concat(t,"=").concat(e[t],"&")),n&&r&&e[t].forEach((function(e){a+="".concat(t,"=").concat(e,"&")}))})),a?a.slice(0,-1):a},P=function(){var e=Object(b.a)(g.a.mark((function e(t,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t&&(null===a||void 0===a?void 0:a.method)){e.next=3;break}return e.abrupt("return",Promise.reject("Please enter endpoint"));case 3:return"GET"===a.method&&(a.paramsSerializer=function(e){return F(e)}),e.abrupt("return",D()(t,a).then((function(e){return e.data})));case 8:return e.prev=8,e.t0=e.catch(0),console.log("err",e.t0),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),T="https://swapi.dev/api/".replace(/\/+$/,""),k=(Error,function(e){return{getFilms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({method:"GET"},e);return{url:"/films",options:t}},getPeople:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object.assign({method:"GET"},t);return{url:"/people/".concat(e),options:a}}}}),N=function(e){return{getFilms:function(e){var t=k().getFilms(e);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T;return P(e+t.url,t.options).catch((function(e){throw e}))}},getPeople:function(e,t){var a=k().getPeople(e,t);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T;return P(e+a.url,a.options).catch((function(e){throw e}))}}}},G={getFilms:function(e){return N().getFilms(e)(d)},getPeople:function(e,t){return N().getPeople(e,t)(d)}},B=a(49);!function(e){e.ADD_FILMS="ADD_FILMS"}(p||(p={}));var W,H,Y,z,U=function(e){return{type:p.ADD_FILMS,payload:{films:e}}},X=function(e,t){switch(t.type){case p.ADD_FILMS:return{films:t.payload.films};default:return e}},K={film:{films:[]}},J=function(e,t){var a=e.film;return{film:X(a,t)}},$=Object(r.createContext)(Object(B.a)(Object(B.a)({},K),{},{dispatch:function(){}})),q=a(107),Q=a.n(q),V=a(213),Z=a(62),ee=a(3),te=a(209),ae=a(210),ne=a(211),re=a(212),ce=a(204),oe=a(220),ie=a(75),le=a(70),se=a.n(le),ue=a(110),me=a.n(ue),de=a(111),pe=a.n(de),fe=a(108),Ee=a.n(fe),ge=a(109),be=a.n(ge),he=a(219),ve=a(207),Oe=a(206),xe=Object(v.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}})),ye=function(e){var t=e.data,a=xe(),n=c.a.useState(!1),r=Object(h.a)(n,2),o=(r[0],r[1]);return c.a.createElement("div",{className:a.root},t.map((function(e){return c.a.createElement(he.a,{onChange:(t=e.url,function(e,a){o(!!a&&t)}),style:{padding:10}},c.a.createElement(Oe.a,{expandIcon:c.a.createElement(se.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},c.a.createElement(ie.a,{className:a.heading,color:"primary"},e.name)),c.a.createElement(ve.a,null,c.a.createElement(O.a,null,c.a.createElement(ie.a,{variant:"body2",color:"textSecondary",component:"p"},"Birth Year: ",e.birth_year),c.a.createElement(ie.a,{variant:"body2",color:"textSecondary",component:"p"},"Eye Color: ",e.eye_color),c.a.createElement(ie.a,{variant:"body2",color:"textSecondary",component:"p"},"Skin Color: ",e.skin_color),c.a.createElement(ie.a,{variant:"body2",color:"textSecondary",component:"p"},"Mass: ",e.mass),c.a.createElement(ie.a,{variant:"body2",color:"textSecondary",component:"p"},"Height: ",e.height))));var t})))},Se=Object(v.a)((function(e){return{root:{maxWidth:345,padding:20,marginTop:25,border:"1px solid #70B8FF",borderRadius:20},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(10deg)"}}})),je=function(e){var t=e.film,a=e.setErrors,n=Se(),r=c.a.useState(!1),o=Object(h.a)(r,2),i=o[0],l=o[1],s=c.a.useState(),u=Object(h.a)(s,2),m=u[0],d=u[1],p=c.a.useState(!1),f=Object(h.a)(p,2),E=f[0],v=f[1],O=function(){var e=Object(b.a)(g.a.mark((function e(){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l(!i),e.prev=1,m){e.next=12;break}return v(!0),n=t.characters.map((function(e){return e.split("/")[5]})),r=n.map((function(e){return G.getPeople(e)})),e.next=8,Promise.all(r);case 8:n=e.sent,v(!1),d(n),console.log(n);case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),v(!1),a([{message:"Something went wrong, please try again"}]);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return t?c.a.createElement(te.a,{className:n.root},c.a.createElement(ae.a,{avatar:c.a.createElement(oe.a,{"aria-label":"recipe",src:Ee.a}),action:c.a.createElement(j.a,{"aria-label":"settings"},c.a.createElement(me.a,null)),title:"Movie title: ".concat(t.title),subheader:"Release Date: ".concat(t.release_date)}),c.a.createElement(ae.a,{avatar:c.a.createElement(oe.a,{"aria-label":"recipe",src:be.a}),action:c.a.createElement(j.a,{"aria-label":"settings"},c.a.createElement(pe.a,null)),title:"Director: ".concat(t.director),subheader:"Producer: ".concat(t.producer)}),c.a.createElement(ne.a,null,c.a.createElement(ie.a,{variant:"body2",color:"textSecondary",component:"p"},t.opening_crawl)),c.a.createElement(re.a,{disableSpacing:!0},c.a.createElement(j.a,{className:Object(ee.default)(n.expand,Object(Z.a)({},n.expandOpen,i)),onClick:O,"aria-expanded":i,"aria-label":"show more"},c.a.createElement(ie.a,null,"Details about characters"),c.a.createElement(se.a,null))),c.a.createElement(ce.a,{in:i,timeout:"auto",unmountOnExit:!0},c.a.createElement(ne.a,null,E?c.a.createElement(V.a,{color:"primary"}):c.a.createElement("div",null,c.a.createElement(ie.a,{paragraph:!0},"Method:"),c.a.createElement(ye,{data:m||[]}))))):c.a.createElement(c.a.Fragment,null)},Ie=Object(v.a)((function(e){return{container:{marginTop:10},linearProgress:{width:"70%"}}})),Re=function(e){var t=e.loading,a=e.selectedFilms,n=e.setErrors,r=Ie();return t?c.a.createElement(x.a,{container:!0,justify:"center",className:r.container},c.a.createElement(V.a,{className:r.linearProgress}),c.a.createElement(V.a,{color:"primary",className:r.linearProgress})):c.a.createElement(O.a,{fixed:!0},c.a.createElement(x.a,{item:!0,container:!0,wrap:"wrap",justify:"space-around",alignItems:"center",direction:"row",style:{padding:20}},a.map((function(e){return c.a.createElement(je,{setErrors:n,film:e})}))))},we=a(113),_e=a.n(we),Ce=Object(v.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary},container:{marginTop:10},image:{position:"absolute",top:0,left:20,zIndex:-2,width:300},img:{flex:1,padding:5,maxWidth:"25%"},linearProgress:{width:"70%"}}})),Me=function(){var e=Ce(),t=Object(r.useState)(),a=Object(h.a)(t,2),n=a[0],o=a[1],i=Object(r.useState)(!1),l=Object(h.a)(i,2),s=l[0],u=l[1],m=Object(r.useState)(),d=Object(h.a)(m,2),p=d[0],E=d[1],v=Object(r.useContext)($),R=v.film.films,_=v.dispatch,C=function(){var e=Object(b.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,G.getFilms();case 4:t=e.sent,_(U(t.results)),u(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),o([{message:"Something went wrong, please try again"}]);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){C()}),[]);return console.log("filllms",R),c.a.createElement("div",null,c.a.createElement(O.a,null,c.a.createElement(x.a,{container:!0,justify:"space-around",item:!0,sm:!0,xs:12,alignContent:"center",alignItems:"center"},c.a.createElement("img",{src:Q.a,className:e.img,alt:"logo"}),c.a.createElement(I.a,{multiple:!0,id:"fixed-tags-demo",onChange:function(e,t){return function(e){E(e)}(t)},options:R,getOptionLabel:function(e){return e.title},renderTags:function(e,t){return e.map((function(e,a){return c.a.createElement(y.a,Object.assign({label:e.title},t({index:a})))}))},style:{minWidth:"50vw"},renderInput:function(e){return c.a.createElement("form",null,c.a.createElement(S.a,Object.assign({},e,{id:"filled-basic",label:"Search for a Star Wars movie",variant:"outlined",placeholder:"Search for a Star Wars movie"})))}})),c.a.createElement(x.a,{container:!0,justify:"center",item:!0,sm:!0,xs:12,alignContent:"center",alignItems:"center"},c.a.createElement("div",null,n&&n.map((function(e){return c.a.createElement(_e.a,{action:c.a.createElement(j.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){o(Object(f.a)(n.filter((function(t){return e.message!==t.message}))))}},c.a.createElement(w.a,{fontSize:"inherit"})),severity:"error"},e.message," ")})))),c.a.createElement(Re,{loading:s,selectedFilms:p||[],setErrors:function(e){return o(e)}})))},Le=function(){return c.a.createElement("div",{"data-testid":"RoutesComponent"},c.a.createElement(m.d,null,c.a.createElement(m.b,{exact:!0,path:n.Index},c.a.createElement(Me,null)),c.a.createElement(m.b,{path:n.Index},c.a.createElement(m.a,{to:n.Index}))))},Ae=function(e){var t=Object(r.useReducer)(J,K),a=Object(h.a)(t,2),n=a[0],o=a[1];return c.a.createElement($.Provider,{value:Object(B.a)(Object(B.a)({},n),{},{dispatch:o})},e.children)};!function(e){e.PRIMARY_MAIN_COLOR="#0f99d6",e.PRIMARY_DARK_COLOR="#034694",e.SUCCESS_COLOR="#8dc63f",e.ERROR_MAIN_COLOR="#ff0000",e.SWITCH_LIGHT_BLUE="#cfebf7",e.SWITCH_LIGHT_GREY="#b0b0b0",e.SWITCH_DISABLED_GREY="#efefef",e.SWITCH_DARK_GREY="#505050",e.BLACK_MEDIUM="rgba(0, 0, 0, 0.8)",e.WHITE="#fff",e.BLACK="#000",e.CARD_BORDER="#f0f0f0"}(W||(W={})),function(e){e.FONT_FAMILY='"Open Sans", "Helvetica", "Arial", sans-serif'}(H||(H={})),function(e){e[e.MEDIUM=600]="MEDIUM"}(Y||(Y={})),function(e){e[e.XS=0]="XS",e[e.SM=576]="SM",e[e.MD=768]="MD",e[e.LG=992]="LG",e[e.XL=1200]="XL"}(z||(z={}));var De={typography:{fontFamily:H.FONT_FAMILY,fontWeightMedium:Y.MEDIUM,body2:{fontSize:"0.75rem"}},palette:{primary:{main:W.PRIMARY_MAIN_COLOR,dark:W.PRIMARY_DARK_COLOR},secondary:{main:W.SUCCESS_COLOR},error:{main:W.ERROR_MAIN_COLOR}},breakpoints:{values:{xs:z.XS,sm:z.SM,md:z.MD,lg:z.LG,xl:z.XL}}},Fe=Object(s.a)(De),Pe=function(e){return c.a.createElement("div",{className:"App"},c.a.createElement(u.a,{theme:Fe},c.a.createElement(l.a,null,c.a.createElement(Ae,null,c.a.createElement(Le,null)))))};window.renderShoreline=function(e){var t=document.getElementById(e);t&&i.a.render(c.a.createElement(Pe,null),t)},window.unmountShoreline=function(e){var t=document.getElementById(e);t&&i.a.unmountComponentAtNode(t)},window.isRenderedByContainer||window.renderShoreline("root")}},[[129,1,2]]]);
//# sourceMappingURL=main.ba12fba8.chunk.js.map