import { galleryItems } from './gallery-items.js';
// Change code below this line

const docGallery = document.querySelector('.gallery');
const imgCard = onCreateGalleryItem(galleryItems);
let openOrigImage;

docGallery.insertAdjacentHTML('beforeend', imgCard);
docGallery.addEventListener('keydown', onPressEscToCloseImage);

function onCreateGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image lazyload"

                    data-src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
    })
    .join('');
}

docGallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  // console.log(e.target.dataset.source);
  openOrigImage = basicLightbox.create(`
		<img src="${e.target.dataset.source}" width="1280" height="900">
	`);
  openOrigImage.show();
});

function onPressEscToCloseImage(e) {
  if (e.code !== 'Escape') {
    return;
  }
  openOrigImage.close();
}
