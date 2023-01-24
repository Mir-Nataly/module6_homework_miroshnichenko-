/* Задание 4 Модуль 6.7 */

function getNumber (a, b) {
    let i = setInterval (() => {
        console.log (a++);
        if (a > b) clearInterval (i);
    }, 1000)
}
getNumber (5, 15)