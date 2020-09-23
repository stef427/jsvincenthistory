turnon();


function center() {
    document.getElementById("clique").style.backgroundColor = "red";
    document.getElementById("clique").style.display = "flex";
    document.getElementById("clique").style.justifyContent = "space-around";
    document.getElementById("clique").style.listStyle = "none";
}

function appears() {
    document.getElementById("clique").innerHTML = "ici c'est l'accueil";

}

function turnon() {
    document.getElementById("img").src = "image2.jpg";
    document.getElementById("eteindre").value = "eteindre";
    document.getElementById("eteindre").onclick = turnoff;
}

function turnoff() {
    document.getElementById("img").src = "image.jpg";
    document.getElementById("eteindre").value = "allumée";
    document.getElementById("eteindre").onclick = turnon;

}