

function checkName(name){
    if(typeof name !== 'string'){
        return "invalid";
    }
    const lastWord = name[name.length -1]
    const word = lastWord.toLocaleLowerCase()
    
    if(word === "a" || word === "y" || word === 'i' || word === 'e' || word === 'o' || word === 'u' || word === 'w'){
        return "Good Name"
    }
    else{
        return "Bad Name"
    }
}
console.log(checkName(199))