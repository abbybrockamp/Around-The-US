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
const previewModalEl = document.querySelector(".modal_type_preview");
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
const ProfileTitleEl = document.querySelector(".profile__title");

// card grid element
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
}

// ======================================================================================================================//
// modal functions
// ======================================================================================================================//
function openModal(element) {
  element.classList.add("modal_open");
  closeModalByEsc(element);
  closeModalByOverlayClick(element);
}

function closeModal(element) {
  element.classList.remove("modal_open");
}

const closeModalByEsc = (element) => {
  document.addEventListener("keydown", (event) => {
    if(event.key === "Escape") {
    element.classList.remove("modal_open");
    }});
  };

  const closeModalByOverlayClick = (element) => {
    const modalEls = [...document.querySelectorAll(".modal__overlay")];
    modalEls.forEach((modal) => 
      modal.addEventListener("click", () => {
      element.classList.remove("modal_open");
      }));
  };

function submitEditModal(event) {
    event.preventDefault();
    profileNameEl.textContent = editFormNameInput.value;
    ProfileTitleEl.textContent = editFormTitleInput.value;
    closeModal(editModalEl);
}

// ======================================================================================================================//
// event listeners
// ======================================================================================================================//
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
