(this["webpackJsonppokemon-search-app"]=this["webpackJsonppokemon-search-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports={searchBox:"Search_searchBox__2ANF4",searchInput:"Search_searchInput__2FaLi",searchButton:"Search_searchButton__2JavL",suggestionBox:"Search_suggestionBox__2Pm8t",suggestion:"Search_suggestion__2yi7V"}},function(e,t,n){e.exports={info:"Info_info__3Dkl6",name:"Info_name__2PCbb",properties:"Info_properties__3r1oy",list:"Info_list__3ah-T"}},,,function(e,t,n){e.exports={app:"App_app__1v3ub",nav:"App_nav__1hOgN",content:"App_content__1QGBa"}},function(e,t,n){e.exports={mainBody:"Main_mainBody__14i3J",options:"Main_options__9-Eyp",list:"Main_list__1o8ck"}},function(e,t,n){e.exports={filterBox:"Filter_filterBox__1ZigQ",filter:"Filter_filter__2JSWw",filterTypes:"Filter_filterTypes__29Ht-"}},function(e,t,n){e.exports={detailsPage:"Details_detailsPage__Fday-",profile:"Details_profile__2fHXX",barChart:"Details_barChart__1AeBA"}},,function(e,t,n){e.exports={listPage:"List_listPage__1JP94",list:"List_list__s6wC-"}},function(e,t,n){e.exports={nav:"Navbar_nav__q2I90",navHeading:"Navbar_navHeading__1CSHt"}},,function(e,t,n){e.exports={listItem:"ListItem_listItem__3m8PH"}},,,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(20),r=n.n(c),i=(n(27),n(13)),o=n.n(i),l=n(4),u=n(14),j=n.n(u),p=n(6),d=n.n(p),h=n(7),b=n(9),m=n.n(b),f=n.p+"static/media/search_icon.e5197f97.svg",v=n(0);var x=function(e){var t=e.setPokemons,n=Object(a.useState)(""),s=Object(l.a)(n,2),c=s[0],r=s[1],i=Object(a.useState)([]),o=Object(l.a)(i,2),u=o[0],j=o[1],p=Object(a.useState)([]),b=Object(l.a)(p,2),x=b[0],O=b[1];Object(a.useEffect)((function(){var e=function(){var e=Object(h.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1200");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,(a=n.results).map((function(e,t){e.id=t+1})),j(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var _=function(){for(var e=[],n=0;n<25;n++)e.push(u[n]);t(e)},g=function(e){var n,a;if(a=e||c){for(var s=0;s<u.length;s++)if(u[s].name==a){n=u[s];break}n?(r(a),t([n])):alert("invalid pokemon name")}else _()};return Object(v.jsxs)("div",{className:m.a.searchBox,children:[Object(v.jsx)("input",{type:"text",placeholder:"Search Pokemons",onChange:function(e){var t=e.target.value.toLowerCase(),n=[];t.length>0?(u.map((function(e){var a=e.name,s=new RegExp("".concat(t),"i"),c=a.search(s);if(0===c){var r={start:a.substring(0,c),mid:a.substring(c,c+t.length),end:a.substring(c+t.length,a.length),name:a};n.push(r)}})),O(n)):O([]),r(t)},onBlur:function(){setTimeout((function(){O([])}),200),c||_()},value:c,className:m.a.searchInput}),Object(v.jsx)("button",{className:m.a.searchButton,onClick:function(){g(null)},children:Object(v.jsx)("img",{src:f,alt:"search icon"})}),x&&Object(v.jsx)("div",{className:m.a.suggestionBox,children:x.map((function(e,t){return Object(v.jsxs)("div",{className:m.a.suggestion,onClick:function(){g(e.name)},children:[e.start,Object(v.jsx)("strong",{children:e.mid}),e.end]},t)}))})]})},O=n(15),_=n.n(O);var g=function(e){var t=e.setPokemons,n=Object(a.useState)(!1),s=Object(l.a)(n,2),c=s[0],r=s[1],i=function(){var e=Object(h.a)(d.a.mark((function e(n){var a,s,c,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(),a=n.toLowerCase(),e.next=4,fetch("https://pokeapi.co/api/v2/type/".concat(a,"/"));case 4:return s=e.sent,e.next=7,s.json();case 7:c=e.sent,r=c.pokemon,i=[],r.map((function(e){var t=e.pokemon.url.split("/");e.pokemon.id=t[t.length-2],i.push(e.pokemon)})),t(i);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){r((function(e){return!e}))};return Object(v.jsxs)("div",{className:_.a.filterBox,children:[Object(v.jsxs)("div",{className:_.a.filter,onClick:o,children:[Object(v.jsx)("div",{children:"Filter"}),Object(v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABt0lEQVRoge3Vv0rDQBwH8O+llm5dBYfU0dG0D1DxAdSxElGTlID4DAkHOvkGDiYoDkI3n6D6AtVJ3WxnhYBdhCTnoIUY2mquV0H4fZbAtb+77+8ufwBCCCGEEEIIIeRvcdOsuq5bnnUe13XL3DSrsvWaTJFv2ydJpRItxvGrb1nbsov7lrW9GMevSaUS+bZ9IjMHK1rA9/dXEk17yAylAKyjILgoMo9n27sAQmQ2UQArx0HwVGQeqRMYM0f4FehXxoWXVSpa0L27e2kaxhKARmaYAdhsGsbzba93P61+UngmxOlRGJ4XzSO1AyVdPxBC5BfTAIS+4+xNqvMcpwUgGLPu1cNweCiVRaao2+2K9a2t6zSKlhljq5mfGICNtXq9f5M7Cc9xWhDicsyaV49vbzudTieRySLVAFCsiXmFHy02E865Fvf7AWMsf+ukjDFbAO/zCg8oaAD4bCIZDEIA+TdR+nXN3/MXJV23OOcpZqSkAWDqSeQp2fkR6Wcgb8ozkaU0PKCwAeDHJpSHB9R8ib/hnKcLtZotgLPRmADOSrpuqg4/d1673fDa7cbP/ySEEEIIIeQ/+gBbcMbRPkLcgwAAAABJRU5ErkJggg==",alt:"drop down arrow"})]}),c&&Object(v.jsx)("div",{className:_.a.filterTypes,children:["Normal","Fire","Water","Grass","Flying","Fighting","Poison","Electric","Ground","Rock","Psychic","Ice","Bug","Ghost","Steel","Dragon","Dark","Fairy"].map((function(e,t){return Object(v.jsx)("div",{onClick:function(){i(e)},children:e},t)}))})]})},A=n(18),k=n.n(A),N=n(21),y=n.n(N),w=n(11);var B=function(e){var t=e.pokemon;return Object(v.jsx)(w.b,{to:"/details/".concat(t.id),style:{textDecoration:"none"},children:Object(v.jsxs)("div",{className:y.a.listItem,children:[Object(v.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/".concat(t.id,".svg"),alt:"".concat(t.name)}),Object(v.jsx)("div",{children:t.name})]})})};var I=function(e){var t=e.usePokemons,n=Object(l.a)(t,2),s=n[0],c=n[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(h.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=24");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,(a=n.results).map((function(e){var t=e.url.split("/");return e.id=t[t.length-2]})),c(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(v.jsx)("div",{className:k.a.listPage,children:Object(v.jsx)("div",{className:k.a.list,children:s.map((function(e){return Object(v.jsx)(B,{pokemon:e},e.id)}))})})};var P=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),s=n[0],c=n[1],r=function(e){c(e)};return Object(v.jsxs)("div",{className:j.a.mainBody,children:[Object(v.jsxs)("div",{className:j.a.options,children:[Object(v.jsx)(x,{setPokemons:r}),Object(v.jsx)(g,{setPokemons:r})]}),Object(v.jsx)("div",{className:j.a.list,children:Object(v.jsx)(I,{usePokemons:[s,r]})})]})},S=n(16),C=n.n(S),D=n(2),E=n(22);var R=function(e){var t=e.data;return Object(v.jsx)("div",{children:Object(v.jsx)(E.a,{data:{labels:t.stats.map((function(e){var t=e.stat;return t.name[0].toUpperCase()+t.name.slice(1)})),datasets:[{label:t.name[0].toUpperCase()+t.name.slice(1),data:t.stats.map((function(e){return e.base_stat})),backgroundColor:"#f5c8c8",borderColor:"#7d6262",borderWidth:2}]},height:"200px",width:"300px",options:{maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}}}})})},F=n(10),H=n.n(F);var G=function(e){var t=e.data;return Object(v.jsxs)("div",{className:H.a.info,children:[Object(v.jsx)("div",{className:H.a.name,children:t.name}),Object(v.jsxs)("div",{className:H.a.properties,children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Height: "}),Object(v.jsxs)("span",{children:[10*t.height," cm"]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Weight: "}),Object(v.jsxs)("span",{children:[t.weight/10," kg"]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Abilities: "}),Object(v.jsx)("span",{className:H.a.list,children:t.abilities.map((function(e){var t=e.ability;return Object(v.jsxs)("span",{children:[t.name," "]})}))})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Type: "}),Object(v.jsx)("span",{className:H.a.list,children:t.types.map((function(e){var t=e.type;return Object(v.jsxs)("span",{children:[t.name," "]})}))})]})]})]})};var L=function(e){var t=Object(D.g)().id,n=Object(a.useState)(null),s=Object(l.a)(n,2),c=s[0],r=s[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(h.a)(d.a.mark((function e(){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,r(a),console.dir(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(v.jsx)("div",{className:C.a.detailsPage,children:c&&Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:C.a.profile,children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/".concat(t,".svg"),alt:"".concat(c.name)})}),Object(v.jsx)(G,{data:c})]}),Object(v.jsx)("div",{className:C.a.barChart,children:Object(v.jsx)(R,{data:c})})]})})},J=n(19),M=n.n(J);var T=function(e){return Object(v.jsx)("div",{className:M.a.nav,children:Object(v.jsx)("div",{className:M.a.navHeading,children:"Pokemon Search App"})})};var U=function(){return Object(v.jsxs)("div",{className:o.a.app,children:[Object(v.jsx)("div",{className:o.a.nav,children:Object(v.jsx)(T,{})}),Object(v.jsx)("div",{className:o.a.content,children:Object(v.jsxs)(D.c,{children:[Object(v.jsx)(D.a,{path:"/",element:Object(v.jsx)(P,{})}),Object(v.jsx)(D.a,{path:"/details/:id",element:Object(v.jsx)(L,{})})]})})]})};r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(w.a,{children:Object(v.jsx)(U,{})})}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.535f3a6d.chunk.js.map