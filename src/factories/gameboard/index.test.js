import Gameboard from './index';
import Ship from '../ship';

//custom matchers
expect.extend({
    toBeDistinct(received) {
        const uniqueArr = [...new Set(received.map(o => JSON.stringify(o)))].map(s => JSON.parse(s));
        console.log(uniqueArr.length);
        const pass = Array.isArray(received) && uniqueArr.length === received.length;
        if (pass) {
            return {
                message: () => `expected ${received} array is unique`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected ${received} array is not to unique`,
                pass: false,
            };
        }
    }
});
test('Set coordinates for each tiles in a board', () => {
    const board = Gameboard(10);
    const arr = board.board;
    expect(arr[0][7][0]).toBe('A8');
})
test('All coordinates should be unique', () => {
    const board = Gameboard(10);
    expect(board.getOccupiedPos()).toBeDistinct();
})
test('A coordinate hit availability should be toggled', () => {
    const board = Gameboard(10);
    const ships = [
        {
            ship: Ship('Destroyer', 2),
            pos: [
                { x: 4, y: 5 },
                { x: 4, y: 6 }
            ]
        }
    ]
    board.receiveAttack(4, 6, ships);
    board.receiveAttack(4, 2, ships);
    expect(board.board[4][6][1] && board.board[4][2][1]).toBeTruthy();
})
test('Ship should receive a damage after the attack', () => {
    const board = Gameboard(10);
    const ships = [
        {
            ship: Ship('Carrier', 5),
            pos: [
                { x: 4, y: 5 },
                { x: 4, y: 6 },
                { x: 4, y: 7 },
                { x: 4, y: 8 },
                { x: 4, y: 9 }
            ]
        }
    ];
		console.log(board);
    board.isShipGotHit(4, 7, ships);
    board.isShipGotHit(3, 1, ships);
    board.isShipGotHit(2, 1, ships);
    board.isShipGotHit(4, 9, ships);
    expect(ships[0].ship.getHealth()).toEqual(3);
})
test('Record the missed attacks', () => {
    const board = Gameboard(10);
    const ships = [
        {
            ship: Ship('Carrier', 5),
            pos: [
                { x: 4, y: 5 },
                { x: 4, y: 6 },
                { x: 4, y: 7 },
                { x: 4, y: 8 },
                { x: 4, y: 9 }
            ]
        }
    ]
    board.receiveAttack(4, 1, ships);
    board.receiveAttack(4, 7, ships);
    board.receiveAttack(2, 8, ships);
    board.receiveAttack(9, 0, ships);
    board.receiveAttack(9, 0, ships);
    board.receiveAttack(29, 16, ships);
    expect(board.missedAtks.length).toEqual(3);
})
test('Should change the number of current ships after one sunk',()=>{
    const board = Gameboard(10);
    const ships = board.shipsOnTheBoard;
    const lastShip = ships[ships.length - 1].pos;
    board.receiveAttack(lastShip[1].x, lastShip[1].y, ships);
    board.receiveAttack(lastShip[0].x, lastShip[0].y, ships);
    board.receiveAttack(29, 16, ships);
    expect(board.getCurrentTotalShips()).toEqual(4);
})