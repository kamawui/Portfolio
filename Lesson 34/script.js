/*
let password = 'qwerty123456';
if (password.length>9){
    console.log("no")
}
else{
    console.log("yes")
}
*/

/*
let password = '123456&';
if (password.length>9 || password.includes('&', '%', ';', '№')){
    console.log("error")
}
else{
    console.log("welcome")
}
*/

/*
let string = "Amazing SalE, only tonight!, JavaScript weekly newsletter";
let toLowerCase = string.toLowerCase();
if(toLowerCase.includes('sale', 'spam')){
    console.log('denied')
}
else{
    console.log('welcome')
}
*/

/*
let string = "message";
let str = string[0].toUpperCase();
console.log(str+string.slice(1, 7))
*/


/*
let country = "China";
let price;
switch (country){
    case "China":
        price = 100;
        console.log(`Shipping to ${country} will cost ${price} credits`);
        break;
    case "Chile":
        price = 250;
        console.log(`Shipping to ${country} will cost ${price} credits`);
        break;
    case "Australia":
        price = 170;
        console.log(`Shipping to ${country} will cost ${price} credits`);
        break;
    case "Jamaica":
        price = 120;
        console.log(`Shipping to ${country} will cost ${price} credits`);
        break;
    default:
        console.log("Something else");

} 
*/

/*
const age = prompt('write your age')
const yourAge = function(age){  
    if(age>=18){
        console.log("You are adult")
    }
    else{
        console.log("You are not adult")
    }
    return age;
}
console.log('Result: ', yourAge(age));
*/


/*
const password = function(){
    let ADMIN_PASSWORD = "jqueryismyjam";
    const writePassword = prompt('Write your password');
    if(writePassword === ADMIN_PASSWORD){
        console.log("WELCOME, DAD")
    }
    else{
        console.log("Welcome!")
    }
    return;
}
password()
*/

/*
const checkStorage = function(avaible, ordered){
    const ordered = prompt('Enter the quantity of goods')
    if(avaible<ordered){
        console.log( "Your order is too large, not enough goods in stock!")
    }
    else{
        console.log("The order is accepted, our manager will contact you")
    }
    return;

}
checkStorage()
*/