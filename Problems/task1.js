// ### Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.


const celciusToFahrenheit = (celcius) => {
    const fahrenheit = (celcius * (9 / 5)) + 32;
    return fahrenheit;
}

const fahrenheit = celciusToFahrenheit(2);
console.log(fahrenheit, 'Fahrenheit')