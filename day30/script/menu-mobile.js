// B1: Truy cập phần tử
const icMenu = document.querySelector(".menu-mobile");
console.log(icMenu);

icMenu.addEventListener("click", function() {
    //b2.1: truy cập menu mobile
    const body = document.querySelector("body");
    body.classList.toggle("change");
});

const contentMobile = document.querySelector(".content-mobile");
