// create columns function
// takes single number input
//for each number create a div
const container = document.getElementById('container');
const submitBtn = document.getElementById('submitBtn');
const root = document.querySelector(':root');

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

submitBtn.addEventListener('click', () => {
    const gridSize = document.getElementById('gridSize').value;
    console.log(gridSize);
    if(gridSize > 0 && gridSize < 101) {
        container.innerHTML = '';
        console.log(container.children);
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        createGrid(gridSize);
    } else {
        alert('Please choose valid number');
    }
})

window.onload = createGrid(16);


//for submit button, on click, 
//change container.style.gridTemplateColums/Rows = gridSize value
