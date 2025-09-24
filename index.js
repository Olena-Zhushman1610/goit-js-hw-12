import{a as q,S as $,i as p}from"./assets/vendor-BSTwZ_tR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const P="52348625-41a9db4c50e5799aece4dcd77",M="https://pixabay.com/api/";async function h(r,t=1,s=60){const a=new URLSearchParams({key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:s}),e=`${M}?${a}`;try{return(await q.get(e)).data}catch(o){throw new Error(`Не вдалося отримати зображення: ${o.message}`)}}const m=document.querySelector(".gallery"),f=document.querySelector(".loader"),y=document.querySelector(".load-more"),B=new $(".gallery a",{captionsData:"alt",captionDelay:250});function g(r){console.log(r);const t=r.map(({webformatURL:s,largeImageURL:a,tags:e,likes:o,views:i,comments:v,downloads:S})=>`
    <li class="gallery-item">
      <div class="card-info">
        <a href="${a}">
          <img class="gallery-image" 
            src="${s}" 
            alt="${e}" 
            loading="lazy" 
          />
        </a>
        <div class="info">
          <p><span class="likes-label">Likes:</span> ${o}</p>
          <p><span class="views-label">Views:</span> ${i}</p>
          <p><span class="comments-label">Comments:</span> ${v}</p>
          <p><span class="downloads-label">Downloads:</span> ${S}</p>
        </div>
      </div>
    </li>`).join("");m.insertAdjacentHTML("beforeend",t),B.refresh()}function E(){m.innerHTML=""}function L(){f.classList.add("is-visible")}function b(){f.classList.remove("is-visible")}function w(){y.classList.remove("hidden")}function d(){y.classList.add("hidden")}const u=document.querySelector(".form");document.querySelector(".gallery");const H=document.querySelector(".load-more");let l="",n=1;const c=15;u.addEventListener("submit",async r=>{if(r.preventDefault(),console.log(r.target.elements.search.value),E(),d(),l=r.target.elements.search.value.trim(),!!l){n=1;try{L();const t=await h(l,n,c);if(t.hits.length===0){p.show({title:"❌",color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits);const s=Math.ceil(t.totalHits/c);n<s&&(w(),console.log(t.totalHits))}catch(t){console.error(t)}finally{b(),u.reset()}}});H.addEventListener("click",async()=>{n+=1,d();try{L();const r=await h(l,n,c);g(r.hits),w();const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"}),n>=Math.ceil(r.totalHits/c)&&(console.log(r.totalHits),d(),p.info({message:"We are sorry, but you have reached the end of search results",position:"topRight"}))}catch(r){console.error(r)}finally{b()}});
//# sourceMappingURL=index.js.map
