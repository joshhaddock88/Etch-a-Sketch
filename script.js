// create columns function
// takes single number input
//for each number create a div
const container = document.getElementById('container');

function createColumns(number) {
    for(i=0; i < number; i++) {
        let column = document.createElement('div');
        column.className = 'columns';
        column.textContent = i;
        console.log(column)
        container.appendChild(column)
    }
}