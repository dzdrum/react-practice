console.log('utils.js is running');

export const square = (x) => x*x;

export const add = (a, b) => a + b;

export default (a, b) => a - b;

//you can only have one default export
//export { square, add, subtract as default };




//this is not an object definition
//references to thins you want to export
//export { square, add };

//exports - default export or  - as many named exports as you would like