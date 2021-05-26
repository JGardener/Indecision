// import './utils.js';
// import square from './utils.js';

import maths, { square, add } from './utils.js'
import seniorCitizen, { isAdult, canDrink } from './person'

console.log("Hello");
console.log(square(12));
console.log(add(24,8));
console.log(isAdult(25));
console.log(canDrink(13));
console.log(maths(2,1))
console.log(seniorCitizen(25))

/* 
Because subtract is the default export from utils, note the word default, 
you can name it whatever you want here, but stick with the name of the function
so it makes sense to other devs and you later. 
I named it maths
*/

/* 
isSenior is coming from the person.js file. 
Due to it being a default export, I can name it whatever I want here
I named it seniorCitizen
*/
