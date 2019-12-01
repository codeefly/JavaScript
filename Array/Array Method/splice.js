
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// Splice 3 parameter

// 1st start from where
// 2nd How many count delete/replace
// item

const months = ['Jan', 'March', 'April', 'June'];

months.splice(2, 1)
console.log(months);

//


var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

console.log(removed)

console.log(myFish);