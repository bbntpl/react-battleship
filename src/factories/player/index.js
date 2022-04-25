import Gameboard from '../gameboard';
import huntTarget from '../../algorithms/hunt_target';

export default function Player(initialTurn, player, difficulty, num) {
    let turn = initialTurn;
    const isHuman = player; //Purpose: to avoid configure the wrong subject
    const playerNum = num;
    const displayName = isHuman ? 'Player' : 'AI'; //To identify which party is which
    let isWinner = false; //Determine the winner

    //Only applies to AI
    const AILEVEL = difficulty; // 1 or 2
    const randomNum = (n) => {
        return Math.floor(Math.random() * n);
    }
    const gameboard = Gameboard();
    let opponentOccupiedPosLeft = 17;

    //Use to iterate coordinates to be used as a legal attack for AI
    const randomPlays = (max) => {
        const newArr = [];
        for (let i = 0; i < max; i++) {
            for (let j = 0; j < max; j++) {
                newArr.push([i, j]);
            };
        };
        return newArr;
    }

    const selectedAtk = (x, y) => {
        return [x, y];
    }
    //array of legal attacks - used by an AI
    let aiLegalAtks = randomPlays(10);
    let recentSunk = false;
    function setRecentSunk(bool) { recentSunk = bool; }

    //Special variable for Player(AI) with higher difficulty
    let firstHuntAtk = null; 
    let sameShipHuntShot = [];
    function setFirstHunt(val) { firstHuntAtk = val; }
    function setSameShipHuntShot(val) { sameShipHuntShot = val; }
    let availableTargetShots = [
        {
            target: 1,
            axis: 'x',
        },
        {
            target: -1,
            axis: 'x',
        },
        {
            target: 1,
            axis: 'y',
        },
        {
            target: -1,
            axis: 'y',
        }
    ]
    function setAvailableTargetShots(arr) {
        availableTargetShots = arr;
    }

    const refillLegalAtks = () => {
        return randomPlays(10);
    }

    const toggleLegality = (x, y) => {
        const index = aiLegalAtks.findIndex(atk => atk[0] === x & atk[1] === y);
        aiLegalAtks.splice(index, 1);
    }

    //AI move algorithm
    const aiMove = (moves) => {
        if (moves.length !== 0) {
            if (AILEVEL == 2) {
                return huntTarget(
                    moves,
                    firstHuntAtk,
                    setFirstHunt,
                    sameShipHuntShot,
                    setSameShipHuntShot,
                    availableTargetShots,
                    setAvailableTargetShots,
                    opponentOccupiedPosLeft,
                    recentSunk,
                    setRecentSunk
                    );
            }
            const move = moves.splice(randomNum(moves.length - 1), 1);
            return [].concat(...move);
        }
    }

    const togglePlayerTurn = (turn) => { return !turn; }
    return {
        gameboard,
        turn,
        togglePlayerTurn,
        aiMove,
        aiLegalAtks,
        recentSunk,
        opponentOccupiedPosLeft,
        selectedAtk,
        isWinner,
        isHuman,
        displayName,
        toggleLegality,
        refillLegalAtks,
        playerNum,
        getAiLegalAtks() { return aiLegalAtks; },
        setAiLegalAtks(arr) { aiLegalAtks = arr; },
        setOpponentOccupiedPosLeft(val) { opponentOccupiedPosLeft = val; },
        setRecentSunk
    }
}