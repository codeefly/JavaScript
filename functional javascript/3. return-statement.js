function name(firstName, lastName, gender) {
    var output;
    if (gender === 'male') {
        output = 'Mr.' + firstName + ' ' + lastName;
    }
    if (gender === 'female') {
        output = 'Mrs.' + firstName + ' ' + lastName;
    }
    return output;
}

var fullname = name('Saiful', 'Islam', 'male');
console.log(fullname);



//

function example() {
    return {
        name: 'Saiful Islam',
        skill: ['HTML', 'CSS'],
        print: function(){
            console.log(this.name, this.skill);
            
        }
    }
}

var obj = example();

// obj.print();

console.log(obj);
