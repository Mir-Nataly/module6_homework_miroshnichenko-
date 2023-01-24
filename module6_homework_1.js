/* Задание 1 Модуль 6.2 */

function getNumbersView (){
    let arr = [0, 1, 2, null, "a"];
    let evenNumbers = 0;
    let oddNumbers = 0;
    let zeroNumbers = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
        if (arr[i] === 0) {
            zeroNumbers += 1;
        } 
        else if (arr[i] % 2 === 0) {
            evenNumbers += 1;
        } 
        else {
            oddNumbers += 1;
        }
      }
    }
    console.log('четных: ', evenNumbers)
    console.log('нечетных: ', oddNumbers)
    console.log('нулей: ', zeroNumbers)
    }
    getNumbersView ();