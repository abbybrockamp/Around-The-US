import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

// modal_type_edit elements
const editModalEl = document.querySelector(".modal_type_edit");
const profileEditBtnEl = document.querySelector(".profile__edit-btn");
const editModalCloseBtnEl = document.querySelector(".modal__close-btn_type_edit");

// modal_type_add elements
const addModalEl = document.querySelector(".modal_type_add");
const addBtnEl = document.querySelector(".profile__add-btn");
const addModalCloseBtnEl = document.querySelector(".modal__close-btn_type_add")

// modal_type_preview elements
const previewModalCloseBtnEl = document.querySelector(".modal__close-btn_type_preview");

// form elements
const editForm = document.querySelector(".form_type_edit");
const editFormNameInput = document.querySelector(".form__input_content_profile-name");
const editFormTitleInput = document.querySelector(".form__input_content_profile-title");

const addForm = document.querySelector(".form_type_add");
const addFormTitleInput = document.querySelector(".form__input_content_place-title");
const addFormLinkInput = document.querySelector(".form__input_content_place-link");

// profile elements
const profileNameEl = document.querySelector(".profile__name");
const profileTitleEl = document.querySelector(".profile__title");

// CARD
const placeCardList = document.querySelector(".grid");
const cardSelector = "#place-card-template";

function renderPlaceCard(data, container) {
  const card = new Card(data, cardSelector);
  container.prepend(card.getView());
}

initialCards.forEach((initialCard) => {
  renderPlaceCard(initialCard, placeCardList);
});

function submitAddModal(event) {
  event.preventDefault();
  const newCardData = {name: addFormTitleInput.value, link: addFormLinkInput.value};
  renderPlaceCard(newCardData, placeCardList);
  closeModal(addModalEl);
  clearInputs();
}

function clearInputs() {
  addFormTitleInput.value = "";
  addFormLinkInput.value = "";
}

const previewModal = document.querySelector(".modal_type_preview");
const previewImage = document.querySelector(".preview__image");
const previewCaption = document.querySelector(".preview__caption");
export {previewModal, previewImage, previewCaption};

// ======================================================================================================================//
// modal functions
// ======================================================================================================================//
export function openModal(element) {
  element.classList.add("modal_open");  
  document.addEventListener("keydown", closeByEscape);
  
  const modalEls = [...document.querySelectorAll(".modal__overlay")];
  const openModal = document.querySelector('.modal_open')
  modalEls.forEach((modal) => 
    modal.addEventListener("click", () => {
    closeModal(openModal);
    }));
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openModal = document.querySelector('.modal_open')
    closeModal(openModal);
  };
}

function closeModal(element) {
  element.classList.remove("modal_open");
  document.removeEventListener('keydown', closeByEscape);
}

function submitEditModal(event) {
    event.preventDefault();
    profileNameEl.textContent = editFormNameInput.value;
    profileTitleEl.textContent = editFormTitleInput.value;
    closeModal(editModalEl);
}



// ======================================================================================================================//
// event listeners
// ======================================================================================================================//
profileEditBtnEl.addEventListener("click", () => {
  editFormNameInput.value = profileNameEl.textContent;
  editFormTitleInput.value = profileTitleEl.textContent;
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
  closeModal(previewModal);
});

// ======================================================================================================================//
// form validation
// ======================================================================================================================//
const validationSettings = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "form__input-error",
  errorClass: "form__input_error_active"
};

const editFormValidator = new FormValidator(validationSettings, editModalEl);
const addFormValidator = new FormValidator(validationSettings, addModalEl);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
