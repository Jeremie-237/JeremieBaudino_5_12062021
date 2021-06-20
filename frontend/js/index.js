fetch("http://localhost:3000/api/teddies/")  // appel à l'API du serveur
.then((response) =>    // => declaration de fonction anonyme
{   
    return response.json();  // renvoie une promise qui contient le json
})
.then((teddies) => {  // création du contenu web en fonction du tableau json
    console.log(teddies);
    let target = document.querySelector("#app"); // récupere balise id app et stocke dans la variable target
    let html =''; // déclaration d'une variable contenant une chaine de caracteres vide à l'exterieur de la boucle en vue de son utilisation à l'exterieur
    
    for (let index = 0; index < teddies.length ; index++)
    {
        let teddy = teddies[index]; // déclaration d'une variable qui stocke l'élément courant du tableau
        let img = new Image (400 , 300); // déclaration d'une variable pour l'image
        img.src = teddy.imageUrl ;
        html += img.outerHTML +'<br>' +teddy.name + '<br>' +teddy.price + '<br>' +teddy.description + '<br>' +teddy.colors + '<br>' ;
    }
    
    target.innerHTML = html ; // remplace le contenu de la div par la chaine de caracteres

});