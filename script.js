

document.addEventListener("DOMContentLoaded", function() {
 

    let button2 = document.querySelectorAll(".flipbutton"); 
    button2.forEach(function(button2) {
    button2.addEventListener("click", function() {
        if (button2.style.boxShadow.includes("inset")) {
            button2.style.boxShadow = "14px 15px 11px 3px rgba(34, 60, 80, 0.18)";
        } else {
            button2.style.boxShadow = "inset 5px 5px 10px rgba(34, 60, 80, 0.3)"; ь
        }

        let textElement = button2.querySelector("p");
                if (textElement.textContent === "Хоп") {
                    textElement.textContent = "Хип";
                } else {
                    textElement.textContent = "Хоп"; 
                }
    });
    });
    });


