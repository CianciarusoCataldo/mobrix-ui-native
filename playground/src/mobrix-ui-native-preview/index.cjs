"use strict";var e=require("react"),t=require("react-native"),n=function(){return n=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};function a(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;var o={background:!0,disabled:!1,dark:!1,animated:!0,shadow:!0,props:{},unstyled:!1,active:!1,style:[],a11y:!0},i={Button:t.Button,TouchableOpacity:t.TouchableOpacity,Pressable:t.Pressable,Text:t.Text,View:t.View},r=function(e,t){var a=e.dark,o=void 0===a?{}:a,i=e.light,r=void 0===i?{}:i,s=e.common,l=void 0===s?{}:s;return n(n({},l),t?o:r)},s={main:{light:{backgroundColor:"#e9e9e9",color:"#1b1b1b"},dark:{backgroundColor:"#1d232e",color:"#ffffff"}},shadow:{common:{shadowOpacity:.7,shadowRadius:1,elevation:15},light:{shadowColor:"#000"},dark:{shadowColor:"#000"}},button:{},check:{}},l=function(){return s},u=t.Dimensions.get("window"),c=u.width,d=u.height,p={opacity:1,translate:{x:0,y:0},scale:1},f={"fade-in":{initial:n(n({},p),{opacity:0}),steps:[{toValue:1}],duration:200},"fade-out":{initial:p,steps:[{toValue:0}],duration:200},"slide-in-bottom":{initial:n(n({},p),{translate:{x:0,y:d}}),steps:[{toValue:p.translate}]},"slide-in-left":{initial:n(n({},p),{translate:{x:-c,y:0}}),steps:[{toValue:p.translate}]},"slide-in-right":{initial:n(n({},p),{translate:{x:c,y:0}}),steps:[{toValue:p.translate}]},"slide-in-top":{initial:n(n({},p),{translate:{x:0,y:-d}}),steps:[{toValue:p.translate}]},"slide-out-bottom":{initial:p,steps:[{toValue:{x:0,y:d}}]},"slide-out-left":{initial:p,steps:[{toValue:{x:-c,y:0}}]},"slide-out-right":{initial:p,steps:[{toValue:{x:c,y:0}}]},"slide-out-top":{initial:p,steps:[{toValue:{y:-d,x:0}}]},scale:{initial:p,steps:[{toValue:.95},{toValue:1}]},shake:{initial:p,steps:[{toValue:{x:-10,y:-5}},{toValue:{x:10,y:5}},{toValue:{x:-10,y:5}},{toValue:{x:10,y:-5}},{toValue:{x:0,y:0}}],duration:50}},m=function(e,n){return t.Animated.sequence(f[n].steps.map((function(a){return t.Animated.timing(e,{useNativeDriver:!0,duration:a.duration||f[n].duration||200,toValue:a.toValue})})))},y=function(n){var a=n.children,o=n.animation,i=o?f[o].initial:p,r=e.useRef(new t.Animated.Value(i.scale)).current,s=e.useRef(new t.Animated.Value(i.opacity)).current,l=e.useRef(new t.Animated.ValueXY(i.translate)).current,u={"fade-in":s,"fade-out":s,shake:l,scale:r,"slide-in-left":l,"slide-in-right":l,"slide-in-top":l,"slide-in-bottom":l,"slide-out-left":l,"slide-out-right":l,"slide-out-top":l,"slide-out-bottom":l};e.useEffect((function(){o&&(s.setValue(f[o].initial.opacity),r.setValue(f[o].initial.scale),l.setValue(f[o].initial.translate),m(u[o],o).start())}),[o]);var c=t.StyleSheet.create({main:{transform:[{scale:r},{translateX:l.x},{translateY:l.y}],opacity:s}});return e.createElement(t.Animated.View,{style:c.main},e.createElement(a,{animate:function(e){return m(u[e],e).start()}}))},h=function(a){var o=a.name,s=a.Component,u=a.mbxProps,c=void 0===u?{}:u,d=a.wrapper,p=void 0===d?"View":d,f=a.styles,m=void 0===f?[]:f,h=a.addProps,b=void 0===h?{}:h,v=a.parseProps,g=void 0===v?function(){return{}}:v,V=l(),x=r(V.main,c.dark),w=r(V[o]||{},c.dark),k=t.StyleSheet.create({main:w,extra:m,custom:c.style,base:x,shadow:c.shadow?r(V.shadow,c.dark):{},text:{color:(null==w?void 0:w.color)||x.color},background:c.background?{}:{backgroundColor:"transparent"}}),C=i[p];return e.createElement(y,{animation:c.animation},(function(a){var o=a.animate,i=g({funcs:{animate:o}}),r=n(n(n({},c.props),b),i),l=c.a11y?{}:{importantForAccessibility:"no",accessible:!1};return e.createElement(C,n({},r,s&&{children:"string"==typeof s?e.createElement(t.Text,n({},l,{style:k.text}),s):s},{style:[k.base,k.shadow,k.main,k.extra,k.custom,k.background],key:c.key,focusable:c.a11y},l,c.animated&&{activeOpacity:.8}))}))},b=function(e,t){var a=function(e){return n(n(n(n(n({},o),e),e.unstyled&&{shadow:!1,background:!1,animated:!1,hover:!1}),e.disabled&&{animated:!1,hover:!1,a11y:!1,active:!1}),!e.animated&&{animation:void 0})}(e),i=t(a);return n({mbxProps:a},i)},v=function(t,o){return function(t){var o=t.defV,i=t.inpV,r=t.props,s=t.Component,l=a(t,["defV","inpV","props","Component"]),u=e.useState(i||o),c=u[0],d=u[1],p=r?r(c,d):{};return e.useEffect((function(){null!=i&&c!==i&&d(i)}),[JSON.stringify(i)]),h(n(n({Component:s&&s({value:c,setValue:d})},l),p))}(b(t,o))},g={alignSelf:"flex-start",alignItems:"center",justifyContent:"center",borderWidth:0,fontWeight:"800",paddingVertical:8,paddingHorizontal:16,borderRadius:4,fontSize:14,lineHeight:20},V=require("./imgs/tick.png");exports.Button=function(e){var t=e.children,n=e.onClick,o=void 0===n?function(){}:n;return e.onMouseEnter,e.onMouseLeave,function(e,t){return h(b(e,t))}(a(e,["children","onClick","onMouseEnter","onMouseLeave"]),(function(e){return{name:"button",Component:t,wrapper:e.animated?"TouchableOpacity":"Pressable",styles:g,mbxProps:e,parseProps:function(t){var n=t.funcs.animate;return{onPress:function(){e.animated&&n("scale"),o()}}}}}))},exports.CheckBox=function(n){var o=n.value,i=n.onChange,s=void 0===i?function(){}:i,u=n.icon,c=a(n,["value","onChange","icon"]);return v(c,(function(n){var a=l(),i=r(a.main,n.dark),c=r(a.check,n.dark);return{name:"check",wrapper:n.animated?"TouchableOpacity":"Pressable",Component:function(n){return n.value?u||e.createElement(t.Image,{source:V,style:{width:30,height:30,tintColor:c.color||i.color}}):""},styles:{width:35,height:35},props:function(e,t){return{addProps:!n.disabled&&{onPress:function(){s(!e),t(!e)}},mbxProps:n}},inpV:o,defV:!1}}))},exports.setComponentTheme=function(e,t){s[e]=t},exports.setTheme=function(e){s=e};
