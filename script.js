// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      // Fechar menu mobile se estiver aberto
      navList.classList.remove("active")
    }
  })
})

// Menu mobile toggle
const menuToggle = document.querySelector(".menu-toggle")
const navList = document.querySelector(".nav-list")

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active")
})

// Fechar menu ao clicar fora
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav") && navList.classList.contains("active")) {
    navList.classList.remove("active")
  }
})

// Modal de contato
const modal = document.getElementById("contact-modal")
const contactBtn = document.getElementById("contact-btn")
const contactModalBtn = document.getElementById("contact-modal-btn")
const modalClose = document.querySelector(".modal-close")

function openModal() {
  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeModal() {
  modal.classList.remove("active")
  document.body.style.overflow = "auto"
}

contactBtn.addEventListener("click", openModal)
contactModalBtn.addEventListener("click", openModal)
modalClose.addEventListener("click", closeModal)

// Fechar modal ao clicar fora do conteúdo
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal()
  }
})

// Fechar modal com tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal()
  }
})

// Animação de fade/slide nas seções ao rolar
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observar todas as seções
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section)
})

// Animação inicial da hero section
window.addEventListener("load", () => {
  const heroSection = document.querySelector(".hero")
  if (heroSection) {
    heroSection.style.opacity = "1"
    heroSection.style.transform = "translateY(0)"
  }
})

// Efeito parallax suave no scroll (opcional)
let lastScrollTop = 0
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  // Adicionar classe ao header quando rolar
  const header = document.querySelector(".header")
  if (scrollTop > 50) {
    header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.15)"
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
  }

  lastScrollTop = scrollTop
})

// Adicionar efeito de hover nos cards de projeto
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})

// Log de debug
console.log("[v0] Portfolio website loaded successfully")
console.log("[v0] All interactive features initialized")
