import {
    modalEl,
    imageModalEl,
    buttonCloseEl,
    overlayEl,
} from '../index.js';

import onModalClose from './onmodalclose.js';
import onKeyDownActionInOpenedModal from './onKeyDownActionInOpenedModal';


export function onModalOpen (evt){ 
    if (!evt.target.classList.contains ("gallery__image")) {
        return;
    };

    evt.preventDefault();

    modalEl.classList.add("is-open");
    imageModalEl.src = evt.target.dataset.source;
    imageModalEl.alt = evt.target.alt;

    buttonCloseEl.addEventListener("click", onModalClose);
    overlayEl.addEventListener("click", onModalClose); 
    window.addEventListener("keydown", onKeyDownActionInOpenedModal);
};