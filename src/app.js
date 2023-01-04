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
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    console.log(email.value);
    console.log(password.value);

    if (email.value === "") {
      console.log("El campo email está vacio");
    }
  }
};
