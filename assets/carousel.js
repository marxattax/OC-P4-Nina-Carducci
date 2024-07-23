/* Variables qui servent à créer le carousel */
let Carousel = [];
let Barres = [];
let index = 0;
let zindex = 10;

/* Récupération des images dans le DOM */
const divCarousel = document.getElementById("div-carousel");
const imgsCarousel = document.querySelectorAll(".img-carousel-none");
imgsCarousel.forEach((el) => {
    Carousel.push(el)
});

/* Création des barres de nav (1barre par image) */
const carouselBar = document.createElement("div");
carouselBar.className = "div-barres-carousel";
divCarousel.appendChild(carouselBar);

Carousel.forEach(function (i) {
    const barre = document.createElement("div");
    barre.classList.add("barre-img-carousel");
    barre.addEventListener("click", () => {
        Carousel[index].classList.remove("disparition");
        Carousel[index].classList.remove("defilement");
        Carousel[index].classList.remove("disparition2");
        Carousel[index].classList.remove("defilement2");
        const activeBar = document.querySelector(".active-bar");
        activeBar.classList.remove("active-bar");
        barre.classList.add("active-bar");
        if (index > Carousel.indexOf(i)) {
            Carousel[index].classList.add("disparition2");
            Carousel[Carousel.indexOf(i)].classList.add("defilement2");
        }
        else {
            Carousel[index].classList.add("disparition");
            Carousel[Carousel.indexOf(i)].classList.add("defilement");
        }
        index = Carousel.indexOf(i);
        zindex++;
        Carousel[index].style = "z-index:" + zindex;
    })
    carouselBar.appendChild(barre);
})

const activeBar = document.querySelector(".barre-img-carousel");
activeBar.classList.add("active-bar");

const barres = document.querySelectorAll(".barre-img-carousel");

barres.forEach((el) => {
    Barres.push(el);
})

/* Bouton Image précédente */
const prev = document.createElement("span");
prev.className = "prev";
prev.onclick = function () {
    Carousel[index].classList.remove("disparition");
    Carousel[index].classList.remove("defilement");
    Carousel[index].classList.remove("disparition2");
    Carousel[index].classList.remove("defilement2");
    if (Carousel.indexOf(Carousel[index]) > 0) {
        index--;
        zindex++;
    }
    else {
        zindex++;
        index = Carousel.length - 1;
    }
    Carousel[index].style = "z-index:" + zindex;
    const activeBar = document.querySelector(".active-bar");
    activeBar.classList.remove("active-bar");
    Barres[index].classList.add("active-bar");
    Carousel[index].classList.add("defilement2");
    if (index == Carousel.length - 1) {
        Carousel[0].classList.add("disparition2");
    }
    else {
        Carousel[index + 1].classList.add("disparition2");
    }

}

/* Bouton Image suivante */
const next = document.createElement("span");
next.className = "next";
next.onclick = function () {
    Carousel[index].classList.remove("disparition");
    Carousel[index].classList.remove("defilement");
    Carousel[index].classList.remove("disparition2");
    Carousel[index].classList.remove("defilement2");
    if (Carousel.indexOf(Carousel[index]) < Carousel.length - 1) {
        index++;
        zindex++;
    }
    else {
        index = 0;
        zindex++;
    }
    Carousel[index].style = "z-index:" + zindex;
    const activeBar = document.querySelector(".active-bar");
    activeBar.classList.remove("active-bar");
    Barres[index].classList.add("active-bar");
    Carousel[index].classList.add("defilement");
    if (index == 0) {
        Carousel[Carousel.length - 1].classList.add("disparition");
    }
    else {
        Carousel[index - 1].classList.add("disparition");
    }
}

/* Fonction de défilement automatique */
function defilement() {
    zindex++;
    Carousel[index].classList.remove("disparition");
    Carousel[index].classList.remove("defilement");
    Carousel[index].classList.remove("disparition2");
    Carousel[index].classList.remove("defilement2");
    if (index < Carousel.length) {
        index++;
    }
    if (index > Carousel.length - 1) {
        index = 0;
    }

    Carousel[index].style = "z-index:" + zindex
    if (index == 0) {
        Carousel[Carousel.length - 1].classList.add("disparition");
    }
    else {
        Carousel[index - 1].classList.add("disparition");
    }
    Carousel[index].classList.add("defilement");
    const activeBar = document.querySelector(".active-bar");
    activeBar.classList.remove("active-bar");
    Barres[index].classList.add("active-bar");
}

/* Implémention dans le DOM */
divCarousel.appendChild(prev);
divCarousel.appendChild(Carousel[index]);
divCarousel.appendChild(next);

setInterval(defilement, 5000);