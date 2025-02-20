//    Faire un don header
let compteur = 0; 
// j'initialise le compteur à 0

   function incrementer(){
// Je crée une fonction nommer incrementer qui augmentera la valeur de 1 et met à jour l'affichage dans html

    compteur++;     // Incrémente la valeur de 1 au compteur
    let display = document.getElementById("display");     // Appelle l'élément html avec l'id display
    document.getElementById("display").style.color = " #DB2727"; // ajout de plusieurs styles
    document.getElementById("display").style.fontWeight="bold"; 
    document.getElementById("display").style.fontSize="15px";  
    document.getElementById("display").style.backgroundColor="white";
    document.getElementById("display").style.borderRadius="20%";
    
    //Lien avec la section 2 (le resultat de l'utilisateur de la section 2 s'incrémentera dans le bouton du header)
    display.innerHTML = compteur; // synchro de l'élélement 'display' html avec la nouvelle valeur du 'compteur'
    display.style.color = "#DB2727"; // ajout de plusieurs styles
    display.style.fontWeight = "bold"; 
    display.style.fontSize = "15px";  
    display.style.backgroundColor = "white";
    display.style.borderRadius = "20%";

}

// section 2 

let idCarteSelectionnee = "";
let idOptionSelectionnee = "";

function selectDon(idCarte) {
    if (idCarteSelectionnee !== "") {
        document.getElementById(idCarteSelectionnee).classList.remove("selected");
    }

    document.getElementById(idCarte).classList.add("selected");
    idCarteSelectionnee = idCarte;
}

function selectOption(idOption) {
    if (idOptionSelectionnee !== "") {
        document.getElementById(idOptionSelectionnee).classList.remove("active");
    }

    document.getElementById(idOption).classList.add("active");
    idOptionSelectionnee = idOption;
}

function confirmDon() {
    if (idCarteSelectionnee === "" || idOptionSelectionnee === "") {
        alert("Veuillez sélectionner un montant et une fréquence.");
        return;
    }

    let carteSelectionnee = document.getElementById(idCarteSelectionnee);
    let montant = carteSelectionnee.querySelector("strong").innerHTML;

    let optionSelectionnee = document.getElementById(idOptionSelectionnee);
    let frequence = optionSelectionnee.innerHTML;

    alert("Vous avez choisi un don de " + montant + " avec une fréquence de " + frequence + ".");
    incrementer(); 
}

// ANCIEN CODE Section 2
// let idCarteSelectionnee = "";
// let idOptionSelectionnee = "";

// function selectDon(idCarte) {
//     if (idCarteSelectionnee !== "") {
//         let ancienneCarte = document.getElementById(idCarteSelectionnee);
//         ancienneCarte.classList.remove("selected");
//     }

//     let carte = document.getElementById(idCarte);
//     carte.classList.add("selected");

//     idCarteSelectionnee = idCarte;
// }

// function selectOption(idOption) {
//     if (idOptionSelectionnee !== "") {
//         let ancienneOption = document.getElementById(idOptionSelectionnee);
//         ancienneOption.classList.remove("active");
//     }

//     let option = document.getElementById(idOption);
//     option.classList.add("active");

//     idOptionSelectionnee = idOption;
// }

// function confirmDon() {
//     if (idCarteSelectionnee === "" || idOptionSelectionnee === "") {
//         alert("Veuillez sélectionner un montant et une fréquence.");
//         return; // Si l'un des deux n'est pas sélectionné, on arrête la fonction et n'affiche pas l'alerte
//     }

//     let carteSelectionnee = document.getElementById(idCarteSelectionnee);
//     let montant = carteSelectionnee.querySelector("strong").innerHTML; // On utilise querySelector pour cibler le <strong>

//     let optionSelectionnee = document.getElementById(idOptionSelectionnee);
//     let frequence = optionSelectionnee.innerHTML;

//     alert("Vous avez choisi un don de " + montant + " avec une fréquence de " + frequence + ".");

// }





    //SECTION 4

    function ok(image, titre, description, date) {
        document.getElementById("big").src = image;
        document.getElementById("big-title").textContent = titre;
        document.getElementById("big-description").textContent = description;
        document.getElementById("big-date").textContent = date;
    }


    
    //SECTION 5
    let score = 0;
    let reponseQuestions = 0;
    let totalQuestions = 3;
    
    const reponses = {
        "q1": "Chez Quatre Pattes, 85% des dons sont directement utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels.",
        "q2": "Nous accueillons tous les animaux, quel que soit leur état de santé. Chaque vie compte !",
        "q3": "Les besoins sont immenses et constants. Chaque don est précieux pour sauver plus d’animaux."
    };
    
    function repondre(correct, id) {
        let message = document.getElementById(id);
    
        if (correct) {
            message.style.background = " #057858";
            message.style.color = "white";
            message.style.textAlign = "left";
            message.style.padding = "10px 20px";
            message.style.border = "none";
            message.style.borderRadius = "5px";

        } else {
            message.style.background = "#DB2727";
            message.style.color = "white";
            message.style.textAlign = "left";
            message.style.padding = "10px 20px";
            message.style.border = "none";
            message.style.borderRadius = "5px";
        }
    
        if (correct) {
            message.textContent = "Vrai ! " + reponses[id];
        } else {
            message.textContent = "Faux ! " + reponses[id];
        }
    
        if (correct) score++;
        reponseQuestions++;
    
        document.getElementById("score").textContent = `Vous avez ${score} bonne(s) réponse(s) sur ${totalQuestions}.`;
    }

    // ANCIEN CODE Section 5
    
//     let score = 0;
//     let reponseQuestions = 0;
//     let totalQuestions = 3;

// function repondre(correct, id) {
//     let message;

//     if (id === "q1") {
//         message = document.getElementById("q1");
//         if (correct) {
//             message.style.background = "green";
//             message.style.color = "white";
//             message.textContent = "Vrai ! Chez Quatre Pattes, 85% des dons sont directement utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels.";
//             score++;
//         } else {
//             message.style.background = "red";
//             message.style.color = "white";
//             message.textContent = "Faux ! Chez Quatre Pattes, 85% des dons sont directement utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels.";
//         }
//     }

//     if (id === "q2") {
//         message = document.getElementById("q2");
//         if (correct) {
//             message.style.background = "green";
//             message.style.color = "white";
//             message.textContent = "Vrai ! Nous accueillons tous les animaux, quel que soit leur état de santé. Chaque vie compte !";
//             score++;
//         } else {
//             message.style.background = "red";
//             message.style.color = "white";
//             message.textContent = "Faux ! Nous accueillons tous les animaux, quel que soit leur état de santé. Chaque vie compte !";
//         }
//     }

//     if (id === "q3") {
//         message = document.getElementById("q3");
//         if (correct) {
//             message.style.background = "green";
//             message.style.color = "white";
//             message.textContent = "Vrai ! Les besoins sont immenses et constants. Chaque don est précieux pour sauver plus d’animaux.";
//             score++;
//         } else {
//             message.style.background = "red";
//             message.style.color = "white";
//             message.textContent = "Faux ! Les besoins sont immenses et constants. Chaque don est précieux pour sauver plus d’animaux.";
//         }
//     }

//     reponseQuestions++;
//     document.getElementById("score").textContent = `Vous avez ${score} bonne(s) réponse(s) sur ${totalQuestions}.`;
// }


