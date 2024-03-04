/** @format */

let form = document.querySelector("form");
let texte;
let printData = () => {
  let body = document.getElementsByTagName("body")[0];
  let bloc = document.createElement("div");
  bloc.title =
    "vous pouvez retirer cette ligne de la liste en cliquant sur bouton droit";
  bloc.classList.add("divbloc");

  /****on attribue une classe ("divbloc") à tous les Divs pour faciliter le comptage dans le tableau**** */
  let blocs = document.querySelectorAll(".divbloc").length + 1;
  let numOrdre = document.getElementById("numOrdre");
  numOrdre.innerHTML = `nombre d'élément créer: ${blocs}`;

  /****************************************************** */
  let textEcrit = document.createElement("p");
  textEcrit.innerHTML = texte;

  /**********************creation du bouton de suppression **************************/
  let sup = document.createElement("button");
  sup.title = "Cliquez ici pour retirer cette ligne de la liste";
  sup.innerHTML = "retirer de la liste";
  /*************************evenement lors de la suppression********************** */
  sup.addEventListener("click", () => {
    bloc.parentNode.removeChild(bloc);

    blocs = document.querySelectorAll(".divbloc").length;
    numOrdre.innerHTML = `nombre d'élément créer: ${blocs}`;
  });
  /*********************************** *******************/

  body.appendChild(bloc);
  bloc.appendChild(textEcrit);
  bloc.appendChild(sup);
  console.log(blocs);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  texte = document.getElementById("text").value;
  printData();
});
