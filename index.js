import{a as S,S as v,i as a}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const w="50223295-78bd94e1186a988c12ff349b3",q="https://pixabay.com/api/";async function p(r,t=1){const s={key:w,q:r,safesearch:!0,lang:"en",image_type:"photo",orientation:"horizontal",page:t,per_page:15};return(await S.get(q,{params:s})).data}const P=new v(".gallery a",{captionsData:"alt",captionDelay:350}),f=document.querySelector(".gallery");document.querySelector(".loader");const m=document.querySelector(".load-more-btn");function h(r){const t=r.map(({webformatURL:s,largeImageURL:i,tags:e,likes:o,views:l,comments:L,downloads:b})=>`
     <li class="gallery-item">
  <a href="${i}">
    <img src="${s}" alt="${e}" />
  </a>
  <div class="info">
    <p>
      <span class="label">Likes</span>
      <span class="value">${o}</span>
    </p>
    <p>
      <span class="label">Views</span>
      <span class="value">${l}</span>
    </p>
    <p>
      <span class="label">Comments</span>
      <span class="value">${L}</span>
    </p>
    <p>
      <span class="label">Downloads</span>
      <span class="value">${b}</span>
    </p>
  </div>
</li>

      `).join("");f.insertAdjacentHTML("beforeend",t),P.refresh()}function R(){f.innerHTML=""}function g(){document.querySelector(".js-loader").classList.remove("hidden")}function y(){document.querySelector(".js-loader").classList.add("hidden")}function B(){m.classList.remove("is-hidden")}function d(){m.classList.add("is-hidden")}const E=document.querySelector(".load-more-btn"),u=document.querySelector(".form"),M=u.querySelector("[name='search-text']");let n=1,c="";u.addEventListener("submit",A);E.addEventListener("click",$);async function A(r){if(r.preventDefault(),c=M.value.trim(),!c){a.error({title:"Error",message:"Please fill in this field",position:"topRight"});return}n=1,g(),R();try{const t=await p(c,n);t.hits.length===0?a.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(h(t.hits),t.totalHits<=n*15?d():B())}catch(t){console.error(t),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{y(),u.reset()}}async function $(){n+=1,g();try{const r=await p(c,n);if(r.hits.length===0)a.error({title:"No More Results",message:"Sorry, there are no more images.",position:"topRight"}),d();else{h(r.hits);const t=document.querySelector(".gallery-item");if(t){const s=t.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}(r.hits.length<15||r.totalHits<=n*15)&&(d(),a.info({title:"End",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}}catch(r){console.error(r),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{y()}}
//# sourceMappingURL=index.js.map
