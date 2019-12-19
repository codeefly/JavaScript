function outer() {
    function inner() {
        console.log('I am inner Function');
    }
    inner();
    console.log('I am outer Function');
}

outer();


// inner function er vitore outer function er access ase
// outer function er vitore inner function er access nai


function add (a , b){

    function sum(){
        return a + b;
    }
    function sub(){
        return a - b;
    }
    function times(){
        return a * b;
    }
    function div(){
        return a / b;
    }

    return sum() + sub() + times() + div();
}

var result = add(5, 8);

console.log(result);
