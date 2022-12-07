import { galleryItems } from './gallery-items.js';
// Change code below this line

const docGallery = document.querySelector('.gallery');
const imgCard = onCreateGalleryItem(galleryItems);
let openOrigImage;

docGallery.insertAdjacentHTML('beforeend', imgCard);
// docGallery.addEventListener('keydown', onPressEscToCloseImage);

function onCreateGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    })
    .join('');
}
new SimpleLightbox('.gallery a', {
  disableRightClick: true,
  scrollZoom: false,
  captionDelay: 250,
  captionsData: 'alt',
});


function onPressEscToCloseImage(e) {
  if (e.code !== 'Escape') {
    return;
  }
  openOrigImage.close();
}
