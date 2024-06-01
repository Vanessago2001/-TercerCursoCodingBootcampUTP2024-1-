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

// Mayores y menores
// Crear lista de los numeros disponibles
function mayoresMenores () {
    let numeros = [5, 12, 3, 8, 1]

    let mayor = Math.max(...numeros);
// Encontrar el mayor numero

    let menor = Math.min(...numeros);
// Encontrar el menor numero

    console.log("el mayor numero es:", mayor);
    console.log("el menor numero es", menor);
};

// Concatenación de Listas
function concatenarListas () {
    //crear listas 
    let lista1 =[4, 9, 2]
    let lista2 =[7, 5, 1]

    // combinar las listas
    let ListaCombinada = lista1.concat(lista2);
    
    ListaCombinada.sort(function(a,b) {
        return a-b;
    });
    console.log("Concatenaciòn de listas ordenadas", ListaCombinada);
};

// Inversión de una lista 
function inversionLista () {
    let lista =[ 3, 6, 9, 12, 15];
    let listainvertida = invertirlista (lista);

    function invertirlista (lista) {
        let  listainvertida = lista.slice();
        listainvertida . reverse ();
        return listainvertida;
    };
    console . log("lista original",lista);
    console . log("lista invertida",listainvertida);
};
mayoresMenores();
console.log('\n');
concatenarListas();
console.log('\n');
inversionLista();
