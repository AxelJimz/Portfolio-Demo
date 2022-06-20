'use strict'

const $PORTFOLIO__MODALS = document.querySelectorAll(".portfolio__modal")
const $OPEN_PORTFOLIO_MODAL = document.querySelectorAll(".portfolio__project");
const $CLOSE_PORTFOLIO_MODAL = document.querySelectorAll(".portfolio__modal-close");

let openModalPortfolio = false;

$OPEN_PORTFOLIO_MODAL.forEach((open, i) => {
    open.addEventListener("click", () => {
        if (openModalPortfolio === false) {
            openModalPortfolio = true;
            $PORTFOLIO__MODALS[i].classList.add("portfolio__modal--active")
            $CLOSE_PORTFOLIO_MODAL[i].addEventListener("click", () => {
                openModalPortfolio = false;
                $PORTFOLIO__MODALS[i].classList.remove("portfolio__modal--active")
            })
        }   
    })
})
