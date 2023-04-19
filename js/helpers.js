function validarCantidadCaracteres(texto, min, max){
    if( texto.length >= min && texto.length <= max){
        console.log('dato correcto');
        return true;
    }else{
        console.log('dato erroneo');
        return false
    }
}


//https://gjdhgjdhkgjhdkjghdkfgh/jhgdjhgdfjh-gdgfjhhj.jpg

function validarDuracion(tiempo){
    let patron = /^\d{2,3}$/;
    if(patron.test(tiempo)){
        console.log('la expresion regular funciona');
        return true
    }else{
        console.log('la expresion regular fallo');
        return false
    }
}
function validarURLImagen(imagen){
    let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;
    if(patron.test(imagen)){
        console.log('la expresion regular de la imagen funciona');
        return true
    }else{
        console.log('la expresion regular de la imagen fallo');
        return false
    }
}



export function sumarioValidacion(titulo, descripcion, duracion, imagen){
    let resumen= '';
    if(!validarCantidadCaracteres(titulo,2,100)){
        resumen += 'El titulo debe tener entre 2 y 100 caracteres <br>'
    }
    if(!validarCantidadCaracteres(descripcion,5,500)){
        resumen += 'La descripcion debe tener entre 5 y 500 caracteres <br>'
    }
    if(!validarDuracion(duracion)){
        resumen += 'La duracion de la pelicula debe ser minutos (entre 2 y 3 caracteres numericos) <br>'
    }
    if(!validarURLImagen(imagen)){
        resumen += 'La imagen de la pelicula debe ser una URL valida terminada en (.jpg, .png o .gif) <br>'
    }
    return resumen;
}