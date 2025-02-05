

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const thumbnails = document.querySelectorAll('.carousel-thumbnails img');

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    thumbnails[currentSlide].classList.remove('active-thumbnail');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    thumbnails[currentSlide].classList.add('active-thumbnail');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}


// İlk şəkli göstər
showSlide(0);
// Linki kopyalamaq funksiyası
function copyLink(link) {
    navigator.clipboard.writeText(link)
        .then(() => {
            alert("Link kopyalandı: " + link);
        })
        .catch((error) => {
            alert("Link kopyalanmadı: " + error);
        });
}

// Heart işarəsini dəyişdirmək funksiyası
function toggleHeart(element) {
    if (element.textContent === "❤️") {
        element.textContent = "♡"; // Ürəyi boşalt
    } else {
        element.textContent = "❤️"; // Ürəyi doldur
    }
}

// Fullscreen funksiyası (mövcud olanı saxlamaq üçün)
// function openFullscreen(element) {
//     const img = element.parentElement.parentElement.querySelector('img');
//     if (img.requestFullscreen) {
//         img.requestFullscreen();
//     } else if (img.webkitRequestFullscreen) {
//         img.webkitRequestFullscreen();
//     } else if (img.msRequestFullscreen) {
//         img.msRequestFullscreen();
//     }
// }

function openFullscreen(element) {
    const img = element.parentElement.parentElement.querySelector('img');
    const fullscreenClose = document.querySelector('.fullscreen-close');

    img.classList.add('fullscreen-active');
    document.body.classList.add('fullscreen-blur');
    
    fullscreenClose.style.display = 'block';

    fullscreenClose.addEventListener('click', () => {
        closeFullscreen();
    });
}

function closeFullscreen() {
    const fullscreenImg = document.querySelector('.fullscreen-active');
    fullscreenImg.classList.remove('fullscreen-active');
    document.body.classList.remove('fullscreen-blur');
    document.querySelector('.fullscreen-close').style.display = 'none';
}


// function closeFullscreen() {
//     if (document.exitFullscreen) {
//         document.exitFullscreen();
//     } else if (document.webkitExitFullscreen) {
//         document.webkitExitFullscreen();
//     } else if (document.msExitFullscreen) {
//         document.msExitFullscreen();
//     }
// }

function openBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Səhifənin sürüşməsini dayandırır
}

function closeBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.style.display = 'none';
    document.body.style.overflow = 'auto'; // Səhifənin sürüşməsini bərpa edir
}

let carAboutpicture=document.querySelector(".carousel-container")
let carVideo=document.querySelector(".car-about-video")
let carousel_slides=document.querySelector(".carousel-slides")

let id = new URLSearchParams(window.location.search).get("id")

let Base_url="http://localhost:8000/cars"

async function getvideo() {
    let res=await axios(`${Base_url}/${id}`)
    let data=res.data
    carVideo.innerHTML=`
     <iframe width="560" height="315" class="car-video" src="https://www.youtube.com/embed/${data.video}" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
    `
    console.log(data.video);
    
}
getvideo()

// async function getpicture() {
//     let res=await axios(`${Base_url}/${id}`)
//     let data=res.data
    
// }
// getpicture()


// async function commonCardsget() {
    //     let res=await axios(`${Base_url}`)
    //     // let data=res.data
    //     let datalar=res.sort(() => 0.5 - Math.random()).slice(0, count)
    //     console.log(datalar);
    
    //     // if(data.sort(() => 0.5 - Math.random()).slice(0, count))
    // }
    // commonCardsget()
    function getRandomCards(cards, count) {
        if (!Array.isArray(cards) || cards.length === 0) {
            console.error("Kart siyahısı boşdur və ya səhv formatdadır!");
            return [];
        }
        return cards.sort(() => 0.5 - Math.random()).slice(0, count);
    }
    async function fetchCards() {
        try {
            let Base_url = "http://localhost:8000/cars";
            let response = await axios.get(Base_url); // JSON API-dən məlumat götür
            let cards = response.data; // `response.data.cards` yox, `response.data` olmalıdır!
    
            if (!Array.isArray(cards) || cards.length === 0) {
                throw new Error("Məlumat tapılmadı və ya səhv formatda!");
            }
    
            let randomCards = getRandomCards(cards, 4); // 4 təsadüfi kart seç
    
            let common_cards = document.querySelector(".common-cards");
            common_cards.innerHTML = ''; // Əvvəlki kartları təmizlə
    
            randomCards.forEach(element => {
                common_cards.innerHTML += `
                    <div class="card col-3" style="width: 305px;margin-right: 20px;">
                        <div class="card-img">
                            <a href=""><img src="${element.image}" class="car-img"></a>
                            <p class="cars-years">${element.il}</p>
                           
                        </div> 
                        <div class="card-body">
                            <div class="card-title">
                                <a href="" class="car-title-name">${element.marka} ${element.ad}</a>
                            </div>
                            <div class="card-cars-about row " style="flex-wrap: nowrap;">
                                <div class="col-3">
                                    <img src="./assets/img/seat.png" alt="" style="filter: grayscale(100%);"> 
                                    <span class="passenger">${element.oturacaq}</span>
                                </div>
                                <div class="col-3">
                                    <img src="./assets/img/car-door (1).png" alt="">
                                    <span class="car-door">${element.qabisayi}</span>
                                </div>
                                <div class="col-3">
                                    <img src="./assets/img/motor.png" alt="">
                                    <span class="gear-stick">${element.motor}</span>
                                </div>
                                <div class="col-3">
                                    <img src="./assets/img/transport.png" alt="">
                                    <span class="car-type">${element.sinif}</span>
                                </div>
                            </div>
                            <div class="card-cars-price">
                                <a class="btn btn-danger" href="./car-about.html?id=${element.id}" style="border-radius: 55px;">Rent Now</a>
                                <p><span class="car-price">${element.qiymet}</span> ₼ /günü</p>
                            </div>
                        </div>
                    </div>`;
            });
    
        } catch (error) {
            console.error("Kartları götürmək mümkün olmadı:", error);
        }
    }
    
    fetchCards();
    