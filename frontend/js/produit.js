const params = new URLSearchParams(window.location.search)

let id = params.get('id')

fetch("http://localhost:3000/api/teddies/" + id)  // appel à l'API du serveur
.then((response) =>    // => declaration de fonction anonyme
{   
    return response.json();  // renvoie une promise qui contient le json
})
.then((teddy) => {  // création du contenu web en fonction du tableau json
    
    document.querySelector("#product").innerHTML = render (teddy) 
    document.getElementById("addButton").addEventListener('click' , function() // écoute de l'évenement (click)
    {
        products = [];  // création d'une variable temporaire sous forme de tableau vide
        products.push(id);  // ajout de l'id du produit
        localStorage.setItem('products' , products)  //enregistrement dans le local storage
    })
});

data.lenses.forEach(function(lense) {
    var lentille = document.getElementById('lentille');
    var selection = document.createElement('select');
    var option = document.createElement('option');
    console.log(lense)
    option.value = `${lense}`;
    option.textContent = `${lense}`;
    option.id = `${lense.id}`
    lentille.appendChild(option)
    option.appendChild(selection)
})    

function render (teddy)
{
    return `
    <div class="teddy-wrapper" style="margin-bottom: 50px ; background-color:f7f7f7 ; border-radius:30px ; padding: 25px;">
             <img src="${teddy.imageUrl}" style="max-width: 250px">
             <h2>${teddy.name}</h2>
             <p>${teddy.description}</p>
             <label>Choisir une couleur</label>
                <select name="colors" onChange="liste()"></select>
             <strong>${teddy.price / 100}€</strong>
             <br><a href="produit.html?id=${teddy._id}" id="addButton">Ajouter le produit au panier</a>
         </div>`;
}
