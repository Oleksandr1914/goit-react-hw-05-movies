"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[583],{583:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var o,r,i,a=t(885),c=t(791),s=t(731),d=t(689),p=t(168),u=t(444),l=u.ZP.div(o||(o=(0,p.Z)(["\n  min-height: 100vh;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  background-color: #171717;\n  /* background-image: url(https://oir.mobi/uploads/posts/2021-03/thumbs/1616971189_45-p-temnii-fon-dlya-rabochego-stola-48.jpg);\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  background-position: top; */\n  div {\n  }\n"]))),h=u.ZP.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  text-decoration: none;\n  padding-left: 10px;\n  margin: 0;\n  li {\n    text-decoration: none;\n    display: flex;\n    flex-direction: column;\n    a {\n      color: #f4dada;\n      width: 180px;\n    }\n    a:hover {\n      color: #d73107;\n    }\n  }\n"]))),x=u.ZP.form(i||(i=(0,p.Z)(["\n  input {\n    margin-left: 15px;\n    margin-bottom: 20px;\n    width: 200px;\n    height: 30px;\n    border-radius: 5px;\n    background-color: #e7e7e7a8;\n    font-size: 20px;\n  }\n  button {\n    padding: 5px 8px;\n    border-radius: 5px;\n    background-color: #e7e7e776;\n    font-size: 20px;\n    color: #050505;\n    cursor: pointer;\n  }\n"]))),g=t(184),f=function(){var n=(0,c.useState)(""),e=(0,a.Z)(n,2),t=e[0],o=e[1],r=(0,s.lr)(""),i=(0,a.Z)(r,2)[1];return(0,g.jsxs)(x,{onSubmit:function(n){n.preventDefault(),i({search:t})},children:[(0,g.jsx)("input",{type:"text",onChange:function(n){var e=n.target.value;o(e)}}),(0,g.jsx)("button",{type:"submit",children:"Search"})]})},b=function(){var n=(0,c.useState)(null),e=(0,a.Z)(n,2),t=e[0],o=e[1],r=(0,s.lr)(),i=(0,a.Z)(r,1)[0].get("search"),p=(0,d.TH)();return(0,c.useEffect)((function(){i&&fetch("\n  https://api.themoviedb.org/3/search/movie?api_key=512c087cc4e125c35b75be5dc92e5782&language=en-US&page=1&include_adult=false&query=".concat(i)).then((function(n){return n.json()})).then((function(n){return o(n.results)}))}),[i]),(0,g.jsxs)(l,{children:[(0,g.jsxs)("div",{children:[(0,g.jsx)(f,{}),t&&(0,g.jsx)(h,{children:t.map((function(n){return(0,g.jsx)("li",{children:(0,g.jsxs)(s.rU,{to:"/movies/".concat(n.id),state:{from:"/movies".concat(p.search)},id:n.id,children:[(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n.poster_path),alt:n.title,style:{width:"180px"}}),n.title]})},n.id)}))})]}),(0,g.jsx)(c.Suspense,{fallback:(0,g.jsx)("div",{children:"Loading..."}),children:(0,g.jsx)(d.j3,{})})]})}}}]);
//# sourceMappingURL=583.bd8f8ae8.chunk.js.map