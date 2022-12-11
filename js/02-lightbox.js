import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", onGalleryClick);
gallery.insertAdjacentHTML("beforeend", createGaleryItems(galleryItems));

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;
  let galleryLightbox = new SimpleLightbox(".gallery__link", {
    captionsData: "alt",
    captionDelay: 250,
  });
}

function createGaleryItems(galleryItemsArr) {
  return galleryItemsArr
    .map(
      ({ preview, original, description }) => `
      <li class= "gallery__item">
          <a class="gallery__link" href="${original}">
             <img class="gallery__image" src="${preview}" alt="${description}"/>
         </a></li>`
    )
    .join("");
}

// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// const gallery = document.querySelector(".gallery");

// gallery.addEventListener("click", onGalleryClick);
// gallery.insertAdjacentHTML("beforeend", createGaleryItems(galleryItems));

// function onGalleryClick(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") return;
//   let galleryLightbox = new SimpleLightbox(".gallery__item", {
//     captionsData: "alt",
//     captionDelay: 250,
//   });
// }

// function createGaleryItems(galleryItemsArr) {
//   return galleryItemsArr
//     .map(
//       ({ preview, original, description }) => `
//           <a class="gallery__item" href="${original}">
//              <img class="gallery__image" src="${preview}" alt="${description}"/>
//          </a>`
//     )
//     .join("");
// }
