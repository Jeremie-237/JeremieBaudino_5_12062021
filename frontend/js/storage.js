class Storage {
  get(
    item // fonction qui renvoit la valeur en objet json
  ) {
    return JSON.parse(localStorage.getItem(item)); //
  }
  store(
    item,
    value //json.stringify transforme la valeur a stocker en chaine de caracteres pour etre compatible avec le format local storage
  ) {
    // localStorage.setItem(item, value)
    //    appelle la methode de stockage 'setItem' et stoque la chaine de charactere associe au nom de clef contenu dans la variable item
    localStorage.setItem(item, JSON.stringify(value));
  }
  doesExists(
    item // // renvoit true or false en function de l'existence d'une valeur pour la clef dont le nom est stoque dans la variable item
  ) // ex:
  // doesExists('panier') cherche dans le local storage une paire clef/valeur pour laquelle clef == "panier"
  // get(item) renvoit un objet , mais il faut un boolean . !! force la conversion en boolean ( vrai si il existe , faux si il n'existe pas)
  // equivalent : let itemValue = get(item)
  // if (itemValue === undefined) {
  //    return false;
  //} else {
  //    return true;
  //}
  {
    return !!this.get(item);
  }
}

const storage = new Storage();