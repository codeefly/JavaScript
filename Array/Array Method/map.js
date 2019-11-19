// https://www.robinwieruch.de/javascript-map-array
// https://hackr.io/blog/javascript-map
// https://www.youtube.com/watch?v=G3BS3sh3D8Q

// The map() method creates a new array with the results of calling a provided function on every element in the calling array.



const array1 = [1, 4, 9, 16];

const map1 = array1.map(function(abc){
    return abc ** 2;
});

console.log(map1);

// 

var numbers = [1,4,90];

var roots = numbers.map(function(asd){
    return Math.sqrt(asd);
});

console.log(roots);