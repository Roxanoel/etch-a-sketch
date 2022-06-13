// config params
let gridSize = 16;

// Cached refs
const container = document.querySelector('.container');

function generateGrid() {
    // Setting the grid size to the correct size
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    
    // creating each square and appending it in the same go
    for (let i = 0; i < gridSize*gridSize; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('pixel');
        container.appendChild(newDiv);
    }
}

generateGrid();