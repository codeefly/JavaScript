// The Array.isArray() method determines whether the passed value is an Array.

console.log(Array.isArray([1, 2, 3])); // outout: true
console.log(Array.isArray({ foo: 123 })); // outout: flase


// Return true

console.log(Array.isArray([])); // outout: true
console.log(Array.isArray([1])); // outout: true
console.log(Array.isArray([new Array()])); // outout: true
console.log(Array.isArray(new Array('a', 'b', 'c', 'd'))); // outout: true
console.log(Array.isArray(new Array(3))); // outout: true
console.log(Array.isArray(Array.prototype)) // outout: true


// Return False

console.log(Array.isArray()); // outout: flase
console.log(Array.isArray({})); // outout: flase
console.log(Array.isArray(null)); // outout: flase
console.log(Array.isArray(undefined)); // outout: flase
console.log(Array.isArray(17)); // outout: flase
console.log(Array.isArray('Array')); // outout: flase
console.log(Array.isArray(true)); // outout: flase
console.log(Array.isArray(false)); // outout: flase
console.log(Array.isArray(new Uint8Array(32))); // outout: flase
console.log(Array.isArray({ __proto__: Array.prototype })); // outout: flase