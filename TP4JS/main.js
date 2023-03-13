const lengthInput = document.getElementById('password-length');// Récupération de l'élément HTML "password-length" qui permet de définir la longueur du mot de passe généré 
const uppercaseCheckbox = document.getElementById('checkbox1');// Récupération de la case à cocher pour inclure les lettres majuscules dans le mot de passe
const lowercaseCheckbox = document.getElementById('checkbox2');// Récupération de la case à cocher pour inclure les lettres minuscules dans le mot de passe
const numbersCheckbox = document.getElementById('checkbox3');// Récupération de la case à cocher pour inclure les chiffres dans le mot de passe
const specialCharsCheckbox = document.getElementById('checkbox4');// Récupération de la case à cocher pour inclure les caractères spéciaux dans le mot de passe
const generateButton = document.querySelector('.gmdp');// Récupération du bouton "Générer" qui permet de lancer la génération du mot de passe
const passwordOutput = document.getElementById('generermdp');// Récupération de l'élément HTML où le mot de passe généré sera affiché

const Lmaj = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';// Définition des lettres majuscules utilisées pour générer le mot de passe
const Lmin = 'abcdefghijklmnopqrstuvwxyz';// Définition des lettres minuscules utilisées pour générer le mot de passe
const numbers = '0123456789';// Définition des chiffres utilisés pour générer le mot de passe
const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';// Définition des caractères spéciaux utilisés pour générer le mot de passe

// Ajoute un écouteur d'événement pour le clic sur le bouton générer
// Initialise une chaîne de caractères vide pour stocker le mot de passe généré
// Récupère la longueur du mot de passe à partir de l'élément input correspondant
// Utilise 15 comme longueur par défaut si lengthInput.value est nul ou indéfini
generateButton.addEventListener('click', () => {
let password = '';
const passwordLength = lengthInput.value || 3;

// Vérifie si au moins une option est sélectionnée pour la génération du mot de passe
if (!uppercaseCheckbox.checked && !lowercaseCheckbox.checked &&
!numbersCheckbox.checked && !specialCharsCheckbox.checked) {
// Si aucune option n'est sélectionnée, affiche une alerte et quitte la fonction
alert('Veuillez sélectionner au moins une option.');
return;
}
// Générer le mot de passe en fonction des options sélectionnées
for (let i = 0; i < passwordLength; i++) {
let chars = '';
if (uppercaseCheckbox.checked) {
chars += Lmaj;
}
if (lowercaseCheckbox.checked) {
    chars += Lmin;
}
if (numbersCheckbox.checked) {
    chars += numbers;
}
if (specialCharsCheckbox.checked) {
    chars += specialChars;
} 
// Sélectionne un caractère aléatoire à partir de la chaîne de caractères générée
password += chars[Math.floor(Math.random() * chars.length)];
}
// Affiche le mot de passe généré dans l'élément output correspondant
passwordOutput.value = password;
})
