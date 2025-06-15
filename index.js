import{S as m,a as h,i as s}from"./assets/vendor-DgNwKBFL.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),f=new m(".gallery a",{captionsData:"alt",captionDelay:250});function g(a){c.innerHTML=a.map(e=>`
        <li class="gallery-item">
            <a class="gallery-link" href=${e.webformatURL}>
                <img
                    class="gallery-image"
                    src="${e.largeImageURL}"
                    alt="${e.tags}"
                />
                <ul class="card-info">
                    <li>likes:${e.likes}</li>
                    <li>views:${e.views}</li>
                    <li>comments:${e.comments}</li>
                    <li>downloads:${e.downloads}</li>
                </ul>
            </a>
        </li>
    `).join(""),f.refresh()}function y(){f.refresh(),c.innerHTML=""}function p(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}function b(a){const e=new URLSearchParams({key:"50857133-3b0b39e0288c55ff632440828",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return h.get(`https://pixabay.com/api/?${e}`).then(o=>o.data.hits.length===0?(s.error({title:"error",message:"Sorry, there are no images matching your search query. Please try again!"}),null):o.data.hits).catch(o=>(s.error({title:"Error",message:`message: ${o.message}`}),null))}const d=document.querySelector(".form"),l=d.elements["search-text"];d.addEventListener("submit",v);function v(a){if(a.preventDefault(),l.value.trim()==="")return;const e=l.value.trim();y(),p(),b(e).then(o=>{o&&g(o)}).catch(o=>{s.error({title:"Error",message:"failed to fetch images"})}).finally(()=>{L()})}
//# sourceMappingURL=index.js.map
