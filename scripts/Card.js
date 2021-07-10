class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;

        this._cardSelector = cardSelector;
    }

    _setEventListeners() {
        this._likeButton.addEventListener("click", () => this._handleLikeButton());
        this._deleteButton.addEventListener("click", () => this._handleDeleteButton());
        this._imageElement.addEventListener("click", () => this._handlePreviewModal());
    }

    _handleLikeButton() {
        this._likeButton.classList.toggle("place-card__like-btn_active");
    }

    _handleDeleteButton() {
        this._element.remove();
    }

    _handlePreviewModal() {
        this._previewModal = document.querySelector(".modal_type_preview");
        this._previewImage = document.querySelector(".preview__image");
        this._previewCaption = document.querySelector(".preview__caption");

        this._previewModal.classList.add("modal_open");

        this._previewImage.src = this._link;
        this._previewImage.alt = this._name;
    }

    _openModal() {

    }

    _getTemplate() {
        return document
        .querySelector(this._cardSelector)
        .content.querySelector(".place-card")
        .cloneNode(true);
        
    }

    getView() {
        this._element = this._getTemplate();

        this._likeButton = this._element.querySelector(".place-card__like-btn");
        this._deleteButton = this._element.querySelector(".place-card__delete-btn");
        this._imageElement = this._element.querySelector(".place-card__image");

        this._element.querySelector(".place-card__title")
        .textContent = this._name;

        this._imageElement
        .style.backgroundImage = `url(${this._link})`;

        this._setEventListeners();

        return this._element;
    }

}

export default Card;