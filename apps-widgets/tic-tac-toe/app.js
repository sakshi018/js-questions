
const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const allCells = document.querySelectorAll('button');
const result = document.getElementsByClassName('result');
const restartGame = document.getElementsByClassName('card');
let crossTurn = true;
let stopGame = false;

startGame();

function startGame() {
    allCells.forEach(cell => {
        cell.addEventListener('click', handleClick);
    })

    Array.from(restartGame).forEach(restart => {
        restart.addEventListener('click', resetCells)
    });
}

function resetCells() {
    allCells.forEach(cell => {
        cell.innerText = '';
    })
    result[0].innerText = '';
    stopGame = false;
}

function swapTurn(event) {
    if (crossTurn) {
        event.target.innerText = 'X';
        crossTurn = false;
    } else {
        event.target.innerText = 'O';
        crossTurn = true;
    }
}

function handleClick(event) {
    if (event && event.target && !event.target.innerText && !stopGame) {
        const symbol = crossTurn ? 'X' : 'O';
        swapTurn(event);
        if (checkWin(symbol)) {
            console.log('its a win');
            result[0].innerHTML = `${symbol} wins!!`;
            stopGame = true;
        } else if (checkDraw()) {
            result[0].innerHTML = 'Its a Draw';
            stopGame = true;
        }
    }
}

function checkWin(symbol) {
    return winningPositions.some((combination) => {
        return combination.every(index => {
            return allCells[index].innerText === symbol;
        });
    });
}

function checkDraw() {
    return [...allCells].every(cell => Boolean(cell.innerText));
}
