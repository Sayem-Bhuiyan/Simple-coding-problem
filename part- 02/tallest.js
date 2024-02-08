// Find the tallest person from this array

const heights = [65, 66, 68, 72, 67, 60, 75];
const findTallest = (heights) => {
    let max = heights[0];
    for(const height of heights){
        if(height > max){
            max = height
        }
    }
    return max;
}

const tallestPerson = findTallest(heights)
console.log(tallestPerson)


// ------------ Method 2 ---------------
// Find the smallest person from the array

const findSmallest = (heights) => {
    let smallest = heights[0]
    for(const height of heights){
        if(height > smallest){
            smallest = height
        }
    }
    return smallest;
}

const smallestPerson = findSmallest