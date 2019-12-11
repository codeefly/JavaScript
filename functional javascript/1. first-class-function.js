// First Class Function

function sayName(name) {
    return 'Hello,' + name;
}

// 1. A function can be stored in a variable.

var hello = sayName;

var res = hello;

var anhello = res;

console.log(anhello('Hi'));


var fun = sayName('Saiful');

console.log(fun);



// 2. A function can be stored in a array.

var arr = [1, 2, 3, anhello];

arr.push(sayName('Mariam'));

console.log(arr);


// 3. A function can be stored as an bbject field or property.

var person = {
    name : 'Saiful',
    sayName: hello,
    print: function(){
        console.log('Hi');
        
    }
}

person;

console.log(person);


// 4. We create function as needed.

function num(digit){
    return digit;
}

var sum = 10 + num(50);
console.log(sum);


// 5. we can pass function as an arguments.



// 6. we can return function from another function.