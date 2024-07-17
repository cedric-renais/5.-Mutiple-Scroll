const mountainRange = document.querySelectorAll('.home-mountains img');
const title = document.querySelector('.home-mountains h1');

gsap.to(mountainRange, {
  y: -100,
  scrollTrigger: {
    trigger: '.home-mountains',
    scrub: true,
  },
});

gsap.to(title, {
  y: 700,
  scrollTrigger: {
    trigger: '.home-mountains',
    scrub: true,
  },
});
