document.addEventListener("DOMContentLoaded", function() {
    let carsContainer = document.getElementById("car-list");

    // `localStorage`-dan məlumatı götürürük
    let economCars = JSON.parse(localStorage.getItem("economCars"));

    if (!economCars || economCars.length === 0) {
        carsContainer.innerHTML = "<p>Econom sinifinə aid maşın tapılmadı.</p>";
        return;
    }


    // Yeni maşınları əlavə et
    economCars.forEach(element => {
        // let carDiv = document.createElement("div");
        // carDiv.className = "car-card";
        carsContainer.innerHTML += `
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
                    </div>
        `;
        // carsContainer.appendChild(carDiv);
    });
});


