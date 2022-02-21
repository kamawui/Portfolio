const score = document.querySelector('input');
const block = document.querySelectorA('button');

block.addEventListener('input', (event) => {
    const item = document.createElement('div');
    item.style.width = `${event.currentTarget.value}px`;
    item.style.height = `${event.currentTarget.value}px`;
    item.style.backgroundColor = 'green';
    
})
document.append(item);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }