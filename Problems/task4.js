// ### Task-4: 
// Write a function to find the longest word in a given string.

// sample-input: 
// I am learning Programming to become a programmer

// sample-output: Programming

const findLongestWord = (str) => {
    const newArray = str.split(' ')
    let longest = newArray[0];
    for (const item of newArray){
        if(item.length > longest.length){
            longest = item;
        }
    }
    return longest;
}
const tallestWord = findLongestWord('I am learning Programming to become a programmer')
console.log(tallestWord)
