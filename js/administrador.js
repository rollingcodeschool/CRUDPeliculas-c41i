import Pelicula from "./classPelicula.js";
import { sumarioValidacion } from "./helpers.js";

//variables globales
let listaPeliculas = JSON.parse(localStorage.getItem("listaPeliculas")) || [];
//saber si el array esta no vacio
if (listaPeliculas.length !== 0) {
  //quiero que sean objetos de tipo pelicula
  listaPeliculas = listaPeliculas.map(
    (pelicula) =>
      new Pelicula(
        pelicula.codigo,
        pelicula.titulo,
        pelicula.descripcion,
        pelicula.imagen,
        pelicula.genero,
        pelicula.anio,
        pelicula.duracion,
        pelicula.pais,
        pelicula.director,
        pelicula.reparto
      )
  );
}
console.log(listaPeliculas);

let formularioAdminPelicula = document.getElementById("formPelicula");
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
let modalFormPelicula = new bootstrap.Modal(
  document.getElementById("modalPelicula")
);
console.log(modalFormPelicula);
let btnCrearPelicula = document.getElementById("btnCrearPelicula");

//manejadores de eventos
formularioAdminPelicula.addEventListener("submit", prepararFormulario);
btnCrearPelicula.addEventListener("click", mostrarFormularioPelicula);

cargaInicial();

function cargaInicial() {
  if (listaPeliculas.length > 0) {
    //dibujo una fila en la tabla
    listaPeliculas.map((pelicula, indice) => crearFila(pelicula, indice + 1));
  }
}

function crearFila(pelicula, indice) {
  let tbody = document.querySelector("#tablaPelicula");
  tbody.innerHTML += `<tr>
  <td scope="col">${indice}</td>
  <td>${pelicula.titulo}</td>
  <td class="tamanioCelda text-truncate">
    ${pelicula.descripcion}
  </td>
  <td class="tamanioCelda text-truncate">
    ${pelicula.imagen}
  </td>
  <td>${pelicula.genero}</td>
  <td>
    <button class="btn btn-warning" onclick="prepararPelicula('${pelicula.codigo}')" >
      <i class="bi bi-pencil-square"></i>
    </button>
    <button class="btn btn-danger" onclick="borrarPelicula('${pelicula.codigo}')">
      <i class="bi bi-x-square"></i>
    </button>
  </td>
</tr>`;
}

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
      undefined,
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
    guardarEnLocalstorage();
    //cerrar el modal con el formulario
    limpiarFormulario();
    //dibujar la fila nueva en la tabla
    crearFila(peliculaNueva, listaPeliculas.length);
    modalFormPelicula.hide();
  } else {
    // mostrar al usuario el cartel de error
    let alerta = document.getElementById("alerta");
    alerta.innerHTML = resumen;
    alerta.className = "alert alert-danger mt-3";
  }
}

function guardarEnLocalstorage() {
  localStorage.setItem("listaPeliculas", JSON.stringify(listaPeliculas));
}

function limpiarFormulario() {
  formularioAdminPelicula.reset();
}

function mostrarFormularioPelicula() {
  modalFormPelicula.show();
}

window.borrarPelicula = (codigo) => {
  Swal.fire({
    title: "¿Esta seguro de eliminar la pelicula?",
    text: "No se puede revertir este proceso",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    console.log(result);
    if (result.isConfirmed) {
      //agrega mi codigo de borrar
      //borrar la pelicula del array
      let posicionPeli = listaPeliculas.findIndex(
        (pelicula) => pelicula.codigo === codigo
      );
      listaPeliculas.splice(posicionPeli, 1);
      //actualizar el localstorage
      guardarEnLocalstorage();
      //borrar la fila de la tabla
      let tbody = document.querySelector("#tablaPelicula");
      tbody.removeChild(tbody.children[posicionPeli]);
      //todo: actualizar el numero de  las filas de la tabla
      Swal.fire("Pelicula eliminada", "La pelicula seleccionada fue eliminada correctamente", "success");
    }
  });
};

window.prepararPelicula = (codigoPelicula)=>{
  //1- buscar el objeto que quiero mostrar en el form
    let peliculaBuscada = listaPeliculas.find((pelicula)=> pelicula.codigo === codigoPelicula);
    console.log(peliculaBuscada);
  //2- mostrar el formulario con los datos
  modalFormPelicula.show();
  codigo.value = peliculaBuscada.codigo;
  titulo.value = peliculaBuscada.titulo;
  imagen.value = peliculaBuscada.imagen;
  descripcion.value = peliculaBuscada.descripcion;
  pais.value = peliculaBuscada.pais;
  genero.value = peliculaBuscada.genero;
  reparto.value = peliculaBuscada.reparto;
  director.value = peliculaBuscada.director;
}
