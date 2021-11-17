(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{181:function(e){e.exports=JSON.parse('{"color-primary-100":"#D2FADE","color-primary-200":"#A8F5C6","color-primary-300":"#77E2AC","color-primary-400":"#51C596","color-primary-500":"#22A079","color-primary-600":"#188971","color-primary-700":"#117368","color-primary-800":"#0A5C5B","color-primary-900":"#06464C","color-success-100":"#E6FBD6","color-success-200":"#C8F8AF","color-success-300":"#9EEA83","color-success-400":"#75D560","color-success-500":"#3FBA32","color-success-600":"#269F24","color-success-700":"#198520","color-success-800":"#0F6B1D","color-success-900":"#09591B","color-info-100":"#CEEBFD","color-info-200":"#9ED3FB","color-info-300":"#6DB4F5","color-info-400":"#4896EC","color-info-500":"#116BE0","color-info-600":"#0C52C0","color-info-700":"#083DA1","color-info-800":"#052B81","color-info-900":"#031E6B","color-warning-100":"#FFF7CC","color-warning-200":"#FFEC99","color-warning-300":"#FFDE67","color-warning-400":"#FFD141","color-warning-500":"#FFBB02","color-warning-600":"#DB9A01","color-warning-700":"#B77C01","color-warning-800":"#936000","color-warning-900":"#7A4C00","color-danger-100":"#FDDCD4","color-danger-200":"#FBB1AA","color-danger-300":"#F57F80","color-danger-400":"#EC5D6C","color-danger-500":"#E02C50","color-danger-600":"#C0204F","color-danger-700":"#A1164C","color-danger-800":"#810E46","color-danger-900":"#6B0841"}')},195:function(e,n,t){"use strict";var r=t(9),o=t.n(r),c=t(15),a=t.n(c),l=t(194),i=t(0),s=t.n(i),u=t(7),p=t(110),d=t(28),m=t(181),f=t(8),y=function(){return s.a.createElement(d.TopNavigation,{alignment:"center",title:"Tether Invoice Generator"})},g=t(40),b=t.n(g),E=t(14),v=t.n(E),h=t(56),C=t(88),w=t(349),F=t(185),O=t.n(F),D=t(186),B=t.n(D),S=t(196),j=Object(d.withStyles)((function(e){var n=e.eva,t=e.symbol,r=e.address,o=e.amount,c=Object(i.useState)(""),a=b()(c,2),l=a[0],u=a[1],p=Object(i.useState)(!1),m=b()(p,2),y=m[0],g=m[1];if(Object(i.useEffect)((function(){u(t+":"+r+"?amount="+o)}),[t,r,o]),""===l)return null;var E=function(){C.b(l),g(!0)},v=function(e){return s.a.createElement(h.a,{onPress:E},s.a.createElement(w.a,{name:"content-copy",size:16,color:n.style.iconText.color}))};return s.a.createElement(f.a,{style:x.container},s.a.createElement(S.a,{value:l,size:280}),s.a.createElement(d.Popover,{backdropStyle:x.backdrop,visible:y,anchor:function(){return s.a.createElement(d.Input,{value:l,label:"Invoice",accessoryRight:v,style:x.input})},onBackdropPress:function(){return g(!1)}},s.a.createElement(d.Layout,{style:[x.content,n.style.popup]},s.a.createElement(d.Text,null,"Invoice copied to Clipboard"))))}),(function(e){return{iconText:{color:e["color-primary-500"]},popup:{backgroundColor:e["color-success-100"]}}})),x=u.a.create({container:{paddingVertical:16},input:{paddingVertical:8},content:{flexDirection:"row",alignItems:"center",paddingHorizontal:4,paddingVertical:8},backdrop:{backgroundColor:"rgba(0, 0, 0, 0.5)"}}),A=t(90),P=t.n(A),I=t(193),T=t.n(I),k=[{name:"USDt (Tron)",symbol:"usdt_tron",chain:"Tron",process:function(e){return T()(P()(e),"0x","")}},{name:"USDt (Solana)",symbol:"usdt_sol",chain:"Solana",process:function(e){return P()(e)}},{name:"USDt (Liquid)",symbol:"usdt_liquid",chain:"BTC Liquid",process:function(e){return P()(e)}}],V=Object(d.withStyles)((function(e){var n,t,r,o=e.eva,c=Object(i.useState)(new d.IndexPath(0)),a=b()(c,2),l=a[0],u=a[1],p=Object(i.useState)(""),m=b()(p,2),y=m[0],g=m[1],E=Object(i.useState)(10),F=b()(E,2),D=F[0],S=F[1],x=Object(i.useState)(!1),A=b()(x,2),P=A[0],I=A[1],T=null==(n=k[(null==l?void 0:l.row)||0])?void 0:n.name,V=null==(t=k[(null==l?void 0:l.row)||0])?void 0:t.chain,L=(null==(r=k[(null==l?void 0:l.row)||0])?void 0:r.process)||void 0,U=function(e){return g(L?L(e):e)},q=function(){var e;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.a.awrap(C.a());case 2:e=n.sent,U(e);case 4:case"end":return n.stop()}}),null,null,null,Promise)},J=0===(null==y?void 0:y.length)||!O()(D)||D<=0;return s.a.createElement(f.a,null,s.a.createElement(d.Select,{label:"Token - Chain",selectedIndex:l,value:T,onSelect:function(e){u(e),g(""),I(!1)},style:z.field},k.map((function(e){return s.a.createElement(d.SelectItem,{title:e.name,key:e.symbol})}))),s.a.createElement(d.Input,{value:y,label:"Address ("+V+")",placeholder:"Place your Address",accessoryRight:function(e){return s.a.createElement(h.a,{onPress:q},s.a.createElement(w.a,{name:"content-paste",size:16,color:o.style.iconText.color}))},onChangeText:U,style:z.field}),s.a.createElement(d.Input,{value:D,label:"Amount (USDt)",placeholder:"10",onChangeText:function(e){var n=B()(e);n&&S(n)},style:z.field}),s.a.createElement(d.Button,{onPress:function(){return I(!0)},style:z.button,disabled:J},"Generate Invoice"),P&&s.a.createElement(j,{symbol:k[(null==l?void 0:l.row)||0].symbol,address:y,amount:D}))}),(function(e){return{iconText:{color:e["color-primary-500"]}}})),z=u.a.create({captionContainer:{display:"flex",flexDirection:"row",alignItems:"center"},captionIcon:{width:10,height:10,marginRight:5},captionText:{fontSize:12,fontWeight:"400",fontFamily:"opensans-regular",color:"#8F9BB3"},field:{paddingVertical:8},button:{paddingVertical:16,marginVertical:8}}),L=function(){return s.a.createElement(f.a,null,s.a.createElement(y,null),s.a.createElement(V,null))};function U(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?U(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var J=function(){return s.a.createElement(d.Layout,{style:R.container},s.a.createElement(L,null),s.a.createElement(l.a,{style:"auto"}))},R=(n.a=function(){return s.a.createElement(d.ApplicationProvider,o()({},p,{theme:q(q({},p.light),m)}),s.a.createElement(J,null))},u.a.create({container:{flex:1,justifyContent:"center",alignItems:"center"}}))},198:function(e,n,t){e.exports=t(343)}},[[198,1,2]]]);
//# sourceMappingURL=app.2a2264e6.chunk.js.map