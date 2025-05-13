import{a as d,S as f,i}from"./assets/vendor-Bz4lgVUE.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const m="50223295-78bd94e1186a988c12ff349b3",h="https://pixabay.com/api/";function g(o){const r={key:m,q:o,safesearch:!0,lang:"en",image_type:"photo",orientation:"horizontal"};return d.get(h,{params:r}).then(t=>t.data).catch(t=>{throw t})}const y=new f(".gallery a",{captionsData:"alt",captionDelay:350}),c=document.querySelector(".gallery");document.querySelector(".loader");function b(o){const r=o.map(({webformatURL:t,largeImageURL:n,tags:e,likes:s,views:a,comments:u,downloads:p})=>`
     <li class="gallery-item">
  <a href="${n}">
    <img src="${t}" alt="${e}" />
  </a>
  <div class="info">
    <p>
      <span class="label">Likes</span>
      <span class="value">${s}</span>
    </p>
    <p>
      <span class="label">Views</span>
      <span class="value">${a}</span>
    </p>
    <p>
      <span class="label">Comments</span>
      <span class="value">${u}</span>
    </p>
    <p>
      <span class="label">Downloads</span>
      <span class="value">${p}</span>
    </p>
  </div>
</li>

      `).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){c.innerHTML=""}function S(){document.querySelector(".js-loader").classList.remove("hidden")}function v(){document.querySelector(".js-loader").classList.add("hidden")}const l=document.querySelector(".form"),q=l.querySelector("[name='search-text']");l.addEventListener("submit",P);function P(o){o.preventDefault();const r=q.value.trim();if(!r){i.error({title:"Error",message:"Please fill in this field",position:"topRight"});return}S(),L(),g(r).then(t=>{t.hits.length===0?i.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(b(t.hits),i.success({title:"Success",message:`You found ${t.hits.length} images`,position:"topRight"}))}).catch(t=>{console.error(t),i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{v(),l.reset()})}
//# sourceMappingURL=index.js.map
