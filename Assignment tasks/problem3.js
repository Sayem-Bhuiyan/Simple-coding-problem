function deleteInvalids(array){
    if(!Array.isArray(array)){
        return "Please Provide an array."
    }

    let numbers = [];
    for(const item of array){
        if(typeof item === 'number' && !isNaN(item)){
            numbers.push(item)
        }
    }

    return numbers;
}

const numbers = deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], {ob: 'lala'}])
const another = deleteInvalids(["1", {num: 2}, NaN])
const anotherSample = deleteInvalids({num: [1, 2, 3]})
console.log(numbers);
console.log(another)
console.log(anotherSample)
console.log(deleteInvalids([1, 2, -3]))