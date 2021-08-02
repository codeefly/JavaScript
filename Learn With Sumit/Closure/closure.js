// function bankAccount(initialBalance){
//     var balance = initialBalance;
//     return function one(){
//         return balance;
//     }
// }

// var account = bankAccount(10000)

// console.dir(account());


var num1 = 2;

var sum = function (){
    var num = 6;
    return function(){
        var num2 = 3;  
        return function(){
            return num1 + num2
        };
    }
}

var myFunc = sum()();

console.dir(myFunc);