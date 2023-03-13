  // Définir la date de fin du compte à rebours
  let dateFin = new Date("Jan 1, 2024 00:00:00").getTime();
  //Cette ligne de code définit la date de fin du compte à rebours en 
  //créant un nouvel objet Date avec la date et l'heure de la nouvelle année 2023, 
  //puis en utilisant la méthode getTime() pour obtenir le nombre de millisecondes 


  // Mettre à jour le compte à rebours toutes les secondes
  //Cette ligne de code crée une nouvelle variable x en utilisant 
  //la fonction setInterval() qui exécute une fonction toutes les secondes pour mettre à jour le compte à rebours.
  let x = setInterval(function() {

   
    // Obtenir la date et l'heure actuelles
    //Cette ligne de code définit la date et l'heure actuelles en créant un nouvel 
    //objet Date et en utilisant la méthode getTime() 
    //pour obtenir le nombre de millisecondes écoulées depuis le 1er janvier 1970 à 00:00:00 UTC jusqu'à cette date.
    let maintenant = new Date().getTime();


    // Calculer la différence entre la date de fin et la date et l'heure actuelles
    let distance = dateFin - maintenant;

    // Calculer le nombre de jours, d'heures, de minutes et de secondes restants
    let jours = Math.floor(distance / (1000 * 60 * 60 * 24));
    let heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secondes = Math.floor((distance % (1000 * 60)) / 1000);
    //Ces lignes de code calculent le nombre de jours, d'heures, de minutes et de secondes restants en divisant 
    //la valeur de distance par des constantes qui représentent le nombre de millisecondes dans un jour, 
    //une heure, une minute et une seconde. La méthode floor() est utilisée pour arrondir les valeurs à l'entier inférieur.


    // Afficher le compte à rebours dans l'élément HTML correspondant
    document.querySelector('.jours').innerHTML = jours < 10 ? "- 0" + jours : "- " + jours;
    document.querySelector('.heures').innerHTML = heures < 10 ? "- 0" + heures : "- " + heures;
    document.querySelector('.minutes').innerHTML = minutes < 10 ? "- 0" + minutes : "- " + minutes;
    document.querySelector('.secondes').innerHTML = secondes < 10 ? "- 0" + secondes : "- " + secondes;
  }, 1000);
    //Ces lignes de code affichent le compte à rebours dans les éléments HTML
    // correspondants en utilisant la méthode querySelector() pour sélectionner 
    //chaque élément par sa classe, puis en utilisant la propriété innerHTML pour 
    //définir le contenu de chaque élément en fonction des variables jours, heures, minutes et secondes. 
    //La condition "?" est