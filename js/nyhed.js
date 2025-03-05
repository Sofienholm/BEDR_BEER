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
