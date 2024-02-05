/**
 * 1. function takes an array as parameter
 * 2. give me the avarage of the odd number from the array
 * 
*/

const oddAvarage = (array) => {
    const oddNumber = [];
    let sum = 0;
    for ( const number of array){
        if (number % 2 === 1){
            oddNumber.push(number)
            sum = sum + number;
        }
    }
    const count = oddNumber.length;
    const avarage = sum / count;
    const avg = parseFloat(avarage.toFixed(2));
    return avg;
}

const numbers = [23, 45, 34, 78, 33, 21, 35, 98, 7]
const avg = oddAvarage(numbers)
console.log("Avarage of the numbers is: ", avg)