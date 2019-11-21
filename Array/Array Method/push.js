// The push() method adds one or more elements to the end of an array and returns the new length of the array.

// push() adds element in the last
// 

const animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('Hen'));
console.log(animals);


console.log(animals.push('chickens', 'cats', 'dogs'));
console.log(animals);


// Merging two arrays
// Merge the second array into the first one

var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];



console.log(Array.prototype.push.apply(vegetables, moreVegs))

