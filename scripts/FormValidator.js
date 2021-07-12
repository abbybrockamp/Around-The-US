class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;

        this._form = formElement;
    }

    _showInputError = (input) => {
        this._errorSpan = this._form.querySelector(`#${input.id}-error`);
        this._errorSpan.textContent = input.validationMessage;
        input.classList.add(this._errorClass);
    }

    _hideInputError = (input) => {
        this._errorSpan = this._form.querySelector(`#${input.id}-error`);
        this._errorSpan.textContent = "";
        this._errorSpan.classList.remove(this._errorClass);
    }

    _checkInputValidity = (input) => {
        if (input.validity.valid) {
            this._hideInputError(input);
        } else {
            this._showInputError(input);
        }
    }

    _hasInvalidInputs() {
        this._inputList = [...this._form.querySelectorAll(this._inputSelector)];
        return this._inputList.some((input) => {
            return !input.validity.valid;
        });
    }

    _toggleButton() {
        if(this._hasInvalidInputs()) {
        this._button.disabled = true;
        return this._button.classList.add(this._inactiveButtonClass);
        }

        this._button.disabled = false;
        this._button.classList.remove(this._inactiveButtonClass);
    }

    _setEventListeners() {
        this._inputList = [...this._form.querySelectorAll(this._inputSelector)];
        this._button = this._form.querySelector(this._submitButtonSelector);

        this._inputList.forEach((input) => {
            input.addEventListener("input", (e) => {
                this._checkInputValidity(input);
                this._toggleButton();
            });
        });
    }

    enableValidation() {
        this._form.addEventListener("submit", (e) => 
        e.preventDefault());
        this._setEventListeners();
    } 

    resetValidation() {
        this._inputList.forEach((input) => {
            input.value = "";
            this._hideInputError(input);
        });
        this._toggleButton();
    }
}

export default FormValidator;