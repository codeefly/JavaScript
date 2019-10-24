/*
    concat()
    1. Merge two or more arrays
    2. Not change existing array
    3. returns new array
    
*/


/*
    Concatenating two arrays
    Concatenating three arrays
    Concatenating values to an array
    Concatenating nested arrays
    
*/



// Concatenating two arrays

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f']

console.log(array1.concat(array2)); //output: [ 'a', 'b', 'c', 'd', 'e', 'f' ]





// Concatenating three arrays

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

console.log(num1.concat(num2, num3)); // output : [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]




// Concatenating values to an array

const letters = ['a', 'b', 'c'];

const alphaNumeric = letters.concat(1, 2, 3);
const alphaNumeric1 = letters.concat(1, [2, 'ab']);
const alphaNumeric2 = letters.concat(1, 'saiful');

console.log(alphaNumeric); //
console.log(alphaNumeric1); //
console.log(alphaNumeric2); //



// Concatenating nested arrays

const num4 = [
    [1]
];
const num5 = [2, [3]];

const numbers = num4.concat(num5);
console.log(numbers);

num4[0].push(4);
num5[1].push(5);

console.log(numbers);