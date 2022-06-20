const $FORM_NEWSLETTER = document.getElementById("form-newsletter");
const $FORM_FOOTER = document.getElementById("form-footer");

const isHandlerSubmit = (e) => {
  e.preventDefault();
};

$FORM_NEWSLETTER.addEventListener("submit", isHandlerSubmit);
$FORM_FOOTER.addEventListener("submit", isHandlerSubmit);


