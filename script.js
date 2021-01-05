// create columns function
// takes single number input
//for each number create a div
const container = document.getElementById('container');

function createColumns(number) {
    const gridSize = number**2;
    for(i=0; i < gridSize; i++) {
        let square = document.createElement('div');
        square.className = 'square';
        square.textContent = '*';
        container.appendChild(square);
    }
}