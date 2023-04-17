import Pelicula from "./classPelicula.js";

let formularioAdminPelicula = document.getElementById('formPelicula');
let listaPeliculas = [];

formularioAdminPelicula.addEventListener('submit', prepararFormulario);

function prepararFormulario(e){
    e.preventDefault();
    console.log('aqui creo la peli');
   crearPelicula();
}

function crearPelicula(){
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
      listaPeliculas.push(peliculaNueva)  
      console.log(listaPeliculas);
      //almacenar el array de pelis en localsotarge
      localStorage.setItem('listaPeliculas', JSON.stringify(listaPeliculas));  
      //cerrar el modal con el formulario
}