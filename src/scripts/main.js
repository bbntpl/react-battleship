import Player from '..factories/player'; //arguments = (initialTurn,isHuman,difficulty -> 1 for easy and 2 for hard, otherwise null if player)

//Initial creation of player objects
export let Player1 = Player(true, true, 1, 1);
export let Player2 = Player(false, false, 1, 2);

//Set the gamemode including the AI difficulty
export async function setGameType(gamemode, p1diff, p2diff){
    if (gamemode == 0) {
        Player1 = Player(true, true, null, 1);
        Player2 = Player(false, true, null, 2);
        Player1.displayName = 'Player 1';
        Player2.displayName = 'Player 2';
    } else if (gamemode == 1) {
        Player1 = Player(true, true, null, 1);
        Player2 = Player(false, false, p2diff, 2);
        Player1.displayName = 'Player';
        Player2.displayName = 'AI';
    } else {
        Player1 = Player(true, false, p1diff, 1);
        Player2 = Player(false, false, p2diff, 2);
        Player1.displayName = 'AI 1';
        Player2.displayName = 'AI 2';
    }
}

//toggle turns
export const toggleTurnForBothPlayers = (p1, p2) => {
    p1.turn = p1.togglePlayerTurn(p1.turn);
    p2.turn = p2.togglePlayerTurn(p2.turn);
}


const checkWinner = (P1, P2) => {
    if (P1.gameboard.getOccupiedPos().length == 0) {
        P2.isWinner = true;
    } else if (P2.gameboard.getOccupiedPos().length == 0) {
        P1.isWinner = true;
    }
}

//Auto function for AIvsAI gamemode
export const autoBattle = (P1, P2) => {
    AIAttack(P1, P2);
    AIAttack(P2,P1);
    checkWinner(P1, P2);
    toggleTurnForBothPlayers(P1, P2);
}

const AIAttack = (attacker, defender) => {
    if (attacker.turn) {
        attacker.setOpponentOccupiedPosLeft(defender.gameboard.getOccupiedPos());
        const prevShipsLeft = defender.gameboard.getCurrentTotalShips();
        const atk = attacker.aiMove(attacker.aiLegalAtks);
        const ships = defender.gameboard.shipsOnTheBoard;
        defender.gameboard.receiveAttack(atk[0], atk[1], ships);

        if(prevShipsLeft !== defender.gameboard.getCurrentTotalShips()){
            attacker.setRecentSunk(true);
        }
    } 
}

//Attack the ships of the other party
export const playerAttack = (attacker, defender, x, y) => {
    const shots = attacker.getAiLegalAtks();
    if(!shots.some(o => o[0] === x && o[1] === y)) return true;
    const ships = defender.gameboard.shipsOnTheBoard;
    attacker.toggleLegality(x,y);
    defender.gameboard.receiveAttack(y, x, ships);
    checkWinner(Player1, Player2);
    toggleTurnForBothPlayers(Player1, Player2);
    return false;
}

export const randomize = (player) => {
    const p = player.gameboard;
    p.resetArray(p.occupiedPos);
    p.shipsOnTheBoard = p.addShipsToTheBoard();
}

export const resetGame = (player) => {
    randomize(player);
    if (player.isWinner) { player.isWinner = false; }
    player.gameboard.resetBoard();
    const newLegalShots =  player.refillLegalAtks();
    if(!player.isHuman){
        player.aiLegalAtks = newLegalShots;
        return;
    }
    player.setAiLegalAtks(newLegalShots);
}
