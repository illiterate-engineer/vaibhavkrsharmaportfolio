/*=============== MENU SHOW Y HIDDEN ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav__link");

  // Remove the active-link class from all nav links
  navLinks.forEach((link) => link.classList.remove("active-link"));

  // Add the active-link class to the clicked nav link
  this.classList.add("active-link");

  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}

// Add the click event listener to each nav link
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.getElementsByClassName("skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

Array.from(skillsHeader).forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

// ... (rest of the code)
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");
    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});
/*==================== SERVICES MODAL ====================*/
/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  // Add autoplay option
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
});

const bullets = document.querySelectorAll(".custom-bullet");
bullets.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    const index = parseInt(bullet.getAttribute("data-index"), 10);
    swiper.slideToLoop(index);
  });
});

// Update active bullet on slide change
swiper.on("slideChange", () => {
  const activeIndex = swiper.realIndex;
  bullets.forEach((bullet) => {
    const bulletIndex = parseInt(bullet.getAttribute("data-index"), 10);
    if (bulletIndex === activeIndex) {
      bullet.classList.add("active");
    } else {
      bullet.classList.remove("active");
    }
  });
});
/*==================== CONTACT FORM SUBMISSION ====================*/
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Show a loading message
    formStatus.textContent = "Sending message...";
    formStatus.style.color = "var(--text-color)";

    // Get form data
    const formData = new FormData(form);

    // Send form data using fetch API
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success
        formStatus.textContent = "Message sent successfully!";
        formStatus.style.color = "var(--first-color)";
        form.reset(); // Clear the form
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
        formStatus.textContent = "Oops! There was an error. Please try again.";
        formStatus.style.color = "red";
      });
  });
});
/*==================== TESTIMONIAL ====================*/
// Initialize Swiper for testimonials
const testimonialSwiper = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  pagination: {
    el: ".swiper-pagination-testimonial",
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 3000, // Auto-transition every 3 seconds
    disableOnInteraction: false, // Continue autoplay even when user interacts with the swiper
  },
});
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

// function scrollActive() {
//   const scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     sectionId = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".nav__menu a[href*=" + sectionId + "]")
//         .classList.add("active-link");
//     } else {
//       document
//         .querySelector(".nav__menu a[href*=" + sectionId + "]")
//         .classList.remove("active-link");
//     }
//   });
// }
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*="#${sectionId}"]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__menu a[href*="#${sectionId}"]`)
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL up ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollTUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
