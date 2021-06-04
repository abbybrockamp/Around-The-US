// =====
// Edit Modal Elements
// =====
const editModalEl = document.querySelector(".modal_type_edit");
const profileEditBtnEl = document.querySelector(".profile__edit-btn");
const editModalCloseBtnEl = document.querySelector(".modal__close-btn_type_edit");

// =====
// Add Modal Elements
// =====
const addModalEl = document.querySelector(".modal_type_add");
const addBtnEl = document.querySelector(".profile__add-btn");
const addModalCloseBtnEl = document.querySelector(".modal__close-btn_type_add")

// =====
// Preview Modal Elements
// =====
const previewModalEl = document.querySelector(".modal_type_preview");
const previewModalImageEl = previewModalEl.querySelector(".preview__image");
const previewModalCaptionEl = previewModalEl.querySelector(".preview__caption");
const previewModalCloseBtnEl = document.querySelector(".modal__close-btn_type_preview");

// =====
// Form Elements
// =====
const editForm = document.querySelector(".form_type_edit");
const editFormNameInput = document.querySelector(".form__input_content_profile-name");
const editFormTitleInput = document.querySelector(".form__input_content_profile-title");

const addForm = document.querySelector(".form_type_add");
const addFormTitleInput = document.querySelector(".form__input_content_place-title");
const addFormLinkInput = document.querySelector(".form__input_content_place-link");

// =====
// Profile Elements
// =====
const profileNameEl = document.querySelector(".profile__name");
const ProfileTitleEl = document.querySelector(".profile__title");

// =====
// Card Elements
// =====
const placeCardList = document.querySelector(".place-card__list");

;// =====
// Templates
// =====
const placeCardTemplate = document.querySelector("#place-card-template").content.querySelector(".place-card");

// =====
// Card Data
// ====
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
]; 

const newCards = [];

// =====
// Helper Functions 
// =====
// append card
function renderPlaceCard(placeCardElement, container) {
  container.append(placeCardElement);
}

//hydrate cards & preview function
function generatePlaceCard(card) {
  const placeCardElement = placeCardTemplate.cloneNode(true);
  placeCardElement.querySelector(".place-card__title").textContent = card.name;
  const imageEl = placeCardElement.querySelector(".place-card__image");
  imageEl.style.backgroundImage = `url(${card.link})`;
  imageEl.addEventListener("click", () => {
    previewModalEl.classList.add("modal_open");
    previewModalImageEl.src = card.link;
    previewModalCaptionEl.textContent = card.name;
  });
  return placeCardElement;
}

// =====
// Initial Card Hydration
// ====
initialCards.forEach(card => {
  renderPlaceCard(generatePlaceCard(card), placeCardList);
});

// =====
// Modal Open/close
// =====
function openEditModal() {
    editModalEl.classList.add("modal_open");
    editFormNameInput.value = profileNameEl.textContent;
    editFormTitleInput.value = ProfileTitleEl.textContent;
}

function openAddModal() {
  addModalEl.classList.add("modal_open");
}

function openPreviewModal() {
  previewModalEl.classList.add("modal_open");
}

function closeModal() {
    editModalEl.classList.remove("modal_open") ||
    addModalEl.classList.remove("modal_open") ||
    previewModalEl.classList.remove("modal_open");
}

// =====
// Handlers
// =====
function submittedEditModal(event) {
    event.preventDefault();
    profileNameEl.textContent = editFormNameInput.value;
    ProfileTitleEl.textContent = editFormTitleInput.value;
    closeModal();
}

function submittedAddModal(event, placeCardElement) {
  event.preventDefault();
  const newCardData = {name: addFormTitleInput.value, link: addFormLinkInput.value};
  initialCards.push(newCardData);
}

console.log(initialCards);
console.log(newCards);

// =====
// Event Listeners
// =====
profileEditBtnEl.addEventListener("click", openEditModal);
editModalCloseBtnEl.addEventListener("click", closeModal);
editForm.addEventListener("submit", submittedEditModal);

addBtnEl.addEventListener("click", openAddModal)
addModalCloseBtnEl.addEventListener("click", closeModal);

previewModalCloseBtnEl.addEventListener("click", closeModal);

addForm.addEventListener("submit", submittedAddModal);