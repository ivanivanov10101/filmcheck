"use strict";(self.webpackChunkfilmcheck=self.webpackChunkfilmcheck||[]).push([[860],{1609:function(e,s,a){var n=a(9439),r=a(2791),i=a(7087),c=a(7689),t=a(184);s.Z=function(e){var s=e.heading,a=e.paragraph,l=e.children,o=e.image,d=(0,r.useState)({poster:"/assets/images/img.avif",logo:"/assets/images/logo.png"}),m=(0,n.Z)(d,1)[0],_=(0,c.s0)();return(0,t.jsxs)("div",{className:"header",children:[(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"header__logo",children:(0,t.jsx)(i.LazyLoadImage,{src:m.logo,alt:"logoImage",onClick:function(){_("/")}})})}),(0,t.jsx)("div",{className:"header__image moviePageImage",children:o?(0,t.jsx)("img",{src:o,alt:o}):(0,t.jsx)("img",{src:m.poster,alt:"poster"})}),(0,t.jsx)("div",{className:"header__contents",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"header__contents__text",children:(0,t.jsxs)("div",{className:"header__contents__text__child",children:[(0,t.jsx)("h1",{className:"header__contents__text__child__h1",children:s}),(0,t.jsx)("p",{className:"header__contents__text__child__p",children:a}),(0,t.jsx)("div",{className:"header__contents__text__child__link",children:l})]})})})})]})}},377:function(e,s,a){var n=a(2791),r=a(8765),i=a(5484),c=a(184);s.Z=function(e){var s=(0,n.useContext)(r.Z),a=s.state,t=s.dispatch;return a.modelStatus&&a.current===e.current?(0,c.jsx)("div",{className:"model",onClick:function(e){"model"===e.target.getAttribute("class")&&t({type:i.u})},children:(0,c.jsx)("div",{className:"model__body",children:e.children})}):""}},8017:function(e,s,a){var n=a(7087),r=a(1087),i=a(184);s.Z=function(e){var s=e.movie;return(0,i.jsx)("div",{className:"col-3 p-15",children:(0,i.jsxs)("div",{className:"movies__card",children:[(0,i.jsx)("div",{className:"movies__card__img",children:(0,i.jsx)(n.LazyLoadImage,{src:s.image,alt:s.image})}),(0,i.jsx)("div",{className:"movies__card__layer",children:(0,i.jsx)("div",{className:"movies__card__layer__content",children:(0,i.jsx)("div",{className:"movies__card__layer__content__movie",children:s.name})})}),(0,i.jsx)("div",{className:"movies__card__info",children:(0,i.jsx)("div",{className:"movies__card__info__text",children:(0,i.jsx)(r.rU,{className:"btn-white",to:"/film/".concat(s.id),children:"View"})})})]})})}},2222:function(e,s,a){a.d(s,{Z:function(){return _}});var n=a(9439),r=a(2791),i=a(7087),c=a(184),t=function(){var e=(0,r.useState)({logo:"/assets/footer/logo_light.png",intro:"FilmCheck Limited. Made by fans in Amsterdam, The Netherlands."}),s=(0,n.Z)(e,1)[0];return(0,c.jsxs)("div",{className:"footer__intro",children:[(0,c.jsx)("div",{className:"footer__intro__img",children:(0,c.jsx)(i.LazyLoadImage,{src:s.logo,alt:"footer logo"})}),(0,c.jsx)("p",{className:"footer__intro__msg",children:s.intro})]})},l=a(1087),o=a(8185),d=function(e){var s=e.links,a=e.external;return s.map((function(e){return(0,c.jsx)("ul",{className:"footer__ul",children:(0,c.jsx)("li",{className:"footer__ul__li",children:a?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.pjk,{size:12}),(0,c.jsx)("a",{href:e.route,target:"_blank",rel:"noreferrer",children:e.name})]}):(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(l.rU,{to:e.hasOwnProperty("route")?e.route:"/details/".concat(e.id),children:e.name})})})},e.id)}))},m=function(){var e=(0,r.useState)({pages:[{id:1,name:"Home",route:"/"},{id:2,name:"Profile",route:"/profile"},{id:3,name:"Films",route:"/films"}]}),s=(0,n.Z)(e,1)[0].pages;return(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-4 p-15",children:(0,c.jsx)(d,{links:s})})})},_=function(){return(0,c.jsx)("footer",{className:"footer",children:(0,c.jsx)("div",{className:"footer__container",children:(0,c.jsx)("div",{className:"footer__container__block",children:(0,c.jsxs)("div",{className:"row container",children:[(0,c.jsx)("div",{className:"col-6 p-15 footer-links",children:(0,c.jsx)(m,{})}),(0,c.jsx)("div",{className:"col-6 p-15",children:(0,c.jsx)(t,{})})]})})})})}},7860:function(e,s,a){a.r(s),a.d(s,{default:function(){return C}});var n=a(9439),r=a(1609),i=a(2791),c=a(6907),t=a(377),l=a(8765),o=a(5484),d=a(1413),m=a(184),_=function(e){var s=(0,i.useContext)(l.Z).dispatch,a=(0,i.useState)({name:"",email:"",password:""}),r=(0,n.Z)(a,2),c=r[0],t=r[1];return(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[(0,m.jsx)("div",{className:"model__heading",children:(0,m.jsx)("h3",{children:"Create New Account"})}),(0,m.jsx)("div",{className:"group",children:(0,m.jsx)("input",{type:"text",name:"",className:"group__control",placeholder:"Name",value:c.name,onChange:function(e){return t((0,d.Z)((0,d.Z)({},c),{},{name:e.target.value}))}})}),(0,m.jsx)("div",{className:"group",children:(0,m.jsx)("input",{type:"email",name:"",className:"group__control",placeholder:"Email",value:c.email,onChange:function(e){return t((0,d.Z)((0,d.Z)({},c),{},{email:e.target.value}))}})}),(0,m.jsx)("div",{className:"group",children:(0,m.jsx)("input",{type:"password",name:"",className:"group__control",placeholder:"Password",value:c.password,onChange:function(e){return t((0,d.Z)((0,d.Z)({},c),{},{password:e.target.value}))}})}),(0,m.jsxs)("div",{className:"group model__row",children:[(0,m.jsx)("input",{type:"submit",name:"",className:"btn-dark",value:"Sign Up"}),(0,m.jsx)("span",{className:"already-exists",onClick:function(){return s({type:o.b,payload:e.currentModel})},children:"User Already Exists? Login "})]})]})},u=function(e){var s=(0,i.useContext)(l.Z).dispatch,a=(0,i.useState)({email:"",password:""}),r=(0,n.Z)(a,2),c=r[0],t=r[1];return(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[(0,m.jsx)("div",{className:"model__heading",children:(0,m.jsx)("h3",{children:"Login"})}),(0,m.jsx)("div",{className:"group",children:(0,m.jsx)("input",{type:"email",name:"",className:"group__control",placeholder:"Email",value:c.email,onChange:function(e){return t((0,d.Z)((0,d.Z)({},c),{},{email:e.target.value}))}})}),(0,m.jsx)("div",{className:"group",children:(0,m.jsx)("input",{type:"password",name:"",className:"group__control",placeholder:"Password",value:c.password,onChange:function(e){return t((0,d.Z)((0,d.Z)({},c),{},{password:e.target.value}))}})}),(0,m.jsxs)("div",{className:"group model__row",children:[(0,m.jsx)("input",{type:"submit",name:"",className:"btn-dark",value:"Continue"}),(0,m.jsx)("span",{onClick:function(){return s({type:o.b,payload:e.currentModel})},children:" Create New Account"})]})]})},h=a(6095),v=a(8017),x=function(){var e=(0,i.useContext)(h.Z).moviesData.movies,s=(0,i.useState)("Currently Popular"),a=(0,n.Z)(s,1)[0],r=(0,i.useState)({heading:"Discover and share your experience about countless movie classics.",paragraph:"Pick up a camera. Shoot something. No matter how small, no matter how cheesy, no matter whether your friends and your sister star in it. Put your name on it as director. Now you're a director. Everything after that you're just negotiating your budget and your fee. \n --James Cameron"}),c=(0,n.Z)(r,1)[0];return(0,m.jsx)("div",{className:"movies",children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsxs)("div",{className:"row ml-minus-15 mr-minus-15",children:[(0,m.jsx)("div",{className:"col-6 p-15",children:(0,m.jsx)("h3",{className:"movies__heading",children:c.heading})}),(0,m.jsx)("div",{className:"col-6 p-15",children:(0,m.jsx)("p",{className:"movies__paragraph",children:c.paragraph})})]}),(0,m.jsxs)("div",{className:"movies__block",children:[(0,m.jsx)("h2",{className:"heading",children:a}),(0,m.jsx)("div",{className:"row ml-minus-15 mr-minus-15",children:e.map((function(e){return(0,m.jsx)(v.Z,{movie:e},e.id)})).slice(0,8)})]})]})})},j=a(7087),p=a(1087),g=function(e){var s=e.news;return(0,m.jsx)("div",{className:"col-6 p-15",children:(0,m.jsxs)("div",{className:"movies__card",children:[(0,m.jsx)("div",{className:"movies__card__img",children:(0,m.jsx)(j.LazyLoadImage,{src:s.image,alt:s.image})}),(0,m.jsx)("div",{className:"movies__card__layer",children:(0,m.jsx)("div",{className:"movies__card__layer__content",children:(0,m.jsx)("div",{className:"movies__card__layer__content__movie",children:(0,m.jsx)(p.rU,{className:"movies__card__layer__content__movie__link",to:"/news/".concat(s.id),children:s.name})})})})]})})},N=a(9462),f=function(){var e=(0,i.useContext)(N.Z).newsData.news,s=(0,i.useState)("Film news from around the world"),a=(0,n.Z)(s,1)[0];return(0,m.jsx)("div",{className:"news",children:(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("div",{className:"news__block",children:[(0,m.jsx)("h2",{className:"heading",children:a}),(0,m.jsx)("div",{className:"row ml-minus-15 mr-minus-15 cl",children:e.map((function(e,s){return(0,m.jsx)(g,{news:e},s)})).slice(0,8)})]})})})},w=a(2222),y=a(4765),Z=a(8185),b=function(e){var s=e.review;return(0,m.jsx)("div",{className:"col-4 p-15",children:(0,m.jsx)("div",{className:"reviews__body",children:(0,m.jsxs)("div",{className:"reviews__body__contents",children:[(0,m.jsx)("div",{className:"reviews__body__contents__image",children:(0,m.jsx)("img",{src:s.image,alt:s.image})}),(0,m.jsxs)("div",{className:"reviews__body__contents__info",children:[(0,m.jsxs)("div",{className:"reviews__body__contents__info__name",children:[s.name," for ",s.movie]}),(0,m.jsx)("div",{className:"reviews__body__contents__info__rating",children:function(e){for(var s=[],a=1;a<=5;a++)a<=e?s.push((0,m.jsx)(Z.kum,{size:13,color:"#df2189",className:"reviews__body__contents__info__rating__icon"},a)):s.push((0,m.jsx)(Z.RrZ,{size:13,color:"#df2189",className:"reviews__body__contents__info__rating__icon"},a));return s}(s.stars)}),(0,m.jsx)("div",{className:"reviews__body__contents__info__comment",children:s.comment})]})]})})})},k=function(){var e=(0,i.useState)("Popular Reviews"),s=(0,n.Z)(e,1)[0],a=(0,i.useContext)(y.Z).sharedData.reviews;return(0,m.jsx)("div",{className:"reviews",children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)("h2",{className:"heading",children:s}),(0,m.jsx)("div",{className:"row ml-minus-15 mr-minus-15 reviews-positioning",children:a.length>0?a.map((function(e,s){return(0,m.jsx)(b,{review:e},s)})):""})]})})},C=function(){var e=(0,i.useContext)(l.Z).dispatch,s=(0,i.useState)({heading:"FilmCheck, the social media for film nerds",paragraph:"Join us today! And share your film experiences with other film nerds!"}),a=(0,n.Z)(s,1)[0],d=(0,i.useState)("registerModel"),h=(0,n.Z)(d,1)[0],v=(0,i.useState)("loginModel"),j=(0,n.Z)(v,1)[0];return(0,i.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(c.ql,{children:[(0,m.jsx)("title",{children:"FilmCheck - The Social Media for Film Nerds"}),(0,m.jsx)("meta",{name:"description",content:"The Social Media for Film Nerds"}),(0,m.jsx)("meta",{name:"keywords",content:"films, movies, fans, actors"})]}),(0,m.jsx)(r.Z,{heading:a.heading,paragraph:a.paragraph,children:(0,m.jsx)("button",{className:"btn-default",onClick:function(){return e({type:o.b,payload:h})},children:"Register"})}),(0,m.jsxs)(t.Z,{current:h,children:[(0,m.jsx)(_,{currentModel:j})," "]}),(0,m.jsxs)(t.Z,{current:j,children:[(0,m.jsx)(u,{currentModel:h})," "]}),(0,m.jsx)(x,{}),(0,m.jsx)(k,{}),(0,m.jsx)(f,{}),(0,m.jsx)(w.Z,{})]})}}}]);
//# sourceMappingURL=860.c8542fb6.chunk.js.map