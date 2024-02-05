// ### Task -1: 
// Find the lowest number in the array below.
// <br>
// `const heights2 = [167, 190, 120, 165, 137];`


const heights2 = [167, 190, 120, 165, 137, 110];

const findLowestNumber = (arr) => {
    let lowest = arr[0];
    for(const num of arr){
        if (num < lowest){
            lowest = num;
        }
    }
    return lowest;
}

console.log(findLowestNumber(heights2))