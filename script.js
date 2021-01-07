// create columns function
// takes single number input
//for each number create a div
const container = document.getElementById('container');

function createGrid(number) {
    const gridSize = number**2;
    for(i=0; i < gridSize; i++) {
        let square = document.createElement('div');
        square.className = 'square';
        container.appendChild(square);
    }
}
window.onload = createGrid(35);


const squares = container.getElementsByClassName('square');

for(i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function() {
        this.className += ' active';
    });
}
