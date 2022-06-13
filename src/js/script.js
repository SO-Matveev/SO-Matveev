//слайдер
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const slides = document.querySelectorAll(".carousel__item");

let currentIndex = 0;

function showSlide(index) {
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[index].style.display = "block";
}

showSlide(currentIndex);

btnNext.addEventListener("click", function () {
  currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
  showSlide(currentIndex);
});
btnPrev.addEventListener("click", function () {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
  showSlide(currentIndex);
});

// табы
const menu = document.getElementById("tabs");

menu.onclick = function (event) {
  let tabChoose = event.target.closest("li");
  let selectTabcontent = document.getElementById(event.target.id + "-content");
  if (event.target.tagName != "LI") {
    return;
  }

  let getAllTab = document.querySelectorAll(".catalog__tab");
  for (let i = 0; i < getAllTab.length; i++) {
    getAllTab[i].classList.remove("catalog__tab_active");
  }

  let getAllTabContent = document.querySelectorAll(".catalog__content");
  for (let i = 0; i < getAllTabContent.length; i++) {
    getAllTabContent[i].classList.remove("catalog__content_active");
  }

  tabChoose.classList.add("catalog__tab_active");
  selectTabcontent.classList.add("catalog__content_active");
};

// переключатель "подробнее"/назад
const CatalogItems = document.querySelectorAll(".catalog-item");

CatalogItems.forEach(function (item) {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName != "A") {
      return;
    } else {
      item
        .querySelector(".catalog-item__content")
        .classList.toggle("catalog-item__content_active");
      item
        .querySelector(".catalog-item__list")
        .classList.toggle("catalog-item__list_active");
    }
  });
});

//Кнопки в секции Промо
const buttonsPromo = document.querySelectorAll('[data-modal="consultation"]');
const overlay = document.querySelector(".overlay");
const modalConsultation = document.getElementById("consultation");

buttonsPromo.forEach(function (button) {
  button.onclick = function (event) {
    if (event.target.tagName != "BUTTON") {
      return;
    } else {
      overlay.style.display = "block";
      modalConsultation.style.display = "block";
    }
  };
});

//Кнопки в секции табов "купить"

const buttonsOrder = document.querySelectorAll(".button_mini");
const modalOrder = document.getElementById("order");
buttonsOrder.forEach(function (button) {
  button.onclick = function (event) {
    if (event.target.tagName != "BUTTON") {
      return;
    } else {
      overlay.style.display = "block";
      modalOrder.style.display = "block";
    }
  };
});

// функция закрывания модальных окон
const modals = document.querySelectorAll(".modal");

function closeModal(item) {
  modalActive = document.getElementById(`${item}`);
  modalActive.style.display = "none";
}

modals.forEach(function (buttonClose) {
  buttonClose.onclick = function (event) {
    if (event.target.className != "modal__close") {
      return;
    }

    overlay.style.display = "none";
    closeModal(event.currentTarget.id);
  };
});
