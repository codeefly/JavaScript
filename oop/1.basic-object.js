/*

=> object hocche seita, jar ekadik properties ase

user hocche object, karon tar onek properties ase,
jemon, username, email, password, and onek kisu


method: object er vetor function ke method bole

object er vitor bahir theke properties add kora jay.

*/

var obj = {};

var obj1 = new Object;

console.log(obj);
console.log(obj1);


// 

var book = {
    name: 'Poro',
    author: 'omar al jabir',
    publisher: 'Somokalin Prokashani',
    page: 250,
    print: function () {
        console.log(this.name, this.author);

    }
}

book.published = 2020;
book.price = 150;


console.log(book);

console.log(book.name);


for (var props in book) {
    console.log(props);
    console.log(props +' = '+ book[props]); 
}

