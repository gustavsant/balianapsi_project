
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

    const slideLeft = {
      origin: 'left',
      distance: '50px'
    }

    const slideRight = {
      origin: 'right',
      distance: '50px'
    }
    
    const slideDown = {
      origin: 'top',
      distance: '50px'
    }

    const slideUp = {
      origin: 'bottom',
      distance: '50px'
    }

    const zoomDelayOne = {
      delay: 100,
      scale: .85
    }

    const zoomDelayTwo = {
      delay: 200,
      scale: .85
    }

    const zoomDelayThree = {
      delay: 300,
      scale: .85
    }

    const zoomDelayFour = {
      delay: 400,
      scale: .85
    }

    
    
    ScrollReveal().reveal('.hero', {distance: '85px'})
    ScrollReveal().reveal('#about', {scale: 1.15})
    ScrollReveal().reveal('.fade-left', slideLeft)
    ScrollReveal().reveal('.fade-right', slideRight)
    ScrollReveal().reveal('.slide-up', slideUp)
    ScrollReveal().reveal('.slide-down', slideDown)
    ScrollReveal().reveal('.zoom-in')

    ScrollReveal().reveal('.delay-One', zoomDelayOne)
    ScrollReveal().reveal('.delay-Two', zoomDelayTwo)
    ScrollReveal().reveal('.delay-Three', zoomDelayThree)
    ScrollReveal().reveal('.delay-Four', zoomDelayFour)
})