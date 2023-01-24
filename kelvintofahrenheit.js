// Today's forecast in Kelvin
const Kelvin= 293;
// Today's forecast in celsius
const celsius = Kelvin - 273;
// Today's forecast in fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Today's forecast in Fahrenheit rounded down
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
