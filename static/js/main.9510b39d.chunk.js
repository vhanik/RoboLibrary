(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),i=n.n(s),o=(n(12),n(4)),a=n(5),h=n(7),b=n(6),l=n(0),d=function(e){var t=e.name,n=e.email,c=e.id;return Object(l.jsxs)("div",{className:"bg-light-blue dib br3 pa0 ma2 grow bw2 shadow-5 tc",children:[Object(l.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(c,"?150x150")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email})}))})},u=function(e){e.searchfield;var t=e.typing;return Object(l.jsx)("div",{className:"pa3",children:Object(l.jsx)("input",{className:"input-reset ba b--black-20 bw2 pa2 mb2 db w-50 center",type:"search",placeholder:"Search robots",onChange:t})})},f=function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"600px"},children:e.children})},p=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.lenght?Object(l.jsx)("h1",{children:"Loading"}):Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(l.jsx)(u,{typing:this.onChange}),Object(l.jsx)(f,{children:Object(l.jsx)(j,{robots:t})})]})}}]),n}(c.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};n(14);i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.9510b39d.chunk.js.map