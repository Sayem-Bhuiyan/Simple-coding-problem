// ### Task-2: 
// You are given an array of numbers. Count how many times the a number is repeated in the array. 

// sample-input: 
// numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// <br/>

// sample-input: 

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

const numbers = [5,6,11,12,98, 5];

const findRepeatedNumber = (arr, number) => {
    let repeated = 0;
    for(const item of arr){
        if(item === number){
            repeated += 1;
        }
    } 
    return repeated;
}

const findRepeated = findRepeatedNumber(numbers, 5)
console.log(findRepeated);