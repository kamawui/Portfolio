/*
const makeTransaction = function(pricePerDroid, orderedQuantity, customerCredits){
    let totalPrice = pricePerDroid * orderedQuantity;

    if(totalPrice>customerCredits){
        return 'Insufficient funds!';
    }
    else{
        return `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
    }
}

console.log(makeTransaction(20, 3, 1000));
*/


/*
let number = 0
const order = function(start, end){
    if(start<end){
        for (let i = start; i < end; i++) {
            number += i;
            

        }
        return number;
    }
    else{
        for(let i = end; i<start; i++){
            number += i;
        }
        return number;
        

    }
}
console.log(order(100, 50))
*/


/*
let FnA = " ";
for(p=0; p<10; p++) {
    console.log(FnA);
    FnA += "ab";
}
*/


/*
total = 0;
const array = [4, 7, 9, 15, 6, 6, 7, 8, 9, 20];
for(i = 0; i <20; i+= 1 ){
    if(array[i] % 2 === 0){
    total += array[i];
    console.log(array[i]); 
    } 
}
console.log("result", total)
*/


/*
total = 0;
const array = [4, 7, 9, 15, 6, 6, 7, 8, 9, 20];
for(el of array){
    if(el % 2 === 0){
    total += el;
    }
}
console.log("result", total)
*/




/*
const makeArray = function(firstArray, secondArray, maxLength){
    const newArray = [firstArray, secondArray];
    if(maxLength < newArray.length){
        return newArray.pop(maxLength);
    }
    else{
        return newArray;
    }
}
console.log(makeArray(2, 3, 10))
*/


/*
const slugify = function(title){
    let slug = title;
    return slug.toLowerCase().split(" ").join("-")
//    const array = slug.split(" ");
//    return array.join("-").toLowerCase();
}
console.log(slugify('By My Shaggy Bark'))*/




const longWord = function(string){
    let word = string;
    let result = word[0];
    console.log(result)
    for(let el of result){
        if(el.length < result.lenght){
            result = word[el]
        }
    }


}
console.log(longWord("Things are going great"));
  

