var splide = new Splide(".splide");
splide.mount();
// Привязка стрелок слайдера

// SCREEN 4
var splide = new Splide(".splide.splide2", {
  type: "loop",
  perPage: 4,
  perMove: 1,
  rewind: true,
  gap: 30,
  breakpoints: {
    700: {
      perPage: 1,
    },
  },
});

splide.mount();

//   SCREEN 4
// ПРИВЯЗКА КАСТОМНЫХ СТРЕЛОК

// ПРИВЯЗКА КАСТОМНЫХ СТРЕЛОК

// popUpCatalog
function openPopUp() {
  let bg = document.querySelector(".popUpCatalog");
  bg.classList.remove("closed");
  let active = document.querySelector(".active");
  active.classList.remove("off");
  let inactive = document.querySelector(".inactive");
  inactive.classList.add("off");
  let btnactive = document.querySelector(".btnactive");
  btnactive.classList.remove("popupbtn");
}

function closePopUp() {
  let elem = event.target;
  if (elem.className == "popUpCatalog") {
    let bg = document.querySelector(".popUpCatalog");
    bg.classList.add("closed");
    let active = document.querySelector(".active");
    active.classList.add("off");
    let inactive = document.querySelector(".inactive");
    inactive.classList.remove("off");
    let btnactive = document.querySelector(".btnactive");
    btnactive.classList.add("popupbtn");
  }
}
// popUpCatalog

// Кнопка перехода в категории
var button = document.getElementById("all_categories");

function goToCategories() {
  var filePath = "./Categories/categories.html";
  window.location.href = filePath;
}
button.addEventListener("click", goToCategories);

// Кнопка перемещения в каталог
var button = document.getElementById("gocatalog");

function goToCatalog() {
  var filePath = "./Catalog/catalog.html";
  window.location.href = filePath;
}
button.addEventListener("click", goToCatalog);

// BURGER MENU
