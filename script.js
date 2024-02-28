let img = document.querySelector(".img");
let text = document.querySelector(".img__text");
let minpage = document.querySelector(".minpage");
let maxpage = document.querySelector(".maxpage");
let btnleft = document.querySelector(".btn-left");
let btnright = document.querySelector(".btn-right");
let slides = document.querySelectorAll(".img__slide");

let arrimg = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg"];
let arrtext = [
  "первое изображение",
  "второе изображение",
  "Третье изображение",
  "Четвертое изображение",
];
let index = 0;

changeindex();
maxpage.innerHTML = arrimg.length;

btnright.onclick = slideright;
function slideright() {
  if (index < arrimg.length - 1) {
    index = index + 1;
  } else {
    index = 0;
  }
  changeindex();
}

btnleft.onclick = slideleft;
function slideleft() {
  if (index > 0) {
    index = index - 1;
  } else {
    index = arrimg.length - 1;
  }
  changeindex();
}

function changeindex() {
  text.innerHTML = arrtext[index];
  img.src = arrimg[index];
  minpage.innerHTML = index + 1;
  clearslides();
  slides[index].classList.add("slide__active");
}

function clearslides() {
  for (let index = 0; index < slides.length; index++) {
    slides[index].classList.remove("slide__active");
  }
}
