"use strict";var e=require("react"),t=require("react-native"),n=function(){return n=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)};function o(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var a={background:!0,disabled:!1,dark:!1,animated:!0,shadow:!0,props:{},unstyled:!1,active:!1,style:[],a11y:!0},i={Button:t.Button,TouchableOpacity:t.TouchableOpacity,Pressable:t.Pressable,Text:t.Text,View:t.View},r=function(e,t){var o=e.dark,a=void 0===o?{}:o,i=e.light,r=void 0===i?{}:i,s=e.common,l=void 0===s?{}:s;return n(n({},l),t?a:r)},s={main:{light:{backgroundColor:"#e9e9e9",color:"#1b1b1b"},dark:{backgroundColor:"#1d232e",color:"#ffffff"}},shadow:{common:{shadowOpacity:.8,elevation:15},light:{shadowColor:"#000"},dark:{shadowColor:"#000"}},button:{},check:{}},l=function(){return s},c=t.Dimensions.get("window"),u=c.width,d=c.height,p={opacity:1,translate:{x:0,y:0},scale:1},f={"fade-in":{initial:n(n({},p),{opacity:0}),steps:[{toValue:1}],duration:200},"fade-out":{initial:p,steps:[{toValue:0}],duration:200},"slide-in-bottom":{initial:n(n({},p),{translate:{x:0,y:d}}),steps:[{toValue:p.translate}]},"slide-in-left":{initial:n(n({},p),{translate:{x:-u,y:0}}),steps:[{toValue:p.translate}]},"slide-in-right":{initial:n(n({},p),{translate:{x:u,y:0}}),steps:[{toValue:p.translate}]},"slide-in-top":{initial:n(n({},p),{translate:{x:0,y:-d}}),steps:[{toValue:p.translate}]},"slide-out-bottom":{initial:p,steps:[{toValue:{x:0,y:d}}]},"slide-out-left":{initial:p,steps:[{toValue:{x:-u,y:0}}]},"slide-out-right":{initial:p,steps:[{toValue:{x:u,y:0}}]},"slide-out-top":{initial:p,steps:[{toValue:{y:-d,x:0}}]},scale:{initial:p,steps:[{toValue:.95},{toValue:1}]},shake:{initial:p,steps:[{toValue:{x:-10,y:-5}},{toValue:{x:10,y:5}},{toValue:{x:-10,y:5}},{toValue:{x:10,y:-5}},{toValue:{x:0,y:0}}],duration:50}},m=function(e,n){return t.Animated.sequence(f[n].steps.map((function(o){return t.Animated.timing(e,{useNativeDriver:!0,duration:o.duration||f[n].duration||200,toValue:o.toValue})})))},h=function(n){var o=n.children,a=n.animation,i=n.style,r=a?f[a].initial:p,s=e.useRef(new t.Animated.Value(r.scale)).current,l=e.useRef(new t.Animated.Value(r.opacity)).current,c=e.useRef(new t.Animated.ValueXY(r.translate)).current,u={"fade-in":l,"fade-out":l,shake:c,scale:s,"slide-in-left":c,"slide-in-right":c,"slide-in-top":c,"slide-in-bottom":c,"slide-out-left":c,"slide-out-right":c,"slide-out-top":c,"slide-out-bottom":c};e.useEffect((function(){a&&(l.setValue(f[a].initial.opacity),s.setValue(f[a].initial.scale),c.setValue(f[a].initial.translate),m(u[a],a).start())}),[a]);var d=t.StyleSheet.create({main:{transform:[{scale:s},{translateX:c.x},{translateY:c.y}],opacity:l}});return e.createElement(t.Animated.View,{style:[d.main,i]},e.createElement(o,{animate:function(e){return m(u[e],e).start()}}))},y=function(o){var a=o.name,s=o.Component,c=o.mbxProps,u=void 0===c?{}:c,d=o.wrapper,p=void 0===d?"View":d,f=o.styles,m=void 0===f?[]:f,y=o.addProps,v=void 0===y?{}:y,b=o.parseProps,g=void 0===b?function(){return{}}:b,x=l(),w=r(x.main,u.dark),V=r(x[a]||{},u.dark),k=t.StyleSheet.create({main:V,extra:m,custom:u.style,base:w,shadow:u.shadow?r(x.shadow,u.dark):{},text:{color:(null==V?void 0:V.color)||w.color},background:u.background?{}:{backgroundColor:"transparent"}}),C=i[p];return e.createElement(h,{animation:u.animation},(function(o){var a=o.animate,i=g({funcs:{animate:a}}),r=n(n(n({},u.props),v),i),l=u.a11y?{}:{importantForAccessibility:"no",accessible:!1};return e.createElement(C,n({},r,s&&{children:"string"==typeof s?e.createElement(t.Text,n({},l,{style:k.text}),s):s},{style:[k.base,k.shadow,k.main,k.extra,k.custom,k.background],key:u.key,focusable:u.a11y},l,u.animated&&{activeOpacity:.8}))}))},v=function(e,t){var o=function(e){return n(n(n(n(n({},a),e),e.unstyled&&{shadow:!1,background:!1,animated:!1,hover:!1}),e.disabled&&{animated:!1,hover:!1,a11y:!1,active:!1}),!e.animated&&{animation:void 0})}(e),i=t(o);return n({mbxProps:o},i)},b=function(e,t){return y(v(e,t))},g=function(t,a){return function(t){var a=t.defV,i=t.inpV,r=t.props,s=t.Component,l=o(t,["defV","inpV","props","Component"]),c=e.useState(i||a),u=c[0],d=c[1],p=r?r(u,d):{};return e.useEffect((function(){null!=i&&u!==i&&d(i)}),[JSON.stringify(i)]),y(n(n({Component:s&&s({value:u,setValue:d})},l),p))}(v(t,a))},x=function(e){var t=e.children,n=e.onClick,a=void 0===n?function(){}:n;e.onMouseEnter,e.onMouseLeave;var i=o(e,["children","onClick","onMouseEnter","onMouseLeave"]);return b(i,(function(e){return{name:"button",Component:t,wrapper:e.animated?"TouchableOpacity":"Pressable",styles:w,mbxProps:e,parseProps:function(t){var n=t.funcs.animate;return{onPress:function(){e.animated&&n("scale"),a()}}}}}))},w={alignSelf:"flex-start",alignItems:"center",justifyContent:"center",borderWidth:0,fontWeight:"800",paddingVertical:8,paddingHorizontal:16,borderRadius:4,fontSize:14,lineHeight:20},V=require("./imgs/tick.png"),k=require("./imgs/copy.png"),C=["#d81313","#f6713c","#3b82f6","#2432f5","#5b9306"],E={common:{STRING:1},javascript:{import:0,from:0,function:0,if:0,else:0,try:0,catch:0,while:0,export:0,default:2,const:3,for:0,forEach:0},python:{pip:4,def:4,__main__:4},terminal:{"#!/bin/bash":4,"#!/bin/sh":4,sh:4,npm:4,npx:4,node:4,git:4,"gh-pages":0,docker:0,ls:0,cd:0,jq:0,cat:0,curl:0,"apt-get":0,apt:0,wget:0,aws:0,cp:0,rm:0}},O=function(e,t){var n=[],o=C[E.common.STRING];return e.split(/(\".+?\")/g).forEach((function(e,a){a%2!=0?n.push({code:e,color:o}):e.split(/(\'.+?\')/g).forEach((function(e,a){a%2!=0?n.push({code:e,color:o}):e.split(" ").forEach((function(e,o){n.push({code:e,color:C[E[t][e]]}),n.push({code:" "})}))}))}))," "===n[n.length-1].code&&n.pop(),n},P=function(n){var o=n.value,a=void 0===o?"":o,i=n.environment,r=void 0===i?"terminal":i,s=n.copyButton,l=void 0===s||s,c=n.disabled,u=n.hover,d=n.active,p=n.a11y,f=a.length>0?O:function(e,t){return[{value:e}]};return[e.createElement(x,{a11y:p,key:"cd_cp",onClick:function(){return a&&navigator.clipboard.writeText(a)},hide:!l,disabled:c,hover:u,active:d,shadow:!1,style:{width:25,height:25,marginLeft:"auto"},background:!1},e.createElement(t.Image,{source:k,style:{width:25,height:25}})),e.createElement(t.View,{key:"cd_cd"},a.split("\n").map((function(n,o){return e.createElement(t.Text,{style:{margin:0},key:"cd_l_".concat(o)},f(n,r).map((function(n,o){return" "===n.code?" ":e.createElement(t.Text,{key:"cdb_bl_".concat(o),style:{color:n.color||"inherit"}},n.code)})))})))]};exports.Button=x,exports.CheckBox=function(n){var a=n.value,i=n.onChange,s=void 0===i?function(){}:i,c=n.icon,u=o(n,["value","onChange","icon"]);return g(u,(function(n){var o=l(),i=r(o.main,n.dark),u=r(o.check,n.dark);return{name:"check",wrapper:n.animated?"TouchableOpacity":"Pressable",Component:function(n){return n.value?c||e.createElement(t.Image,{source:V,style:{width:30,height:30,tintColor:u.color||i.color}}):""},styles:{width:35,height:35,justifyContent:"center",alignItems:"center"},props:function(e,t){return{addProps:!n.disabled&&{onPress:function(){s(!e),t(!e)}},mbxProps:n}},inpV:a,defV:!1}}))},exports.CodeBox=function(e){var t=e.active,a=o(e,["active"]);return b(a,(function(e){return{name:"code",mbxProps:e,styles:{padding:1,justifyContent:"center",display:"flex",flexDirection:"column",overflow:"hidden"},Component:P(n(n(n({},a),e),{active:t}))}}))},exports.setComponentTheme=function(e,t){s[e]=t},exports.setTheme=function(e){s=e};
