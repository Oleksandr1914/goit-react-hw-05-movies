"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[159],{159:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var i,o,r,a=e(885),c=e(791),d=e(731),s=e(689),p=e(168),l=e(444),u=l.ZP.div(i||(i=(0,p.Z)(["\n  min-height: 100vh;\n  padding: 20px;\n  background-color: #171717;\n  /* background-image: url(https://oir.mobi/uploads/posts/2021-03/thumbs/1616971189_45-p-temnii-fon-dlya-rabochego-stola-48.jpg);\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  background-position: top; */\n"]))),h=l.ZP.h1(o||(o=(0,p.Z)(["\n  margin: 0;\n  margin-bottom: 20px;\n  padding-left: 10px;\n  color: #bf2903;\n"]))),g=l.ZP.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 25px;\n  text-decoration: none;\n  padding-left: 10px;\n  margin: 0;\n  li {\n    text-decoration: none;\n    display: flex;\n    flex-direction: column;\n    a {\n      color: #bf2903;\n      width: 180px;\n    }\n  }\n"]))),f=e(184),m=function(){var n=(0,c.useState)([]),t=(0,a.Z)(n,2),e=t[0],i=t[1],o=(0,s.TH)();return(0,c.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=512c087cc4e125c35b75be5dc92e5782").then((function(n){return n.json()})).then((function(n){return i(n.results)}))}),[]),(0,f.jsxs)(u,{children:[(0,f.jsx)(h,{children:"Trending today"}),(0,f.jsx)(g,{children:e.map((function(n){return(0,f.jsx)("li",{children:(0,f.jsxs)(d.rU,{to:"/movies/".concat(n.id),state:{from:o.pathname},id:n.id,children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n.poster_path),alt:n.title,style:{width:"180px"}}),n.title||n.name]})},n.id)}))})]})}}}]);
//# sourceMappingURL=159.a589b994.chunk.js.map