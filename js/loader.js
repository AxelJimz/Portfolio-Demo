const $LOADER = document.querySelector('.loader');

document.body.onload = function() {
    setTimeout(() => {
        $LOADER.classList.add("loader--disable")
    }, 1000);
  }

 console.log($LOADER)