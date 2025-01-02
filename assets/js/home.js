let header_top_right= document.querySelector(".header-top-right")
let header_top= document.querySelector(".header-top")
let header_bottom=document.querySelector(".header-bottom")
let header=document.querySelector("header")
let logo=document.querySelector(".logos")
function scrollFunction(){
    if(window.scrollY>150){
        console.log(window.scrollY);
        header_top_right.style.display="none"
        header.style.background="black"
        header_top.style.display="none"
         logo.style.display="block"
    }
    else{
        header_top_right.style.display="flex"
        header.style.background="transparent"
        header_top.style.display="block"
         logo.style.display="none"
    }
}
window.onscroll = function () { scrollFunction() };
