fetch("http://localhost:3000/api/teddies/")  // je fais un appel à l'API du serveur pour récupérer des données
.then((response => response.json())) // je retourne une promesse en json pour qu'elle soit expoitable 

.then((teddies) => {   
    display(teddies);
});

function render(teddy)
{
    return `
         <div class="teddy-wrapper" >
             <img class="teddy-pic" src="${teddy.imageUrl}">
             <h2>${teddy.name}</h2>
             <p>${teddy.description}</p>
             <span class="price">${teddy.price / 100}€</span>
             <button class="product-button">
                 <a class="product-link" href="produit.html?id=${teddy._id}">Voir le produit</a>
             </button>
         </div>
         `;
}
function display(teddies)
{
    let html =''; // déclaration d'une variable contenant une chaine de caracteres vide à l'exterieur de la boucle en vue de son utilisation à l'exterieur
    
    teddies.forEach(teddy =>  // boucle pour le array teddies
    {
        html += render(teddy);
    });
    document.querySelector("#app").innerHTML = html ; // remplace le contenu de la div par la chaine de caracteres

}