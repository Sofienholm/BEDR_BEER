document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript er forbundet og DOM'en er indlæst!");

    let sections = document.querySelectorAll(".parallax-section");

    function handleScroll() {
        sections.forEach(section => {
            let rect = section.getBoundingClientRect();
            let isVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

            let bg = section.querySelector(".bg");
            let can = section.querySelector("model-viewer");

            if (bg) {
                let parallaxValue = rect.top * 0.3;
                bg.style.transform = `translateY(${parallaxValue}px)`;
            }

            if (can) {
                if (isVisible) {
                    can.style.opacity = "1";
                    can.style.transform = "translateY(0)";
                } else {
                    can.style.opacity = "0";
                    can.style.transform = "translateY(50px)";
                }
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});


document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript kører!"); // Debug-log for at se, om scriptet loader

    const form = document.getElementById("newsletter-form");
    const popup = document.getElementById("confirmation-popup");
    const closeBtn = document.querySelector(".close-popup");

    if (!form || !popup || !closeBtn) {
        console.error("FEJL: Et af elementerne blev ikke fundet!");
        return;
    }

    // Når formularen sendes
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Stop formular fra at sende

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();

        if (name !== "" && email !== "") {
            console.log("✔ Tilmelding registreret:", name, email);
            popup.classList.add("show"); // Vis popup
            form.reset(); // Nulstil formularen
        } else {
            alert("Udfyld venligst begge felter.");
        }
    });

    // Luk popup, når brugeren trykker på X
    closeBtn.addEventListener("click", function() {
        console.log("❌ Popup lukket");
        popup.classList.remove("show");
    });

    // Luk popup ved klik udenfor
    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            console.log("❌ Popup lukket via klik udenfor");
            popup.classList.remove("show");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll(".parallax-section");

    function handleScroll() {
        sections.forEach(section => {
            let rect = section.getBoundingClientRect();
            let isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

            if (isVisible) {
                section.classList.add("in-view"); // Tilføjer klassen, når sektionen er synlig
            } else {
                section.classList.remove("in-view"); // Fjerner klassen, når den ikke er
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Kør funktionen ved start, så første sektion animeres
});