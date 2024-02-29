var splide = new Splide(".splide.splide3", {
  type: "loop",
  perPage: 4,
  perMove: 1,
  rewind: true,
  gap: 0,
  breakpoints: {
    700: { perPage: 1, gap: 30 },
  },
});

splide.mount();
// КНОПКА popUp КАТАЛОГ
var button = document.getElementById("gocatalog");

function goToCatalog() {
  var filePath = "../Catalog/catalog.html";
  window.location.href = filePath;
}
button.addEventListener("click", goToCatalog);
// КНОПКА popUp КАТАЛОГ

// РЕГУЛЯТОР ЦЕНЫ
var slider = document.getElementById("slider");
var inputMin = document.getElementById("inputMin");
var inputMax = document.getElementById("inputMax");

noUiSlider.create(slider, {
  start: [0, 15000], // Начальные значения (от большего к меньшему)
  connect: true,
  range: {
    min: 0,
    max: 100000,
  },
  direction: "rtl", // Устанавливаем обратное направление (от большего к меньшему)
});
// Слушаем событие обновления ползунка
slider.noUiSlider.on("update", function (values, handle) {
  var value = values[handle];
  if (handle == 0) {
    inputMin.value = Math.round(value); // Устанавливаем значение во втором инпуте
  } else {
    inputMax.value = Math.round(value); // Устанавливаем значение в первом инпуте
  }
});
// Обработка изменения значения в инпуте минимального значения
inputMin.addEventListener("change", function () {
  var value = parseFloat(this.value);
  if (value <= parseFloat(inputMax.value)) {
    slider.noUiSlider.set([value, null]);
  } else {
    this.value = inputMax.value;
  }
});

// Обработка изменения значения в инпуте максимального значения
inputMax.addEventListener("change", function () {
  var value = parseFloat(this.value);
  if (value >= parseFloat(inputMin.value)) {
    slider.noUiSlider.set([null, value]);
  } else {
    this.value = inputMin.value;
  }
});

// РЕГУЛЯТОР ЦЕНЫ
// АВТОДОПОЛНЕНИЕ РАЗМЕРОВ

// АВТОДОПОЛНЕНИЕ РАЗМЕРОВ
// КНОПКА ФИЛЬТРА PopUpFilter
var btn = document.getElementById("filterbtn");
btn.addEventListener("click", function () {
  document.querySelector("#filter_frame").classList.toggle("closed");
});
// КНОПКА ФИЛЬТРА PopUpFilter
// КНОПКА ЦЕНЫ  PopUpCost
var btn = document.getElementById("costbtn");
btn.addEventListener("click", function () {
  document.querySelector(".cost_popUp").classList.toggle("closed");
  document.querySelector(".inactiveCost").classList.toggle("closed");
  document.querySelector(".activeCost").classList.toggle("closed");
});
// КНОПКА ОСОБЕННОСТИ PopUpPec
var btn = document.getElementById("pecbtn");
btn.addEventListener("click", function () {
  document.querySelector(".pec_popUp").classList.toggle("closed");
  document.querySelector(".inactivePec").classList.toggle("closed");
  document.querySelector(".activePec").classList.toggle("closed");
});
// КНОПКА ЦВЕТА popUpCol
var btn = document.getElementById("colorbtn");
btn.addEventListener("click", function () {
  document.querySelector(".colorPopUp").classList.toggle("closed");
  document.querySelector(".inactiveColor").classList.toggle("closed");
  document.querySelector(".activeColor").classList.toggle("closed");
});
// КНОПКА МАТЕРИАЛА popUpMat
var btn = document.getElementById("matbtn");
btn.addEventListener("click", function () {
  document.querySelector(".matpopUp").classList.toggle("closed");
  document.querySelector(".inactivemat").classList.toggle("closed");
  document.querySelector(".activemat").classList.toggle("closed");
});
// КНОПКА РАЗМЕРА popUpSize
var btn = document.getElementById("sizebtn");
btn.addEventListener("click", function () {
  document.querySelector(".sizepopUp").classList.toggle("closed");
  document.querySelector(".inactivesize").classList.toggle("closed");
  document.querySelector(".activesize").classList.toggle("closed");
});

// ТАБУЛАТУРА
var tabsBtn = document.querySelectorAll(".tab");
var tabsItems = document.querySelectorAll(".tabs_item");

tabsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    var currentBtn = item;
    var tabID = currentBtn.getAttribute("data-tab");
    var currentTab = document.querySelector(tabID);

    console.log(tabID);

    tabsBtn.forEach(function (item) {
      item.classList.remove("active_tab");
    });

    tabsItems.forEach(function (item) {
      item.classList.add("closed");
    });

    currentBtn.classList.add("active_tab");
    currentTab.classList.remove("closed")

    checkFirstTab()
    checkLastTab()
  });
});

function checkFirstTab() {
  let isNotFirstTab = document.querySelector(".tab1.closed");
  if (isNotFirstTab) {
    document.querySelector(".prev").classList.add("closed");
    document.querySelector(".prevactive").classList.remove("closed");
  } else {
    document.querySelector(".prevactive").classList.add("closed");
    document.querySelector(".prev").classList.remove("closed");
  }
}
function checkLastTab() {
  let isNotLastTab = document.querySelector(".tab15.closed");
  if (isNotLastTab) {
    document.querySelector(".nextinactive").classList.add("closed");
    document.querySelector(".nextactive").classList.remove("closed");
  } else {
    document.querySelector(".nextactive").classList.add("closed");
    document.querySelector(".nextinactive").classList.remove("closed");
  }
}


