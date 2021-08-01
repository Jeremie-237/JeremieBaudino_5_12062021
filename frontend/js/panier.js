//recupérer la liste du local storage
// get("panier"); // appel de la fonction ,  renvoit une valeur à utiliser plus tard dans une variable

let panier = storage.get("panier");
let nom = document.getElementById("lastname");
let prenom = document.getElementById("firstname");
let email = document.getElementById("mail");
let adresse = document.getElementById("adresse");
let codepostal = document.getElementById("code postal");
let ville = document.getElementById("ville");
let myForm = document.getElementById("information-client");



nom.addEventListener("keyup", function () {
  document.getElementById("lastname-error").innerHTML = "";

  if (!isLastNameValid()) {
    document.getElementById("lastname-error").innerHTML =
      "Le nom n'est pas valide.";
  }
});

prenom.addEventListener("keyup", function () {
  document.getElementById("firstname-error").innerHTML = "";
  if (!isFirstNameValid()) {
    document.getElementById("firstname-error").innerHTML =
      "Le prenom n'est pas valide.";
  }
});

email.addEventListener("keyup", function () {
  document.getElementById("mail-error").innerHTML = "";
  if (!isEmailValid()) {
    document.getElementById("mail-error").innerHTML =
      "L'adresse mail n'est pas valide.";
  }
});

adresse.addEventListener("keyup", function () {
  if (adresse.value.length < 1) {
    document.getElementById("adresse-error").innerHTML =
      "L'adresse n'est pas valide.";
  } else {
    document.getElementById("adresse-error").innerHTML = "";
  }
});

codepostal.addEventListener("keyup", function () {
  if (isNaN(codepostal.value) || codepostal.value.toString().length != 5) {
    document.getElementById("codepostal-error").innerHTML =
      "Le code postal n'est pas valide.";
  } else {
    document.getElementById("codepostal-error").innerHTML = "";
  }
});

ville.addEventListener("keyup", function () {
  if (ville.value.length < 2) {
    document.getElementById("ville-error").innerHTML =
      "La ville n'est pas valide.";
  } else {
    document.getElementById("ville-error").innerHTML = "";
  }
});

myForm.addEventListener("input", function (event) {
  disableButton();
  if (isLastNameValid() && isFirstNameValid() && isEmailValid()) {
    enableButton();
  }
});
myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  order();
});
disableButton();
display(panier);

function render(teddy) {
  let button = document.createElement("BUTTON");
  button.innerHTML = "delete";
  button.addEventListener("click", () => deleteItem(element));
  document.getElementById("body").appendChild(button);
  return `<div><img class="teddy-minipic" src="${teddy.imageUrl}"> ${
    teddy.name
  }${teddy.price / 100}
    `;
}

function deleteItem(element) {
  let panier = storage.get("panier"); // récupere le panier par la fonction get et stocke dans une variable panier

  let index = -1;
  for (let i = 0; i < panier.length; i++) {
    if (panier[i].name == element.name) {
      index = i;
      break;
    }
  }
  panier.splice(index, 1); // supprime l'élément du tableau
  storage.store("panier", panier); // remet le contenu du panier dans son espace de stockage
  window.location.reload();
}

function display(items) {
  let balisePanier = document.querySelector("#panier"); // recuperation de la section panier du html
  balisePanier.innerHTML = `<p class = "contenu-panier">Contenu du panier</p>`; // ajout de html dans le corps de cette balise

  items.forEach((teddy) => { // boucle for sur le tableau teddy (qui correspond au panier)
    let baliseArticle = document.createElement("DIV");// creation d'une div pour l'article 
    baliseArticle.innerHTML = `<img class="teddy-minipic" src="${teddy.imageUrl}"> ${teddy.name} ${teddy.price / 100}`; // ajout de html avec les valeurs du teddy
    let button = document.createElement("BUTTON");// creation d'une balise button
    button.innerHTML = "Supprimer";
    button.addEventListener("click", () => deleteItem(teddy)); // ajout d'un ecouteur sur le bouton pour appeller la fonction deleteitem pour le teddy selectionné
    baliseArticle.appendChild(button);// ajoute l'element bouton à la balise article
    balisePanier.appendChild(baliseArticle);// ajoute la balise article à la balise panier
  });
}
function order() {
  let payload = {
    contact: {
      lastName: nom.value,
      firstName: prenom.value,
      email: mail.value,
      address: adresse.value,
      city: ville.value,
    },
    products: panier.map(teddy => teddy._id),
  };
  fetch("http://localhost:3000/api/teddies/order", {
    // appel au serveur pour créer la commande
    method: "POST", // utilisation de la methode post pour creer des donnees sur le serveur
    headers: {
      // information sur le type de contenu pour le serveur
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload), // corps de la requete
  })
    .then((response) => response.json()) // extraction du contenu json de la reponse du serveur sous forme de promesse
    .then((json) => {
      let orderId = json["orderId"];
      window.open("confirmation.html?orderId=" + orderId);
    });
}

function disableButton() {
  let button = document.getElementById("submitButton");
  button.setAttribute("disabled", true);
  button.style.opacity = 0.5;
}
function enableButton() {
  let button = document.getElementById("submitButton");
  button.removeAttribute("disabled");
  button.style.opacity = 1;
}

function isLastNameValid() {
  if (nom.value.length < 2) {
    return false;
  }
  return true;
}

function isFirstNameValid() {
  if (prenom.value.length < 3) {
    return false;
  }
  return true;
}

function isEmailValid() {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email.value).toLowerCase());
}