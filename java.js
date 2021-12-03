const navToggler =document.querySelector(".nav-toggler");

navToggler.addEventListener("click", function(){
    navToggler.classList.toggler("active");
    const nav =document.querySelector(".nav");
    nav.classList.navToggler("open");
    if(nav.classList.contains("open")){
        nav.style.maxHeight = nav.scrollHeight + "px";

    } else{
        nav.removeAttribute("style");
    }
});
