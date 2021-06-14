
function success(response) {   // creation d'une fonction pour gerer une reponse positive
    console.log(response);
    return response.json() // extraction du contenu json de la réponse
}

function generateContent(responseJson) {    // creation d'une fonction qui génère du contenu
    target = document.querySelector("#container"); // designation de l'endroit où s'affiche le contenu
    console.log("generateContent " +target);
    for (let index = 0; index < responseJson.length ; index++) { 
         // creation d'une boucle qui parcourt le tableau
        let elementCourant = responseJson[index] ;  // assigne l'element courant du tableau à la variable element courant
        target.innerHTML += "<div>" + elementCourant.name + "</div>"; // recupere la valeur de l'attribut name de l'element courant du tableau et l'ajoute au html de l'element cible

    } 
 }



let reponsePromise = fetch("http://localhost:3000/api/teddies/"); //creation d'une variable où on stocke la promesse de réponse au serveur
reponsePromise.then(success).then(generateContent); // appel de la fonction then sur l'objet responsePromise 

