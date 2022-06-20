const $TESTIMONIALS__BUTTONS = document.querySelectorAll(".testimonials__button");
const $TESTIMONIALS__PARAGRAPH = document.querySelector(".testimonials__paragraph");
const $TESTIMONIALS__PHOTO = document.querySelector(".testimonials__src");
const $TESTIMONIALS__NAME = document.querySelector(".testimonials__name");
const $TESTIMONIALS__PROFESSION = document.querySelector(".testimonials__profession");


const CLIENT_1 = {
    name : "Daniel Wood",
    profession : "Graphic Designer",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ab magni necessitatibus voluptatum iste pariatur, amet sapiente, sint dicta temporibus assumenda? Ipsa quaerat libero dignissimos vitae cumque saepe necessitatibus quo?",
    photo : "assets/client-1.jpg",
}

const CLIENT_2 = {
    name : "Anita White",
    profession : "Photographer",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ab magni necessitatibus voluptatum iste pariatur, amet sapiente, sint dicta temporibus assumenda? Ipsa quaerat libero dignissimos vitae cumque saepe necessitatibus quo?",
    photo : "assets/client-2.jpg",
}

const CLIENT_3 = {
    name : "Alex Clarkson",
    profession : "Developer Backend",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ab magni necessitatibus voluptatum iste pariatur, amet sapiente, sint dicta temporibus assumenda? Ipsa quaerat libero dignissimos vitae cumque saepe necessitatibus quo?.",
    photo : "assets/client-3.jpg",
}

let index = 2;

const isNextTestimonial = () => { 

    if (index === 1) {
        index = index + 1;
        $TESTIMONIALS__PARAGRAPH.innerHTML = CLIENT_1.description;
        $TESTIMONIALS__NAME.innerHTML = CLIENT_1.name;
        $TESTIMONIALS__PROFESSION.innerHTML = CLIENT_1.profession;
        $TESTIMONIALS__PHOTO.src = CLIENT_1.photo;
    } else if (index === 2) {
        index = index + 1;
        $TESTIMONIALS__PARAGRAPH.innerHTML = CLIENT_2.description;
        $TESTIMONIALS__NAME.innerHTML = CLIENT_2.name;
        $TESTIMONIALS__PROFESSION.innerHTML = CLIENT_2.profession;
        $TESTIMONIALS__PHOTO.src = CLIENT_2.photo;
    } else {
        index = index - 2;
        $TESTIMONIALS__PARAGRAPH.innerHTML = CLIENT_3.description;
        $TESTIMONIALS__NAME.innerHTML = CLIENT_3.name;
        $TESTIMONIALS__PROFESSION.innerHTML = CLIENT_3.profession;
        $TESTIMONIALS__PHOTO.src = CLIENT_3.photo;
    }
    
}

const isPreviousTestimonial = () => { 

    if (index === 1) {
        index = index + 2;
        $TESTIMONIALS__PARAGRAPH.innerHTML = CLIENT_1.description;
        $TESTIMONIALS__NAME.innerHTML = CLIENT_1.name;
        $TESTIMONIALS__PROFESSION.innerHTML = CLIENT_1.profession;
        $TESTIMONIALS__PHOTO.src = CLIENT_1.photo;
    } else if (index === 2) {
        index = index - 1;
        $TESTIMONIALS__PARAGRAPH.innerHTML = CLIENT_2.description;
        $TESTIMONIALS__NAME.innerHTML = CLIENT_2.name;
        $TESTIMONIALS__PROFESSION.innerHTML = CLIENT_2.profession;
        $TESTIMONIALS__PHOTO.src = CLIENT_2.photo;
    } else {
        index = index - 1;
        $TESTIMONIALS__PARAGRAPH.innerHTML = CLIENT_3.description;
        $TESTIMONIALS__NAME.innerHTML = CLIENT_1.name;
        $TESTIMONIALS__PROFESSION.innerHTML = CLIENT_3.profession;
        $TESTIMONIALS__PHOTO.src = CLIENT_3.photo;
    }
}

$TESTIMONIALS__BUTTONS[0].addEventListener("click", isPreviousTestimonial);
$TESTIMONIALS__BUTTONS[1].addEventListener("click", isNextTestimonial);

