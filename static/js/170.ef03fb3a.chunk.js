"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[170],{170:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var i,r,c,o,a,s=e(439),l=e(710),d=e(791),u=e(689),f=e(168),x=e(444),p=x.ZP.button(i||(i=(0,f.Z)(["\n  margin-top: 10px;\n  margin-left: 10px;\n  color: #6e6ecb;\n  background-color: transparent;\n  border: none;\n"]))),h=x.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  margin-left: 20px;\n  justify-content: flex-start;\n  align-items: flex-start;\n"]))),g=x.ZP.div(c||(c=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 20px;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 600px;\n"]))),v=x.ZP.div(o||(o=(0,f.Z)(["\n  display: flex;\n  flex-direction: row;\n"]))),m=x.ZP.div(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: row;\n  margin-left: 20px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  gap: 10px;\n"]))),j=e(87),Z=e(184),b=function(){var n,t,e=(0,u.UO)().movieId,i=(0,d.useState)({}),r=(0,s.Z)(i,2),c=r[0],o=r[1],a=(0,u.TH)();console.log("\ud83d\ude80 ~ location",a);var f=null!==(n=null===(t=a.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/";return(0,d.useEffect)((function(){try{(0,l.TP)(e).then((function(n){return o(n.data)}))}catch(n){console.log(n)}}),[e]),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(p,{children:(0,Z.jsx)(j.rU,{to:f,children:"Go back"})}),Object.keys(c).length?(0,Z.jsxs)(h,{children:[(0,Z.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(c.poster_path),alt:c.title,width:300}),(0,Z.jsxs)(g,{className:"",children:[(0,Z.jsx)("h1",{children:c.title}),(0,Z.jsxs)("p",{children:["User score: ",Math.round(10*c.vote_average),"%"]}),(0,Z.jsx)("h3",{children:"Overview"}),(0,Z.jsx)("p",{children:c.overview}),c.genres.map((function(n){return(0,Z.jsx)(v,{children:n.name},n.id)}))]})]}):"",(0,Z.jsx)("h2",{children:"Additional information"}),(0,Z.jsxs)(m,{children:[(0,Z.jsx)(j.rU,{to:"cast",state:{from:f},children:"Cast"}),(0,Z.jsx)(j.rU,{to:"reviews",state:{from:f},children:"Reviews"}),(0,Z.jsx)(u.j3,{})]})]})}},710:function(n,t,e){e.d(t,{HI:function(){return a},TP:function(){return s},ik:function(){return o},jP:function(){return d},zv:function(){return l}});var i=e(912),r="https://api.themoviedb.org/3",c="50b1b1393be81c5d35aa53448c7e33bf",o=function(){return i.Z.get("".concat(r,"/trending/all/day?api_key=").concat(c))},a=function(n){return i.Z.get("".concat(r,"/search/movie?api_key=").concat(c,"&language=en-US&query=").concat(n))},s=function(n){return i.Z.get("".concat(r,"/movie/").concat(n,"?api_key=").concat(c))},l=function(n){return i.Z.get("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(c))},d=function(n){return i.Z.get("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(c))}}}]);
//# sourceMappingURL=170.ef03fb3a.chunk.js.map