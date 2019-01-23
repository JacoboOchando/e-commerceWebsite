var string = "hello world";
var number = 2;
var boolean = true;
var array = new Array("hello", 4, false);
var array2 = ["adios", 0, true];

var object = {
    "nombre": "Javier",
    "apellido": "Guijarro",
    "clave": "valor",
    "string": string,
    "array": array2[1],
};

const constante = "Hello";
//constante ="Hola"; !NO HAY QUE DARLE VALOR A CONSTANTES PUES YA TIENEN UN VALOR DEFINIDO Y CONSTANTE


function name() {
    var a = JSON.stringify(object);
    console.log(a);
}

function suma(a, b) {
    return a + b;
}

function log(value) {
    console.log(value);
}

name();
var resultadoSuma = suma(5, 6);
log(resultadoSuma);

 function operation(a,b,c){
    var halfOperation = a + b;
    var totalOperation= halfOperation*c;
    return totalOperation;
}

var operationResult = operation (2,3,5);

log(operationResult);

log("The operation result is " + operationResult);
log(`The 
operation
 result 
 is: 
 ${operationResult+3}`);


