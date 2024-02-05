// ### Task -2: 
// Find the friend with the smallest name.
// <br>
// `const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`


const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const findSmallestName = (names) => {
    let smallest = names[0];
    for(const name of names){
        if(name.length < smallest.length){
            smallest = name;
        }
    }
    return smallest;
}

console.log(findSmallestName(names))