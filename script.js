gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".scroll .panel");
let container = document.querySelector('.container')

let scrollTween = gsap.to(sections, {
  xPercent: -95 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
    trigger: ".scroll",
    pin: true,
    scrub: true,
    end: `+=${container.offsetWidth}`
}
});
