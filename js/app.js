//leer en el localstorage si almacenamos un color de theme
let temaConfigurado = JSON.parse(localStorage.getItem("tema")) || "dark";
console.log(temaConfigurado);
cambiarTema(temaConfigurado);

let btnThemeDark = document.querySelector("#btnThemeDark");
let btnThemeLight = document.querySelector("#btnThemeLight");

btnThemeDark.addEventListener("click", () => cambiarTema("dark"));
btnThemeLight.addEventListener("click", () => cambiarTema("light"));

function cambiarTema(color) {
  document.querySelector("html").setAttribute("data-bs-theme", color);
  //guardar en localstorage
  localStorage.setItem("tema", JSON.stringify(color));
  //actualizar el icono
  if (color === "dark") {
    //si el color en oscuro agrego el tema oscuro de sweetalert
    document.querySelector("head").innerHTML +=
      ' <link href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet" >';
    document.querySelector("#themeScript").src =
      "https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js";
  } else {
     //si el color es claro, cambio por el script correspondiente y quito el estilo del tema oscuro
    document.querySelector("#themeScript").src =
      "https://cdn.jsdelivr.net/npm/sweetalert2@11.7.3/dist/sweetalert2.all.min.js";
    if (document.getElementsByTagName("link").length === 4) {
      console.log(document.getElementsByTagName("link")[3].remove());
    }
  }
}
