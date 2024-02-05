// ### Task-3: 
// Write a function to count the number of vowels in a string.

const findVowels = (str) => {
    
    let count = 0;
    for(const char of str){
        const charecter = char.toLowerCase();
        if (charecter === 'a' || charecter === 'e' || charecter === 'i' || charecter === 'o' || charecter === 'u'){
            count += 1;
        }
    }
    return count;
}

const vowel = findVowels('Sayem Bhuiyan');
console.log(vowel)