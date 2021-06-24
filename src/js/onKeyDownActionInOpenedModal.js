
import {
    photosEl,
    photosInModalEl,
} from '../index';

import onModalClose from './onmodalclose.js';

export default function onKeyDownActionInOpenedModal (evt) {
    if (evt.code === "Escape") {

        onModalClose(evt);
    };
    
    if (evt.code !== "ArrowRight" && evt.code !== "ArrowLeft") {
        return;
    }

    for (let i = 0; i < photosEl.length; i +=1) {

        if (photosEl[i].dataset.source === photosInModalEl.src) {

            if (evt.code === "ArrowRight") {
                if (i === photosEl.length - 1) {
                    return;
                };
        
                photosInModalEl.src = photosEl[i + 1].dataset.source;
                photosInModalEl.alt = photosEl[i + 1].alt;
                return;
            };

            if (evt.code === "ArrowLeft") {
                if (i === 0) {
                    return;
                };
        
                photosInModalEl.src = photosEl[i - 1].dataset.source;
                photosInModalEl.alt = photosEl[i - 1].alt;
                return;
            };
        };


        };
    };