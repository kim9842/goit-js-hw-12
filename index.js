import{a as S,S as v,i as s}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const w="50223295-78bd94e1186a988c12ff349b3",P="https://pixabay.com/api/";async function p(t,r=1){const n={key:w,q:t,safesearch:!0,lang:"en",image_type:"photo",orientation:"horizontal",page:r,per_page:15};return(await S.get(P,{params:n})).data}const q=new v(".gallery a",{captionsData:"alt",captionDelay:350}),f=document.querySelector(".gallery");document.querySelector(".loader");const m=document.querySelector(".load-more-btn");function h(t){const r=t.map(({webformatURL:n,largeImageURL:i,tags:e,likes:o,views:l,comments:L,downloads:b})=>`
     <li class="gallery-item">
  <a href="${i}">
    <img src="${n}" alt="${e}" />
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

      `).join("");f.insertAdjacentHTML("beforeend",r),q.refresh()}function E(){f.innerHTML=""}function g(){document.querySelector(".js-loader").classList.remove("hidden")}function y(){document.querySelector(".js-loader").classList.add("hidden")}function M(){m.classList.remove("is-hidden")}function d(){m.classList.add("is-hidden")}const R=document.querySelector(".load-more-btn"),u=document.querySelector(".form"),A=u.querySelector("[name='search-text']");let a=1,c="";u.addEventListener("submit",$);R.addEventListener("click",B);async function $(t){if(t.preventDefault(),c=A.value.trim(),!c){s.error({title:"Error",message:"Please fill in this field",position:"topRight"});return}a=1,g(),E();try{const r=await p(c,a);r.hits.length===0?s.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(h(r.hits),r.totalHits<=a*15?d():M())}catch(r){console.error(r),s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{y(),u.reset()}}async function B(){a+=1,g();try{const t=await p(c,a);t.hits.length===0?(s.error({title:"No More Results",message:"Sorry, there are no more images.",position:"topRight"}),d()):(h(t.hits),(t.hits.length<15||t.totalHits<=a*15)&&(d(),s.info({title:"End",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})))}catch(t){console.error(t),s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{y()}}
//# sourceMappingURL=index.js.map
