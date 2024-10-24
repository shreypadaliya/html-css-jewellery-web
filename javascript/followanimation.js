const gridItems = document.querySelectorAll(".grid-item");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInUp");
    }
  });
});

gridItems.forEach((item) => {
  observer.observe(item);
});
