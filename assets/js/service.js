    document.addEventListener("DOMContentLoaded", function () {
        const bars = document.querySelectorAll(".fill");
        
        bars.forEach(bar => {
            let width = bar.style.width;
            bar.style.width = "0";
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        });
    });


        $(document).ready(function(){
            $(".owl-carousel").owlCarousel({
                loop:true,
                margin:30,
                nav:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            });
        });