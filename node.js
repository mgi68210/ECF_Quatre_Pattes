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