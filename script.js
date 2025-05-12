"use client"

document.addEventListener("DOMContentLoaded", () => {
  const bar = document.getElementById("bar")
  const closeBtn = document.getElementById("close")
  const nav = document.getElementById("MenuBar")

  if (bar) {
    bar.addEventListener("click", () => {
      nav.classList.add("active")
    })
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      nav.classList.remove("active")
    })
  }

  const navLinks = document.querySelectorAll(".navbar a")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href")
      
      if (targetId.startsWith("#") || document.getElementById(targetId.replace(".html", ""))) {
        e.preventDefault()
        
        let targetElement
        
        if (targetId.startsWith("#")) {
          targetElement = document.getElementById(targetId.substring(1))
        } 
        else {
          const sectionId = targetId.replace(".html", "")
          targetElement = document.getElementById(sectionId)
        }
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
          
          if (window.innerWidth < 799) {
            nav.classList.remove("active")
          }
        }
      }
    })
  })

  const cartButtons = document.querySelectorAll(".cart-btn")
  cartButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()

      this.classList.add("added")

      setTimeout(() => {
        this.classList.remove("added")
      }, 1500)
    })
  })

  const productImages = document.querySelectorAll(".pro img")
  productImages.forEach((img) => {
    img.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)"
    })

    img.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
    })
  })
})
