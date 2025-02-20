//    Faire un don header
let compteur = 0; 
   function incrementer(){
    compteur++;
    document.getElementById("display").innerHTML = compteur;
    document.getElementById("display").style.color = " #DB2727"; 
    document.getElementById("display").style.fontWeight="bold"; 
    document.getElementById("display").style.fontSize="15px";  
    document.getElementById("display").style.backgroundColor="white";
    document.getElementById("display").style.borderRadius="20%";


}

// section 2 Don
   // Variables pour mémoriser les sélections
    let idCarteSelectionnee = '';
    let idOptionSelectionnee = '';

    function selectDon(idCarte) {
        // Retire la sélection des autres cartes
        if (idCarteSelectionnee) {
            document.getElementById(idCarteSelectionnee).classList.remove('selected');
        }
        
        // Ajoute la classe 'selected' à la carte sélectionnée
        document.getElementById(idCarte).classList.add('selected');
        idCarteSelectionnee = idCarte; // Mémorise l'ID de la carte sélectionnée
    }

    function selectOption(idOption) {
        if (idOptionSelectionnee) {
            document.getElementById(idOptionSelectionnee).classList.remove('active');// Retire la sélection des autres options
        }
        
        // Ajoute la classe 'active' à l'option sélectionnée
        document.getElementById(idOption).classList.add('active');
        idOptionSelectionnee = idOption; // Mémorise l'ID de l'option sélectionnée
    }

    function confirmDon() {
        // Vérifie si une carte et une option sont sélectionnées
        if (idCarteSelectionnee && idOptionSelectionnee) {
            const montant = document.getElementById(idCarteSelectionnee).querySelector('strong').innerText;
            const frequence = document.getElementById(idOptionSelectionnee).innerText;
            alert(`Vous avez sélectionné un montant de ${montant} pour une fréquence ${frequence}.`);
        } else {
            alert("Veuillez sélectionner un montant et une option.");
        }
    }


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
            message.style.background = "green";
            message.style.color = "white";
            message.style.textAlign = "left";
            message.style.padding = "10px 20px";
            message.style.border = "none";
            message.style.borderRadius = "5px";

        } else {
            message.style.background = "red";
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