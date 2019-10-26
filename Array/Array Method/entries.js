//  The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.


var array1 = ['a', 'b', 'c'];

var iterator1 = array1.entries();
console.log(iterator1.next().value);



// Using a for…of loop
const a = ['a', 'b', 'c'];

const iterator2 = a.entries();

for(let e of iterator2){
    console.log(e);
}
