// fill() method returns the modified array

var array1 = ['1','2','3','4','5'];

console.log(array1.fill(6, 2)); // output : [ '1', '2', 6, 6, 6 ]
console.log(array1.fill(2, 2, 3)); // output : [ '1', '2', 2, 6, 6 ]
console.log(array1.fill(2)); // output: [ 2, 2, 2, 2, 2 ]