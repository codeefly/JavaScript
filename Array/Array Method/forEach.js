// The forEach() method executes a provided function once for each array element.

var array1 = ['a', 'b', 'c'];

const eachFc = array1.forEach(function(abc){
    console.log(abc)
});


// Converting a for loop to forEach

const items = ['item1', 'item2', 'item3'];

const copy =[];

const copyItem = items.forEach(function(ddd){
    copy.push(ddd);
});

console.log(copy);