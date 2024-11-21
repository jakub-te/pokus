// uprava prvniho radku pro test, a zmena

const board = document.getElementById("game-board");
const money_label = document.getElementById("penizky");
var bitcoins = 0;
money_label.innerText="Bitcoin: "+bitcoins;
const rows = 10;
const cols = 10;
const circle = document.createElement("div");
var cislo = 0;
var x_npc;
var y_npc;

circle.classList.add("circle");

// Initialize a 10x10 array with consecutive numbers
const numRows = 10;
const numCols = 10;

game_board1 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 1, 0, 1, 1, 1, 1],
[0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
[0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
[0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
[0, 2, 0, 1, 1, 0, 1, 0, 0, 0],
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0]];

// game_board1_orig = game_board1.copy()

game_board2 = [[0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
[0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
[0, 0, 0, 1, 2, 0, 0, 0, 0, 0],
[0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
[0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 2, 0, 0, 0, 0, 0, 2, 0],
[0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
[0, 0, 0, 1, 1, 0, 0, 0, 0, 0]];

game_board3 = [[0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
[0, 1, 1, 1, 1, 0, 0, 0, 1, 0],
[0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
[0, 0, 1, 1, 0, 0, 0, 1, 1, 0],
[0, 2, 1, 0, 0, 0, 0, 0, 1, 1],
[0, 1, 1, 0, 1, 1, 1, 0, 0, 1],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 2]];

game_board4 = [[0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
[0, 0, 2, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 0, 0, 0, 1, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[0, 0, 1, 1, 1, 0, 0, 1, 0, 2],
[0, 0, 1, 2, 0, 0, 0, 0, 1, 0],
[0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
[0, 0, 0, 1, 1, 1, 0, 0, 0, 0]];

game_board5 = [[0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
[0, 0, 0, 0, 0, 1, 1, 1, 2, 0],
[0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
[0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
[0, 2, 1, 0, 0, 0, 0, 0, 1, 0],
[0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
[0, 1, 0, 0, 0, 0, 1, 1, 1, 2],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

// game_board2_orig = game_board2.copy()


var game_board_pole = [game_board1,game_board2,game_board3,game_board4,game_board5];
game_board = game_board_pole[cislo];
// Initialize the circle's position
let x = 0;
let y = 0;

// Create the game board
function createBoard() {
    //TODO: Dodělej funkci na vytvoření herní mapy
    for (let radek = 0; radek < game_board.length; radek++) {
        const radek_tabulky = document.createElement("tr"); // Vytvoříme nový řádek tabulky
      
        for (let sloupec = 0; sloupec < game_board.length; sloupec++) {
          const bunka_tabulky = document.createElement("td"); // Vytvoříme novou buňku tabulky
      
          radek_tabulky.appendChild(bunka_tabulky); // Přidáme novou buňku do řádku tabulky
      
          if (game_board[radek][sloupec] == 1) {
            // Pokud se na této pozici nachází překážka
      
            const square = document.createElement("div"); // Vytvoříme element div, který slouží jako zábrana
      
            square.classList.add("square"); // Přidáme divu třídu pro pozdější nastavení jeho vlastností
      
            bunka_tabulky.appendChild(square); // Přidáme div do buňky tabulky
          }
          if (game_board[radek][sloupec] == 2) {
            // Pokud se na této pozici nachází překážka
      
            const coin = document.createElement("div"); // Vytvoříme element div, který slouží jako zábrana
      
            coin.classList.add("coin"); // Přidáme divu třídu pro pozdější nastavení jeho vlastností
      
            bunka_tabulky.appendChild(coin); // Přidáme div do buňky tabulky
          }
        }
        board.appendChild(radek_tabulky); // přidáme celý řádek do tabulky
      }
      
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
    
    // npc
    function shortestPathSearch(game_board, y_npc, x_npc, yp, xp) {
        const numRows = game_board.length;
        const numCols = game_board[0].length;
      
        // Define movement directions (up, down, left, right)
        const dx = [-1, 1, 0, 0];
        const dy = [0, 0, -1, 1];
      
        // Create a 2D array to mark visited cells and store parent cells
        const visited = Array(numRows)
          .fill(false)
          .map(() => Array(numCols).fill(false));
        const parent = Array(numRows)
          .fill(null)
          .map(() => Array(numCols).fill(null));
      
        // Create a queue for BFS
        const queue = [];
      
        // Push the NPC's position into the queue
        queue.push([y_npc, x_npc]);
        visited[y_npc][x_npc] = true;
      
        while (queue.length > 0) {
          const [x, y] = queue.shift();
      
          if (x === yp && y === xp) {
            // Found the player's position, reconstruct the path
            const path = [];
            let curX = yp;
            let curY = xp;
            while (curX !== y_npc || curY !== x_npc) {
              path.push([curX, curY]);
              const [prevX, prevY] = parent[curX][curY];
              curX = prevX;
              curY = prevY;
            }
            path.push([y_npc, x_npc]);
            path.reverse(); // Reverse the path to start from player's position
            return path;
          }
      
          // Explore adjacent cells
          for (let i = 0; i < 4; i++) {
            const newX = x + dx[i];
            const newY = y + dy[i];
      
            if (newX >= 0 && newX < numRows && newY >= 0 && newY < numCols && game_board[newX][newY] === 0 && !visited[newX][newY]) {
              queue.push([newX, newY]);
              visited[newX][newY] = true;
              parent[newX][newY] = [x, y];
            }
          }
        }
      
        // If no path is found, return an empty array
        return [];
      }
      
      // Usage example
      const game_board = [
        [0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
      ];
      const xp = 0;
      const yp = 4;
      const x_npc = 4;
      const y_npc = 0;
      
      const shortestPath = shortestPathSearch(game_board, y_npc, x_npc, yp, xp);
      console.log(shortestPath);
    // Update the circle's position only if it's a valid move
    if (!board.rows[newY].cells[newX].querySelector('.square')) {
        x = newX;
        y = newY;
    }
    const coin=board.rows[y].cells[x].querySelector('.coin');
    if (coin) {
        bitcoins++;
        game_board[newY][newX] = 0;
        console.log("bitcoin");
        coin.remove();
        money_label.innerText="Bitcoin: "+bitcoins;
        if (bitcoins%3==0) {
            cislo++;
            game_board = game_board_pole[cislo];
            console.log(game_board);
            while (board.lastElementChild) {
                board.removeChild(board.lastElementChild);
              }
            x = 0;
            y = 0;
            createBoard();
        
                        
        }
        
    }

    // Add the circle to the new position
    board.rows[y].cells[x].appendChild(circle);

}

// Listen for keyboard events
document.addEventListener("keydown", moveCircle);


// posledni radek
