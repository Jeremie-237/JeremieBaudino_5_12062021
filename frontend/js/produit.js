// window.location.search contient la chaine de caracteres representant tous les parametres de recherche
const params = new URLSearchParams(window.location.search) // creation d'une constante qui stocke l'objet contenant les parametres de recherche 

let id = params.get('id') // extrait la valeur du parametre de recherche id et stocke dans la variable id 

fetch("http://localhost:3000/api/teddies/" + id)  // appel à l'API du serveur
.then((response) =>    // => declaration de fonction anonyme
{   
    return response.json();  // renvoie une promise qui contient le json
})
.then((teddy) => {  // création du contenu web en fonction du tableau json
    
    document.querySelector("#product").innerHTML = render (teddy) 
    // document.getElementById("addButton").addEventListener('click' , function() // écoute de l'évenement (click)
    // {
    //     products = [];  // création d'une variable temporaire sous forme de tableau vide
    //     products.push(id);  // ajout de l'id du produit
    //     localStorage.setItem('products' , products)  //enregistrement dans le localStorage de la valeur de la variable products associee a la 'key' (clef) "products" (chaine de characteres)
    // })
    document.getElementById("addButton").addEventListener('click' , addToCart);
});
function addToCart(){
    console.log("addToCart!");
    // 1.recuperer la valeur existante de la liste des id produits depuis le local storage
    let idProduits = JSON.parse(localStorage.getItem('panier')); //panier est le nom de la clé à laquelle on associe la liste des id , json.parse lit une chaine de caracteres et la transforme en objet
    // 2.ajouter la valeur selectionnée à la liste existante
    if(idProduits === undefined || idProduits == null){ // verifie que la liste idProduits existe deja
        idProduits = []; 
        idProduits.push(id);
    }
    else{
        idProduits.push(id);
    }
    // 3. enregistrer la nouvelle liste (ancienne valeur + nouvelle valeur)
    localStorage.setItem("panier", JSON.stringify(idProduits)); //json.stringify transforme un objet en chaine de caracteres au format json
}  
function render (teddy)
{ console.log(teddy);
    return `
    <div class="teddy-wrapper-product">
             <div class="container-image">
             <img class="product-image" src="${teddy.imageUrl}">
             </div>
             <h2>${teddy.name}</h2>
             <p>${teddy.description}</p>
             <label>Choisir une couleur</label>
                <select name="colors">${colorChoice(teddy.colors)}</select>
             <strong>${teddy.price / 100}€</strong>
             <br><a href="produit.html?id=${teddy._id}" id="addButton">Ajouter le produit au panier</a>
         </div>`;
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
