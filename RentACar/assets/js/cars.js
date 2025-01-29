// let heartButton = document.querySelector("#heart");
// let heart = document.querySelector(".fa-regular"); // Bu dəyişəni artıq istifadə etmirik
// let card = document.querySelector(".card");
// let car_name = document.querySelector(".car-title-name");
// let passenger = document.querySelector(".passenger");
// let carDoor = document.querySelector(".car-door");
// let gear_stick = document.querySelector(".gear-stick");
// let car_type = document.querySelector(".car-type");
// let car_price = document.querySelector(".car-price");
// let car_img = document.querySelector(".car-img");

// let favoriteData = JSON.parse(localStorage.getItem("favdata")) || [];
// // Bütün ürək ikonalarını tapırıq
let heartButtons = document.querySelectorAll(".fa-heart"); // Bütün ürək ikonalarını seçirik
let favoriteData = JSON.parse(localStorage.getItem("favdata")) || [];

// Səhifə yükləndikdə, bütün kartları yoxlayaq
window.onload = function() {
    heartButtons.forEach(heartButton => {
        const card = heartButton.closest(".card"); // Hər bir card-ı tapırıq
        const carName = card.querySelector(".car-title-name").textContent; // Hər card-dan carName məlumatını alırıq
        const dataIndex = favoriteData.findIndex(element => element.carName === carName);

        // Favorilərdə varsa, ürəyi dolu göstəririk
        if (dataIndex !== -1) {
            heartButton.classList.remove("fa-regular");
            heartButton.classList.add("fa-solid");
            heartButton.style.color = "red";
        }
    });
};
// Hər ürək ikonu üçün klik hadisəsini idarə edirik
heartButtons.forEach(heartButton => {
    heartButton.addEventListener("click", (e) => {
        e.preventDefault();

        const card = heartButton.closest(".card"); // Kliklənən card-ı tapırıq
        const carName = card.querySelector(".car-title-name").textContent;
        const passengertext = card.querySelector(".passenger").textContent;
        const carDoortext = card.querySelector(".car-door").textContent;
        const gear_sticktext = card.querySelector(".gear-stick").textContent;
        const car_typetext = card.querySelector(".car-type").textContent;
        const car_pricetext = card.querySelector(".car-price").textContent;
        const car_imgvalue = card.querySelector(".car-img").src;

        // Favorilərdə avtomobilin olub-olmamasını yoxlayırıq
        const dataIndex = favoriteData.findIndex((element) => element.carName === carName);
        if (dataIndex === -1) {
            // Favorilere ekle
             favData = {
                carName: carName,
                passenger: passengertext,
                carDoor: carDoortext,
                gear_stick: gear_sticktext,
                car_type: car_typetext,
                car_price: car_pricetext,
                car_imgvalue: car_imgvalue,
            };
            favoriteData.push(favData); // Favorilere ekle
            localStorage.setItem("favdata", JSON.stringify(favoriteData)); // Güncelle
            heartButton.classList.remove("fa-regular");
            heartButton.classList.add("fa-solid");
            heartButton.style.color = "red";
        } else {
            // Favorilerden çıkar
            favoriteData.splice(dataIndex, 1);
            localStorage.setItem("favdata", JSON.stringify(favoriteData));
            heartButton.classList.remove("fa-solid");
            heartButton.classList.add("fa-regular");
            heartButton.style.color = "black";
        }
    });
});

let searchInput=document.querySelector("#searchInput")
// let searchButton=document.querySelector("#searchButton")
// let allData=[]
// let storedProducts = JSON.parse(localStorage.getItem("favdata")) || [];
// let debounceTimer;
axios({
    method:'post',
    url: requestUrl,
    data: {
        id:requestUrl
    }
})
searchInput.addEventListener("input", function (e) {
    clearTimeout(debounceTimer); // Əvvəlki zamanlayıcıyı silirik
    debounceTimer = setTimeout(() => {
        let filteredData = allData.filter(element => 
            element.carName.toLowerCase().includes(e.target.value.toLowerCase())
        );
        console.log(filteredData, "filteredData");
    }, 300); // İstifadəçi yazmağı dayandırdıqdan sonra 300ms gözləyirik
});
updateUI(filteredData)
// Axtarış düyməsinə kliklədikdə baş verən hadisə
//     searchButton.addEventListener('click', function() {
//   // Axtarış mətnini əldə edirik
//   const searchTerm = searchInput.value.toLowerCase();

//   // localStorage-dan məhsul məlumatlarını əldə edirik
//   // const storedProducts = JSON.parse(localStorage.getItem("products"));

//   // Məhsulları axtarış mətninə uyğun şəkildə filter edirik
//   const filteredProducts = storedProducts.filter(product => 
//     product.carName.toLowerCase().includes(searchTerm) 
//   );

//   // Nəticələri göstəririk
//   const resultContainer = document.getElementById('productResults');
//   resultContainer.innerHTML = '';  // Əvvəlki nəticələri təmizləyirik

//   if (filteredProducts.length > 0) {
//     filteredProducts.forEach(product => {
//       resultContainer.innerHTML += `
//         <div class="product-card">
//           <h4>${product.carName}</h4>
//         </div>
//       `;
//     });
//   } else {
//     resultContainer.innerHTML = '<p>No products found</p>';
//   }
// });
