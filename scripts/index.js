'use strict'

let fraseUsuario = "la ruta nos aporto otro paso natural";

console.log(letras(fraseUsuario) + ' letras y ' + palabras(fraseUsuario) + ' palabras');

console.log(maysc(fraseUsuario));

console.log(titulo(fraseUsuario));

console.log(letrasReves(fraseUsuario));

console.log(palabrasReves(fraseUsuario));

if (palindromo(fraseUsuario)) {
    console.log('Si es un palindromo');
} else {
    console.log('No es un palindromo');
}