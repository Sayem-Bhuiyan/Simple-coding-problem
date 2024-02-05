// ### Task-3: 
// Your task is to calculate the `total budget` required to buy electronics:

//         laptop = 35000 tk
//         tablet = 15000 tk
//         mobile = 20000 tk

// Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.

const calculateElectronicsBudget = (laptopQuantity, tabletQuantity, mobileQuantity) => {
    const totalLaptopPrice = 35000 * laptopQuantity;
    const totalTabletPrice = 15000 * tabletQuantity;
    const totalMobilePrice = 20000 * mobileQuantity;

    const totalMoney = totalLaptopPrice + totalMobilePrice + totalTabletPrice;
    return totalMoney;
}

console.log(calculateElectronicsBudget(1, 2, 3))