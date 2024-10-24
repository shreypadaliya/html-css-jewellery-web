const Homeimg = document.querySelectorAll(".homeimg");

const observerhome = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInRight");
    }
  });
});

Homeimg.forEach((item) => {
  observerhome.observe(item);
});
