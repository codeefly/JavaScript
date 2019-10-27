// every() method returns boolean value


var array1= [1, 30, 39, 29, 10, 13];

function abc (currentValue){
    return currentValue < 40;
}

console.log(array1.every(abc));



var array2= [1, 30, 39, 29, 10, 13];

function abcd (currentValue){
    return currentValue >= 40;
}

console.log(array2.every(abcd));


// arrow function

var array3 = [12, 5, 8, 130, 44]

console.log(array3.every(x => x >= 10));