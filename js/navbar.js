const $NAVBAR__MENU = document.querySelector(".navbar__menu");
const $NAVBAR__OPTIONS = document.querySelector(".navbar__options");
let navbarOptionsActive = false;

const isActiveNavbarOptions = () => { 
    if (navbarOptionsActive === false) {
        navbarOptionsActive = true;
        $NAVBAR__OPTIONS.classList.add("navbar__options--active")
    } else {
        navbarOptionsActive = false;
        $NAVBAR__OPTIONS.classList.remove("navbar__options--active")
    }
}

$NAVBAR__MENU.addEventListener("click", isActiveNavbarOptions);

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});
