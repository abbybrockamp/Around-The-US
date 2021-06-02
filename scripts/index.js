// =====
// Wrappers
// =====
let editModalEl = document.querySelector(".modal");
let profileEditBtnEl = document.querySelector(".profile__edit-btn")
let closeBtnEl = document.querySelector(".modal__close-btn");

// =====
// Form Elements
// =====
let editForm = document.querySelector(".edit-form");
let editFormNameInput = document.querySelector(".edit-form__input_content_name");
let editFormTitleInput = document.querySelector(".edit-form__input_content_title");

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
// New Card Add
// ====

// =====
// Modal Form Functionality 
// =====
function openModal() {
    editModalEl.classList.add("modal_open");
    editFormNameInput.value = profileNameEl.textContent;
    editFormTitleInput.value = ProfileTitleEl.textContent;
}

function closeModal() {
    editModalEl.classList.remove("modal_open");
}

// =====
// Handlers
// =====
function submittedModal(event) {
    event.preventDefault();
    profileNameEl.textContent = editFormNameInput.value;
    ProfileTitleEl.textContent = editFormTitleInput.value;
    closeModal();
}

// =====
// Event Listeners
// =====
profileEditBtnEl.addEventListener("click", openModal);
closeBtnEl.addEventListener("click", closeModal);
editForm.addEventListener("submit", submittedModal);
