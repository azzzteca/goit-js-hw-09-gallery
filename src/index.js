import './sass/main.scss';

export const modalEl = document.querySelector(".js-lightbox");
export const imageModalEl = document.querySelector(".lightbox__image");
export const buttonCloseEl = document.querySelector(".lightbox__button");
export const overlayEl = document.querySelector(".lightbox__overlay");

import { galleryEl } from './js/newitems.js';

galleryEl.addEventListener("click", onModalOpen);

export const photosEl = document.querySelectorAll(".gallery__image");
export const photosInModalEl = document.querySelector(".lightbox__image");

import { onModalOpen } from './js/onmodalopen';