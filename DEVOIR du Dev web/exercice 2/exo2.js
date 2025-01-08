function afficherNombres() {
    let resultat = "";
    for (let i = 1; i <= 10; i++) {
        resultat += i + " ";
    }
    document.getElementById("resultat1").innerText = resultat;
    resultat.style.color = "blue";

}




function sommeEntier() {
    // Calcul de la somme des entiers de 1 à 100
    let somme = 0;
    for (let i = 1; i <= 100; i++) {
        somme += i;
    }

    // Affichage du resultat
    document.getElementById("resultat_2").innerHTML = "La somme des entiers de 1 à 100 est : " + somme;
    }




      // Generer un nombre secret entre 1 et 100
      const nombreSecret = Math.floor(Math.random() * 100) + 1;
      function verifierNombre() {
          // Recuperer le nombre saisi.
          const nombreSaisi = parseInt(document.getElementById("nombreSaisi").value);
          // Verifier si le nombre saisi est correct
          if (isNaN(nombreSaisi)) {
              document.getElementById("resultat_3").innerHTML = " Entrer un nombre valide.";
          } else if (nombreSaisi === nombreSecret) {
              document.getElementById("resultat_3").innerHTML = " Vous avez trouvé le nombre secret.";
          } else if (nombreSaisi < nombreSecret) {
              document.getElementById("resultat_3").innerHTML = " Plus grand ";
          } else {
              document.getElementById("resultat_3").innerHTML = " Plus petit";
          }
      }




 function genererFibonacci() {
            let nombreTermes = document.getElementById("nombreTermes").value;
            let resultat = document.getElementById("resultat_4");
            let a = 0, b = 1, c;
            resultat.textContent = a + " " + b + " ";
            for (let i = 2; i < nombreTermes; i++) {
                c = a + b;
                resultat.textContent += c + " ";
                a = b;
                b = c;
            }
        };
