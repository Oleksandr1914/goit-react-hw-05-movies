"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[497],{497:function(n,e,t){t.r(e);var i=t(885),o=t(791),r=t(689),s=t(731),c=t(68),a=t(184),p="";e.default=function(){var n=(0,o.useState)(null),e=(0,i.Z)(n,2),t=e[0],x=e[1],d=(0,r.UO)().movieId,l=(0,r.TH)();return l.state&&(p=l.state.from),(0,o.useEffect)((function(){fetch("\nhttps://api.themoviedb.org/3/movie/".concat(d,"?api_key=512c087cc4e125c35b75be5dc92e5782&language=en-US")).then((function(n){return n.json()})).then((function(n){return x(n)}))}),[d]),t&&(0,a.jsxs)(c.W2,{children:[(0,a.jsx)(c.iF,{children:(0,a.jsx)(s.rU,{to:p,children:"Go to back"})}),(0,a.jsxs)(c.xu,{children:[(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(t.poster_path),alt:t.title}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:t.title}),(0,a.jsxs)("p",{children:["User Score: ",t.vote_average,"%"]}),(0,a.jsx)("h3",{children:"Overview"}),(0,a.jsx)("p",{children:t.overview}),(0,a.jsx)("h3",{children:"Genres"}),t.genres.map((function(n){return(0,a.jsxs)("span",{children:[" ",n.name]},n.id)}))]})]}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c.fX,{children:[(0,a.jsx)(s.OL,{to:"cast",children:"Cast"}),(0,a.jsx)(s.OL,{to:"reviews",children:"Reviews"})]}),(0,a.jsx)(o.Suspense,{fallback:(0,a.jsx)("div",{children:"Loading..."}),children:(0,a.jsx)(r.j3,{})})]})]})}},68:function(n,e,t){t.d(e,{W2:function(){return x},fX:function(){return h},iF:function(){return d},jK:function(){return u},xu:function(){return l}});var i,o,r,s,c,a=t(168),p=t(444),x=p.ZP.div(i||(i=(0,a.Z)(["\n  width: 100vw;\n  min-height: 100vh;\n  padding-top: 20px;\n  padding-bottom: 20px;\n"]))),d=p.ZP.div(o||(o=(0,a.Z)(["\n  a {\n    margin-left: 15px;\n    padding: 5px 8px;\n    text-decoration: none;\n    font-size: 22px;\n    color: #d4612b;\n    border: 1px solid black;\n    border-radius: 6px;\n    background-color: #292727;\n  }\n"]))),l=p.ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  gap: 60px;\n  padding: 40px 15px;\n  h2 {\n    font-size: 32px;\n    color: #292424;\n  }\n  p,\n  span {\n    max-width: 400px;\n    font-size: 22px;\n    color: #292424;\n  }\n  h3 {\n    font-size: 28px;\n    color: #292424;\n  }\n"]))),h=p.ZP.div(s||(s=(0,a.Z)(["\n  display: flex;\n  gap: 30px;\n  padding: 15px 30px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.16);\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n  a {\n    font-size: 22px;\n    text-decoration: none;\n    color: #4c3b36;\n  }\n  a.active {\n    color: #ff6a00;\n  }\n  a:hover {\n    color: #f4b7b7;\n  }\n"]))),u=p.ZP.ul(c||(c=(0,a.Z)(["\n  li {\n    list-style: none;\n  }\n  h5 {\n    font-size: 22px;\n    color: #292424;\n  }\n  p {\n    font-size: 18px;\n    color: #292424;\n  }\n"])))}}]);
//# sourceMappingURL=497.30ae154e.chunk.js.map