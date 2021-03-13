function switchTab(tab, form) {
  const requestedForm = document.getElementById(form);
  const clickedTab = tab;
  const tabContent = document.querySelectorAll(".tabContent");
  const navItems = document.querySelectorAll(".nav-item");

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.remove("activeTab");
  }
  document.getElementById(form).style.display = "block";
  clickedTab.className += " activeTab";
}

function validateRegistration() {}

switchTab(document.querySelector(".activeTab"), "loginForm");
