// window.location.search contient la chaine de caracteres representant tous les parametres de recherche
const params = new URLSearchParams(window.location.search) // creation d'une constante qui stocke l'objet contenant les parametres de recherche 
let id = params.get('id') // extrait la valeur du parametre de recherche id et stocke dans la variable id 

showQtyOfProductsInCart();
fetch("http://localhost:3000/api/teddies/" + id)  // appel à l'API du serveur
.then((response) => response.json())    // => declaration de fonction anonyme // renvoie une promise qui contient le json

.then((teddy) => {  // création du contenu web en fonction du tableau json
    
    document.querySelector("#product").innerHTML = render(teddy) 
    // document.getElementById("addButton").addEventListener('click' , function() // écoute de l'évenement (click)
    // {
    //     products = [];  // création d'une variable temporaire sous forme de tableau vide
    //     products.push(id);  // ajout de l'id du produit
    //     localStorage.setItem('products' , products)  //enregistrement dans le localStorage de la valeur de la variable products associee a la 'key' (clef) "products" (chaine de characteres)
    // })
    document.getElementById("addButton").addEventListener('click' , () => addToCart(teddy));
});

function addToCart(teddy){
    let teddies = []; 

    if(storage.doesExists("panier"))
    {
        teddies = storage.get("panier"); 
    }
    teddies.push(teddy);
    storage.store("panier", teddies);
} 

function colorChoice (colors){ // // l'appelant ecrira: colorChoice(teddy.colors) et recevra un chaine de charactere HTML 
    // colorChoice(teddy.colors)
    // on recupere:
    //   <option value="Tan">Tan</option>
    //   <option value="Chocolate">Chocolate</option>
    //   <option value="Black">Black</option>
    //   <option value="White">White</option>`
    // colors est un tableau de couleur de l'ours (courant)
    // creer la variable (result) qu'on renverra a celui qui appelle la fonction
         
    let result ; 
    colors.forEach(element => {
        result += `<option value="${element}">${element}</option>`
    });
    return result;
}

function render (teddy)
{ 
    return `
    <div class="teddy-wrapper">
        <img class="teddy-pic" src="${teddy.imageUrl}">
        <h2>${teddy.name}</h2>
        <p>${teddy.description}</p>
        <div class="color-choice">
            <label>Choisir une couleur</label>
            <select name="colors">${colorChoice(teddy.colors)}</select>
        </div>
        <span class="price">${teddy.price / 100}€</span>
        <button id="addButton" class="product-button" onClick="window.location.reload()">Ajouter le produit au panier</button>
    </div>`;
}


