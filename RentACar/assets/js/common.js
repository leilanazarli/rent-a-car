let header_top_right= document.querySelector(".header-top-right")
let header_top= document.querySelector(".header-top")
let header_bottom=document.querySelector(".header-bottom")
let header=document.querySelector("header")
let logo=document.querySelector(".logos")
function scrollFunction(){
    if(window.scrollY>100){
        console.log(window.scrollY);
        header_top_right.style.display="none"
        header.style.background="rgb(11, 19, 21)"
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
// window.onscroll = function () { scrollFunction() };
//     if (window.location.pathname === "/adminpanel.html" ) {
//         window.location.href = "/404pagefound.html"; // 404 səhifəsinə yönləndir
//     }
// document.addEventListener('keydown', function(event) {
//     // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
//     if (
//       event.key === 'F12' || 
//       (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J')) ||
//       (event.ctrlKey && event.key === 'U')
//     ) {
//       event.preventDefault(); // Bu əməliyyatları bloklayır
//     }
//   });
//   document.addEventListener('contextmenu', function(event) {
//     event.preventDefault();  // Sağ kliklə menyu açılmasını bloklayır
//   });
// // Sağ klik bloklanır
// document.addEventListener('contextmenu', function(event) {
//     event.preventDefault();
//   });
  
//   // Keydown hadisəsi ilə qısa yolları bloklayırıq
//   document.addEventListener('keydown', function(event) {
//     // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
//     if (
//       event.key === 'F12' || 
//       (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J')) ||
//       (event.ctrlKey && event.key === 'U')
//     ) {
//       event.preventDefault();  // Brauzerin inkişaf alətlərini açmaq bloklanır
//     }
//   });
// // Sağ klikləməni tam bloklayır
// document.addEventListener('contextmenu', function(event) {
//     event.preventDefault();
//   });
  
//   // Mouse üzərindəki kodları incələməyi (inspect) bloklayır
//   document.addEventListener('mousedown', function(event) {
//     if (event.button === 2) {
//       event.preventDefault(); // Sağ kliklə məzmunu göstərməyi bloklayır
//     }
//   });
      
 