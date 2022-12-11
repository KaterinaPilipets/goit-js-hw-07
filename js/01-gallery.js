import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", onGalleryClick);
gallery.insertAdjacentHTML("beforeend", createGaleryItems(galleryItems));

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" />`,
    { onShow: (instance) => onShowInstance(instance) }
  );
  instance.show();
}
function onShowInstance(instance) {
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

function createGaleryItems(galleryItemsArr) {
  return galleryItemsArr
    .map(
      ({ preview, original, description }) => `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
             <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
         </a>
    </div>`
    )
    .join("");
}
