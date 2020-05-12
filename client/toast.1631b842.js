import{c as t,d as n,b as s,o as c,i as e,B as o,l as r,y as a,w as $,C as i,j as u,e as p,g as l,h as m,k as f,m as d,a as g,f as h}from"./chunk.0fbbf14e.js";import{g as k,r as v}from"./chunk.51d7e463.js";import"./chunk.0d91a229.js";import{a as j}from"./chunk.890edef0.js";import"./chunk.3401b2cf.js";import{a as y}from"./chunk.03d763cb.js";import{a as B}from"./chunk.e7370317.js";function _(t){var n;return{c(){n=h("Toast")},l(t){n=e(t,"Toast")},m(t,s){r(t,n,s)},d(t){t&&u(n)}}}function x(t){var n;return{c(){n=h("Success")},l(t){n=e(t,"Success")},m(t,s){r(t,n,s)},d(t){t&&u(n)}}}function b(t){var n;return{c(){n=h("Bottom Right")},l(t){n=e(t,"Bottom Right")},m(t,s){r(t,n,s)},d(t){t&&u(n)}}}function w(t){var n;return{c(){n=h("Custom Background")},l(t){n=e(t,"Custom Background")},m(t,s){r(t,n,s)},d(t){t&&u(n)}}}function T(t){var n,s,g,h,v,j,y=new k({props:{$$slots:{default:[_]},$$scope:{ctx:t}}});y.$on("click",t.click_handler);var B=new k({props:{type:"is-success",$$slots:{default:[x]},$$scope:{ctx:t}}});B.$on("click",t.click_handler_1);var T=new k({props:{type:"is-danger",$$slots:{default:[b]},$$scope:{ctx:t}}});T.$on("click",t.click_handler_2);var C=new k({props:{type:"is-primary",$$slots:{default:[w]},$$scope:{ctx:t}}});return C.$on("click",t.click_handler_3),{c(){n=p("div"),s=p("div"),y.$$.fragment.c(),g=c(),B.$$.fragment.c(),h=c(),T.$$.fragment.c(),v=c(),C.$$.fragment.c(),this.h()},l(t){n=l(t,"DIV",{slot:!0},!1);var c=m(n);s=l(c,"DIV",{class:!0},!1);var o=m(s);y.$$.fragment.l(o),g=e(o,"\n      "),B.$$.fragment.l(o),h=e(o,"\n      "),T.$$.fragment.l(o),v=e(o,"\n      "),C.$$.fragment.l(o),o.forEach(u),c.forEach(u),this.h()},h(){f(s,"class","buttons svelte-nt7ocy"),f(n,"slot","preview")},m(t,c){r(t,n,c),d(n,s),o(y,s,null),d(s,g),o(B,s,null),d(s,h),o(T,s,null),d(s,v),o(C,s,null),j=!0},p(t,n){var s={};t.$$scope&&(s.$$scope={changed:t,ctx:n}),y.$set(s);var c={};t.$$scope&&(c.$$scope={changed:t,ctx:n}),B.$set(c);var e={};t.$$scope&&(e.$$scope={changed:t,ctx:n}),T.$set(e);var o={};t.$$scope&&(o.$$scope={changed:t,ctx:n}),C.$set(o)},i(t){j||(a(y.$$.fragment,t),a(B.$$.fragment,t),a(T.$$.fragment,t),a(C.$$.fragment,t),j=!0)},o(t){$(y.$$.fragment,t),$(B.$$.fragment,t),$(T.$$.fragment,t),$(C.$$.fragment,t),j=!1},d(t){t&&u(n),i(y),i(B),i(T),i(C)}}}function C(t){return{c:g,l:g,m:g,p:g,i:g,o:g,d:g}}function I(t){var n,s,p,l=new j({props:{title:"Toast",subtitle:"吐司"}}),m=new y({props:{code:"<script>\n  import { Button, Toast } from 'svelma-pro'\n\n  function open(type, position) {\n    Toast.create({ message: 'I am a toast', type, position })\n  }\n<\/script>\n\n<Button on:click={() => open()}>Toast</Button>\n<Button type=\"is-success\" on:click={() => open('is-success')}>Success</Button>\n<Button type=\"is-danger\" on:click={() => open('is-danger', 'is-bottom-right')}>Bottom Right</Button>\n<Button type=\"is-primary\" on:click={() => open('is-primary', 'is-top', 'has-background-grey-lighter')}>Custom Background</Button>",$$slots:{default:[C],preview:[T]},$$scope:{ctx:t}}}),f=new B({props:{jsdoc:t.jsdoc}});return{c(){l.$$.fragment.c(),n=c(),m.$$.fragment.c(),s=c(),f.$$.fragment.c()},l(t){l.$$.fragment.l(t),n=e(t,"\n\n"),m.$$.fragment.l(t),s=e(t,"\n\n"),f.$$.fragment.l(t)},m(t,c){o(l,t,c),r(t,n,c),o(m,t,c),r(t,s,c),o(f,t,c),p=!0},p(t,n){var s={};t.$$scope&&(s.$$scope={changed:t,ctx:n}),m.$set(s);var c={};t.jsdoc&&(c.jsdoc=n.jsdoc),f.$set(c)},i(t){p||(a(l.$$.fragment,t),a(m.$$.fragment,t),a(f.$$.fragment,t),p=!0)},o(t){$(l.$$.fragment,t),$(m.$$.fragment,t),$(f.$$.fragment,t),p=!1},d(t){i(l,t),t&&u(n),i(m,t),t&&u(s),i(f,t)}}}async function R(){const t=await this.fetch("components/toast.json");return{jsdoc:await t.json()}}function S(t,n,s){v.create({message:"I am a toast",type:t,position:n,background:s})}function D(t,n,s){let{jsdoc:c}=n;return t.$set=(t=>{"jsdoc"in t&&s("jsdoc",c=t.jsdoc)}),{jsdoc:c,click_handler:function(){return S()},click_handler_1:function(){return S("is-success")},click_handler_2:function(){return S("is-danger","is-bottom-right")},click_handler_3:function(){return S("is-primary","is-top","has-background-grey-lighter")}}}export default class extends t{constructor(t){super(),n(this,t,D,I,s,["jsdoc"])}}export{R as preload};
//# sourceMappingURL=toast.1631b842.js.map