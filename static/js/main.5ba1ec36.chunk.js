(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(10),c=a.n(n),r=a(50),s=a.n(r),i=a(11),u=a(38),o=a(15),j=a(25),l=a(36),b=a(31),d=a(6);var p=function(e){var t=e.userData;return Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(d.jsx)(j.a,{icon:l.c,color:"#04AAFF",size:"2x"})})}),Object(d.jsx)("li",{children:Object(d.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(d.jsx)(j.a,{icon:b.e,color:"#04AAFF",size:"2x"}),Object(d.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},O=a(0),f=a.n(O),x=a(2),m=a(53),h=a(28),v=a(22),g=a(30);Object(m.a)({apiKey:"AIzaSyAgPIMeUKEMPpD5nAZ41lhCF-4axcl3I68",authDomain:"twitter-clone-ec62f.firebaseapp.com",projectId:"twitter-clone-ec62f",storageBucket:"twitter-clone-ec62f.appspot.com",messagingSenderId:"61246849702",appId:"1:61246849702:web:bd7b883a91f7cb80e22a67"});var y=Object(h.d)(),w=Object(v.e)(),N=Object(g.c)();var S=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),u=s[0],o=s[1],j=Object(n.useState)(!1),l=Object(i.a)(j,2),b=l[0],p=l[1],O=Object(n.useState)(""),m=Object(i.a)(O,2),v=m[0],g=m[1],w=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&o(n)},N=function(){var e=Object(x.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!b){e.next=7;break}return e.next=5,Object(h.c)(y,a,u);case 5:e.next=9;break;case 7:return e.next=9,Object(h.e)(y,a,u);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),g(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{className:"container",onSubmit:N,children:[Object(d.jsx)("input",{className:"authInput",name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:w}),Object(d.jsx)("input",{className:"authInput",name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:w}),Object(d.jsx)("input",{className:"authInput authSubmit",type:"submit",value:b?"Create Account":"Sign In"}),v&&Object(d.jsx)("span",{className:"authError",children:v})]}),Object(d.jsx)("span",{className:"authSwitch",onClick:function(){return p((function(e){return!e}))},children:b?"Sign In":"Create Account"})]})};var I=function(){var e=function(){var e=Object(x.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new h.b:"github"===a&&(n=new h.a),e.next=4,Object(h.f)(y,n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"authContainer",children:[Object(d.jsx)(j.a,{icon:l.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(d.jsx)(S,{}),Object(d.jsxs)("div",{className:"authBtns",children:[Object(d.jsxs)("button",{className:"authBtn",name:"google",onClick:e,children:["Continue with Google ",Object(d.jsx)(j.a,{icon:l.b})]}),Object(d.jsxs)("button",{className:"authBtn",name:"github",onClick:e,children:["Continue with Github ",Object(d.jsx)(j.a,{icon:l.a})]})]})]})},k=a(54);var C=function(e){var t=e.tweetObj,a=e.isOwner,c=Object(n.useState)(!1),r=Object(i.a)(c,2),s=r[0],u=r[1],o=Object(n.useState)(t.text),l=Object(i.a)(o,2),p=l[0],O=l[1],m=function(){var e=Object(x.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this tweet?")){e.next=6;break}return e.next=4,Object(v.c)(Object(v.d)(w,"tweets/".concat(t.id)));case 4:return e.next=6,Object(g.a)(Object(g.d)(N,t.uploadURL));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){return u((function(e){return!e}))},y=function(){var e=Object(x.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,Object(v.i)(Object(v.d)(w,"tweets/".concat(t.id)),{text:p});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"tweet",children:s?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{className:"container tweetEdit",onSubmit:y,children:[Object(d.jsx)("input",{className:"formInput",type:"text",placeholder:"Edit your tweet",value:p,onChange:function(e){var t=e.target.value;O(t)},autoFocus:!0,required:!0}),Object(d.jsx)("input",{className:"formBtn",type:"submit",value:"Update tweet"})]}),Object(d.jsx)("span",{className:"formBtn cancelBtn",onClick:h,children:"Cancel"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h4",{children:t.text}),t.uploadURL&&Object(d.jsx)("img",{src:t.uploadURL,alt:"uploadImage"}),a&&Object(d.jsxs)("div",{className:"tweet_actions",children:[Object(d.jsx)("span",{onClick:m,children:Object(d.jsx)(j.a,{icon:b.d})}),Object(d.jsx)("span",{onClick:h,children:Object(d.jsx)(j.a,{icon:b.a})})]})]})})},F=a(55);var D=function(e){var t=e.userData,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],s=c[1],u=Object(n.useState)(""),o=Object(i.a)(u,2),l=o[0],p=o[1],O=function(){var e=Object(x.a)(f.a.mark((function e(a){var n,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==r){e.next=3;break}return e.abrupt("return");case 3:if(n="",""===l){e.next=12;break}return c=Object(g.d)(N,"".concat(t.uid,"/").concat(Object(F.v4)())),e.next=8,Object(g.e)(c,l,"data_url");case 8:return i=e.sent,e.next=11,Object(g.b)(i.ref);case 11:n=e.sent;case 12:return e.next=14,Object(v.a)(Object(v.b)(w,"tweets"),{text:r,createdAt:Date.now(),creatorId:t.uid,uploadURL:n});case 14:s(""),p("");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("form",{className:"factoryForm",onSubmit:O,children:[Object(d.jsxs)("div",{className:"factoryInput_container",children:[Object(d.jsx)("input",{className:"factoryInput_input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's happening?",maxLength:120}),Object(d.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput_arrow"})]}),Object(d.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput_label",children:[Object(d.jsx)("span",{children:"Add photos"}),Object(d.jsx)(j.a,{icon:b.b})]}),Object(d.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;p(t)},a.readAsDataURL(t)},style:{opacity:0}}),l&&Object(d.jsxs)("div",{className:"factoryForm_image",children:[Object(d.jsx)("img",{src:l,alt:"imageFile",style:{backgroundImage:l}}),Object(d.jsxs)("div",{className:"factoryForm_clear",onClick:function(){return p("")},children:[Object(d.jsx)("span",{children:"Remove"}),Object(d.jsx)(j.a,{icon:b.c})]})]})]})};var A=function(e){var t=e.userData,a=Object(n.useState)([]),c=Object(i.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){var e=Object(v.h)(Object(v.b)(w,"tweets"),Object(v.g)("createdAt","desc"));Object(v.f)(e,(function(e){var t=e.docs.map((function(e){return Object(k.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(D,{userData:t}),Object(d.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(d.jsx)(C,{tweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})};var U=function(e){var t=e.userData,a=e.refreshUser,c=Object(o.f)(),r=Object(n.useState)(t.displayName),s=Object(i.a)(r,2),u=s[0],j=s[1],l=function(){var e=Object(x.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.displayName===u){e.next=5;break}return e.next=4,Object(h.g)(y.currentUser,{displayName:u});case 4:a();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("form",{className:"profileForm",onSubmit:l,children:[Object(d.jsx)("input",{className:"formInput",type:"text",placeholder:"Display Name",value:u,onChange:function(e){var t=e.target.value;j(t)},autoFocus:!0}),Object(d.jsx)("input",{className:"formBtn",type:"submit",value:"Update Profile",style:{marginTop:10}})]}),Object(d.jsx)("span",{className:"formBtn cancelBtn logout",onClick:function(){y.signOut(),c.push("/")},children:"Logout"})]})};var B=function(e){var t=e.isSignIn,a=e.userData,n=e.refreshUser;return Object(d.jsxs)(u.a,{children:[t&&Object(d.jsx)(p,{userData:a}),Object(d.jsx)(o.c,{children:t?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(A,{userData:a})}),Object(d.jsx)(o.a,{exact:!0,path:"/profile",children:Object(d.jsx)(U,{userData:a,refreshUser:n})})]})}):Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(I,{})})})]})};var E=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),s=Object(i.a)(r,2),u=s[0],o=s[1];return Object(n.useEffect)((function(){y.onAuthStateChanged((function(e){o(e?{displayName:e.displayName,uid:e.uid}:null),c(!0)}))}),[]),Object(d.jsx)(d.Fragment,{children:a?Object(d.jsx)(B,{isSignIn:Boolean(u),userData:u,refreshUser:function(){var e=y.currentUser;o({displayName:e.displayName,uid:e.uid})}}):"Initializing..."})};a(73);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.5ba1ec36.chunk.js.map