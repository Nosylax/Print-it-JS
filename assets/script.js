const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const number_of_slide = slides.length;
console.log(number_of_slide);

let number_selected = 0;
let dotbox = document.querySelector(".dots");
for (let i in slides) {
  let dots = document.createElement("div");
  dots.classList.add("dot");
  if (i == number_selected) {
    dots.classList.add("dot_selected");
  }
  dotbox.appendChild(dots);
}

let arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click", () => {
  number_selected = number_selected - 1;
  if (number_selected === -1) {
    number_selected = slides.length - 1;
  }
  console.log(number_selected);
  change_image_texte();
  change_dot();
});

let arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", () => {
  number_selected = (number_selected + 1) % slides.length;
  console.log(number_selected);
  change_image_texte();
  change_dot();
});

function change_dot() {
  const dots = document.querySelectorAll(".dot");
  document.querySelector(".dot_selected").classList.remove("dot_selected");
  dots[number_selected].classList.add("dot_selected");
  console.log(dots);
}

function change_image_texte() {
  let image = document.querySelector(".banner-img");
  image.setAttribute("src", slides[number_selected].image);
  let texte = document.querySelector("#banner p");
  texte.innerHTML = slides[number_selected].tagLine;
}
