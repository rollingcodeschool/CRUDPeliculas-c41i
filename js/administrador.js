import Pelicula from "./classPelicula.js";

let formularioAdminPelicula = document.getElementById('formPelicula');
formularioAdminPelicula.addEventListener('submit', prepararFormulario);

function prepararFormulario(e){
    e.preventDefault();
    console.log('aqui creo la peli')

    const pelicula1 = new Pelicula(
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
      
      console.log(pelicula1); // "El Padrino"
}