ScrollReveal({ reset: true });

ScrollReveal().reveal(".hero-title", {
  distance: "100%",
  origin: "left",
  opacity: 0.5,
  delay: 300,
  duration: 1200,
});

ScrollReveal().reveal(".hero-text p", {
  distance: "500%",
  origin: "bottom",
  duration: 1000,
  opacity: 0,
});

ScrollReveal().reveal(".hero-picture", {
  distance: "100%",
  origin: "right",
  duration: 2500,
  opacity: 0.5,
});

ScrollReveal().reveal(".skill h2", {
  delay: 400,
  distance: "80%",
  origin: "bottom",
  duration: 600,
  opacity: 0.05,
});

ScrollReveal().reveal(".skill p", {
  distance: "10%",
  delay: 200,
  duration: 800,
  origin: "left",
  opacity: 0.9,
});

ScrollReveal().reveal(".skill-link", {
  distance: "100%",
  duration: 800,
  origin: "bottom",
  opacity: 0.9,
});
