//turns the navbar position to fixed on scroll
window.addEventListener("scroll",function(){
    let nav = this.document.querySelector("nav");
    nav.classList.toggle("sticky",window.scrollY > 0)
})