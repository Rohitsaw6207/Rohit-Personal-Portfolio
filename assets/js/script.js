'use strict';

// Utility toggle
const elementToggleFunc = (elem) => {
  if (elem) elem.classList.toggle("active");
};

// Sidebar
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", () => {
    elementToggleFunc(sidebar);
  });
}

// Testimonials modal
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalDate = document.querySelector("[data-modal-date]");

const testimonialsModalFunc = () => {
  if (!modalContainer || !overlay) return;
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

testimonialsItem.forEach(item => {
  item.addEventListener("click", () => {

    const avatar = item.querySelector("[data-testimonials-avatar]");
    const title = item.querySelector("[data-testimonials-title]");
    const text = item.querySelector("[data-testimonials-text]");

    if (avatar && modalImg) {
      modalImg.src = avatar.src;
      modalImg.alt = avatar.alt;
    }

    if (title && modalTitle) {
      modalTitle.innerHTML = title.innerHTML;
    }

    if (text && modalText) {
      modalText.innerHTML = text.innerHTML;
    }

    if (modalDate) {
      modalDate.innerHTML = item.dataset.testimonialsDate || "";
    }

    testimonialsModalFunc();
  });
});

if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);

// Page navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    pages.forEach(page => {
      page.classList.toggle("active", link.innerHTML.toLowerCase() === page.dataset.page);
    });
    navigationLinks.forEach(nav => nav.classList.remove("active"));
    navigationLinks[index].classList.add("active");
    window.scrollTo(0, 0);
  });
});

const filterBtns = document.querySelectorAll("[data-filter-btn]");
const projectItems = document.querySelectorAll("[data-filter-item]");

const filterProjects = (category) => {

  projectItems.forEach(project => {

    const projectCategory = project.dataset.category;

    if (projectCategory === category) {
      project.classList.add("active");
    } else {
      project.classList.remove("active");
    }

  });

};

filterBtns.forEach(btn => {

  btn.addEventListener("click", function () {

    const selectedCategory = this.innerText.toLowerCase();

    filterBtns.forEach(button => button.classList.remove("active"));
    this.classList.add("active");

    filterProjects(selectedCategory);
  });

});

window.addEventListener("load", () => {
  filterProjects("web development");
});