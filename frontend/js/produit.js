fetch("http://localhost:3000/api/teddies/5be9c8541c9d440000665243")  // appel à l'API du serveur
.then((response) =>    // => declaration de fonction anonyme
{   
    return response.json();  // renvoie une promise qui contient le json
})
.then((teddies) => {  // création du contenu web en fonction du tableau json
    console.log(teddies);
});