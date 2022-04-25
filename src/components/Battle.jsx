import React, { useState, useEffect, useRef } from 'react';

import ReturnToMenu from './ReturnToMenu';
import Outcomes from './Outcomes';
import { Player1, Player2, autoBattle, randomize, playerAttack, resetGame, toggleTurnForBothPlayers } from '../scripts/main'

import ListenerManager from '../scripts/listener_manager'

export default function Battle({ gamemode, difficulty }) {
    //STATES
    //viewport width used for canvas size
    const width = window.innerWidth;

    //Immutable and conditionally-based variable
    const SIZE = width < 600 ? width * .60 : width * .20;

    //Player factory function as a state
    const [P1,] = useState(Player1);
    const [P2,] = useState(Player2);
    const [outcomesArr, setOutcomesArr] = useState([]);

    //Used to manually start and end the game
    const [winner, setWinner] = useState(false);
    const [start, setStart] = useState(false);
    const [outcomesVisibility, setOutcomesVisibility] = useState(false);

    //Set the current player
    const [current, setCurrent] = useState({ turn: 1, isHuman: Player1.isHuman });

    //Used as a fake count to trigger an associated useEffect as a dependency value
    const [fakeCount, setFakeCount] = useState(0);

    //Event listeners
    const LM = new ListenerManager();

    //Canvas stuff
    const cv1Ref = useRef(null);
    const cv2Ref = useRef(null);

    const [toggleP1ShipVisibility, setToggleP1ShipVisibility] = useState(true);
    const [toggleP2ShipVisibility, setToggleP2ShipVisibility] = useState(true);
    const [allowOutcomes, setAllowOutcomes] = useState(null);
    const [coordinate, setCoordinate] = useState(null);

    //Triggered after a click on start button
    const handleStartButton = () => {
        if (!start && gamemode.value == 0) {
            setToggleP1ShipVisibility(false);
            setToggleP2ShipVisibility(false);
        }
        setStart(!start);
        setOutcomesArr(['The game has started...']);
    }

    const handleVisibilityButton = () => {
        setOutcomesVisibility(!outcomesVisibility);
    }

    //Reset all the propety of palyer and gameboard functions to initial state
    function setPlayerAsStates() {
        return new Promise(resolve => {
            setTimeout(() => {
                resetGame(P1);
                resetGame(P2);
                resolve('resolved');
            }, 200);
        });
    }

    const resetStates = () => {
        setStart(!start);
        setWinner(false);
        setAllowOutcomes(null);
        setCurrent({
            turn: 1,
            isHuman: P1.isHuman
        })
        LM.removeAll();
    }

    //Reset all states to initial value
    async function HandleRestartButton() {
        const cv1 = cv1Ref.current;
        const cv2 = cv2Ref.current;
        const ctx1 = cv1.getContext('2d');
        const ctx2 = cv2.getContext('2d');
        ctx1.clearRect(0, 0, cv1.width, cv1.height);
        ctx2.clearRect(0, 0, cv2.width, cv2.height);
        if (start) {
            if (!P1.turn) {
                toggleTurnForBothPlayers(P1, P2);
            }
            await setPlayerAsStates();
            drawBoard(ctx1, SIZE, P1);
            drawBoard(ctx2, SIZE, P2);
            resetStates();
        }
    }

    const randomizeShipLocation = (e) => {
        const cv1 = cv1Ref.current;
        const cv2 = cv2Ref.current;
        const ctx1 = cv1.getContext('2d');
        const ctx2 = cv2.getContext('2d');
        if (e.target.id === 'randomize-p1') {
            randomize(P1);
            drawBoard(ctx1, SIZE, P1);
            return;
        }
        randomize(P2);
        drawBoard(ctx2, SIZE, P2);
    }
    const toggleShipVisibility = (e) => {
        if (e.target.id.includes('1')) {
            setToggleP1ShipVisibility(!toggleP1ShipVisibility);
            return;
        }
        setToggleP2ShipVisibility(!toggleP2ShipVisibility);
    }

    const enablePrintOutcomes = () => {
        return (
            <Outcomes
                p={P1.turn}
                currentPlayer={P1.turn ? P2.displayName : P1.displayName}
                categoryNum={allowOutcomes}
                coordinate={coordinate}
                outcomesArr={outcomesArr}
                setOutcomesArr={setOutcomesArr}
            />
        )
    }
    //draw tiles for the board
    const drawSquare = (x, y, ctx, sz) => {
        ctx.fillStyle = 'rgb(7,67,114)';
        ctx.fillRect(x * sz, y * sz, sz, sz);
        ctx.strokeStyle = 'rgb(7,100,176)';
        ctx.strokeRect(x * sz, y * sz, sz, sz);
    }

    const drawShip = (x, y, ctx, sz, len, direction) => {
        ctx.fillStyle = 'rgb(224,224,224)';
        ctx.strokeStyle = 'rgb(34,34,34)';
        for (let i = 0; i < len; i++) {
            direction === 0 ? ctx.fillRect(x * sz, y * sz, sz, sz * len) : ctx.fillRect(x * sz, y * sz, sz * len, sz);
        }
        direction === 0 ? ctx.strokeRect(x * sz, y * sz, sz, sz * len) : ctx.strokeRect(x * sz, y * sz, sz * len, sz);
    }

    //draw the game board
    const drawBoard = (ctx, sz, player) => {
        const SQR = sz * ((100 / 10) * 0.01); //square size of each coordinates
        const pos = player.gameboard.shipsOnTheBoard;
        const occupiedPos = player.gameboard.getOccupiedPos();
        const board = player.gameboard.board;
        board.forEach((row, r) => {
            row.forEach((col, c) => {
                //Auto visualize ships in AI board
                if (!toggleP1ShipVisibility && player.turn === true) {
                    drawSquare(c, r, ctx, SQR);
                    return;
                }
                if (!toggleP2ShipVisibility && player.turn === false) {
                    drawSquare(c, r, ctx, SQR);
                    return;
                }
                if (player.isHuman && occupiedPos.filter(o => o.x === r && o.y === c).length == 1) {
                    visualizeBoardForAIvsAI(pos, c, r, ctx, SQR);
                    return;
                }
                drawSquare(c, r, ctx, SQR);
            })
        })
    }

    const visualizeBoardForAIvsAI = (pos, c, r, ctx, SQR) => {
        for (const ship of pos) {
            if (ship.pos[0].x === r && ship.pos[0].y === c) {
                if (ship.pos[0].x === r && ship.pos[1].x === r) {
                    drawShip(c, r, ctx, SQR, ship.pos.length, 1);
                } else {
                    drawShip(c, r, ctx, SQR, ship.pos.length, 0);
                }
            }
        }
    }

    //draw ship placements specifically for AI
    //Functionality during the game -> marks the attacked coordinates
    const simulateBattleship = (ctx, sz, player) => {
        const SQR = sz * ((100 / 10) * 0.01);
        const board = player.gameboard.board;
        const recentAttackedPos = player.gameboard.getRecentCoordinate();
        board.forEach((row, r) => {
            row.forEach((col, c) => { //0 = unattacked, 1 = recency(by 1), 2 = already marked
                if (col[1] === 1) {
                    setCoordinate(col[0]);
                    if (recentAttackedPos.x === r && recentAttackedPos.y === c) {
                        setAllowOutcomes(2);
                        drawX(c + 1, r + 1, ctx, SQR, true);
                        drawCircle(c + 1, r + 1, ctx, SQR, true);
                    } else {
                        setAllowOutcomes(3);
                        drawX(c + 1, r + 1, ctx, SQR, false);
                        drawCircle(c + 1, r + 1, ctx, SQR, false);
                    }
                    col[1] = 2;
                }
            })
        })
    }

    //Draw x on the board to indicate coordinate attack unavailability to the user
    const drawX = (x, y, ctx, sz, shipHit) => {
        ctx.beginPath();
        ctx.lineWidth = 2;
        //Reason: One-fourth reduction for clean scalability while board is crowded
        ctx.moveTo((x * sz) - (sz * (3 / 4)), (y * sz) - (sz * (3 / 4))); //0 + 1/4, 0 + 1/4
        ctx.lineTo((x * sz) - sz / 4, (y * sz) - sz / 4); // 30 - 1/4, 30 - 1/4

        ctx.moveTo((x * sz) - sz / 4, (y * sz) - (sz * (3 / 4))); //30 - 1/4, 0
        ctx.lineTo((x * sz) - (sz * (3 / 4)), (y * sz) - sz / 4); //0, 30 - 1/4
        ctx.strokeStyle = changeStrokeStyle(shipHit);
        ctx.stroke();
    }

    //Draw circle on the board
    const drawCircle = (x, y, ctx, sz, shipHit) => {
        const centerX = (x * sz - sz) + (sz / 2);
        const centerY = (y * sz - sz) + (sz / 2);
        const endAngle = Math.PI + (Math.PI * x) / 2;

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.arc(centerX, centerY, sz / 3, 0, endAngle);
        ctx.strokeStyle = changeStrokeStyle(shipHit);
        ctx.stroke();
    }

    const changeStrokeStyle = (shipHit) => {
        return shipHit ? 'red' : 'rgb(77,166,215)';
    }

    //Output of canvas element
    const canvasContainer = (ref, size, id, player) => {
        return (
            <div className="base-container">
                <div className="canvas-container">
                    {playerInfo(player)}
                    <canvas
                        ref={ref}
                        className="cv"
                        id={id}
                        width={`${size}px`}
                        height={`${size}px`}
                    >

                    </canvas>
                    {!start && player.isHuman ? displayBeforeStartButtons(id) : null}
                </div>
            </div>
        )
    }

    //Display the current resources or state of the player
    const playerInfo = (player) => {
        return (
            <div className="player-resource-container">
                <p>{player.displayName}</p>
            </div>
        )
    }

    //Displays turn or final outcome for the user to see
    const displayTurnOrWinner = () => {
        if (!winner) {
            return (
                <p className={width > 500 ? "display-turn" : "mobile-display-turn"}>
                    {P1.turn ? `${P1.displayName} turn` : `${P2.displayName} turn`}
                </p>
            )
        }
        return (
            <p className={width > 500 ? "display-victory" : "mobile-display-victory"}>
                {P1.isWinner ? `${P1.displayName} wins!!` : `${P2.displayName} wins!!`}
            </p>
        )
    }

    //Possible instructions for the player or both parties.
    const displayInstruction = () => {
        if (winner) return (<span>{'Game ended'}</span>);
        if ((P1.isHuman || P2.isHuman) && start) return (<span>{'Destroy the enemy\'s ships'}</span>)
        if ((P1.isHuman || P2.isHuman) && !start) return (<span>{'Place the ships'}</span>)
        if (gamemode.value == 2 && !start) {
            return (<span>{'Start the battle'}</span>)
        }
        return (<span>{'Get some popcorn'}</span>)
    }

    //Buttons for gameboard property mutation
    const displayBeforeStartButtons = (id) => {
        return (
            <div className="button-container">
                <div id="p1-bottom-side">
                    <button
                        className="in-game-btn"
                        id={id === 'cv1' ? 'randomize-p1' : 'randomize-p2'}
                        onClick={randomizeShipLocation}
                    >
                        Randomize
                    </button>
                    <button
                        className="in-game-btn"
                        id={id === 'cv1' ? 'tglVsb-p1' : 'tglVsb-p2'}
                        onClick={toggleShipVisibility}
                    >
                        Toggle visibility
                    </button>
                </div>
            </div>
        )
    }

    const displayUpperButtons = () => {
        return (
            <div id="upper-button-container">
                <button
                    onClick={!start ? handleStartButton : HandleRestartButton}
                >
                    {!start ? <i className="fas fa-play"></i> : <i className="fas fa-redo-alt"></i>}

                </button>
                <button
                    id="outcome-visibility-button"
                    onClick={handleVisibilityButton}
                >
                    {outcomesVisibility ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                </button>
            </div>
        )
    }

    //Initial render of empty gameboard
    useEffect(() => {
        const cv1 = cv1Ref.current;
        const cv2 = cv2Ref.current;
        const ctx1 = cv1.getContext('2d');
        const ctx2 = cv2.getContext('2d');
        drawBoard(ctx1, SIZE, P1);
        drawBoard(ctx2, SIZE, P2);
    }, [toggleP1ShipVisibility, toggleP2ShipVisibility])

    //Main side-effects of present gameplay
    useEffect(() => {
        const cv1 = cv1Ref.current;
        const cv2 = cv2Ref.current;
        const ctx1 = cv1.getContext('2d');
        const ctx2 = cv2.getContext('2d');
        const sz = SIZE * 0.1;

        //Feature availability: to track the current coordinates demanded with mouse event
        const getCursorPosition = (attacker, defender, cvs, event) => {
            const rect = cvs.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            return playerAttack(attacker, defender, Math.round((x - sz / 2) / sz), Math.round((y - sz / 2) / sz));
        }

        const humanAttack = (attacker, defender, cv, ctx) => {
            function handler(e) {
                const attackedPosition = getCursorPosition(attacker, defender, cv, e);
                if (attackedPosition) {
                    setFakeCount(fakeCount + 1);
                    cv.removeEventListener('mousedown', handler);
                    return;
                }
                simulateBattleship(ctx, SIZE, defender);
                setCurrent({
                    turn: defender.playerNum,
                    isHuman: defender.isHuman
                });
                cv.removeEventListener('mousedown', handler);
            }
            if (attacker.turn && start) {
                LM.add(cv, 'mousedown', handler);
            }
        }

        //Allow the human players to choose a coordinates to attack
        const startHumanAttack = () => {
            //Conditionally apply event listener
            humanAttack(P1, P2, cv2, ctx2);
            humanAttack(P2, P1, cv1, ctx1);
        }

        //start the round
        const startAiAttack = () => {
            if (P1.turn) {
                autoBattle(P1, P2);
                simulateBattleship(ctx2, SIZE, P2);
                setCurrent({
                    turn: P2.playerNum,
                    isHuman: P2.isHuman
                });
            } else if (P2.turn) {
                autoBattle(P1, P2);
                simulateBattleship(ctx1, SIZE, P1);
                setCurrent({
                    turn: P1.playerNum,
                    isHuman: P1.isHuman
                });
            }
        }

        //Delay attack
        async function attackDelay(ms) {
            setTimeout(() => {
                startAiAttack();
            }, ms)
            return;
        }

        //check which player is the current turn
        async function checkCurrentPlayerTurn() {
            if (P1.isWinner || P2.isWinner) {
                setWinner(true);
                return;
            }
            //Check if current player (by turn) is an ai then proceeds
            if (!current.isHuman) {
                await attackDelay(1100);
                return;
            }
            startHumanAttack();
            return;
        }
        const startGame = () => {
            if (start && !winner) {
                checkCurrentPlayerTurn();
            }
            return;
        }
        startGame();
        return (() => {
            clearTimeout(attackDelay);
        })
    }, [current, start, fakeCount])

    return (
        <div id="Battle">
            <div id="upper-container">
                <ReturnToMenu />
                <div id="instructions-wrapper">
                    {displayInstruction()}
                </div>
                {displayUpperButtons()}
            </div>
            {(P1 !== null || P2 !== null) && width <= 500 ? displayTurnOrWinner() : null}
            <div id="main-battle">
                {canvasContainer(cv1Ref, SIZE, "cv1", P1)}
                {(P1 !== null || P2 !== null) && width > 500 ? displayTurnOrWinner() : null}
                {canvasContainer(cv2Ref, SIZE, "cv2", P2)}
            </div>
            {outcomesVisibility ? enablePrintOutcomes() : null}
        </div>
    )
}
