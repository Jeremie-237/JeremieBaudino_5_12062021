//recupérer la liste du local storage
// get("panier"); // appel de la fonction ,  renvoit une valeur à utiliser plus tard dans une variable
let panier = get("panier");
console.log(panier);
//afficher la liste des id dans la section panier ( panier étant un tableau de chaine de caracteres )
display(panier);

function render(element) {
  return `render${element}<br>
    `;
}

function display(items) {
  let cartItemsHtml = ""; // déclaration d'une variable contenant une chaine de caracteres vide à l'exterieur de la boucle en vue de son utilisation à l'exterieur
  items.forEach((element) => {
    cartItemsHtml += render(element);
  });
  document.querySelector("#panier").innerHTML = `<p>Contenu du panier</p>` + cartItemsHtml;
}
