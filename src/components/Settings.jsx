import React from 'react';

export default function Settings({ setGamemode, gamemode, difficulty, setDifficulty }) {
    const handleGamemodeChange = (event) => {
        setGamemode({ value: event.target.value });
    }
    const handleDifficultyChange = (event) => {
        if (event.target.id.includes(2) || gamemode.value == 1) {
            setDifficulty({...difficulty, value: event.target.value, valB: event.target.value});
            return;
        } 
        setDifficulty({...difficulty, value: event.target.value, valA: event.target.value});
    }
    return (
        <div id="Settings">
            <div className="custom-select">
                <select name="gamemodes" value={gamemode.value} onChange={handleGamemodeChange}>
                    <option value='0'>PvP</option>
                    <option value='1'>PvAI</option>
                    <option value='2'>AIvAI</option>
                </select>
            </div>

            {/* Difficulty option for AI as Player1 or AI as both parties */}
            {gamemode.value == 2 ?
                <ShowSelectDifficulty
                    gamemode={gamemode}
                    difficulty={difficulty}
                    id={1}
                    handleDifficultyChange={handleDifficultyChange}
                /> : null}
            {gamemode.value != 0 ?
                <ShowSelectDifficulty
                    gamemode={gamemode}
                    difficulty={difficulty}
                    id={2}
                    handleDifficultyChange={handleDifficultyChange}
                /> : null}
        </div>
    )
}

const ShowSelectDifficulty = ({ gamemode, difficulty, id, handleDifficultyChange }) => {
    return (
        <div className="custom-select">
            <select name="diff" value={gamemode == 1 || id == 2 ? difficulty.valB : difficulty.valA} id={`ai-diff${id}`}onChange={handleDifficultyChange}>
                <option value='1'>{gamemode.value == 1 || id == 1 ? 'AI: Easy' : 'AI 2: Easy'}</option>
                <option value='2'>{gamemode.value == 1 || id == 1 ? 'AI: Hard' : 'AI 2: Hard'}</option>
            </select>
        </div>
    )


}