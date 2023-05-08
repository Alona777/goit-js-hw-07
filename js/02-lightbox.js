import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulRef = document.querySelector('.gallery');
const addGallaryMarkup = createGallaryMarkupList(galleryItems);

function createGallaryMarkupList(items) {
    return items
    .map(
        (item) => `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
           <img class="gallery__image" src=${item.preview} alt="${item.description}" />
        </a>
     </li>`
    )
     .join('');
}


ulRef.innerHTML = addGallaryMarkup;

ulRef.addEventListener('click', imageClick);

function imageClick(evt) {

    blockStandardAction(evt);

    if (evt.target.nodeName !== 'IMG') {

        return;
    }
}

const images = document.querySelectorAll('img');

images.forEach(image => {
  image.addEventListener('click', () => {
    const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});

});
});

function blockStandardAction(evt) {

    evt.preventDefault();
}


