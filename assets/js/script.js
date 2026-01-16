'use strict';

/* =========================
   SEARCH BOX TOGGLE
========================= */
const navbar = document.querySelector(".navbar");
const searchBox = document.querySelector(".search-box .bx-search");

if (navbar && searchBox) {
  searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");

    if (navbar.classList.contains("showInput")) {
      searchBox.classList.replace("bx-search", "bx-x");
    } else {
      searchBox.classList.replace("bx-x", "bx-search");
    }
  });
}

/* =========================
   SIDEBAR OPEN / CLOSE
========================= */
const navLinks = document.querySelector(".nav-links");
const menuOpenBtn = document.querySelector(".navbar .bx-menu");
const menuCloseBtn = document.querySelector(".nav-links .bx-x");

if (menuOpenBtn && navLinks) {
  menuOpenBtn.addEventListener("click", () => {
    navLinks.style.left = "0";
  });
}

if (menuCloseBtn && navLinks) {
  menuCloseBtn.addEventListener("click", () => {
    navLinks.style.left = "-100%";
  });
}

/* =========================
   SIDEBAR SUBMENUS
========================= */
const htmlcssArrow = document.querySelector(".htmlcss-arrow");
const moreArrow = document.querySelector(".more-arrow");
const jsArrow = document.querySelector(".js-arrow");

if (htmlcssArrow && navLinks) {
  htmlcssArrow.addEventListener("click", () => {
    navLinks.classList.toggle("show1");
  });
}

if (moreArrow && navLinks) {
  moreArrow.addEventListener("click", () => {
    navLinks.classList.toggle("show2");
  });
}

if (jsArrow && navLinks) {
  jsArrow.addEventListener("click", () => {
    navLinks.classList.toggle("show3");
  });
}

/* =========================
   TAB FUNCTIONALITY
========================= */
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContent = document.querySelector('.tab-content');

const tabData = {
  "Our Mission": `
    <p class="section-text">
      To unite South Africans through national consciousness — promoting unity, empowerment, and transformation
      through education, culture, and civic engagement.
    </p>
    <ul class="tab-list">
      <li class="tab-item"><div class="item-icon"><ion-icon name="people-circle-outline"></ion-icon></div><p class="tab-text">Community Upliftment</p></li>
      <li class="tab-item"><div class="item-icon"><ion-icon name="school-outline"></ion-icon></div><p class="tab-text">Youth Empowerment</p></li>
      <li class="tab-item"><div class="item-icon"><ion-icon name="female-outline"></ion-icon></div><p class="tab-text">Gender Equality</p></li>
      <li class="tab-item"><div class="item-icon"><ion-icon name="megaphone-outline"></ion-icon></div><p class="tab-text">Civic Action</p></li>
    </ul>
  `,
  "Our Vision": `
    <p class="section-text">
      To build a united and conscious South African nation where all people, regardless of race, gender, or background,
      contribute to positive transformation and sustainable growth.
    </p>
    <ul class="tab-list">
      <li class="tab-item"><div class="item-icon"><ion-icon name="earth-outline"></ion-icon></div><p class="tab-text">Unity Across Communities</p></li>
      <li class="tab-item"><div class="item-icon"><ion-icon name="sparkles-outline"></ion-icon></div><p class="tab-text">Cultural Awareness</p></li>
      <li class="tab-item"><div class="item-icon"><ion-icon name="leaf-outline"></ion-icon></div><p class="tab-text">Sustainable Development</p></li>
      <li class="tab-item"><div class="item-icon"><ion-icon name="ribbon-outline"></ion-icon></div><p class="tab-text">Integrity & Equality</p></li>
    </ul>
  `,
  "Our Values": `
    <p class="section-text">
      We are guided by the spirit of national consciousness — a deep awareness of our shared identity, responsibility, 
      and the power we hold when we act together. Through education, creativity, and solidarity, we aim to inspire 
      active citizenship and collective progress across our nation.
    </p>
    <ul class="tab-list">
      <li class="tab-item"><div class="item-icon"><ion-icon name="musical-notes-outline"></ion-icon></div><p class="tab-text">Cultural and Creative Expression</p></li>
      <li class="tab-item"><div class="item-icon"><ion-icon name="people-outline"></ion-icon></div><p class="tab-text">Unity and Social Solidarity</p></li>
      <li class="tab-item"><div class="item-icon"><ion-icon name="school-outline"></ion-icon></div><p class="tab-text">Education and Conscious Awareness</p></li>
      <li class="tab-item"><div class="item-icon"><ion-icon name="earth-outline"></ion-icon></div><p class="tab-text">Active Citizenship and Transformation</p></li>
    </ul>
  `
};

if (tabButtons.length && tabContent) {
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      tabContent.innerHTML = tabData[button.textContent.trim()];
    });
  });
}

/* =========================
   MOBILE DROPDOWNS
========================= */
document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const parent = toggle.closest(".has-dropdown");
    if (!parent) return;

    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    parent.classList.toggle("active");
  });
});

/* =========================
   MODAL FUNCTIONALITY
========================= */
const modalButtons = document.querySelectorAll("[data-modal]");
const modals = document.querySelectorAll(".modal");
const overlay = document.querySelector("[data-overlay]");
const closeButtons = document.querySelectorAll(".modal-close");

modalButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = document.getElementById(btn.dataset.modal);
    if (!modal || !overlay) return;

    modal.classList.add("active");
    overlay.classList.add("active");
  });
});

function closeModal() {
  modals.forEach(modal => modal.classList.remove("active"));
  if (overlay) overlay.classList.remove("active");
}

if (overlay) {
  overlay.addEventListener("click", closeModal);
}

closeButtons.forEach(btn => btn.addEventListener("click", closeModal));

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

/* =========================
   SMOOTH SCROLL (CONTACT)
========================= */
document.querySelectorAll('a[href="#contact-section"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.getElementById("contact-section");

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const check = document.getElementById("check");
    if (check) check.checked = false;
  });
});

/* =========================
   NAV DROPDOWN LINK TOGGLE
========================= */
document.querySelectorAll('.nav-link > a').forEach(link => {
  link.addEventListener('click', e => {
    const parent = link.parentElement;
    const dropdown = parent?.querySelector('.dropdown');

    if (dropdown) {
      e.preventDefault();
      parent.classList.toggle('active');
    }
  });
});
