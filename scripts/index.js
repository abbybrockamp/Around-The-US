let editModalEl = document.querySelector(".modal");
let profileEditBtnEl = document.querySelector(".profile__edit-btn")
let closeBtnEl = document.querySelector(".modal__close-btn");

let editForm = document.querySelector(".edit-form");
let editFormNameInput = document.querySelector(".edit-form__input_content_name");
let editFormTitleInput = document.querySelector(".edit-form__input_content_title");

let profileNameEl = document.querySelector(".profile__name");
let ProfileTitleEl = document.querySelector(".profile__title");

function openModal() {
    editModalEl.classList.add("modal_open");
    editFormNameInput.value = profileNameEl.textContent;
    editFormTitleInput.value = ProfileTitleEl.textContent;
}

function closeModal() {
    editModalEl.classList.remove("modal_open");
}

function submittedModal(event) {
    event.preventDefault();
    profileNameEl.textContent = editFormNameInput.value;
    ProfileTitleEl.textContent = editFormTitleInput.value;
    closeModal();
}

profileEditBtnEl.addEventListener("click", openModal);
closeBtnEl.addEventListener("click", closeModal);
editForm.addEventListener("submit", submittedModal);
