const params = new URLSearchParams(window.location.search) // creation d'une constante qui stocke l'objet contenant les parametres de recherche 

let id = params.get('orderId') // extrait la valeur du parametre de recherche id et stocke dans la variable id 
console.log(id);
document.getElementById("ordernumber").innerHTML = id;