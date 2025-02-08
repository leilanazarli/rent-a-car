// let cards = document.querySelector('.cards');

// Local Storage-dan favorit məlumatları oxuyuruq
function getFavorites() {
    return JSON.parse(localStorage.getItem("favdata")) || [];
}

// Local Storage-a favorit məlumatları yazırıq
function setFavorites(data) {
    localStorage.setItem("favdata", JSON.stringify(data));
}

document.addEventListener("DOMContentLoaded", function () {
    fetchCars(); // HTML tam yükləndikdən sonra çağırırıq
});

let Base_url = "http://localhost:8000";
let cars = [];
let filteredCars = []; // Filtrlənmiş maşınlar üçün
let currentPage = 1;
const carsPerPage = 4;

async function fetchCars() {
    try {
        let res = await axios(`${Base_url}/cars`);
        let data = res.data;
        cars = data; // Məlumat strukturundan asılı olaraq düzəliş et
        filteredCars = cars; // Başlanğıcda bütün maşınlar göstərilir
        await displayCars();
    console.log( data);
    console.log( cars);
        
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchCars()
let findbtn = document.querySelector(".findbtn");

// 🔍 **Axtarış Funksiyası**
findbtn.addEventListener("click", async function () {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();

    // Filter the cars based on the search input
    filteredCars = cars.filter(car =>
        car.marka.toLowerCase().includes(searchInput) ||
        car.ad.toLowerCase().includes(searchInput)
    );

    console.log(filteredCars); // Checking the filtered results
    currentPage = 1; // Reset to the first page after search
    displayCars(); // Show the filtered results
});

// 📌 **Filtrləmə Funksiyası**
function filterCars() {
    // let markaFilter = document.getElementById("markaFilter").value;
    let typeFilter = document.getElementById("typeFilter").value;
    
    // Apply both filters
    filteredCars = cars.filter(car => {
        // let markaMatch = markaFilter === "all" || car.marka === markaFilter;
        let typeMatch = typeFilter === "all" || car.sinif === typeFilter;
        return typeMatch;
    });
    console.log(filteredCars);

    currentPage = 1; // Reset to the first page after filter
    displayCars(); // Show the filtered results
}

// let sortAscBtn = document.getElementById("sortAsc");
// let sortDescBtn = document.getElementById("sortDesc");

// let isAscending = true; // Default to ascending order

// // Event listener for Ascending Sort button
// sortAscBtn.addEventListener("click", function () {
//     isAscending = true;
//     sortCars(); // Sort the cars in ascending order
//     displayCars(); // Display sorted cars
// });

// // Event listener for Descending Sort button
// sortDescBtn.addEventListener("click", function () {
//     isAscending = false;
//     sortCars(); // Sort the cars in descending order
//     displayCars(); // Display sorted cars
// });

// // Sorting cars based on price or other criteria
// function sortCars() {
//     filteredCars.sort((a, b) => {
//         let compareValue = 0;

//         // Example sorting by price (you can change this to any other field, like year, model, etc.)
//         compareValue = a.qiymet - b.qiymet;

//         // If descending, reverse the order
//         return isAscending ? compareValue : -compareValue;
//     });
// }


let sortSelect = document.getElementById("sortSelect");

// Event listener for sorting selection change
sortSelect.addEventListener("change", function () {
    const sortOrder = sortSelect.value;

    if (sortOrder === "asc") {
        isAscending = true;
    } else if (sortOrder === "desc") {
        isAscending = false;
    }

    sortCars(); // Sort the cars based on selected order
    displayCars(); // Display sorted cars
});

// Sorting cars based on price or other criteria
function sortCars() {
    filteredCars.sort((a, b) => {
        let compareValue = 0;

        // Example sorting by price (you can change this to any other field, like year, model, etc.)
        compareValue = a.qiymet - b.qiymet;

        // If descending, reverse the order
        return isAscending ? compareValue : -compareValue;
    });
}


// Display filtered or all cars
async function displayCars() {
    const carContainer = document.getElementById("carContainer");
    carContainer.innerHTML = ""; // Clear previous results

    const start = (currentPage - 1) * carsPerPage;
    const end = start + carsPerPage;
    const paginatedCars = filteredCars.slice(start, end);

    let favoriteData = getFavorites(); // Get the favorites

    paginatedCars.forEach((element) => {
        const card = document.createElement("div");
        card.classList.add("card");
        let isFavorite = favoriteData.some(fav => fav.id === element.id);
        card.innerHTML += `
            <div class="card col-3" data-id="${element.id}">
                <div class="card-img">
                    <a href="./car-about.html?id=${element.id}"><img src="${element.image}" class="car-img"></a>
                    <p class="cars-years">${element.il}</p>
                    <button id="heart" class="heart-button btn btn-dark" style="border-radius: 50%;">
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
        carContainer.appendChild(card);
    });

    document.getElementById("pageNumber").textContent = currentPage;
    document.getElementById("prevBtn").disabled = currentPage === 1;
    document.getElementById("nextBtn").disabled = end >= filteredCars.length;
}

function changePage(direction) {
    currentPage += direction;
    displayCars();
}

// Başlanğıc məlumatları gətiririk
// fetchCars();


// // searchCars()
// // 📌 **Filtrləmə Funksiyası**
// function filterCars() {
//     let markaFilter = document.getElementById("markaFilter").value;
//     let typeFilter = document.getElementById("typeFilter").value;
//     // console.log(cars());

//     filteredCars = cars.filter(car => {
//         let markaMatch = markaFilter === "all" || car.marka === markaFilter;
//         let typeMatch = typeFilter === "all" || car.sinif === typeFilter;
//         return markaMatch && typeMatch;
//     });

//     currentPage = 1; // Filtrləmədən sonra 1-ci səhifəyə qaytarırıq
//     displayCars();
    
// }


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



