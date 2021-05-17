const editModalEl = document.querySelector(".edit-btn-modal");
const profileEditBtnEl = document.querySelector(".profile__edit-btn")
const closeBtnEl = document.querySelector(".edit-btn-modal__close-btn");

profileEditBtnEl.addEventListener("click", function() {
    editModalEl.classList.add("edit-btn-modal_open")
});

closeBtnEl.addEventListener("click", function() {
    editModalEl.classList.remove("edit-btn-modal_open")
});