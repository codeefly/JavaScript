// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const array1 = [1,2,3,4,5]

const asd = function(a, b){
    return a + b
}

console.log(array1.reduce(asd));
console.log(array1.reduce(asd, 5));

// 


const array2 = [1, 2, 3, 4];
const xyz = (a, b) => a + b;

// 1 + 2 + 3 + 4
console.log(array2.reduce(xyz));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array2.reduce(xyz, 5));