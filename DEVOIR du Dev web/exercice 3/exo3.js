function estPremier(nombre) {
    // Un nombre premier est divisible uniquement par 1 et par lui-même
    for(let i = 2; i <= Math.sqrt(nombre); i++) {
        if(nombre % i === 0) {
            return false;
        }
    }
    return true;
}
let resultat = document.getElementById("resultat_1");
for (let i = 2; i <= 100; i++) {
    if (estPremier(i)) {
        resultat.textContent += i + " ";
    }
}



function trouverFacteurs() {
    let nombre = parseInt(document.getElementById("nombreSaisi").value);
    let resultat = document.getElementById("resultat_2");
    resultat.textContent = "Les facteurs de " + nombre + " sont : ";
    for (let i = 1; i <= nombre; i++) {
        if (nombre % i === 0) {
            resultat.textContent += i + " ";
            resultat.style.color = "blue";

        }
    }
}




let somme = 0, cpt = 0;
function calculeMoyenne() {
    do {
        let nbre = document.getElementById("nombre");

        if (parseFloat(nbre.value) >= 0) {
            somme += parseFloat(nbre.value);
            cpt++;
        }else{
            document.getElementById("resultat_3").textContent = "La moyenne est : " + (somme / cpt);
        }
    } while (parseFloat(nbre.value) >= 0);  
}




function genererTriangle() {

    let hauteur = parseInt(document.getElementById("hauteur").value);
    let resultat = document.getElementById("resultat_4");
    let t = ""
    for (let i = 0; i <= hauteur; i++) {
        for (let j = 0; j <= i; j++) {
            if(i % 2 ==0){
                t += "*";
                resultat.innerHTML = t;
            }
        }
        t += "<br>";
        resultat.style.color = "blue";
    }
}
