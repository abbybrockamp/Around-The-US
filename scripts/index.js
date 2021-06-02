// =====
// Edit Modal Elements
// =====
let editModalEl = document.querySelector(".modal_type_edit");
let profileEditBtnEl = document.querySelector(".profile__edit-btn");
let editModalCloseBtnEl = document.querySelector(".modal__close-btn_type_edit");

// =====
// Add Modal Elements
// =====
let addModalEl = document.querySelector(".modal_type_add");
let addBtnEl = document.querySelector(".profile__add-btn");
let addModalCloseBtnEl = document.querySelector(".modal__close-btn_type_add")

// =====
// Form Elements
// =====
let editForm = document.querySelector(".form_type_edit");
let editFormNameInput = document.querySelector(".form__input_content_profile-name");
let editFormTitleInput = document.querySelector(".form__input_content_profile-title");

let addForm = document.querySelector(".form_type_add");
let addFormTitleInput = document.querySelector(".form__input_content_place-title");
let addFormLinkInput = document.querySelector(".form__input_content_place-link");

// =====
// Profile Elements
// =====
let profileNameEl = document.querySelector(".profile__name");
let ProfileTitleEl = document.querySelector(".profile__title");

// =====
// Card Elements
// =====
const placeCardList = document.querySelector(".place-card__list");

// =====
// Templates
// =====
const placeCardTemplate = document.querySelector("#place-card-template").content.querySelector(".place-card");

// =====
// Initial Card Data
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

// =====
// Helper Functions 
// =====
// append card
function renderPlaceCard(placeCardElement, container) {
  container.append(placeCardElement);
}

//hydrate cards
function generatePlaceCard(card) {
  const placeCardElement = placeCardTemplate.cloneNode(true);
  placeCardElement.querySelector(".place-card__title").textContent = card.name;
  placeCardElement.querySelector(".place-card__image").style.backgroundImage = `url(${card.link})`;
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

function closeModal() {
    editModalEl.classList.remove("modal_open") ||
    addModalEl.classList.remove("modal_open");
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

function submittedAddModal(event) {
  event.preventDefault();
  return initialCards.push(addFormTitleInput, addFormLinkInput);
}

// =====
// Event Listeners
// =====
profileEditBtnEl.addEventListener("click", openEditModal);
editModalCloseBtnEl.addEventListener("click", closeModal);
editForm.addEventListener("submit", submittedEditModal);

addBtnEl.addEventListener("click", openAddModal)
addModalCloseBtnEl.addEventListener("click", closeModal);