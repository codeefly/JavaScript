// The findIndex() method returns the index of the first element

// findIndex() return index number



var array1 = [5, 12, 8, 130, 44];

function isLargeElement(element){
    return element > 10;
}

console.log(array1.findIndex(isLargeElement));


// 

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(function(abc){
    return abc === "blueberries";
});

console.log(index);
console.log(fruits[index])