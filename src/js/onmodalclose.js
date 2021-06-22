import {
    modalEl,
    imageModalEl,
    buttonCloseEl,
    overlayEl,
} from '../index.js';

import onKeyDownActionInOpenedModal from './onKeyDownActionInOpenedModal';

export default function onModalClose (evt) {
    modalEl.classList.remove("is-open");

    imageModalEl.src = "";
    imageModalEl.alt = "";

    buttonCloseEl.removeEventListener("click", onModalClose);
    overlayEl.removeEventListener("click", onModalClose); 
    window.removeEventListener("keydown", onKeyDownActionInOpenedModal)
};
