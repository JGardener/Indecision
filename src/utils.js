console.log("Utils.js is running!");

const square = (x) => x *= x;
const add = (a, b) => a + b;
const minus = (a,b) => a - b;

export { square, add };
export default minus; 

/* 
You can also write this, if you wish: 
export { square, add, minus as default }
*/
