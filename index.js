import{a as q,S as P,i}from"./assets/vendor-C2ySes1p.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const E="https://pixabay.com/api/",$="55066237-5cfe5caa7f2d484b58f1c4e04";async function u(o,n){return(await q.get(E,{params:{key:$,q:o,page:n,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const f=document.querySelector(".gallery"),g=document.querySelector(".loader"),h=document.querySelector(".load-more-btn"),B=new P(".gallery a",{captionsData:"alt",captionDelay:250});function m(o){const n=o.map(({webformatURL:t,largeImageURL:s,tags:e,likes:r,views:a,comments:S,downloads:v})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${e}"
            />
          </a>
          <div class="info">
            <p><b>Likes</b> ${r}</p>
            <p><b>Views</b> ${a}</p>
            <p><b>Comments</b> ${S}</p>
            <p><b>Downloads</b> ${v}</p>
          </div>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",n),B.refresh()}function M(){f.innerHTML=""}function p(){g.classList.remove("is-hidden")}function y(){g.classList.add("is-hidden")}function L(){h.classList.remove("is-hidden")}function l(){h.classList.add("is-hidden")}const b=document.querySelector(".form"),R=document.querySelector(".gallery"),I=document.querySelector(".load-more-btn");let d="",c=1;const w=15;b.addEventListener("submit",O);I.addEventListener("click",x);async function O(o){o.preventDefault();const n=o.currentTarget.elements["search-text"].value.trim();if(!n){i.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}d=n,c=1,M(),l(),p();try{const t=await u(d,c);if(!t.hits||t.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(t.hits),t.totalHits>w?L():(l(),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{y(),b.reset()}}async function x(){c+=1,l(),p();try{const o=await u(d,c);m(o.hits),c*w>=o.totalHits?(l(),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):L();const t=R.firstElementChild;if(t){const s=t.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}}catch{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{y()}}
//# sourceMappingURL=index.js.map
