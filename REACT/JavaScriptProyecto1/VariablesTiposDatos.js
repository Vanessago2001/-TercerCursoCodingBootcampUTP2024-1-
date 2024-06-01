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
// Conversor de temperatura

function conversor () {
    console.log('\nBienvenid@ al conversor de grados celsius a grados fahrenheit');
    
    const tempCelsius = parseFloat(prompt('Por favor ingresa el grado celsiu que deseas convertir: '));
    const tempToFahrenheit = (9 / 5) * tempCelsius + 32;
    console.log(`${tempCelsius}°C son ${tempToFahrenheit.toFixed(2)}°F`);
};


// Calculadora de IMC

function calculadora () {
    console.log('\nBienvenid@ a la calculadora IMC');
    
    const peso = parseFloat(prompt('Por favor, ingresa tu peso en kilogramos: '));
    const altura = parseFloat(prompt('Por favor, ingresa tu altura en metros: '));
    const IMC = peso / (altura ** 2);
    //const IMCRedondeado = Math.round(IMC * 100) / 100;
    console.log(`\nTu índice de masa corporal (IMC) es: ${IMC.toFixed(2)}`);
};


// Generador de nombre de usuario 

function nombreDeUsuario () {
    console.log('\nBienvenid@ al generador de nombre de usuario');

    const nombre = prompt('Ingrese su nombre: ');
    const apellido = prompt('Ingrese su apellido: ');
    const añoDeNacimiento = prompt('Ingrese su año de nacimiento: ');
    const resultado = nombre+apellido+añoDeNacimiento;
    console.log(`Su nombre de usuario es: ${resultado}`);
}


//  Funcion Fibonacci 

function Fibonacci () {
    console.log('\nBienvenid@ a la Funcion Fibonacci');

    function funccion (n) {
        if (n <= 1) {
            return n;
        }
        let dato1 = 0;
        let dato2 = 1;

        for (let i = 2; i <= n; i++) {
            const dato3 = dato1 + dato2;
            dato1 = dato2;
            dato2 = dato3;
        }
        return dato2;
    };
    const n = parseInt(prompt('Ingrese el valor de n: '));
    const respuesta = funccion(n);
    console.log(`El ${n} número de Fibonacci es: ${respuesta}`);
};


// menu 
function menu() {
    console.log('\nMenú');
    console.log('1). Conversor de °C a °F.');
    console.log('2). Indice de masa corporal.');
    console.log('3). Creador de nombre de usuario.');
    console.log('4). Función Fibonacci.');
    console.log('5). Salir del menú');

    let option = prompt('Seleccione una opción del menu: ');

    switch(option) {
        case '1':
            console.log('\nHas seleccionado la opcion 1.');
            conversor();
            menu();
            break; 

        case '2':
            console.log('Has seleccionado la opcion 2.');
            calculadora();
            menu();
            break; 

        case '3':
            console.log('Has seleccionado la opcion 3.');
            nombreDeUsuario();
            menu();
            break;

        case '4':
            console.log('Has seleccionado la opcion 4.');
            Fibonacci();
            menu();
            break;
            
        case '5':
            break;

        default:
            console.log('\nNo has seleccionado ninguna opción del menú.')
            menu();
    };
};
menu();