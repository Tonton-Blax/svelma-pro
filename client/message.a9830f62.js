import{c as e,d as t,b as s,D as n,o as i,E as o,p as a,F as r,l as c,A as l,y as m,G as $,j as p,e as u,g as f,h as d,k as g,m as h,f as b,i as k}from"./chunk.88cd124b.js";import{g as v,e as x}from"./chunk.fbb36b96.js";import"./chunk.466273fa.js";import{a as j}from"./chunk.1eafa91d.js";import"./chunk.c200edc7.js";import{a as w}from"./chunk.8178f684.js";function y(e){let t;return{c(){t=b("Toggle")},l(e){t=k(e,"Toggle")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function D(e){let t;return{c(){t=b("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      Fusce id fermentum quam. Proin sagittis, nibh id\n      hendrerit imperdiet, elit sapien laoreet elit")},l(e){t=k(e,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      Fusce id fermentum quam. Proin sagittis, nibh id\n      hendrerit imperdiet, elit sapien laoreet elit")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function F(e){let t,s,b;const k=new v({props:{class:"block",$$slots:{default:[y]},$$scope:{ctx:e}}});k.$on("click",e[1]);const j=new x({props:{active:!e[0],title:"Default",$$slots:{default:[D]},$$scope:{ctx:e}}});return j.$on("close",e[2]),{c(){t=u("div"),n(k.$$.fragment),s=i(),n(j.$$.fragment),this.h()},l(e){t=f(e,"DIV",{slot:!0});var n=d(t);o(k.$$.fragment,n),s=a(n),o(j.$$.fragment,n),n.forEach(p),this.h()},h(){g(t,"slot","preview")},m(e,n){c(e,t,n),r(k,t,null),h(t,s),r(j,t,null),b=!0},p(e,t){const s={};8&t&&(s.$$scope={dirty:t,ctx:e}),k.$set(s);const n={};1&t&&(n.active=!e[0]),8&t&&(n.$$scope={dirty:t,ctx:e}),j.$set(n)},i(e){b||(l(k.$$.fragment,e),l(j.$$.fragment,e),b=!0)},o(e){m(k.$$.fragment,e),m(j.$$.fragment,e),b=!1},d(e){e&&p(t),$(k),$(j)}}}function M(e){let t,s;const u=new j({props:{title:"Message",subtitle:"传递信息的消息块"}}),f=new w({props:{code:'<script>\n  import { Button, Message } from \'svelma-pro\'\n\n  let open\n<\/script>\n\n<Button class="block" on:click={() => open = !open}>Toggle</Button>\n<Message active={!open} title="Default"\n  on:close={active => open = active}>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  Fusce id fermentum quam. Proin sagittis, nibh id\n  hendrerit imperdiet, elit sapien laoreet elit\n</Message>',$$slots:{preview:[F]},$$scope:{ctx:e}}});return{c(){n(u.$$.fragment),t=i(),n(f.$$.fragment)},l(e){o(u.$$.fragment,e),t=a(e),o(f.$$.fragment,e)},m(e,n){r(u,e,n),c(e,t,n),r(f,e,n),s=!0},p(e,[t]){const s={};9&t&&(s.$$scope={dirty:t,ctx:e}),f.$set(s)},i(e){s||(l(u.$$.fragment,e),l(f.$$.fragment,e),s=!0)},o(e){m(u.$$.fragment,e),m(f.$$.fragment,e),s=!1},d(e){$(u,e),e&&p(t),$(f,e)}}}function q(e,t,s){let n;return[n,()=>s(0,n=!n),e=>s(0,n=e)]}export default class extends e{constructor(e){super(),t(this,e,q,M,s,{})}}
//# sourceMappingURL=message.a9830f62.js.map
