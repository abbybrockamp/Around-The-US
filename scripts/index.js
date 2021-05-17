let editModalEl = document.querySelector(".edit-btn-modal");
let profileEditBtnEl = document.querySelector(".profile__edit-btn")
let closeBtnEl = document.querySelector(".edit-btn-modal__close-btn");

let editForm = document.querySelector(".edit-form");
let editFormNameInput = document.querySelector(".edit-form__name");
let editFormTitleInput = document.querySelector(".edit-form__title");

let profileNameEl = document.querySelector(".profile__name");
let ProfileTitleEl = document.querySelector(".profile__title");

function openModal() {
    editModalEl.classList.add("edit-btn-modal_open");
}

function closeModal() {
    editModalEl.classList.remove("edit-btn-modal_open");
}

profileEditBtnEl.addEventListener("click", function() {
    openModal();
});

closeBtnEl.addEventListener("click", function() {
    closeModal();
});

editFormNameInput.value = profileNameEl.textContent;
editFormTitleInput.value = ProfileTitleEl.textContent;

editForm.addEventListener("submit", function(event) {
    event.preventDefault();
    profileNameEl.textContent = editFormNameInput.value;
    ProfileTitleEl.textContent = editFormTitleInput.value;
    closeModal();
});
