// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const array1 = [1,2,3,4,5]

const reducer = array1.reduce(function(a , b){
    return a + b
});

console.log(reducer);