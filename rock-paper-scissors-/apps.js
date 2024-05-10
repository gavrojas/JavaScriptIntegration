//*Código realizado por Nicole Rojas, Edwars Munar, Maria Victoria Silva y Gabriela Rojas
// Situación 2 (piedra, papel o tijera)
// Se requiere construir un programa que le solicite al usuario una palabra (piedra, papel o
// tijera) y compararla con otra que aleatoriamente obtiene la computadora: a) Tener en
// cuenta las reglas del juego “piedra, papel o tijera” para comprar las palabras y decidir
// quién gana. b) el usuario puede poner las palabras en mayúsculas/minúsculas, tener en
// cuenta esto para comparar con la palabra que elige la computadora. c) en el caso de que
// las palabras sean las mismas el programa debe retornar “empate”. d) un saludo final

//*Opciones de rta 
// inputUsuario - computadora
// piedra = piedra --> empate 
// piedra - tijera --> gana usuario 
// papel - piedra --> gana usuario 
// tijera - papel --> gana usuario 
// papel - tijera --> gana computadora 
// tijera - piedra --> gana computadora 
// piedra - papel --> gana computadora 

let inputUsuario = prompt("Ingresa tu jugada: piedra, papel o tijera.")
//inputUsuario = "tijera"
inputUsuario = inputUsuario.toLocaleLowerCase()

while (inputUsuario !== "piedra" && inputUsuario !== "papel" && inputUsuario !== "tijera"){
    inputUsuario = prompt("Debes ingresar una opción válida. Ingresa tu jugada: piedra, papel o tijera.")
    inputUsuario = inputUsuario.toLocaleLowerCase()
}

console.log("El usuario escogió: " + inputUsuario);

let arrayOpciones = ["piedra", "papel", "tijera"]

//generamos índice
let i = Math.floor(Math.random() * 3);
console.log("La computadora escogió: " + arrayOpciones[i]);

function partida(inputUsuario, arrayOpciones) {
    if (inputUsuario === arrayOpciones[i]){
        console.log("Empate");
    }
    
    else if ((inputUsuario === "piedra" && arrayOpciones[i] === "tijera") || (inputUsuario === "papel" && arrayOpciones[i] === "piedra") || (inputUsuario === "tijera" && arrayOpciones[i] === "papel")) {
        console.log("Ganaste");
    }
    
    else {
        console.log("Perdiste");
    }
}

partida (inputUsuario, arrayOpciones)

console.log("Gracias por participar");

















