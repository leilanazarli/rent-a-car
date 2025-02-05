let cards = document.querySelector('.cards');
let Base_url = "http://localhost:8000";

// Local Storage-dan favorit məlumatları oxuyuruq
function getFavorites() {
    return JSON.parse(localStorage.getItem("favdata")) || [];
}

// Local Storage-a favorit məlumatları yazırıq
function setFavorites(data) {
    localStorage.setItem("favdata", JSON.stringify(data));
}

// JSON-dan məlumatları götürüb HTML-ə əlavə edirik
async function getData() {
    cards.innerHTML = '';
    let res = await axios(`${Base_url}/cars`);
    let data = res.data;
    let favoriteData = getFavorites(); // Favoritləri oxuyuruq

    data.forEach((element) => {
        let isFavorite = favoriteData.some(fav => fav.id === element.id);
        cards.innerHTML += `
            <div class="card col-3" data-id="${element.id}">
                <div class="card-img">
                    <a href="./car-about.html?id=${element.id}"><img src="${element.image}" class="car-img"></a>
                    <p class="cars-years">${element.il}</p>
                    <button  id="heart" class="heart-button btn btn-dark" style="border-radius: 50%;">
                        <i class="fa-${isFavorite ? 'solid' : 'regular'} fa-heart" style="color: ${isFavorite ? 'red' : 'black'};"></i>
                    </button>
                </div> 
                <div class="card-body">
                    <div class="card-title">
                        <a href="./car-about.html?id=${element.id}" class="car-title-name">${element.marka} ${element.ad}</a>
                    </div>
                    <div class="card-cars-about row">
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
            </div>
        `;
    });
}

// Ürək düymələri üçün dinamik event əlavə edirik (Event Delegation)
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-heart")) {
        e.preventDefault();
        
        let heartButton = e.target;
        let card = heartButton.closest(".card"); // Klik olunan card-ı tapırıq
        let carId = parseInt(card.getAttribute("data-id")); // JSON-dan gələn id-ni alırıq
        let carName = card.querySelector(".car-title-name").textContent;
        let passengertext = card.querySelector(".passenger").textContent;
        let carDoortext = card.querySelector(".car-door").textContent;
        let gear_sticktext = card.querySelector(".gear-stick").textContent;
        let car_typetext = card.querySelector(".car-type").textContent;
        let car_pricetext = card.querySelector(".car-price").textContent;
        let car_yearstext = card.querySelector(".cars-years").textContent;
        let car_imgvalue = card.querySelector(".car-img").src;

        let favoriteData = getFavorites(); // Favoritləri yenidən oxuyuruq
        let dataIndex = favoriteData.findIndex((element) => element.id === carId);

        if (dataIndex === -1) {
            // Favoritlərə əlavə edirik
            let favData = {
                id: carId, // Artıq id əsaslı saxlayırıq
                carName: carName,
                passenger: passengertext,
                carDoor: carDoortext,
                gear_stick: gear_sticktext,
                car_type: car_typetext,
                car_price: car_pricetext,
                car_imgvalue: car_imgvalue,
                car_years: car_yearstext,
            };
            favoriteData.push(favData);
            setFavorites(favoriteData); // Local Storage-a yazırıq
            heartButton.classList.remove("fa-regular");
            heartButton.classList.add("fa-solid");
            heartButton.style.color = "red";
        } else {
            // Favoritlərdən çıxarırıq
            favoriteData.splice(dataIndex, 1);
            setFavorites(favoriteData);
            heartButton.classList.remove("fa-solid");
            heartButton.classList.add("fa-regular");
            heartButton.style.color = "black";
        }
    }
});

// Məlumatları yükləyirik
getData();

