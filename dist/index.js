!function(){const e="classList",t="querySelector",r=(r,o)=>{document[t](r)?.[e].add(o)},o=(r,o)=>{document[t](r)?.[e].remove(o)};let s,c,n=parseFloat(document.documentElement.style.getPropertyValue("--header-height"));const a=function(e,t=1e3){let r,o=!1;const s=()=>{null==r?o=!1:(e(...r),r=null,setTimeout(s,t))};return(...c)=>{o?r=c:(e(...c),o=!0,setTimeout(s,t))}}((()=>{s=window.scrollY,r(".header","scroll"),n-50<s&&s>c?(r(".header","hide"),r(".header","scroll")):c>s&&o(".header","hide"),s<n&&o(".header","scroll"),c=s}),250);window.addEventListener("scroll",a),a();const i=document.querySelector(".nav"),l=document.querySelector(".page");i?.addEventListener("click",(function(e){if(!e.target.parentNode.matches(".burger")&&!e.target.matches(".burger"))return;this?.classList.remove("closed"),l?.classList.add("open"),this?.matches(".opened")&&(this?.classList.add("closed"),l?.classList.remove("open"),setTimeout((()=>{this?.classList.remove("opened")}),100));this?.classList.add("opened")}));const d=document?.querySelector(".filter__nav"),u=d?.querySelectorAll(".btn--filter"),m=document?.querySelectorAll(".filter__content");let h=0;function v(e){d.querySelector(".active").classList.remove("active"),e.classList.add("active")}function f(e){m.forEach((t=>{let r=t.getAttribute("data-category");"all"===e||e===r?t.removeAttribute("hidden"):t.setAttribute("hidden","")}))}m?.forEach((e=>{e.style.viewTransitionName="conf-"+ ++h})),u?.forEach((e=>{e.addEventListener("click",(e=>{let t=e.target.getAttribute("data-filter");document.startViewTransition||(v(e.target),f(t)),document?.startViewTransition((()=>{v(e.target),f(t)}))}))}))}();
//# sourceMappingURL=index.js.map