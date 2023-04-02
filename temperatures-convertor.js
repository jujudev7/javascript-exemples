let celsius = 20;
// we create a variable named celsius, with a constant value equal to 293
let kelvin = celsius + 273.15;
/* we create a variable named kelvin 
we need to substract 273 from celsius to convert it */
// celsius = Math.floor(celsius);
// we need to apply a Math method to kelvin in order to avoid decimal number
let fahrenheit = celsius * (9/5) + 32;
// we create a variable named fahrenheit with the equation to calculate the conversion
fahrenheit = Math.floor(fahrenheit);
// we need to apply a Math method to fahrenheit in order to avoid decimal number
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${kelvin} degrees Kelvin.`);