'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}





/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});

  // Select all tab buttons and the content section
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

  // Add click event listeners
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
