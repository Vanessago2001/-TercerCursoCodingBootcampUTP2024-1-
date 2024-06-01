/*
- Fecha de publicación: 14 de abril del 2024
- Hora: 6:00 PM
- Versión de su codigo: 11
- Autores del lenguaje utilizado: ECMASCRIPT 6.0 (javascrit 6.0)
- Versión del lenguaje utilizado: 6.0
- Presentado por:   Ingeniero Camilo Giraldo
                    Ingeniera Angie Guazaquillo
- Universidad Tecnológica de Pereira
- Programa de Ingenieria de Sistemas y Computación
- Descripcion del programa:
En el menu podemos encontrar los indices de la primera peticion los cuales son:
1 Un Conversor de temperatura o conversor el cual usa la fórmula para convertir de
celsius a fahrenheit es (9/5 * C°) + 32 
2 Una calculadora  de IMC solicitamos la informacion del peso en kilogramos y la 
estatura en metros  y para calcular el IMC usamos la formula Peso/(Altura)^2
3 El generador de nombre de usuario: solicitamos el nombre, apellido y año de nacimiento
junto a esta informacion generamos el nombre de usuario
4 La funcion Fibonacci (con ciclos) suma los dos numeros anteriores dados por ustedes
5 Y la ultima opcion de este menu es la salida de este

En el archivo de EstructurasDeControl.js existe el menu de Estructura de Control en el cual
se encuentran los siguientes indices:
1 Adivina  el Numero en este indice realiza una interaccion con el usuario al preguntar que 
numero es del 1 al 100, si no es el correcto este dira si el numero es mas bajo o alto
2 Calculadora facturial solicitamos un numero al usuario y le responderemos con el numero 
factorial del antes mencionado
3 Contador de Vocales al proporcionarnos una frace o palabra la funcion contara las vocales en esta
4 Salir este nos cerrara el menu al no escoger ninguna de las anteriores

Y en el archivo Listas.js no tenemos lista, pero tenemos tres listas las cuales hacen:
-  La primera funcion nos indica cual de los numeros en la lista es el menor y el mayor
-  La segunda funcion concatena las dos listas y organizarla de menor a mayor
-  La tercera funcion invierte el orden de los numero dentro de una lista 
*/

const prompt = require('prompt-sync')();

// Adivina el numero [0,100)
function adivinaElNumero () { //Esta función genera un número aleatorio entre 0 al 99 y tambien me adivina el numero y la veces que se intento
    
    console.log('Bienvenid@, adivina el número entre 0 y 99.');
    const getRandomInt = Math.floor(Math.random() * 100);
    let intentos = 0;
    let adivinado = false;

    while (!adivinado) {
        const dato = parseInt(prompt('Adivina el número: '));

        if (dato === getRandomInt) {
            adivinado = true;
            console.log(`Felicidades adivinaste el número en ${intentos} intentos.`);
        } else if (dato < getRandomInt) {
            console.log('El número es demasiado bajo, intenta de nuevo');
        } else {
            console.log('El número es demasido alto');
        };
        intentos++
    };
    
};



// Calculadora de factorial
function calFactorial () {
    console.log('Bienvenid@ a la calculadora factorial.')
    let n = parseInt(prompt('Ingrese un número para calcular su factorial: '));
    let factorial = 1;
    let resultado = 1;

    while(factorial <= n) {
        resultado = factorial * resultado
        factorial++
    };
    console.log(`El factorial de ${n} es: ${resultado}`);
};


// Contador de vocales
function contadorDeVocales () {//En esta función toma una frase ingresada y realizada un conteo de cuantas vocales tiene la frase y devulve el resultado de la cantidad de vocales se encuentra 
    const frase = prompt('Ingresa la frase: ');
    let vocalA = (frase.match(/[a]/gi) ?? []).length;
    let vocalE = (frase.match(/[e]/gi) ?? []).length;
    let vocalI = (frase.match(/[i]/gi) ?? []).length;
    let vocalO = (frase.match(/[o]/gi) ?? []).length;
    let vocalU = (frase.match(/[u]/gi) ?? []).length;

    console.log(`La frase ${frase} tiene las siguinetes vocales:`)
    console.log(`a está ${vocalA} vez.`)
    console.log(`e está ${vocalE} vez.`)
    console.log(`i está ${vocalI} vez.`)
    console.log(`o está ${vocalO} vez.`)
    console.log(`u está ${vocalU} vez.`)
};


// menu 
function menu() {
    console.log('\nMenú');
    console.log('1). Adivina el número.');
    console.log('2). Calculadora factorial.');
    console.log('3). Contador de vocales.');
    console.log('4). Salir del menú');

    let option = prompt('Seleccione una opción del menu: ');

    switch(option) {
        case '1':
            console.log('\nHas seleccionado la opcion 1.');
            adivinaElNumero();
            menu();
            break;
        
        case '2':
            console.log('Has seleccionado la opcion 2.');
            calFactorial();
            menu();
            break;
        
        case '3':
            console.log('Has seleccionado la opcion 3.');
            contadorDeVocales();
            menu();
            break;

        case '4':
            break;

        default:
            console.log('\nNo has seleccionado ninguna opción del menú.')
            menu();
    };
};
menu();
