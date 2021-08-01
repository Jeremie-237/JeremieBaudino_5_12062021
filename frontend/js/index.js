showQtyOfProductsInCart();

fetch("http://localhost:3000/api/teddies/")  // appel à l'API du serveur
.then((response) =>  response.json())   // => then execute une fonction quand la promesse initiale se termine // declaration de fonction anonyme  // renvoie une promise qui contient le json

.then((teddies) => {   
    display(teddies);
});

function display(teddies)
{
    let html =''; // déclaration d'une variable contenant une chaine de caracteres vide à l'exterieur de la boucle en vue de son utilisation à l'exterieur
    
    teddies.forEach(teddy =>  // boucle pour le array teddies
    {
        html += render(teddy);
    });
    document.querySelector("#app").innerHTML = html ; // remplace le contenu de la div par la chaine de caracteres

}

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


