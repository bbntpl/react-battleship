const Ship = (name, health) => { //health and length are synonymous based on the inherent logic and rule of this game
    let currentState = 'safe'; // three state: safe, hit, sunk
    let currentHealth = health;
    const getName = () => name;
    const getHealth= () => currentHealth;
    const getCurrentState = () => currentState;
    const isSunk = () => {
        return currentHealth === 0 ? currentState = 'sunk' : null;
    }
    const hit = () => {
        currentHealth -= 1;
        currentState = 'hit';
        isSunk();
    };
    return {
        getName,
        getHealth,
        getCurrentState,
        hit,
        isSunk,
    }
}

export default Ship;