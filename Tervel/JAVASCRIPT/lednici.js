const vsichkiSnimki = [];
let tekushta = 0;

window.onload = function() {
    document.querySelectorAll("img.lqvo, img.dqsno").forEach(s => {
        vsichkiSnimki.push(s.src);
    });
}

function otvorisnimka(snimka) {
    tekushta = vsichkiSnimki.indexOf(snimka.src);
    document.getElementById("golqmasnimka").src = vsichkiSnimki[tekushta];
    document.getElementById("modal").classList.add("aktiven");
    aktualiziraibutoni();
}

function smeni(event, posoka) {
    event.stopPropagation();
    tekushta += posoka;
    document.getElementById("golqmasnimka").src = vsichkiSnimki[tekushta];
    aktualiziraibutoni();
}

function aktualiziraibutoni() {
    document.getElementById("butonnazad").style.display = tekushta === 0 ? "none" : "block";
    document.getElementById("butonnapred").style.display = tekushta === vsichkiSnimki.length - 1 ? "none" : "block";
}

function zatvorimodal() {
    document.getElementById("modal").classList.remove("aktiven");
}

document.querySelector(".btn-nagore").style.display = "block";