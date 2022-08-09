import { zapatillas } from "./db.js";
const btnInput = document.querySelector(".btnInput");
const result = document.getElementById("productos");
const nameInput = document.querySelector(".nameInput");
const resultSearch = document.querySelector(".card");

window.addEventListener("DOMContentLoaded", () => {
  localStorage.setItem("zapatillas", JSON.stringify(zapatillas));
  showZapatillas();
  btnInput.addEventListener("click", searchZapatilla);
});

const showZapatillas = () => {
  let zapatillaFromLocal = JSON.parse(localStorage.getItem("zapatillas"));

  zapatillas.forEach((zapatilla) => {
    const { id, marca, modelo, color, precio, img } = zapatilla;
    console.log(zapatilla);
    const zapaDiv = document.createElement("form");
    zapaDiv.classList.add("result-container");

    zapaDiv.innerHTML = `
                            <div class="card-image">
                            <img class="imgshoe" src="${img}">
                            <h2 class="card-title">${marca}</h2>
                        </div>
                        <div class="card-content">
                            <p>modelo: ${modelo}</p>
                            <p>Precio: $${precio}</p>
                        </div>
                                `;
    resultSearch.appendChild(zapaDiv);
  });
};

const searchZapatilla = () => {
  const zapatillaName = zapatillas.find(
    (zapatilla) => zapatilla.modelo.toUpperCase() === nameInput.value.toUpperCase()
  );

  if (nameInput.value == "") {
    cleanError();
    errorMessage("Debe ingresar el nombre de la zapatilla");
    return;
  } else if (zapatillaName == undefined) {
    cleanError();
    errorMessage("No se encontro la zapatilla. Intenta con otra");
    return;
  }
  showSelected(zapatillaName);
};


const showSelected = (zapatillaName) => {
  cleanHTML();
  const { img, marca, modelo, precio } = zapatillaName;
  const zapaDiv = document.createElement("div");
  zapaDiv.classList.add("result-container");

  

  setTimeout(() => {
    cleanHTML();
    
    zapaDiv.classList.add("result-container");
    zapaDiv.innerHTML = `
                    <h2>${marca}</h2>
                    <p>Ingredientes: ${modelo}</p>
                    <p>Precio: $${precio}</p>
                    <img src='${img}'>
                    `;
    resultSearch.appendChild(zapaDiv);
  }, 2500);
};



const cleanHTML = () => {
  while (resultSearch.firstChild) {
    resultSearch.removeChild(resultSearch.firstChild);
  }
};
