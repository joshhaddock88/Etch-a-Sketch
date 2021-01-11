// create columns function
// takes single number input
//for each number create a div
const container = document.getElementById('container');
const gridSize = document.getElementById('gridSize').value;

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
function removeGrid() {
    container.innerHTML = '';
}

window.onload = createGrid(16);


const submitBtn = document.getElementById('submitBtn');

//for submit button, on click, 
//change container.style.gridTemplateColums/Rows = gridSize value
