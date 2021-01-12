// create columns function
// takes single number input
//for each number create a div
const container = document.getElementById('container');
const submitBtn = document.getElementById('submitBtn');
const form = document.getElementById('form');

function createGrid(number) {
    const newGrid = number**2;
    for(i=0; i < newGrid; i++) {
        let square = document.createElement('div');
        square.className = 'square';
        square.addEventListener("mouseover", function() {
            this.className += ' active';
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


window.onload = createGrid(16);
