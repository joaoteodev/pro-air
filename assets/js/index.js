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

const whatsappButton = document.querySelector("#whatsapp");
const mobileMenuButton = document.querySelector(".toggle-menu");
const mobileMenu = document.querySelector(".header-menu-mobile");
mobileMenuButton.addEventListener("click", () => {
  mobileMenuButton.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  document.body.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    whatsappButton.style.display = "none";
  } else {
    whatsappButton.style.display = "block";
  }
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Pega o alvo do link
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    // Calcula o deslocamento e faz o scroll com o offset
    window.scrollTo({
      top:
        targetElement.offsetTop - document.querySelector("header").offsetHeight,
      behavior: "smooth" // Para rolar suavemente
    });
  });
});

// const faqQuestions = document.querySelectorAll(".faq-question");

// // Itera sobre os botões e adiciona um evento de clique
// faqQuestions.forEach(question => {
//   question.addEventListener("click", () => {
//     const answer = question.nextElementSibling;

//     // Alterna a classe "show" para aplicar o efeito suave
//     if (answer.classList.contains("show")) {
//       answer.classList.remove("show");
//     } else {
//       answer.classList.add("show");
//     }
//   });
// });

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    item.classList.toggle("active"); // Alterna a classe 'active' ao clicar

    // Verifica se o item está ativo para expandir ou contrair a resposta
    if (item.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px"; // Define max-height conforme o conteúdo
    } else {
      answer.style.maxHeight = 0; // Recolhe a resposta
    }
  });
});
