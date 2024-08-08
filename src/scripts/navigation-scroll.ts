import throttle from "lodash/throttle";

const navUl = document.querySelector(".nav-ul") as HTMLElement | null;
const navHeight = navUl?.offsetHeight ?? 50;
const navPosY = navUl?.getBoundingClientRect().y ?? 0;
const navTotal = navHeight + navPosY;

function scrollHandler() {
  if (!navUl) return;

  const scrollPos = window.scrollY;

  if (scrollPos > navTotal) navUl.classList.add("border-gray-300", "shadow-sm");
  else navUl.classList.remove("border-gray-300", "shadow-sm");
}

document.addEventListener("scroll", throttle(scrollHandler, 200), {
  passive: true,
});
