// uprava prvniho radku pro test, a zmena

const board = document.getElementById("game-board");
const rows = 10;
const cols = 10;
const circle = document.createElement("div");
circle.classList.add("circle");

// Initialize a 10x10 array with consecutive numbers
const numRows = 10;
const numCols = 10;

game_board = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 1, 0, 1, 1, 1, 1],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
[0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 1, 0, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0],]

// Initialize the circle's position
let x = 0;
let y = 0;

// Create the game board
function createBoard() {
    //TODO: Dodělej funkci na vytvoření herní mapy
}

createBoard()
// Add the circle to the starting position
board.rows[y].cells[x].appendChild(circle);

// Function to move the circle
function moveCircle(event) {
    // Remove the circle from the current position

    let newX = x;
    let newY = y;

    switch (event.key) {
        case "ArrowUp":
            if (y > 0) {
                newY = y - 1;
            }
            break;
        case "ArrowDown":
            if (y < rows - 1) {
                newY = y + 1;
            }
            break;
        case "ArrowLeft":
            if (x > 0) {
                newX = x - 1;
            }
            break;
        case "ArrowRight":
            if (x < cols - 1) {
                newX = x + 1;
            }
            break;
    }

    // Update the circle's position only if it's a valid move
    if (!board.rows[newY].cells[newX].querySelector('.square')) {
        x = newX;
        y = newY;
    }

    // Add the circle to the new position
    board.rows[y].cells[x].appendChild(circle);
}

// Listen for keyboard events
document.addEventListener("keydown", moveCircle);


// posledni radek