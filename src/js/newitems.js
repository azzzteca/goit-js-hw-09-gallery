import items from './apps.js';

export const galleryEl = document.querySelector(".js-gallery");

export const newItems = items
.map(({original, preview, description}) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
</a>
</li>`)
.join("");

galleryEl.innerHTML = newItems;