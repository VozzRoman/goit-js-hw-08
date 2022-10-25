// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

//1)
function createMarkUpImage(galleryItems) {
	return galleryItems.map(image => {
		return `
		<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
		
		
    />
  </a>
</div>
		`
	}).join(' ');
}

const refsLinkElement = createMarkUpImage(galleryItems);
console.log(refsLinkElement);

const imageElementConatainer = document.querySelector('.gallery');

imageElementConatainer.innerHTML = refsLinkElement;

//---LightBox----
//2)
const lightbox = new SimpleLightbox('.gallery a',
	{
		captionsData: 'alt',
		captionDelay: 250,
		captionPosition: 'bottom',
	});
console.log(lightbox);