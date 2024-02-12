/** @format */

let form = document.querySelector("form");
let texte;

let printData = () => {
  let body = document.getElementsByTagName("body")[0];
  let bloc = document.createElement("div");
  bloc.title =
    "vous pouvez le retirer de la liste en cliquant sur bouton droit";
  bloc.classList.add("divbloc");
  let blocs = document.querySelectorAll(".divbloc").length + 1;

  let textEcrit = document.createElement("p");
  textEcrit.innerHTML = blocs + ")" + " " + texte;

  let sup = document.createElement("button");
  sup.title = "retirer de la liste";
  sup.innerHTML = "retirer de la liste";

  sup.addEventListener("click", () => {
    bloc.parentNode.removeChild(bloc);
  });

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
