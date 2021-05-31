

/*
while(){

}

*/

// var i = 0;
// while (i < 10) {
//     console.log('I am Saiful');
//     i++
// }


var isRunning = true

while (isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if( rand === 9){
        console.log('Winner');  
        isRunning = false      
    }else{
        console.log('you have got '+ rand + ' Number');        
    }
}

