// 12 inch = 1 feet

const inchToFeet = (inch) => {
    let feet = inch / 12;
    feet =  feet.toFixed(1)
    return feet;
}

const height = inchToFeet(67.35);
// console.log(height)

const inchToFeet2 = (inch) => {
    let feet = inch / 12;
    const feetNumber = parseInt(feet);
    let inchNumber = inch % 12;
    const inchReminder = parseInt(inchNumber)
    const height = `${feetNumber} ft ${inchReminder} inch`;
    return height
}

const sayemHeight = inchToFeet2(75);
// console.log(sayemHeight)


// convert miles to kilometer
// 1 miles = 1.60934 km

const milesToKilometer = (miles) => {
    const kilometer = miles * 1.60934;
    const km = kilometer.toFixed(1)
    return km;
}

const totalDistance = milesToKilometer(7);
console.log(totalDistance)