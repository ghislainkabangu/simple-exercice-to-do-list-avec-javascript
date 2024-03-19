/** @format */

let form = document.querySelector("form");
let texte;

let printData = () => {
  let section = document.getElementsByTagName("section")[0];
  let bloc = document.createElement("div");
  bloc.classList.add("divbloc");

  /****on attribue une classe ("divbloc") à tous les Divs pour faciliter le comptage dans le tableau**** */
  let blocs = document.querySelectorAll(".divbloc").length + 1;
  let numOrdre = document.getElementById("numOrdre");
  numOrdre.innerHTML = `nombre de tâche: ${blocs}`;

  /****************************************************** */
  let textEcrit = document.createElement("p");
  textEcrit.innerHTML = texte;
  /*************** modification*********************************** */
  let modifier = document.createElement("button");
  modifier.innerHTML = "modifier";
  modifier.title = "cliquer pour modifier";
  /******************event lors de la supression */
  modifier.addEventListener("click", () => {
    let textOrgine = bloc.firstChild.innerHTML;
    let newText = prompt("modifier le texte ", textOrgine);
    if (newText != "") {
      textEcrit.innerHTML = newText;
    }
  });
  /**********************creation du bouton de suppression **************************/
  let sup = document.createElement("button");
  sup.title = "Cliquez pour suprimer";
  sup.innerHTML = "suprimer";
  /*************************evenement lors de la suppression********************** */
  sup.addEventListener("click", () => {
    bloc.parentNode.removeChild(bloc);

    blocs = document.querySelectorAll(".divbloc").length;
    numOrdre.innerHTML = `nombre de tâche: ${blocs}`;
  });

  /*********************************** *******************/

  section.appendChild(bloc);
  bloc.appendChild(textEcrit);
  bloc.appendChild(modifier);
  bloc.appendChild(sup);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  texte = document.getElementById("text").value;
  printData();
});
