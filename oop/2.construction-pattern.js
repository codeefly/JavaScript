/* Js a onek gulo pattern er maddome class/object toiri kora hoy,
  tar modde popular pattern hocche constructor pattern.

  jodio JS a kono constructor nei, tar por o etake constroctor pattern bole.


  => object er name gulo shob somoy first letter uppercase hoy,
   jegulo constructor/factory pattern er maddome hobe.

  */

function Person(name, email) {
    this.name = name;
    this.email = email;
    this.print = function () {
        console.log(this.name);        
    }

}

var p1 = new Person('Saiful', 'saiful@gmail.com');
var p2 = new Person('Mariam', 'mariam@gmail.com');
var p3 = new Person('Urm', 'urmi@gmail.com');


var people = [p1, p2, p3];

console.log(p1.name);
console.log(p1.email);
console.log(p1);
console.log(people);



people.forEach(function (person) {
    console.log('Email: ' + person.email);
    person.print();
})

for(var props in p1){
console.log('properties = ' + props);

}



// 

function Book(name, price, author){
    this.name = name;
    this.author = author;
    this.price = price;
}

var book = new Book('Poro', 'Omar Al Jabir', 50);

console.log(book.constructor); //  book.constructor er mane hocche puro function ta, chrome bowser console a dekha jabe
