import Pelicula from "./classPelicula.js";
import { sumarioValidacion } from "./helpers.js";

let formularioAdminPelicula = document.getElementById("formPelicula");
let listaPeliculas = [];
let codigo = document.getElementById("codigo"),
  titulo = document.getElementById("titulo"),
  descripcion = document.getElementById("descripcion"),
  imagen = document.getElementById("imagen"),
  genero = document.getElementById("genero"),
  anio = document.getElementById("anio"),
  reparto = document.getElementById("reparto"),
  duracion = document.getElementById("duracion"),
  pais = document.getElementById("pais"),
  director = document.getElementById("director");
let modalFormPelicula = new bootstrap.Modal(document.getElementById('modalPelicula'));
console.log(modalFormPelicula)
let btnCrearPelicula = document.getElementById('btnCrearPelicula');

//manejadores de eventos
formularioAdminPelicula.addEventListener("submit", prepararFormulario);
btnCrearPelicula.addEventListener('click', mostrarFormularioPelicula)

function prepararFormulario(e) {
  e.preventDefault();
  console.log("aqui creo la peli");
  crearPelicula();
}

function crearPelicula() {
  //validar los datos del formulario

  let resumen = sumarioValidacion(
    titulo.value,
    descripcion.value,
    duracion.value,
    imagen.value,
    anio.value
  );

  if (resumen.length === 0) {
    // los datos son validos
    //cree el objeto
    const peliculaNueva = new Pelicula(
      titulo.value,
      descripcion.value,
      imagen.value,
      genero.value,
      anio.value,
      duracion.value,
      pais.value,
      director.value,
      reparto.value
    );
    console.log(peliculaNueva); // "El Padrino"
    //la voy agregar en un array
    listaPeliculas.push(peliculaNueva);
    console.log(listaPeliculas);
    //almacenar el array de pelis en localsotarge
    localStorage.setItem("listaPeliculas", JSON.stringify(listaPeliculas));
    //cerrar el modal con el formulario
    limpiarFormulario();
    modalFormPelicula.hide();
  } else {
    // mostrar al usuario el cartel de error
    let alerta = document.getElementById("alerta");
    alerta.innerHTML = resumen;
    alerta.className = "alert alert-danger mt-3";
  }
}

function limpiarFormulario(){
  formularioAdminPelicula.reset();
}

function mostrarFormularioPelicula(){
  modalFormPelicula.show();
}