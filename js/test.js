//ES6
//Prototipos con sistatis de clases
class VideoJuego {
  //metodo cosntructor
  constructor(paramNombre, genero, precio, desarrollador) {
    this._genero = genero;
    this._nombre = paramNombre;
    this._precio0 = precio;
    this._desarrollador = desarrollador;
    this._valoracion = 0; //propiedad por defecto
  }
  //set y get propiedades computadas
  get genero() {
    return this._genero;
  }
  set genero(nuevoGenero) {
    if (nuevoGenero.length > 0) {
      this._genero = nuevoGenero;
    }
  }
  //metodos
}
const stardewValley = new VideoJuego(
  "Stardew Valley",
  "Simulador de Granja",
  150,
  "Apend"
);
console.log(stardewValley);
document.write(
  `<p>El juego ${stardewValley._nombre} tiene valoracion ${stardewValley._valoracion} </p>`
);
document.write(
  `<p>El juego ${stardewValley._nombre} tiene el genero ${stardewValley.genero} </p>`
);
//modificar el genero:
stardewValley.genero = "la mejor granjita";
document.write(
  `<p>El juego ${stardewValley._nombre} tiene el genero ${stardewValley.genero} </p>`
);
