


const months = ['March', 'Jan', 'Feb', 'Dec'];

const aaa = months.sort(function (a, b) {

    var name1 = a.toUpperCase();
    var name2 = b.toUpperCase();

    if (name1 < name2) {
        return -1;
    } else {
        return 1;
    }
});




console.log(aaa);


// Sort by date

var employees = [
    { name: "George", age: 32, retiredate: "March 12, 2014" },
    { name: "Edward", age: 17, retiredate: "June 2, 2023" },
    { name: "Christine", age: 58, retiredate: "December 20, 2036" },
    { name: "Sarah", age: 62, retiredate: "April 30, 2020" }]

var dateSort = employees.sort(function (a, b) {
    return new Date(b.retiredate) - new Date(a.retiredate);
});

console.log(dateSort);


