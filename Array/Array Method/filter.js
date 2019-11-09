// The filter() method creates a new array

// filter() method function diye filter kore.

// filter() boolean type


var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(words => words.length > 6);

const result = words.filter(function (abc) {
    return abc.length > 6;
});

console.log(result);




var array1 = ['1', '2', '3', '40', '50'];

function isBig(value) {
    return value >= 10;
}

var filtered = array1.filter(isBig);

console.log(filtered);


var names = ["Anna", "Bob", "Charles", "Daniel", "Allison", "Beatrice", "Cindy", "Fiona"];



var filteredNames = names.filter(function (name, index) {
    return index > 3;
});

console.log(filteredNames);






