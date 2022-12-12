import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", onGalleryClick);
gallery.insertAdjacentHTML("beforeend", createGaleryItems(galleryItems));
let modalCloseHandler;
const instance = basicLightbox.create(`<img src="" />`, {
  onShow(instance) {
    modalCloseHandler = (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    };
    document.addEventListener("keydown", modalCloseHandler);
  },
  onClose() {
    document.removeEventListener("keydown", modalCloseHandler);
  },
});

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  instance
    .element()
    .querySelector("[src]")
    .setAttribute("src", event.target.dataset.source);
  instance.show();
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

// import { galleryItems } from "./gallery-items.js";
// // Change code below this line
// const gallery = document.querySelector(".gallery");

// gallery.addEventListener("click", onGalleryClick);
// gallery.insertAdjacentHTML("beforeend", createGaleryItems(galleryItems));
// let modalCloseHandler;
// function onGalleryClick(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") return;

//   const instance = basicLightbox.create(
//     `<img src="${event.target.dataset.source}" />`,
//     {
//       onShow(instance) {
//         modalCloseHandler = (event) => {
//           if (event.code === "Escape") {
//             instance.close();
//           }
//         };
//         document.addEventListener("keydown", modalCloseHandler);
//       },
//       onClose() {
//         document.removeEventListener("keydown", modalCloseHandler);
//       },
//     }
//   );
//   instance.show();
// }

// function createGaleryItems(galleryItemsArr) {
//   return galleryItemsArr
//     .map(
//       ({ preview, original, description }) => `
//     <div class="gallery__item">
//         <a class="gallery__link" href="${original}">
//              <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
//          </a>
//     </div>`
//     )
//     .join("");
// }
