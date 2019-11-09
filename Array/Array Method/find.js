// The find() method returns the value of the first element


// find() 1st element return korbe


var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function (element) {
    return element > 10;
});

console.log(found);




//  


const GPA = [
    { name: 'Saiful', age: 28, result: 3.25 },
    { name: 'Mariam', age: 23, result: 4.25 },
    { name: 'Anee', age: 24, result: 4.75 }
];

function firstPlace(grade) {
    return grade.result > 4
}

console.log(GPA.find(firstPlace));









// array of strings:

const trees = [
    'birch',
    'maple',
    'oak',
    'poplar'
];

const result = trees.find(function (tree) {
    return tree.startsWith('m');
});

console.log(result);


// Using with objects

const treess = [
    { name: 'birch', count: 4 },
    { name: 'maple', count: 5 },
    { name: 'oak', count: 2 },
];

const treeName = treess.find(function (abc) {
    return abc.name === 'oak'
});

console.log(treeName);




// Separating the testing function

const deciduous = [
    { name: "birch", count: 4 },
    { name: "maple", count: 5 },
    { name: "oak", count: 2 }
];

const evergreens = [
    { name: "cedar", count: 2 },
    { name: "fir", count: 6 },
    { name: "pine", count: 3 }
];

const hasFiveorMore = function (asd) {
    return asd.count >= 5;
}

const decResult = deciduous.find(hasFiveorMore);

console.log(decResult);

const evgResult = evergreens.find(hasFiveorMore);

console.log(evgResult);






//

const items = ['nail', 'hammer', 'bolt'];

// find array item with index of 1
const atIndex = items.find(function (element, index) {
    return index === 1
})

// display array item found
console.log(atIndex)












// https://alligator.io/js/array-find-method/

// https://scotch.io/glossary/javascript/array-find-method


