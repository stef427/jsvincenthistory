function center() {
    document.getElementById("clique").style.backgroundColor = "red";
    document.getElementById("clique").style.display = "flex";
    document.getElementById("clique").style.justifyContent = "space-around";
    document.getElementById("clique").style.listStyle = "none";
}

function appears() {
    document.getElementById("clique").innerHTML = "ici c'est l'accueil";

}

function turnOn() {
    document.getElementById("img").src = "image2.jpg";

}

function turnOff() {
    document.getElementById("img").src = "image.jpg";
}