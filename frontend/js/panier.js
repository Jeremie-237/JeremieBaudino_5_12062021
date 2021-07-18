//recupérer la liste du local storage
// get("panier"); // appel de la fonction ,  renvoit une valeur à utiliser plus tard dans une variable
let panier = get("panier");
let nom = document.getElementById("lastname");
let prenom = document.getElementById("firstname");
let email = document.getElementById("mail");
let adresse = document.getElementById("adresse");
let codepostal = document.getElementById("code postal");
let ville = document.getElementById("ville");
let isFormValid = false;
let myForm = document.getElementById("information-client");
nom.addEventListener("keyup", function () {
  if (nom.value.length < 2) {
    document.getElementById("lastname-error").innerHTML =
      "Le nom n'est pas valide.";
    isFormValid = false;
  } else {
    document.getElementById("lastname-error").innerHTML = "";
  }
});
prenom.addEventListener("keyup", function () {
  if (prenom.value.length < 2) {
    document.getElementById("firstname-error").innerHTML =
      "Le prenom n'est pas valide.";
    isFormValid = false;
  } else {
    document.getElementById("firstname-error").innerHTML = "";
  }
});
email.addEventListener("keyup", function () {
  if (email.value.includes("@")) {
    document.getElementById("mail-error").innerHTML = "";
    isFormValid = false;
  } else {
    document.getElementById("mail-error").innerHTML =
      "L'adresse mail n'est pas valide.";
  }
});

adresse.addEventListener("keyup", function () {
  if (adresse.value.length < 1) {
    document.getElementById("adresse-error").innerHTML =
      "L'adresse n'est pas valide.";
    isFormValid = false;
  } else {
    document.getElementById("adresse-error").innerHTML = "";
  }
});
codepostal.addEventListener("keyup", function () {
  if (isNaN(codepostal.value) || codepostal.value.toString().length != 5) {
    document.getElementById("codepostal-error").innerHTML =
      "Le code postal n'est pas valide.";
    isFormValid = false;
  } else {
    document.getElementById("codepostal-error").innerHTML = "";
  }
});
ville.addEventListener("keyup", function () {
  if (ville.value.length < 2) {
    document.getElementById("ville-error").innerHTML =
      "La ville n'est pas valide.";
    isFormValid = false;
  } else {
    document.getElementById("ville-error").innerHTML = "";
  }
});

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  order();
});

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
  document.querySelector("#panier").innerHTML =
    `<p class = "contenu-panier">Contenu du panier</p>` + cartItemsHtml;
}

function order() {
  let nom = myForm["lastname"].value;
  let prenom = myForm["firstname"].value;
  let mail = myForm["mail"].value;
  let adresse = myForm["adresse"].value;
  let codePostal = myForm["code postal"].value;
  let ville = myForm["ville"].value;
  console.log(
    `${nom} ${prenom} ${mail} ${adresse} ${codePostal} ${ville} ${panier}`
  );
  let contact = {}; // initialisation d'un objet contact vide
  contact["lastName"] = nom; // initialisation des clés aux valeurs correspondantes
  contact["firstName"] = prenom;
  contact["email"] = mail;
  contact["address"] = adresse;
  contact["city"] = ville;
  let requete = {}; // initialisation d'une requete avec un objet vide
  requete["contact"] = contact; //  initialisation d'un objet contact
  requete["products"] = panier; // initialisation d'un tableau avec le contenu du panier (tableau ID produits)
  let requeteString = JSON.stringify(requete);
  console.log(requeteString);
  fetch("http://localhost:3000/api/teddies/order", {
    // appel au serveur pour créer la commande
    method: "POST", // utilisation de la methode post pour creer des donnees sur le serveur
    headers: {
      // information sur le type de contenu pour le serveur
      "Content-Type": "application/json",
    },
    body: requeteString, // corps de la requete
  })
    .then((response) => response.json()) // extraction du contenu json de la reponse du serveur sous forme de promesse
    .then((json) => {
      console.log(json);
      console.log(json["orderId"]);
      let orderId = json["orderId"];
      window.open("confirmation.html?orderId=" + orderId);
    });
}
