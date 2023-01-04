/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //agregamos un evento al elemento form, primero obtenemos el elemento
  let form = document.querySelector("form");
  //Luego manipulamos el elemento agregandole el evento submit
  // form.addEventListener("evento",funcion que se va activar)
  //on
  form.addEventListener("submit", enviarDatos);

  //declaramos la funcion que envia los datos del formulario
  function enviarDatos(e) {
    e.preventDefault(); // detiene tu comportamiento predeterminado del formulario e interpretado mi codigo
    let card = document.getElementById("card");
    let cvc = document.getElementById("cvc");
    let amount = document.getElementById("amount");
    let name = document.getElementById("name");
    let lastName = document.getElementById("lastName");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let postalCode = document.getElementById("postalCode");
    let message = document.getElementById("message");
    let alert = document.getElementById("alert");

    if (
      card.value === "" ||
      cvc.value === "" ||
      amount.value === "" ||
      name.value === "" ||
      lastName.value === "" ||
      city.value === "" ||
      state.value === "" ||
      postalCode.value === "" ||
      message.value === ""
    ) {
      alert.className = "alert alert-danger d-block";
      card.style.background = "rgb(242, 214, 214)";
      cvc.style.background = "rgb(242, 214, 214)";
      amount.style.background = "rgb(242, 214, 214)";
      name.style.background = "rgb(242, 214, 214)";
      lastName.style.background = "rgb(242, 214, 214)";
      city.style.background = "rgb(242, 214, 214)";
      state.style.background = "rgb(242, 214, 214)";
      postalCode.style.background = "rgb(242, 214, 214)";
      message.style.background = "rgb(242, 214, 214)";
    }
  }
};
