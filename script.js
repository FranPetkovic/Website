gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".container");

function getScrollAmount() {
  return container.scrollWidth - window.innerWidth;
}

gsap.to(container, {
  x: () => -getScrollAmount(),
  ease: "none",
  scrollTrigger: {
    trigger: ".scroll",
    start: "top top",
    end: () => "+=" + getScrollAmount(),
    scrub: true,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true 
  }
});
