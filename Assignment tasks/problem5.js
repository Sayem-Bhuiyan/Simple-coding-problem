

function monthlySavings(arr , livingCost) {
    if(!Array.isArray(arr) || typeof livingCost !== 'number'){
        return "invalid input";
    }
    let sum = 0;
    for(const item of arr){
        if(item >= 3000){
            const payment = item - (item * (20 / 100));
            sum += payment;
        }
        else{
            sum += item;
        }
    }

    const savings = sum - livingCost;
    if(savings > 0){
        return savings;
    }
    else if(savings < 0){
        return "earn more"
    }
}

console.log(monthlySavings([1000, 2000, 2500], 50088));