AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  
  //
  //
  //
  
      
let econom_btn=document.querySelector("#econom-btn")
let Base_url="http://localhost:8000/cars"
econom_btn.addEventListener("click" ,async function (event) {
  event.preventDefault()
  try {
    let res= await axios.get(Base_url)
    let cars=res.data
    let economCars=cars.filter(element=>element.sinif==="Econom")
    //LOcalstorage
    localStorage.setItem("economCars" , JSON.stringify(economCars))
    window.location.href="./car-class.html"
  } catch (error) {
    console.error("Məlumat götürmək mümkün olmadı:", error);
  }
})
let comfort=document.querySelector("#comfort-btn")
comfort.addEventListener("click" ,async function (event) {
  event.preventDefault()
  try {
    let res= await axios.get(Base_url)
    let cars=res.data
    let economCars=cars.filter(element=>element.sinif==="Comfort")
    //LOcalstorage
    localStorage.setItem("economCars" , JSON.stringify(economCars))
    window.location.href="./car-class.html"
  } catch (error) {
    console.error("Məlumat götürmək mümkün olmadı:", error);
  }
})
let suv=document.querySelector("#suv-btn")
suv.addEventListener("click" ,async function (event) {
  event.preventDefault()
  try {
    let res= await axios.get(Base_url)
    let cars=res.data
    let economCars=cars.filter(element=>element.sinif==="SUV")
    //LOcalstorage
    localStorage.setItem("economCars" , JSON.stringify(economCars))
    window.location.href="./car-class.html"
  } catch (error) {
    console.error("Məlumat götürmək mümkün olmadı:", error);
  }
})
let BusinessBtn=document.querySelector("#Business-btn")
BusinessBtn.addEventListener("click" ,async function (event) {
  event.preventDefault()
  try {
    let res= await axios.get(Base_url)
    let cars=res.data
    let economCars=cars.filter(element=>element.sinif==="Business")
    //LOcalstorage
    localStorage.setItem("economCars" , JSON.stringify(economCars))
    window.location.href="./car-class.html"
  } catch (error) {
    console.error("Məlumat götürmək mümkün olmadı:", error);
  }
})
let carousel = document.querySelector("#carousel"); // `.owl-stage` deyil, `.owl-carousel`

async function getData() {
  let res = await axios.get(Base_url);
  let data = res.data;
  
  data.forEach(element => {
    carousel.innerHTML += `
      <div class="item">
        <article class="card">
          <img class="card__background" src="${element.image}" alt="car" />
          <div class="card__content | flow">
            <div class="card__content--container | flow">
              <h2 class="card__title">${element.marka} ${element.ad}</h2>
              <p class="card__description">${element.haqqinda}</p>
            </div>
            <a href="./car-about.html?id=${element.id}" class="card__button btn btn-danger" style="padding: 3px 5px ;">Daha çox</a>
          </div>
        </article>
      </div>
    `;
  });



  // **Owl Carousel-i burda işə salırıq, çünki məlumat artıq yüklənib**
  $("#carousel").owlCarousel({
    autoplay: true,
    rewind: true, 
    margin: 10,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    dots: true,
    responsive: {
      300: { items: 1 },
      600: { items: 2 },
      1024: { items: 3 },
      1366: { items: 4 }
    }
  });
}
getData();


// let currentSlide = 0;
// const slides = document.querySelectorAll(".carousel-item");
// const indicators = document.querySelectorAll(".indicator");

// function changeSlide(index) {
//     slides[currentSlide].classList.remove("active");
//     indicators[currentSlide].classList.remove("active");

//     currentSlide = index;

//     slides[currentSlide].classList.add("active");
//     indicators[currentSlide].classList.add("active");
// }

// // İlk slaydın aktiv olması üçün
// changeSlide(0);
