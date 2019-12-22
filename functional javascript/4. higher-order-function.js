
// ekta function rekta function ke argument hisebe nibe.
// ekta function rekta function ke return korbe. obbossoi pure function hote hobe. jeita hier order function banabo.

var arr = [4, 5, 1, 0, 8];


arr.forEach(function(a){
    console.log(a);
});

// 

function cbf(a){
    console.log(a);
}

arr.forEach(cbf);



// 

function caller(){
    return function (name){
        return 'Caller Calling You ' + name;
    }
}

var x = caller();
x;
var y = x('Saiful');
y;

var z = x('Mariam');
z;


var a = caller()('Pagli');
a;