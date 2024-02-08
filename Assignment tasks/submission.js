
function calculateMoney(ticketSale) {
    if(ticketSale < 0){
        return "Invalid Number";
    }
    const totalEarn = ticketSale * 120;
    const totalCost = 500 + (8 * 50);
    const remaining = totalEarn - totalCost;
    return remaining;  
}

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

console.log(deleteInvalids([1, 2, -3]))