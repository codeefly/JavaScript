
const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];

const localeString = array1.toLocaleString('en', {timeZone: 'UTC'});

console.log(localeString);



//


var asiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Dhaka"});
asiaTime = new Date(asiaTime);
console.log('Asia time: '+asiaTime.toLocaleString())


// 

var prices = ['￥7', 500, 8123, 12]; 



console.log(prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }));