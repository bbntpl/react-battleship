import Player from './index';

//reusable functions
const toggleTurnForBothPlayers = (p1, p2) => {
    p1.turn = p1.togglePlayerTurn(p1.turn);
    p2.turn = p2.togglePlayerTurn(p2.turn);
}

test('Toggle players\' turn after an attack', () => {
    const Human = Player(true, true, null, 1);
    const AI = Player(false, false, 1, 2);
    toggleTurnForBothPlayers(Human, AI);
    toggleTurnForBothPlayers(Human, AI);
    expect(Human.turn).toEqual(true);
})

test('Alternate attack between parties until one loses the game', () => {
    const AI = Player(true, false, 1, 1);
    const AI2 = Player(false, false, 1, 2);
    while (AI.gameboard.getCurrentTotalShips() !== 0 || AI2.gameboard.getCurrentTotalShips() !== 0) {
        toggleTurnForBothPlayers(AI, AI2);
        //console.log(AI.gameboard.currentTotalShips, AI2.gameboard.currentTotalShips);
        if (AI.turn) {
            const atk = AI.aiMove(AI.aiLegalAtks);
            const ships = AI2.gameboard.shipsOnTheBoard;
            AI2.gameboard.receiveAttack(atk[0], atk[1], ships);
        } else if (AI2.turn) {
            const atk = AI2.aiMove(AI2.aiLegalAtks);
            const ships = AI.gameboard.shipsOnTheBoard;
            AI.gameboard.receiveAttack(atk[0], atk[1], ships);
        }
    }
    expect(AI.gameboard.getCurrentTotalShips() || AI2.gameboard.getCurrentTotalShips()).toEqual(0);
})