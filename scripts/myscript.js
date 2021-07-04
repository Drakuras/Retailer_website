//turns the navbar position to fixed on scroll
window.addEventListener("scroll",function(){
    let nav = this.document.querySelector("nav");
    nav.classList.toggle("sticky",window.scrollY > 0)
});
window.addEventListener("scroll",function(){
    let sboard = this.document.querySelector(".snowboard");
    sboard.classList.toggle("translate",window.scrollY > 700)
    console.log('its on')
});

console.log(this.document.querySelector(".snowboard"))

window.onscroll = function () {
    scrollRotate();
};
function scrollRotate() {
    let image = document.getElementsByTagName("img")
    image[1].style.transform = "rotate(" + window.pageYOffset + "deg)";
}


// let snowb_img = document.getElementsByTagName("img")
// snowb_img[2].style.transform = "translateX(-" + window.scrollY + "px)";
// console.log(window.scrollY)
