const Animationbutton = document.querySelectorAll(".animationbutton");

const observerbutton = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInDown");
    }
  });
});

Animationbutton.forEach((item) => {
  observerbutton.observe(item);
});
