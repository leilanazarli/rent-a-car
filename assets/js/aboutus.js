document.addEventListener("DOMContentLoaded", function () {
    let questions = document.querySelectorAll(".question");

    questions.forEach(question => {
        let btn = question.querySelector(".toggle-btn");
        let answer = question.nextElementSibling;

        question.addEventListener("click", function () {
            let isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

            // Bütün cavabları bağla
            document.querySelectorAll(".answer").forEach(ans => {
                ans.style.maxHeight = "0";
                ans.style.padding = "0";
            });

            // Bütün düymələri (+) qaytar
            document.querySelectorAll(".toggle-btn").forEach(b => {
                b.textContent = "+";
            });

            // Əgər hazırda bağlanıbsa, aç
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.padding = "20px 0";
                btn.textContent = "−";
            }
        });
    });
});
