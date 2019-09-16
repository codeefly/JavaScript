// Dispaly the time

var today = new Date();
var hour = today.getHours();
var day = today.getDay();
var minutes = today.getMinutes();
var second = today.getSeconds();


var prepand = (hour >= 12)? "PM" : "AM";

var current_hour = (hour => 12)? hour - 12 : hour;



if(hour === 0 && prepand === "AM"){
    if(minutes === 0 && second === 0){
        hour = 12;
        prepand = "Midnight"
    }else{
        hour = 12;
        prepand = "AM"
    }
}


if(hour === 0 && prepand === "PM"){
    if(minutes === 0 && second === 0){
        hour = 12;
        prepand = "Noon";
    }else{
        hour = 12;
        prepand = "PM";
    }
}





console.log(`Current time : ${current_hour} ${prepand} : ${minutes} ${second}`);
console.log(`Current Hour : ${hour}`);


