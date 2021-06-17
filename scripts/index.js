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
const formSubmitButton = document.querySelector(".form__submit");

// =====
// Profile Elements
// =====
const profileNameEl = document.querySelector(".profile__name");
const ProfileTitleEl = document.querySelector(".profile__title");

// =====
// Card Elements
// =====
const placeCardList = document.querySelector(".grid");

// =====
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

// =====
// Helper Functions 
// =====
// append card
function renderPlaceCard(placeCardElement, container) {
  container.prepend(placeCardElement);
}
//hydrate cards, preview function, delete btn, like btn
function generatePlaceCard(card) {
  const placeCardElement = placeCardTemplate.cloneNode(true);
  placeCardElement.querySelector(".place-card__title").textContent = card.name;
  const imageEl = placeCardElement.querySelector(".place-card__image");
  imageEl.style.backgroundImage = `url(${card.link})`;
  
  imageEl.addEventListener("click", () => {
    openModal(previewModalEl);
    previewModalImageEl.src = card.link;
    previewModalCaptionEl.textContent = card.name;
    previewModalImageEl.alt = card.name;
  });

  const likeBtn = placeCardElement.querySelector(".place-card__like-btn");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("place-card__like-btn_active");
  });
  
  const deleteBtn = placeCardElement.querySelector(".place-card__delete-btn");
  deleteBtn.addEventListener("click", () => {
    placeCardElement.remove();
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

function openModal(element) {
  element.classList.add("modal_open");
}

function closeModal(element) {
  element.classList.remove("modal_open");
}

// =====
// Handlers
// =====
function submitEditModal(event) {
    event.preventDefault();
    profileNameEl.textContent = editFormNameInput.value;
    ProfileTitleEl.textContent = editFormTitleInput.value;
    closeModal(editModalEl);
}

function submitAddModal(event) {
  event.preventDefault();
  const newCardData = {name: addFormTitleInput.value, link: addFormLinkInput.value};
  closeModal(addModalEl);
  const newCard = generatePlaceCard(newCardData);
  renderPlaceCard(newCard, placeCardList);
}

// =====
// Event Listeners
// =====
profileEditBtnEl.addEventListener("click", () => {
  editFormNameInput.value = profileNameEl.textContent;
  editFormTitleInput.value = ProfileTitleEl.textContent;
  openModal(editModalEl);
});

addBtnEl.addEventListener("click", () => {
  openModal(addModalEl);
});

editForm.addEventListener("submit", submitEditModal);
addForm.addEventListener("submit", submitAddModal);

editModalCloseBtnEl.addEventListener("click", () => {
  closeModal(editModalEl);
});

addModalCloseBtnEl.addEventListener("click", () => {
  closeModal(addModalEl);
});

previewModalCloseBtnEl.addEventListener("click", () => {
  closeModal(previewModalEl);
});
