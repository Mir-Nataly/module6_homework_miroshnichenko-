/* Задание 3 Модуль 6.5 */


function getNumber (a){
    return function (b) {
        return a + b
    }
}

let result = getNumber (10)(5);
console.log (result)