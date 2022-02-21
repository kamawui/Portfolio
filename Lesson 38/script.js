/*
const list = document.querySelector('.button')
const block = document.querySelector('div')
block.style.width = '1000px';
block.style.height = '300px';
document.body.append(block);
const colors = ['red', 'pink', 'violet', 'green', 'tomato', 'teal'];
console.log(colors);
const color = [];
for(let el of colors){
    const item = document.createElement("button");
    item.textContent = el;
    item.style.background = el;
    item.style.width = '100px';
    item.style.height = '50px';
    item.style.margin = '10px';
    color.push(item);
}
console.log(color);
list.append(...color); 
*/


const array = [3, 5, 7, 11, 33, 2, 6];
function something(arr, callback){
    let total = 1;
    for(let el of arr){
        if (callback(el)){
            total *= el;
        }
    }
    return total;

}

const greaterFour = el => el > 4;
const even = el => el % 2 === 0;
const odd = el => el % 2 !== 0;

console.log("result 1:", something(array, greaterFour));
console.log("result 2:", something(array, even));
console.log("result 3:", something(array, odd));

