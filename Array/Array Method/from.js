// Array.from() method creates a new,

console.log(Array.from('Saiful islam')); // output : [ 'S', 'a', 'i', 'f', 'u', 'l', ' ', 'i', 's', 'l', 'a', 'm' ]
console.log(Array.from('5456'));

console.log(Array.from([1, 2, 3], a => a * a)); // output: [ 1, 4, 9 ]




/*
Array from a string
Array from a Set
Array From a Map
Array from an Array-like object(arguments)
Using arrow functions and Array.from()
Sequence generator(range)

*/

// from a string

console.log(Array.from('foo')); // output: [ 'f', 'o', 'o' ]




// from a set

const set = new Set(['foo', 'bar', 'baz', 'foo', 'bar', 'foo']); // একই নামে একের অধিক value থাকলে ১ set হবে। 
console.log(Array.from(set)); // [ 'foo', 'bar', 'baz' ]





// from a map
const map = new Map([
    [1, 2],
    [2, 4],
    [4, 8]
]);
console.log(Array.from(map)); // output : [ [ 1, 2 ], [ 2, 4 ], [ 4, 8 ] ]

// from a map value and key
const aaa = new Map([
    ['1', 'a'],
    ['2', 'b']
]);
console.log(Array.from(aaa.values())); // output: [ 'a', 'b' ]
console.log(Array.from(aaa.keys())); // output: [ '1', '2' ]





// from a Array-like Object(arguments)

function a() {
    return Array.from(arguments);
}
console.log(a(5, 4, 3));



// from arrow function
console.log(Array.from([1, 2, 3], x => x + x)); // output: [ 2, 4, 6 ]

// Generate a sequence of numbers
console.log(Array.from({ length: 5 }, (b, v) => v)); //output: [ 0, 1, 2, 3, 4 ]



// sequence generator