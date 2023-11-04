const openTrigger = document.querySelector(".js-open");
const hiddenTrigger = document.querySelector(".js-hidden");
const targetElem = document.querySelector(".js-target");
openTrigger.addEventListener("click", (e) => {
  targetElem.classList.add("is-open");
});
hiddenTrigger.addEventListener("click", (e) => {
  targetElem.classList.add("is-hidden");
  setTimeout(() => {
    targetElem.classList.remove("is-open");
    targetElem.classList.remove("is-hidden");
  }, 1000);
});
