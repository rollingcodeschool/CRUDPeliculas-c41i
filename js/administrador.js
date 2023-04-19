import Pelicula from "./classPelicula.js";
import { sumarioValidacion } from "./helpers.js";

let formularioAdminPelicula = document.getElementById("formPelicula");
let listaPeliculas = [];
let codigo = document.getElementById('codigo'),
titulo = document.getElementById('titulo'),
descripcion = document.getElementById('descripcion'),
imagen = document.getElementById('imagen'),
genero = document.getElementById('genero'),
anio = document.getElementById('anio'),
reparto = document.getElementById('reparto'),
duracion = document.getElementById('duracion'),
pais = document.getElementById('pais'),
director = document.getElementById('director')

formularioAdminPelicula.addEventListener("submit", prepararFormulario);

function prepararFormulario(e) {
  e.preventDefault();
  console.log("aqui creo la peli");
  crearPelicula();
}

function crearPelicula() {
  //validar los datos del formulario
  let resumen = sumarioValidacion("algun texto");
  if (resumen.length === 0) {
    // los datos son validos
    //cree el objeto
    const peliculaNueva = new Pelicula(
      "El Padrino",
      "Una película sobre una familia mafiosa italiana en Nueva York.",
      "el_padrino.jpg",
      "Drama",
      1972,
      175,
      "Estados Unidos",
      "Francis Ford Coppola",
      ["Marlon Brando", "Al Pacino", "James Caan"]
    );
    console.log(peliculaNueva); // "El Padrino"
    //la voy agregar en un array
    listaPeliculas.push(peliculaNueva);
    console.log(listaPeliculas);
    //almacenar el array de pelis en localsotarge
    localStorage.setItem("listaPeliculas", JSON.stringify(listaPeliculas));
    //cerrar el modal con el formulario
  } else {
    // mostrar al usuario el cartel de error
    let alerta = document.getElementById('alerta');
    alerta.innerHTML = resumen;
    alerta.className = 'alert alert-danger mt-3'
  }
}
