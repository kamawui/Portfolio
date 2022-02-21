const addBtn = document.querySelector('.firstBtn');
addBtn.style.width = '40px';
addBtn.style.height = '20px';
addBtn.textContent = "+"
const score = document.querySelector('span');
const removeBtn = document.querySelector('.secondBtn');
removeBtn.style.width = '40px';
removeBtn.style.height = '20px';
removeBtn.textContent = "-"
let total = 0;

addBtn.addEventListener('click', () => {
    console.log('click on + button');
    total += 5;
    score.textContent = total; 
})

removeBtn.addEventListener('click', () => {
    console.log('click on - button');
    total -= 5;
    score.textContent = total; 
})