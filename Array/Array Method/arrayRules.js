
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














