// function leapyear(year){
//     return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
// }

// console.log(leapyear(2018));


// 

function leapYear(input) {
    let year = input;
    let answer;
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        answer = "yes";
    } else {
        answer = "no";
    }
    console.log(answer);
}
 
leapYear(1999);