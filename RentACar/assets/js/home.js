
      
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
      0: { items: 1 },
      600: { items: 3 },
      1024: { items: 4 },
      1366: { items: 4 }
    }
  });
}

// Funksiyanı çağırırıq
getData();
