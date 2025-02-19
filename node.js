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
        // Retire la sélection des autres options
        if (idOptionSelectionnee) {
            document.getElementById(idOptionSelectionnee).classList.remove('active');
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
            alert(`Vous avez sélectionné un montant de ${montant} pour ${frequence}.`);
        } else {
            alert("Veuillez sélectionner un montant et une option.");
        }
    }