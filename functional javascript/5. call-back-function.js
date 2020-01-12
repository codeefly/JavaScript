// function hello(name) {
//     abc(name);
//     abc('something else');
// }

// function abc(args) {
//     console.log(args);

// }

// hello('Saiful');



function hello(name, abc) {
    abc(name);
}

hello('Saiful', function (name) {
    console.log('Hello ' + name);
});

hello('Saiful', function (name) {
    console.log('hi ' + name);
});

hello('Saiful', function (name) {
    console.log('Name length is =  ' + name.length);
});


//


var me = {
    name: 'Saiful',
    age: 18,
    email: 'hi@email.com',
}

function printMySelf(person, callback) {
    console.log(person.name);
    if (person.age >= 18) {
        callback(person.email);
    } else {
        console.log('age below 18');

    }
}

printMySelf(me, function (email) {
    console.log('email sent to ' + email);

});



//


function asd(data, cb1, cb2) {
    console.log('data');
    cb1(data);
    cb2(data);
};

asd('its awesome',

    function (data) {
        var data = data.toUpperCase();
        console.log(data);
    },

    function (data) {
        var data = data.toLowerCase();
        console.log(data);
        console.log(data.length);
    }
);
