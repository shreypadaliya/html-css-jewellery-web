const Sellitems = document.querySelectorAll(".sellitem");

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__zoomIn");
    }
  });
});

Sellitems.forEach((item) => {
  observer2.observe(item);
});
