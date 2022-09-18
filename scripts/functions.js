'use strict'

function letras(cadena) {
	return cadena.length;
}

function palabras(cadena) {
	let palabras = cadena.split(' ');
	return palabras.length;
}

function maysc(cadena) {
	return cadena.toLocaleUpperCase();
}

function titulo(cadena) {
	let palabras = cadena.split(' ');

	let a = [];

	for(let i = 0; palabras.length > i; i++) {
		a.push(palabras[i].charAt(0).toLocaleUpperCase() + palabras[i].substring(1));
	}

	let frase = a.join(' ');

	return frase;

}

function letrasReves(cadena) {

	let letrasReves = cadena.split('').reverse().join('');

	return letrasReves;
}

function palabrasReves(cadena) {
	let palabrasReves = cadena.split(' ').reverse().join(' ');

	return palabrasReves;
}

function palindromo(cadena) {

	let frase = cadena.replace(/ /g, "").toLocaleLowerCase();

	let x = 1;

	for(let i = 0; i < frase.length; i++) {
		if(frase[i] != frase[frase.length - x]) {
			return false;
		}
		x++;
	}

	return true;
}

module.exports = {
	letras,
	palabras,
	maysc,
	titulo,
	letrasReves,
	palabrasReves,
	palindromo
}