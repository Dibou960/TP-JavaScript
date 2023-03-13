// j'ai crée un tableau contenant quatre éléments de chaîne de caractères

        let tableau_element = ["Mon Premier", "Mon Deuxieme", "Mon Troisieme", "Mon Quatrieme"]
                                    
    

        let box = document.querySelector('.conteneur')
// Sélectionne un élément HTML avec une classe de "conteneur" 
// et le stocke dans une variable appelée "box"

        let box_gauche = document.querySelector('.bloc_gauche')

// Sélectionne un élément HTML avec une classe de "bloc_gauche"
//  et le stocke dans une variable appelée "box_gauche"

        let bnt_gauche = document.querySelector('.bouton_gauche')

// Sélectionne un élément HTML avec une classe de "bouton_gauche" 
// et le stocke dans une variable appelée "bnt_gauche"

        let bnt_droite = document.querySelector('.bouton_droite')

// Sélectionne un élément HTML avec une classe de "bouton_droite" 
//et le stocke dans une variable appelée "bnt_droite"

        let bloc_btn = document.querySelector('.bloc_bouton')

// Sélectionne un élément HTML avec une classe de "bloc_bouton" 
//et le stocke dans une variable appelée "bloc_btn"

        let box_droite = document.querySelector('.bloc_droite')

// Sélectionne un élément HTML avec une classe de "bloc_droite"
// et le stocke dans une variable appelée "box_droite"


       // ensuite j'ai Définit une fonction nommée "generation_p" qui crée des éléments 
//de paragraphe pour chaque élément dans le tableau "tableau_element"
function generation_p()
         {
// Parcourt le tableau "tableau_element"
    for (let i = 0; i < tableau_element.length; i++) {
// Crée un nouvel élément de paragraphe et stocke-le dans une variable "element_tableau"
        let element_tableau = document.createElement('p')
// Modifie le contenu texte de l'élément "element_tableau" 
//pour qu'il corresponde à l'élément en cours du tableau "tableau_element"
        element_tableau.innerText = tableau_element[i]
// Ajoute l'élément "element_tableau" en tant qu'enfant de l'élément "box_gauche"
        box_gauche.appendChild(element_tableau)
// Ajoute un écouteur d'événements pour l'événement "mouseover" sur l'élément "element_tableau"
        element_tableau.addEventListener('mouseover', function () {
// Ajoute une classe CSS "survol" à l'élément "element_tableau"
            element_tableau.classList.add('survol')
        })
// Appelle la fonction "deplacer_gauche" en passant l'élément "element_tableau" comme argument
        deplacer_gauche(element_tableau)
        }
        }

// Appelle la fonction "generation_p"
        generation_p()


// La fonction prend un paramètre appelé element_tableau
function deplacer_gauche(element_tableau) {
// Ajoute un événement de clic au bouton appelé bnt_droite
    bnt_droite.addEventListener('click', function () {
// Vérifie si l'élément du tableau passé en paramètre a la classe "survol"
        if (element_tableau.classList.contains('survol')) {
// Si l'élément a la classe "survol", il est déplacé vers un autre élément appelé box_gauche
            box_gauche.appendChild(element_tableau)
        }
        })
        }
// La fonction deplacer_gauche :prend un paramètre element_tableau et est utilisée pour
//  déplacer un élément de tableau vers la gauche en réponse à un événement de clic sur un bouton.
// addEventListener :est une méthode JavaScript qui permet 
// de définir une fonction à exécuter en réponse à un événement de type "clic".
// classList.contains: est une méthode 
// JavaScript qui permet de vérifier si un élément a une classe spécifique.
// appendChild :est une méthode JavaScript qui permet d'ajouter un élément en tant qu'enfant 
//d'un autre élément. Dans ce cas, elle est utilisée pour déplacer element_tableau vers box_gauche.