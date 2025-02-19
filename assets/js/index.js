// Slider members
const swiper = new Swiper(".swiper", {
  slidesPerView: "4",
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    475: {
      slidesPerView: 2,
      spaceBetween: 40
    },

    1199: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});

// label flutuante
const inputsForm = document.querySelectorAll(".field .input-group");
inputsForm.forEach(input => {
  const field = input.parentNode;
  input.addEventListener("focusin", () => {
    field.classList.add("active");
  });

  input.addEventListener("focusout", () => {
    if (input.value === "") {
      field.classList.remove("active");
    }
  });
});

const mobileMenuButton = document.querySelector(".toggle-menu");
const mobileMenu = document.querySelector(".header-menu-mobile");
mobileMenuButton.addEventListener("click", () => {
  mobileMenuButton.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  document.body.classList.toggle("active");
});

const mobileMenuItems = document.querySelectorAll(
  ".header-menu-mobile .menu-item"
);

mobileMenuItems.forEach(menuItem => {
  menuItem.addEventListener("click", () => {
    if (mobileMenuButton.classList.contains("active")) {
      mobileMenuButton.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.classList.remove("active");
    }
  });
});
