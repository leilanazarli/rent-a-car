let row = document.querySelector(".row");
let text = document.querySelector(".favorites-text");
let favoriteData = JSON.parse(localStorage.getItem("favdata")) || []; // Eğer veriler yoksa boş dizi oluştur

console.log(favoriteData);

// Funksiya favori kartlarını yaratmaq üçün
function createfav() {
    row.innerHTML = ""; // Bütün əvvəlki kartları silirik
    if (favoriteData.length === 0) {
        text.style.display = "block"; // Favorilər boşdursa, məlumat göstəririk
    } else {
        text.style.display = "none"; // Favorilər varsa, məlumatı gizləyirik
    }

    favoriteData.forEach(element => {
        row.innerHTML += `
             <div class="card col-4">
                    <div class="card-img">
                      <a href=""><img src="${element.car_imgvalue}" class="car-img" ></a>
                      <p class="cars-years">${element.car_years}</p>
                    </div> 
                    <div class="card-body">
                      <div class="card-title">
                        <a href="" class="car-title-name">${element.carName}</a>
                      </div>
                      <div class="card-cars-about row">
                        <div class="col-3">
                          <img src="./assets/img/seat.png" alt="" style="filter: grayscale(100%);"> 
                          <span class="passenger">${element.passenger}</span>
                        </div>
                        <div class="col-3">
                          <img src="./assets/img/car-door (1).png" alt="">
                          <span class="car-door">${element.carDoor}</span>
                        </div>
                        <div class="col-3">
                          <img src="./assets/img/motor.png" alt="">
                          <span class="gear-stick">${element.gear_stick}</span>
                        </div>
                        <div class="col-3">
                          <img src="./assets/img/transport.png" alt="">
                          <span class="car-type">${element.car_type}</span>
                        </div>
                      </div>
                      <div class="card-cars-price">
                        <button class="btn btn-danger" style="border-radius: 55px;" >Rent Now</button>
                        <p><span class="car-price">${element.car_price}</span> ₼ /günü</p>
                      </div>
                    </div>
                  </div>
            
            `;
    });
}

// Favori kartlarını yaratmaq
createfav();

// // Favori düymələrini tapırıq
// let heartButtons = document.querySelectorAll(".heart-button");

// // Hər bir ürək düyməsinə klik hadisəsini əlavə edirik
// heartButtons.forEach(heartButton => {
//     const heart = heartButton.querySelector(".fa-regular");
//     const carName = heartButton.closest(".card").querySelector(".car-title-name").textContent; // Hər kartın adını tapırıq

//     // Əgər kart artıq favorilərdədirsə, ürəyi dolu göstəririk
//     const dataIndex = favoriteData.findIndex(element => element.carName === carName);
//     if (dataIndex !== -1) {
//       heartButton.classList.remove("fa-regular");
//             heartButton.classList.add("fa-solid"); // Favori olduğunda ürəyi dolu göstəririk
//     }

// });
