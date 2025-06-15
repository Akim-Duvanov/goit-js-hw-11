import {createGallery, clearGallery, showLoader, hideLoader} from './js/render-functions.js';
import {getImagesByQuery} from './js/pixabay-api.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import './css/styles.css';

const form = document.querySelector(".form");
const queryCatcher = form.elements["search-text"];

form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    if(queryCatcher.value.trim() === "") {
        return;
    } 
    const query = queryCatcher.value.trim();
    clearGallery();
    showLoader();
    getImagesByQuery(query)
    .then(images => { 
        if(images) {
            createGallery(images);
        }
    })
    .catch(error => {     
        iziToast.error({
            title: 'Error',
            message: 'failed to fetch images',
        });
    })
    .finally(() => { hideLoader();});
}