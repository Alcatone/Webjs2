let ladate = new Date();
let msg = ladate.getDate() + "/" + (ladate.getMonth() + 1) + "/" + ladate.getFullYear();
document.getElementById("demo2").innerHTML += msg;

let maDiv = document.getElementById("maDiv");
maDiv.addEventListener('click', mon_callback);
function mon_callback() {
    document.querySelector("#demo").innerHTML = "Au revoir";
}

let listeDiv = document.querySelectorAll(".rond");
let couleur = ['blue', '#ff2300', 'pink', 'lightgrey', 'green'];
let coul = 0;

for (let i = 0; i < listeDiv.length; i++) {
    listeDiv[i].addEventListener("mouseover", changeCouleur)
}

function changeCouleur(e) {
    console.log(e);
    e.target.style.backgroundColor = couleur[coul];
    coul++;
}

function alternerCouleur() {
    let rond1 = document.querySelector('.rond5');

    // Récupère la couleur actuelle
    let couleurActuelle = rond1.style.backgroundColor;

    // Alterne entre bleu et rouge
    if (couleurActuelle === 'rgb(0, 0, 0)') {
        rond1.style.backgroundColor = '#ff0000'; // Rouge
    } else {
        rond1.style.backgroundColor = '#000000'; // Bleu
    }

    // Appelle récursivement la fonction après un délai de 1000 millisecondes (1 seconde)
    setTimeout(alternerCouleur, 100);
}

// Démarre la fonction pour alterner les couleurs
alternerCouleur();

let go = document.getElementById('go');
go.addEventListener('click', action);
function action() {
    let divIci = document.querySelector(".ici");
    let listePomme = document.querySelectorAll("div");
    divIci.style.backgroundColor = 'red';
    console.log('divIci:', divIci);
    console.log('ListePomme:', listePomme);
}

function red() {
    let listeFor = document.querySelectorAll(".rond");
    for (let i = 0; i < listeFor.length; i++) {
        listeFor[i].style.backgroundColor = 'white';
    }
}
red();
