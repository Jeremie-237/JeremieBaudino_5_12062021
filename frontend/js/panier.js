//recupérer la liste du local storage
// get("panier"); // appel de la fonction ,  renvoit une valeur à utiliser plus tard dans une variable
let panier = get("panier");
let nom = document.getElementById("lastname");
let isFormValid = false;
let myForm = document.getElementById("information-client");
nom.addEventListener("keydown" , function()
{
  if (nom.value.length < 2)
  {
    document.getElementById("lastname-error").innerHTML = "Le nom n'est pas valide."
    isFormValid = false
  }else
  {
    document.getElementById("lastname-error").innerHTML = ""
  }
})

myForm.addEventListener("submit" , function(event)
{
  event.preventDefault();
})

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
  document.querySelector("#panier").innerHTML = `<p class = "contenu-panier">Contenu du panier</p>` + cartItemsHtml;
}

function order(){
    
    
    let prenom = myForm["firstname"].value;
    let mail = myForm["mail"].value;
    let adresse = myForm["adresse"].value;
    let codePostal = myForm["code postal"].value;
    let ville = myForm["ville"].value;
    console.log(`${nom} ${prenom} ${mail} ${adresse} ${codePostal} ${ville} ${panier}`)
}   