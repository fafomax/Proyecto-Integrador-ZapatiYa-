import { zapatillas } from "./db.js";

const result = document.getElementById("productos");

window.addEventListener("DOMContentLoaded", () => {
  localStorage.setItem("zapatillas", JSON.stringify(zapatillas));
  showZapatillas();
  /* btnInput.addEventListener("click", searchZapatilla); */
});

const showZapatillas = () => {
  let zapatillaFromLocal = JSON.parse(localStorage.getItem("zapatillas"));

  zapatillas.forEach((zapatilla) => {
    const { id, marca, modelo, color, precio, img } = zapatilla;
    console.log(zapatilla);
    const zapatillaDiv = document.createElement("form");
    zapatillaDiv.classList.add("result-container");

    zapatillaDiv.innerHTML = `
                            <div class="card-image">
                            <img class="imgshoe" src="${img}">
                            <h2 class="card-title">${marca}</h2>
                        </div>
                        <div class="card-content">
                            <p>modelo: ${modelo}</p>
                            <p>Precio: $${precio}</p>
                        </div>
                                `;
    result.appendChild(zapatillaDiv);
  });
};
