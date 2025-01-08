let age = document.querySelector(".age");
let form = document.querySelector(".affichage1");
let solu = document.querySelector(".solution1");
let sms = document.querySelector(".message1");

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(age.value > 18){
        solu.style.display = "flex";
        sms.innerHTML = "Vous êtes majeur.";
    }else{
        solu.style.display = "flex";
        sms.innerHTML = "Vous êtes mineur.";
        sms.style.color = "green";
    }

});

let form2 = document.querySelector(".affichage2");
let nombre = document.querySelector(".nombre");
let sms2 = document.querySelector(".message2");
let solu2 = document.querySelector(".solution2");


form2.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(nombre.value % 2 === 0){
        solu2.style.display = "flex";
        sms2.innerHTML = nombre.value + " est un nombre pair";
        sms2.style.color = "green";

    }else{
        solu2.style.display = "flex";
        sms2.innerHTML = nombre.value + " est un nombre impaire";
        sms2.style.color = "green";

    }

});

let form_3 = document.querySelector(".affichage_3");
let Annee = document.querySelector(".annee");
let sms_3 = document.querySelector(".message_3");
let solu_3 = document.querySelector(".solution_3");

let months = ["Janvier" , "Fevrier" , "Mars" , "Avril" , "Mai" , "Juin" , "Juillet" , "Août" , "Septembre" , "Octobre" , "Novembre" , "Decembre"];

form_3.addEventListener('submit',(e)=>{
    e.preventDefault();
    for(let i = 0 ; i <= months.length ; i++){
        if(Annee.value == i){
            solu_3.style.display = "flex";
            sms_3.innerHTML = months[i - 1];
            sms_3.style.color = "green";
            
            break;
    }
   }
});

