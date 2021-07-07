
const hideInputError = (formEl, input, {errorClass}) => {
    const errorSpan = formEl.querySelector(`#${input.id}-error`);
    errorSpan.textContent = "";
    input.classList.remove(errorClass);
};

const showInputError = (formEl, input, {errorClass}) => {
    const errorSpan = formEl.querySelector(`#${input.id}-error`);
    errorSpan.textContent = input.validationMessage;
    input.classList.add(errorClass);
};

const checkInputValidity = (formEl, input, settings) => {
    if (input.validity.valid) {
        return hideInputError(formEl, input, settings);
    }
    showInputError(formEl, input, settings);
};

const hasInvalidInputs = (inputList) => {
    return inputList.some((input) => {
        return !input.validity.valid;
    });
};

const toggleButton = (inputList, button, settings) => {
    if (hasInvalidInputs(inputList)) {
        button.disabled = true;
        return button.classList.add(settings.inactiveButtonClass);
    }
    button.disabled = false;
    button.classList.remove(settings.inactiveButtonClass);
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
