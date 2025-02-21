                                // CODE JAVASCRIPT POUR LA PAGE ACCUEIL

        //BOUTON "FAIRE UN DON" DANS LE HEADER


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

        // SECTION 2

// Variables pour stocker les identifiants des éléments sélectionnés

let idCarteSelectionnee = ""; // Je déclare une variable pour l'ID du montant sélectionné
let idOptionSelectionnee = ""; // Je déclare une variable pour l'ID de la fréquence sélectionnée


function selectDon(idCarte) {
// Fonction appelée pour sélectionner une carte de don

    if (idCarteSelectionnee) {
    // Je vérifie si une carte de don était déjà sélectionnée


    document.getElementById(idCarteSelectionnee).classList.remove("selected");
    // Si oui, je retire la classe 'selected' de l'ancienne carte
    // pour enlever le style visuel de sélection
    }

    document.getElementById(idCarte).classList.add("selected");
    // J'ajoute la classe 'selected' à la nouvelle carte sélectionnée
    // pour changer son apparence et indiquer qu'elle est sélectionnée

    idCarteSelectionnee = idCarte;
    // Je mets à jour la variable idCarteSelectionnee avec l'identifiant de la carte actuellement sélectionnée


    updateAffichageSelection();
    // Je mets à jour l'affichage du montant et de la fréquence après la sélection de la carte de don

}

function selectOption(idOption) {
// Fonction appelée pour sélectionner une option de fréquence

    if (idOptionSelectionnee) {
    // Je vérifie si une option de fréquence était déjà sélectionnée


    document.getElementById(idOptionSelectionnee).classList.remove("active");
    // Si oui, je retire la classe 'active', présente en css, de l'ancienne option
    // pour enlever le style visuel de sélection
    }

    document.getElementById(idOption).classList.add("active");
    // J'ajoute la classe 'active', présente en css, à la nouvelle option sélectionnée
    // pour changer son apparence et indiquer qu'elle est sélectionnée

    idOptionSelectionnee = idOption;
    // Je mets à jour la variable idOptionSelectionnee avec l'identifiant de l'option actuellement sélectionnée

    updateAffichageSelection();
    // Je mets à jour l'affichage du montant et de la fréquence après la sélection de l'option de fréquence

}

function AffichageSelection() {
// Fonction pour mettre à jour l'affichage du montant et de la fréquence sélectionnés

    let montant = ""; 
    // Je déclare une variable pour le montant sélectionné

    let frequence = ""; 
    // Je déclare une variable pour la fréquence sélectionnée


    if (idCarteSelectionnee) {
    // Je vérifie si une carte de don a été sélectionnée

    montant = document.getElementById(idCarteSelectionnee).querySelector("strong").textContent; 
    // Je récupère le montant de la carte sélectionnée 
    // en utilisant l'élément <strong> présent dans le html

    }

    if (idOptionSelectionnee) {
    // Je vérifie si une option de fréquence a été sélectionnée

    frequence = document.getElementById(idOptionSelectionnee).textContent; 
    // Je récupère le texte de l'option de fréquence sélectionnée

    }

    
    document.querySelector(".don-button").innerHTML = `<img src="./images/heart.PNG" alt="heart icon"> Faire un don : ${montant || "Sélectionnez un montant"} / ${frequence || "Sélectionnez une fréquence"}`;
    // Je mets à jour le contenu du bouton "don" avec le montant et la fréquence sélectionnés
    // J'utilise l'opérateur || pour afficher un message par défaut si aucune sélection n'est faite
}

function confirmDon() {
// Fonction appelée lors du clic sur le bouton "Faire un don"

    if (!idCarteSelectionnee && !idOptionSelectionnee) {
    // Je vérifie si aucune sélection n'a été faite

    alert("Veuillez sélectionner un montant et une fréquence pour continuer.");
    // Si aucune carte de don et aucune option de fréquence n'ont été sélectionnées,
    // je fais apparaître une alerte demandant à l'utilisateur de sélectionner un montant et une fréquence

    } else if (idCarteSelectionnee && !idOptionSelectionnee) {
        // Si une carte de don a été sélectionnée mais PAS d'option de fréquence,

        alert("Veuillez sélectionner une fréquence pour continuer.");
        // je fais apparaître une alerte demandant à l'utilisateur de sélectionner une fréquence

    } else if (!idCarteSelectionnee && idOptionSelectionnee) {
        // Si une option de fréquence a été sélectionnée mais PAS de carte de don,
        alert("Veuillez sélectionner un montant pour continuer.");
        // je fais apparaître une alerte demandant à l'utilisateur de sélectionner un montant

    } else if (idCarteSelectionnee && idOptionSelectionnee) {
        // Si les deux sélections (carte de don et option de fréquence) sont faites,
        alert(`Vous avez sélectionné un don de ${document.getElementById(idCarteSelectionnee).querySelector("strong").textContent}/${document.getElementById(idOptionSelectionnee).textContent}.`);
        // je fais apparaître un message de confirmation avec les détails du don
        
        incrementer(); // J'incrémente le compteur uniquement si les deux sélections sont cliquées
        // Je lie les deux boutons dons ici après confirmation

    }
}




            //SECTION 4


function ok(image, titre, description, date) {
// Fonction qui, en cliquant, met à jour la source de l'élément principal avec le chemin fourni en appelant les id

    document.getElementById("big").src = image; // Met à jour la source de l'image principale
    document.getElementById("big-title").textContent = titre;  // Met à jour le titre associé à l'image
    document.getElementById("big-description").textContent = description; // Met à jour la description associée à l'image
    document.getElementById("big-date").textContent = date; // Met à jour la date associée à l'image
    }




    
            //SECTION 5


    let score = 0;
    // score initialisé à 0
    let reponseQuestions = 0;
    // réponses des question initialisés à 0
    let totalQuestions = 3;
    // déclaration qu'il y a en total 3 questions
    
    const reponses = {
    // déclaration par const, que l'objet reponses, contient ses réponses associées à chaque question
        "q1": "Chez Quatre Pattes, 85% des dons sont directement utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels.",
        "q2": "Nous accueillons tous les animaux, quel que soit leur état de santé. Chaque vie compte !",
        "q3": "Les besoins sont immenses et constants. Chaque don est précieux pour sauver plus d’animaux."
};
    
function repondre(correct, id) {
// création d'une fonction qui est appelée lorsqu'une réponse est soumise
// réponse correct = indique si la réponse est correcte (true) ou incorrecte (false).
    // id =  Cest l'identifiant de l'élément HTML où le message sera affiché.
        let message = document.getElementById(id);
        // J'appelle l'élément HTML correspondant à l'id fourni
    
        if (correct) {
        // J'applique des styles en fonction d'une réponse vraie
            message.style.background = " #eafaf1";
            message.style.color = "black";
            message.style.textAlign = "left";
            message.style.padding = "10px 20px";
            message.style.border = "none";
            message.style.borderRadius = "5px";

        } else {// J'applique des styles en fonction d'une réponse fausse
            message.style.background = "#FAE3E3";
            message.style.color = "black";
            message.style.textAlign = "left";
            message.style.padding = "10px 20px";
            message.style.border = "none";
            message.style.borderRadius = "5px";
        }
    
        if (correct) {
            message.textContent = "✔️Vrai ! " + reponses[id]; // Affiche le message d'une réponse vrai en fonction de l'id
        } else {
            message.textContent = "❌Faux ! " + reponses[id]; // Affiche le message d'une réponse fausse en fonction de l'id
        }
    
        if (correct) score++; // Incrémente le compteur de score
        reponseQuestions++; // Incrémente le compteur des réponses aux questions
    
        document.getElementById("score").textContent = `Vous avez ${score} bonne(s) réponse(s) sur ${totalQuestions}.`;
        // Appelle le score et affiche dans le html le nombre de bonnes réponses sur le nombre de question 
    }




