(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(5),s=n(1),d=(n(10),n(11),n(12),n(4)),b=n.n(d),o=n(0),r=function(t){var e,n=t.tabs,c=t.selectedTabId,a=t.onTabSelected,i=(e=c,n.find((function(t){return t.id===e}))||n[0]);return Object(o.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:n.map((function(t){var e=t.id,n=t.title;return Object(o.jsx)("li",{className:b()({"is-active":c===e}),"data-cy":"Tab",children:Object(o.jsx)("a",{href:"#".concat(e),"data-cy":"TabLink",onClick:function(){return e!==c&&function(t){a(t)}(t)},children:n})},e)}))})}),Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:i.content})]})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){var t,e=Object(s.useState)(l[0].id),n=Object(i.a)(e,2),c=n[0],a=n[1],d=null===(t=l.find((function(t){return t.id===c})))||void 0===t?void 0:t.title;return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{className:"title",children:"Selected tab is ".concat(d)}),Object(o.jsx)(r,{tabs:l,selectedTabId:c,onTabSelected:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l[0];return a(t.id)}})]})};a.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.bd51bb02.chunk.js.map