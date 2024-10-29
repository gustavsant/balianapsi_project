
window.addEventListener("DOMContentLoaded", () => {
    const navBar = document.getElementById("nav");
    const button = document.getElementById("menu-button");
    const navItems = document.getElementById("nav-items");
    button.addEventListener("click", menuToggle);
    
    function menuToggle() {
      const menuIcon = document.getElementById("menu-icon");
      const closeIcon = document.getElementById("close-icon");
    
      menuIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
      navBar.classList.toggle("h-20");
      navBar.classList.toggle("pt-20");
      navItems.classList.toggle("opacity-0");
    }
})