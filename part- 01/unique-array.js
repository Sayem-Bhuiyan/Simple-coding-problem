/**
 * array has some duplicate elements
 * []
 * 
 * */ 

const biryaniKhor = ['abul', 'sabul', 'kabul', 'abul', 'babul']
const numbers = [1, 2, 3, 4, 5, 3, 2, 1]


// Method 1--------
let uniqueList = [];
for(const name of biryaniKhor){
    if(uniqueList.includes(name)){
        continue;
    }
    else{
        uniqueList.push(name)
    }
}

console.log(uniqueList)


// ----Method 2 --------
const uniqueFinder = (arr) => {
    let uniqueArray = [];
    for (const element of arr){
        if(uniqueArray.includes(element)){
            continue;
        }
        else{
            uniqueArray.push(element)
        }
    }
    return uniqueArray;
}

const uniqueNumber = uniqueFinder(numbers);
console.log(uniqueNumber);