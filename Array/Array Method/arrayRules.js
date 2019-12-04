
/*

concat(): দুই বা অধিক array কে Merge করে।

const new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])

*/



/*

copyWithin() : Array ভেতর থেকে copy করবে।

arr.copyWithin(target[, start[, end]])

*/



/*

entries() : Array index এর key/value pair return করে।

array.entries()

*/



/*

every(): logic apply করে, boolean return করে।

arr.every(callback(element[, index[, array]])[, thisArg])

*/




/*

fill(): element modify করে।

arr.fill(value[, start[, end]])

*/




/*

filter(): logic apply করে element filter করে, নতুন array create করে ।

var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])

*/



/*

find(): logic apply করে, element find করে। first element provide করে ।

arr.find(callback(element[, index[, array]])[, thisArg])

*/




/*

findIndex(): logic apply করে, element index find করে। first element index return করে ।

arr.find(callback(element[, index[, array]])[, thisArg])

*/





/*

forEach(): Arrray সব element কে ১টা  ১টা  করে আলাদা  করা ।

arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);


*/





/*


includes(): element যদি array এর ভেতর includes করা থাকে,তাহলে true নাহলে false.

arr.includes(valueToFind[, fromIndex])


*/




/*

indexOf(): Array ভিতর  element থাকলে  index দেখাবে, না থাকলে -1 দেখাবে ।

arr.indexOf(searchElement[, fromIndex])


*/




/*

join(): element সব গুলোকে এক সাথে join করে,তার সাথে  , + - space যোগ করে ।

arr.join([separator])

*/






/*

keys(): new Array Iterator return করে যার  ভেতর এক একটি array index key থাকে।
arr.keys()

*/





/*

lastIndexOf(): Array ভিতর এক এর অধিক element থাকলে  সেই element এর last index দেখাবে, না থাকলে -1 দেখাবে ।

arr.lastIndexOf(searchElement[, fromIndex])


*/


/*

map(): creates a new array এবং function এর result সব element এর ভেতর provide করে।

var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])


*/




/*

pop(): last element remove করে এবং array এর length পরিবর্তন করে।

arr.pop()

*/



/*

push(): array শেষের দিকে, এক বা একের অধিক element add করে, বং array এর length পরিবর্তন করে।

arr.push(element1[, ...[, elementN]])

*/




/*

reduce(): logic apply করে, element এর total result বের করে।

arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

*/



/*

reduceRight(): logic apply করে, element এর right to left,  total result বের করে।

arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])


*/



/*

reverse(): array element প্রথমটা শেষে, শেষেরটা  প্রথম থেকে শুরু হয়।

a.reverse()

*/




/*

shift(): array element প্রথম থেকে shift করে নেয়া। cut করে নেয়া।

arr.shift()

*/





/*

slice(): array element copy করে নেয়।  2টা paremeter থাকে, ১ম টা কোথায়  থেকে copy করা শুরু  করবে, ২য় টা  কোথায় পর্যন্ত থামবে।

arr.slice([begin[, end]])

*/




/*


some(): logic apply করে, element এর value true/false return করে।

arr.some(callback(element[, index[, array]])[, thisArg])


*/




/*

sort(): array element কে sort করে । 2টা parameter থাকে, ১ম টা থেকে ২য় টা বা ২য় টা থেকে ১ম টা  বিয়োগ করে।   যেমন  ঃ sory by string, numeric

arr.sort([compareFunction])


*/



/*

slpice(): array element remove or replace করে। এবং add করে । ৩টা  parameter থাকে। ১ম টা  কোথায়  থেকে remove/replace or add করা শুরু  করবে , ২য় টা  হচ্ছে কয়টা element remove/replace or add করবে।

var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

*/




/*

toString(): array element কে string convert করে ।

arr.toString()

*/


/*

unshift(): array এর প্রথমে element add করে এবং array length return করে।

arr.unshift(element1[, ...[, elementN]])

*/


/*


values(): array element এর value return করে।

arr.values()


*/


/*

Cheat Sheet:


// Mutating
push()      // Insert an element at the end
pop()       // Remove an element from the end
unshift()   // Inserts an element in the beginning
shift()     // Remove first element


// Iterating
forEach()   // Iterates an array
filter()    // Iterates an array and result is filtered array
map()       // Iterates an array and result is new array
reduce()    // "Reduces" the array into single value (accumulator)



// Others
slice()     // Returns desired elements in a new array
concat()    // Append one or more arrays with given array 


*/



// https://gist.github.com/ourmaninamsterdam/1be9a5590c9cf4a0ab42





