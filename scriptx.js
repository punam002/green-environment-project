// Smooth Scroll Effect for "Learn More" Button
document.addEventListener("DOMContentLoaded", function () {
  const learnMoreBtn = document.querySelector(".btn-primary");
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector("#solution").scrollIntoView({ behavior: "smooth" });
    });
  }
});

// Toggle Show More / Show Less in Solution Page
const solutionSections = document.querySelectorAll(".solution-section");
solutionSections.forEach((section) => {
  const pTag = section.querySelector("p");
  const originalText = pTag.innerText;
  if (originalText.length > 100) {
    const shortText = originalText.substring(0, 100) + "...";
    pTag.innerText = shortText;

    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "Show More";
    toggleBtn.classList.add("toggle-btn");
    section.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", function () {
      if (toggleBtn.innerText === "Show More") {
        pTag.innerText = originalText;
        toggleBtn.innerText = "Show Less";
      } else {
        pTag.innerText = shortText;
        toggleBtn.innerText = "Show More";
      }
    });
  }
});

// Image Slideshow in Conclusion Page
const images = document.querySelectorAll(".images img");
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
}

function startSlideshow() {
  showImage(currentIndex);
  currentIndex = (currentIndex + 1) % images.length;
}

if (images.length > 0) {
  setInterval(startSlideshow, 3000);
}

// Scroll-to-Top Button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerText = "⬆️";
scrollTopBtn.classList.add("scroll-top-btn");
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Active Link Highlight in Navbar
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
  let current = "";
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.href.includes(current)) {
      link.classList.add("active");
    }
  });
});
