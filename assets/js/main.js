// Grab elements
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(`Something went wrong, make sure that ${selector} exists
    or is typed correctly`);
};
///////THIS SECTION BELONGS TO MENU BUTTOM //////////////////
const menuToggleIcon = selectElement("#menu-toggle-icon");
const toggleMenu = () => {
  const mobileMenu = selectElement("#menu");
  mobileMenu.classList.toggle("activated");
  menuToggleIcon.classList.toggle("activated");
};
menuToggleIcon.addEventListener("click", toggleMenu);

/////////////////////////////////////////////////////////////

////////////////THIS SECTION BELONGS TO THEME BUTOM////////////////
const body = document.body;
const themeToggleBtn = selectElement("#theme-toggle-btn");
const currentTheme = localStorage.getItem("currentTheme");
// Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body
if (currentTheme) {
  body.classList.add("light-theme");
}
themeToggleBtn.addEventListener("click", function () {
  //Add light theme on click
  body.classList.toggle("light-theme");

  // If the body has the class of light theme then add it to local Storage, if not remove it
  if (body.classList.contains("light-theme")) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme");
  }
});
//////////////////////////////////////////////////////////////////

//Nav styles on scroll
const scrollHeader = () => {
  const headerElement = selectElement("#header"); /*#header means header id*/
  if (this.scrollY >= 15) {
    headerElement.classList.add("activated");
  } else {
    headerElement.classList.remove("activated");
  }
};

window.addEventListener("scroll", scrollHeader);
