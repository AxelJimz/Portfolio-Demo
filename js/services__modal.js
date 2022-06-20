'use strict'

const $MODALS = document.querySelectorAll(".services__modal")
const $OPEN_SERVICE_MODAL = document.querySelectorAll(".services__card-btn");
const $CLOSE_SERVICE_MODAL = document.querySelectorAll(".services__modal-close");

let openModal = false;

$OPEN_SERVICE_MODAL.forEach((open, i) => {
    open.addEventListener("click", () => {
        if (openModal === false) {
            openModal = true;
            $MODALS[i].classList.add("services__modal--active")
            $CLOSE_SERVICE_MODAL[i].addEventListener("click", () => {
                openModal = false;
                $MODALS[i].classList.remove("services__modal--active")
            })
        }   
    })
})