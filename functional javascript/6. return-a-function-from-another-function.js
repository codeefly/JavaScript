// 

function host() {
    console.log('I am Host function...');

    // function abc(){
    //     console.log('I am children');        
    // } 
    // return abc;

    return function () {
        console.log('I am children');
    }


}
var a = host();
a();



/// 


// function greeting(msg){

//     return function(name){
//         console.log(msg + ' ' + name);        
//     }
// }


function greeting(msg) {
    function ret(name) {
        console.log(msg + ' ' + name);
    }

    return ret;
}


var good = greeting('Good Morning');
var hello = greeting('Hello');

good('Saiful');
hello('Saiful');
