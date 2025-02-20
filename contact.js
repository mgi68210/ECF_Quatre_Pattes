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
   }
   


// Dynamisation du formulaire

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    validationForm();
});

function validationForm() {
    let userName = document.getElementById('name').value;
    let userEmail = document.getElementById('email').value;
    let userMessage = document.getElementById('message').value;

    let errorName = document.getElementById('error-name');
    let errorEmail = document.getElementById('error-email');
    let errorMessage = document.getElementById('error-message');

    let isValid = true;

    // Validation du nom
    if (userName === "") {
        errorName.innerHTML = "Le nom est obligatoire!";
        errorName.style.color = " #DB2727";        
        errorName.style.fontSize = "20px";     
        errorName.style.fontWeight = "bold";   
        errorName.style.border="2px solid #057858";

        isValid = false;
    } else {
        errorName.innerHTML = "";
    }

    // Validation de l'email
    if (userEmail === "") {
        errorEmail.innerHTML = "L'email est obligatoire!";
        errorEmail.style.color = " #DB2727";        
        errorEmail.style.fontSize = "20px";     
        errorEmail.style.fontWeight = "bold";   
        errorEmail.style.border="2px solid #057858"
        isValid = false;
    } else if (!userEmail.includes("@")) {
        errorEmail.innerHTML = "L'email doit contenir un '@'.";
        errorEmail.style.color = " #DB2727";        
        errorEmail.style.fontSize = "20px";     
        errorEmail.style.fontWeight = "bold";   
        errorEmail.style.border="2px solid #057858"
        isValid = false;
    } else {
        errorEmail.innerHTML = "";
    }

    // Validation du message
    if (userMessage === "") {
        errorMessage.innerHTML = "Le message est obligatoire!";
        errorMessage.style.color = " #DB2727";        
        errorMessage.style.fontSize = "20px";     
        errorMessage.style.fontWeight = "bold";   
        errorMessage.style.border="2px solid #057858"
        
        isValid = false;
    } else {
        errorMessage.innerHTML = "";
    }

    // Si tout est valide
    if (isValid) {
        alert("Formulaire envoyé avec succès!");
        document.getElementById('contactForm').reset();  // Réinitialiser le formulaire
    }
}