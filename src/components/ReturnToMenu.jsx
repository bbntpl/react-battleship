import { useHistory } from 'react-router-dom'

export default function ReturnToMenu() {
    const history = useHistory();

    function handleClick() {
        history.push('/battleship/');
    }
    return (
        <li id="Return" onClick={handleClick}>
            <i className="fas fa-arrow-circle-left"></i>
            Return to Menu
        </li>
    )
}