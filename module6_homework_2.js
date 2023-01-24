/* Задание 2 Модуль 6.4 */


function primeNumber (num){
    if ((num > 1000) || (num < 2)) {
        return console.log ('данные неверны')
    }
    else {
        for (let i = 2; i < num; i++){
            if (num === 0) {
                return console.log ('сложное число')
            }
        }
        return console.log ('простое число')
    }
}

primeNumber (1001);