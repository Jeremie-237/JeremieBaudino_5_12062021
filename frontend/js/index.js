fetch("http://localhost:3000/api/teddies/")  // appel à l'API du serveur
.then((response) =>    // => then execute une fonction quand la promesse initiale se termine , declaration de fonction anonyme
{   
    return response.json();  // renvoie une promise qui contient le json
})
.then((teddies) => {   
    let html =''; // déclaration d'une variable contenant une chaine de caracteres vide à l'exterieur de la boucle en vue de son utilisation à l'exterieur
    console.log(teddies)
    teddies.forEach(teddy =>  // boucle pour le array teddies
    {
        html += render(teddy);
    });
        
    
    document.querySelector("#app").innerHTML = html ; // remplace le contenu de la div par la chaine de caracteres

});

function render(teddy)
{
    return `

    <div class="container" >
         <div class="teddy-wrapper" >
             <img class="teddy-pic" src="${teddy.imageUrl}">
             <h2>${teddy.name}</h2>
             <p>${teddy.description}</p>
             <strong>${teddy.price / 100}€</strong>
             <br><a href="produit.html?id=${teddy._id}">Voir le produit</a>
         </div>
    </div>
         `;
}