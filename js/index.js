/**  Ejercicio 6:
Crear una función de multiplicación que recibe dos parámetros.
Las condiciones son:
*Los parámetros se multiplican entre si en el caso de que ambos sean positivos. 
Mostrar el resultado de la cuenta en la consola.
*Si unos o ambos números no son positivos no realizar la multiplicación y mostrar un mensaje de error en la consola.
*/
function multiplicar (num1, num2){
    if (num1 > 0 && num2 > 0) {
        console.log(num1*num2);
    }else{
        console.error("Ambos números deben ser positivos")
    }
}

let resultado = multiplicar(-3,2);
console.log(resultado);