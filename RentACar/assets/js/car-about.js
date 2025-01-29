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
