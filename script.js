//Global variables
const container = document.getElementById('container');
const submitBtn = document.getElementById('submitBtn');
const clear = document.getElementById('clear');
const black = document.getElementById('black');
const rainbow = document.getElementById('rainbow');
const greyscale = document.getElementById('greyscale');
const eraser = document.getElementById('eraser');

function randomRGB() {
    const randomNumber = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomNumber(0, 255);
    return r;
}


function createGrid(number) {
    const newGrid = number**2;
    for(i=0; i < newGrid; i++) {
        let square = document.createElement('div');
        square.addEventListener("mouseover", function() {
            if(black.checked) {
                square.style.backgroundColor = 'black';
                square.style.opacity = 1;
            } else if (rainbow.checked) {
                square.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
                square.style.opacity = 1;
            } else if (greyscale.checked) {
                square.style.opacity = Number(square.style.opacity) + 0.1 + '';
                square.style.backgroundColor = 'black';
            } else if (eraser.checked) {
                square.style.backgroundColor = 'white';
                square.style.opacity = 0;
            }
        });
        container.appendChild(square);
    }
}

function startNewGrid() {
    const gridSize = document.getElementById('gridSize').value;
    if(gridSize > 0 && gridSize < 101) {
        container.innerHTML = '';
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        createGrid(gridSize);
    } else {
        alert('Please choose valid number');
    }
}
submitBtn.addEventListener('click', startNewGrid)

clear.addEventListener('click', function() {
    for(i=0; i < container.children.length; i++) {
        container.children[i].style.backgroundColor = 'white';
        container.children[i].style.opacity = 0;
    }
})

window.onload = createGrid(16);