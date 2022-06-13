// config params
const defaultGridSize = 16;
const maxSize = 100;

// Cached refs
const container = document.querySelector('.grid-container');
const squares = [];
const button = document.querySelector('button');

// Main
button.addEventListener('click', setupNewGrid)

generateGrid(defaultGridSize);

// Function definitions 

function generateGrid(size) {
    // Deleting any pre-existing squares
    removeAllChildren(container);

    // Setting the grid size to the correct size
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    // creating each square and appending it in the same go
    for (let i = 0; i < size*size; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('pixel');
        container.appendChild(newDiv);
        squares.push(newDiv);
    }

    addHoverListeners(squares);
}

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function addHoverListeners(array) {
    array.forEach(element => element.addEventListener('mouseenter', 
    element => element.target.classList.add('coloured')));
}

function setupNewGrid() {
    const newSize = +(prompt(`How wide should the new grid be? Maximum size = ${maxSize}`));
    if (newSize <= maxSize){
        generateGrid(newSize);
    }
    else{
        alert('This is not a valid number, please try again.');
    }
}