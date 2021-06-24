fetch("http://localhost:3000/api/teddies/")  // appel à l'API du serveur
.then((response) =>    // => declaration de fonction anonyme
{   
    return response.json();  // renvoie une promise qui contient le json
})
.then((teddies) => {   
    let html =''; // déclaration d'une variable contenant une chaine de caracteres vide à l'exterieur de la boucle en vue de son utilisation à l'exterieur
    console.log(teddies)
    teddies.forEach(teddy =>
    {
        html += render(teddy);
    });
        
    
    document.querySelector("#app").innerHTML = html ; // remplace le contenu de la div par la chaine de caracteres

});

function render(teddy)
{
    return `
         <div class="teddy-wrapper" style="margin-bottom: 50px ; background-color:f7f7f7 ; border-radius:30px ; padding: 25px;">
             <img src="${teddy.imageUrl}" style="max-width: 250px">
             <h2>${teddy.name}</h2>
             <p>${teddy.description}</p>
             <strong>${teddy.price / 100}€</strong>
             <br><a href="produit.html?id=${teddy._id}">Voir le produit</a>
         </div>
         `;
}