//turns the navbar position to fixed on scroll
window.addEventListener("scroll",function(){
    let nav = this.document.querySelector("nav");
    nav.classList.toggle("sticky",window.scrollY > 0)
});

window.onscroll = function () {
    scrollRotate();
};
function scrollRotate() {
    let image = document.getElementsByTagName("img")
    image[1].style.transform = "rotate(" + window.pageYOffset/3 + "deg)";
}
