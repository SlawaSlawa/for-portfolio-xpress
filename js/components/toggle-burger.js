const burgerBtn = document.querySelector(".burger");
const headerNavEl = document.querySelector(".header__nav");

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("burger--active");
    headerNavEl.classList.toggle("header__nav--active");
});

document.body.addEventListener("click", (evt) => {
    const target = evt.target;

    if (!target.closest(".header__nav") && target.closest(".header__nav")) {
        burgerBtn.classList.remove("burger--active");
        headerNavEl.classList.remove("header__nav--active");
    }
});