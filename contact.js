//    Faire un don header
let compteur = 0; 
// j'initialise le compteur à 0

   function incrementer(){
// Je crée une fonction nommer incrementer qui augmentera la valeur de 1 et met à jour l'affichage dans html

    compteur++;     // Incrémente la valeur de 1 au compteur
    let display = document.getElementById("display");     // Appelle l'élément html avec l'id display
    document.getElementById("display").style.color = " #DB2727";
    document.getElementById("display").style.fontWeight="bold"; 
    document.getElementById("display").style.fontSize="15px";  
    document.getElementById("display").style.backgroundColor="white";
    document.getElementById("display").style.borderRadius="20%";
     // ajout de plusieurs styles

    display.innerHTML = compteur; // synchronisation de l'élélement 'display' html avec la nouvelle valeur du 'compteur'
    //Lien avec la section 2 (le resultat de l'utilisateur de la section 2 s'incrémentera dans le bouton du header)

   }
   


// FORMULAIRE

// J'ajoute un écouteur d'événement sur le formulaire, avec l'ID 'contactForm', pour capturer sa soumission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
    validationForm(); // J'appelle la fonction de validation du formulaire
});


function validationForm() {
    // On récupère les valeurs des champs du formulaire
    let userName = document.getElementById('name').value;
    let userEmail = document.getElementById('email').value;
    let userMessage = document.getElementById('message').value;

    // On récupère les éléments où les messages d'erreur seront affichés
    let errorName = document.getElementById('error-name');
    let errorEmail = document.getElementById('error-email');
    let errorMessage = document.getElementById('error-message');

    // Je crée une variable pour suivre l'état de validation du formulaire.
    let isValid = true;

    // Pour la validation du champ 'Nom'
    if (userName === "") {
        // Si l'espace texte utilisateur est vide 
        errorName.innerHTML = "Le nom est obligatoire!"; // Un message d'erreur apparait dans le html
        // J'ajoute des styles pour indiquer l'erreur
        errorName.style.color = "#DB2727";
        errorName.style.fontSize = "20px";
        errorName.style.fontWeight = "bold";
        errorName.style.border = "2px solid #057858";
        isValid = false; // Le formulaire n'est pas valide
    } else {
        errorName.innerHTML = ""; // Réinitialise le message d'erreur
    }

    // Pour la validation du champ 'Email'
    if (userEmail === "") {
        // Si l'espace texte utilisateur est vide 
        errorEmail.innerHTML = "L'email est obligatoire!";// Un message d'erreur apparait dans le html
        // J'ajoute des styles pour indiquer l'erreur
        errorEmail.style.color = "#DB2727";
        errorEmail.style.fontSize = "20px";
        errorEmail.style.fontWeight = "bold";
        errorEmail.style.border = "2px solid #057858";
        isValid = false; // Le formulaire n'est pas valide

    } else if (!userEmail.includes("@")) {
        // Si l'espace texte utilisateur ne contient pas de @  
        errorEmail.innerHTML = "L'email doit contenir un '@'."; // Un message d'erreur apparait dans le html
        // J'ajoute des styles pour indiquer l'erreur
        errorEmail.style.color = "#DB2727";
        errorEmail.style.fontSize = "20px";
        errorEmail.style.fontWeight = "bold";
        errorEmail.style.border = "2px solid #057858";
        isValid = false; // Le formulaire n'est pas valide
    } else {
        errorEmail.innerHTML = ""; // Réinitialise le message d'erreur
    }

    // Pour la validation du champ 'Message'
    if (userMessage === "") {
        // Si l'espace texte utilisateur est vide 
        errorMessage.innerHTML = "Le message est obligatoire!"; // Un message d'erreur apparait dans le html
        // Application de styles pour indiquer l'erreur
        errorMessage.style.color = "#DB2727";
        errorMessage.style.fontSize = "20px";
        errorMessage.style.fontWeight = "bold";
        errorMessage.style.border = "2px solid #057858";
        isValid = false; // Le formulaire n'est pas valide
    } else {
        errorMessage.innerHTML = "";// Réinitialise le message d'erreur
    }

    // Si tous les champs sont valides et remplis
    if (isValid) {
        alert("Formulaire envoyé avec succès!"); // Affiche une alerte de succès
        document.getElementById('contactForm').reset(); // Réinitialisation du formulaire
    }
}
