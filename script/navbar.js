const menuBtn = document.getElementById("menu-btn");
const navList = document.getElementById("nav-list");
const navBottom = document.getElementById("nav-bottom");
menuBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
    navBottom.classList.toggle("bottomActive");
});
navList.addEventListener("click", () => {
    navList.classList.toggle("active");
    navBottom.classList.toggle("bottomActive");
});
navBottom.addEventListener("click", () => {
    navList.classList.toggle("active");
    navBottom.classList.toggle("bottomActive");
});