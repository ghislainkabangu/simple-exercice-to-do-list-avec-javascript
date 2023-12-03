/** @format */

let form = document.querySelector("form");
let texte;

let printData = () => {
  let body = document.getElementsByTagName("body")[0];
  let bloc = document.createElement("div");
  let textEcrit = document.createElement("p");
  textEcrit.innerHTML = texte;
  let sup = document.createElement("button");
  sup.innerHTML = "supprimer";

  sup.addEventListener("click", () => {
    bloc.parentNode.removeChild(bloc);
  });

  body.appendChild(bloc);
  bloc.appendChild(textEcrit);
  bloc.appendChild(sup);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  texte = document.getElementById("text").value;
  printData();
});
