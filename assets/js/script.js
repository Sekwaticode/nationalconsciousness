'use strict';

  // search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

/**
 * Tab functionality
 */
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContent = document.querySelector('.tab-content');

// Create content for each tab (you can customize this text)
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
      <li class="tab-item">
        <div class="item-icon"><ion-icon name="musical-notes-outline"></ion-icon></div>
        <p class="tab-text">Cultural and Creative Expression</p>
      </li>
      <li class="tab-item">
        <div class="item-icon"><ion-icon name="people-outline"></ion-icon></div>
        <p class="tab-text">Unity and Social Solidarity</p>
      </li>
      <li class="tab-item">
        <div class="item-icon"><ion-icon name="school-outline"></ion-icon></div>
        <p class="tab-text">Education and Conscious Awareness</p>
      </li>
      <li class="tab-item">
        <div class="item-icon"><ion-icon name="earth-outline"></ion-icon></div>
        <p class="tab-text">Active Citizenship and Transformation</p>
      </li>
    </ul>
  `
};

// Add click event listeners for tabs
if (tabButtons.length > 0 && tabContent) {
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      // Add 'active' class to the clicked button
      button.classList.add('active');
      // Update tab content
      tabContent.innerHTML = tabData[button.textContent.trim()];
    });
  });
}

/**
 * Dropdown toggle for mobile
 */
document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const parent = toggle.closest(".has-dropdown");
    if (parent) {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", !expanded);
      parent.classList.toggle("active");
    }
  });
});

/**
 * Modal functionality
 */
const modalButtons = document.querySelectorAll("[data-modal]");
const modals = document.querySelectorAll(".modal");
const overlay = document.querySelector("[data-overlay]");
const closeButtons = document.querySelectorAll(".modal-close");

modalButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = document.getElementById(btn.dataset.modal);
    if (modal && overlay) {
      modal.classList.add("active");
      overlay.classList.add("active");
    }
  });
});

function closeModal() {
  modals.forEach(modal => modal.classList.remove("active"));
  if (overlay) {
    overlay.classList.remove("active");
  }
}

if (overlay) {
  overlay.addEventListener("click", closeModal);
}

closeButtons.forEach(btn => btn.addEventListener("click", closeModal));

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

/**
 * Smooth scroll to contact section when clicking nav links
 */
document.querySelectorAll('a[href="#contact-section"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.getElementById('contact-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu if open
      const check = document.getElementById('check');
      if (check) {
        check.checked = false;
      }
    }
  });
});

document.querySelectorAll('.nav-link > a').forEach(link => {
  link.addEventListener('click', e => {
    const parent = link.parentElement;
    const dropdown = parent.querySelector('.dropdown');

    if (dropdown) {
      e.preventDefault();
      parent.classList.toggle('active');
    }
  });
});
