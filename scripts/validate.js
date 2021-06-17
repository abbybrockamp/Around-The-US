
const hideInputError = (formEl, input, {errorClass}) => {
    const errorSpan = formEl.querySelector(`#${input.id}-error`);
    errorSpan.textContent = " ";
    input.classList.remove(errorClass);
};

const showInputError = (formEl, input, {errorClass}) => {
    const errorSpan = formEl.querySelector(`#${input.id}-error`);
    errorSpan.textContent = input.validationMessage;
    input.classList.add(errorClass);
};

const checkInputValidity = (formEl, input, settings) => {
    if (input.validity.valid) {
        hideInputError(formEl, input, settings);
    } else {
        showInputError(formEl, input, settings);
    }
};

const hasValidInputs = (inputList) => {
    return inputList.every((input) => input.validity.valid === true);
};

const toggleButton = (inputList, button, settings) => {
    if(hasValidInputs(inputList)) {
        button.disabled = false;
        button.classList.remove(settings.inactiveButtonClass);
    } else {
        button.disabled = true;
        button.classList.add(settings.inactiveButtonClass);
    }
};

const setEventListeners = (formEl, settings) => {
    const inputList = [...formEl.querySelectorAll(settings.inputSelector)];
    const button = formEl.querySelector(settings.submitButtonSelector);
    inputList.forEach((input) => {
        input.addEventListener("input", (e) => {
            checkInputValidity(formEl, input, settings);
            toggleButton(inputList, button, settings);
        });
    });
};

const enableValidation = (settings) => {
    const formElements = [...document.querySelectorAll(settings.formSelector)];
    formElements.forEach((formEl) => {
        formEl.addEventListener("submit", (e) => e.preventDefault());
        setEventListeners(formEl, settings);
    });
};


enableValidation({
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__submit",
    inactiveButtonClass: "form__submit_disabled",
    inputErrorClass: "form__input-error",
    errorClass: "form__input_error_active"
  });