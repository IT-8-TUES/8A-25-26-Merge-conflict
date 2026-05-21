

function darkMode() {

    document.body.style.background =
    "linear-gradient(180deg, #000814, #001d3d, #003566)";

    document.body.style.color = "white";

    let cards = document.querySelectorAll(".card, .ranking-card");

    cards.forEach(function(card) {

        card.style.background = "rgba(0,0,0,0.4)";
    });

    let header = document.querySelector("header");

    header.style.background = "#000814";
}


function lightMode() {

    document.body.style.background =
    "linear-gradient(180deg, #a8dee7, #0077b6, #03045e)";

    let cards = document.querySelectorAll(".card, .ranking-card");

    cards.forEach(function(card) {

        card.style.background = "rgba(255,255,255,0.15)";
    });

    let header = document.querySelector("header");

    header.style.background =
    "linear-gradient(to right, #023e8a, #0077b6)";
}
