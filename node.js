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

    // Variables avec le stock des identifiants des éléments sélectionnés
    let idCarteSelectionnee = "";
    let idOptionSelectionnee = "";

function selectDon(idCarte) {
// Fonction appelée lorsqu'une carte de don est sélectionnée, l'idCarte est d'id de la carte de don sélectionnée.
    if (idCarteSelectionnee !== "") {
        document.getElementById(idCarteSelectionnee).classList.remove("selected");
        // SI on clique sur une autre carte de don, on retire la classe 'selected' (qui se trouve dans le css) de cette carte
    }
    document.getElementById(idCarte).classList.add("selected");
    // En conséquence, on ajoute la classe 'selected' à la nouvelle carte de don sélectionnée
    idCarteSelectionnee = idCarte;
    //Et donc on met à jour l'id de la carte de don sélectionnée

}

function selectOption(idOption) {
// Fonction appelée lorsqu'une option de fréquence est sélectionnée, l'idOption est d'id de la carte de don sélectionnée.

    if (idOptionSelectionnee !== "") {
        document.getElementById(idOptionSelectionnee).classList.remove("active");
        // SI on clique sur une autre option de fréquence , on retire la classe 'active' (qui se trouve dans le css) de cette option

    }

    document.getElementById(idOption).classList.add("active");
    // En conséquence, on ajoute la classe 'active' à la nouvelle option de fréquence sélectionnée
    idOptionSelectionnee = idOption;
    //Et donc on met à jour l'id de l'option de fréquence sélectionnée

}

function confirmDon() {
    // Une fonction est appelée lors de la confirmation de don, pour se faire il faut verifier que la carte de don et l'option de fréquence ont été sectionné

    if (idCarteSelectionnee === "" || idOptionSelectionnee === "") {
        // On vérifie bien si une carte et une option ont été sélectionnées
        alert("Veuillez sélectionner un montant et une fréquence.");
        // Sinon on affiche un message d'alerte
        return; //On arrête l'exécution de la fonction s'il manque une selection

    }

    let carteSelectionnee = document.getElementById(idCarteSelectionnee);
    // On récupère l'id de la carte sélectionnée
    let montant = carteSelectionnee.querySelector("strong").innerHTML;
    // On cherche le montant du don en récupérant l'élément <strong> (qui se trouve dans le html) de la carte

    let optionSelectionnee = document.getElementById(idOptionSelectionnee);
    // On récupère l'id de l'option sélectionnée
    let frequence = optionSelectionnee.innerHTML;
    // On récupère la frequence, le texte de l'option se trouvant dans l'html 

    let donButton = document.querySelector('.don-button');
    donButton.innerHTML = `<img src="./images/heart.PNG" alt="heart icon"> Faire un don de ${montant} ${frequence}`;
    //Je mets à jour le texte du bouton de don 


    incrementer(); 
    // J'appelle la fonction au dessus, celle du header, nommée 'incrementer' pour pouvour mettre le resultat dans le bouton de l'en tête "faire un don"
   

    // Réinitialisation du montant et de la fréquence
    // On enlève les sélections
    carteSelectionnee.classList.remove("selected");
    optionSelectionnee.classList.remove("active");

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
            message.style.background = " #057858";
            message.style.color = "white";
            message.style.textAlign = "left";
            message.style.padding = "10px 20px";
            message.style.border = "none";
            message.style.borderRadius = "5px";

        } else {// J'applique des styles en fonction d'une réponse fausse
            message.style.background = "#DB2727";
            message.style.color = "white";
            message.style.textAlign = "left";
            message.style.padding = "10px 20px";
            message.style.border = "none";
            message.style.borderRadius = "5px";
        }
    
        if (correct) {
            message.textContent = "Vrai ! " + reponses[id]; // Affiche le message d'une réponse vrai en fonction de l'id
        } else {
            message.textContent = "Faux ! " + reponses[id]; // Affiche le message d'une réponse fausse en fonction de l'id
        }
    
        if (correct) score++; // Incrémente le compteur de score
        reponseQuestions++; // Incrémente le compteur des réponses aux questions
    
        document.getElementById("score").textContent = `Vous avez ${score} bonne(s) réponse(s) sur ${totalQuestions}.`;
        // Appelle le score et affiche dans le html le nombre de bonnes réponses sur le nombre de question 
    }




