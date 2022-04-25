import React, { useEffect } from 'react';

export default function Outcomes({
    p,
    currentPlayer,
    categoryNum,
    coordinate,
    outcomesArr,
    setOutcomesArr}) {

    useEffect(() => {
        const addingListInArr = () => {
            if(categoryNum === null) return;
            switch (categoryNum) {
                case 2:
                    outcomesArr.push(
                        `${currentPlayer} successfully hit an attack at ${coordinate}.`
                    )
                    break;
                case 3:
                    outcomesArr.push(
                        `${currentPlayer} missed an attack at ${coordinate}.`
                    )
                    break;
                default:
                    break;
            }
        }
        if (outcomesArr.length > 5) {
            const newArr = outcomesArr.slice(1);
            setOutcomesArr(newArr);
        }
        addingListInArr();
    }, [p, currentPlayer, outcomesArr, coordinate]);
    const outcomesInListFormat =  outcomesArr.map((txt, id)=> {
            return (
                <li key={id}>
                    {txt}
                </li>
            );
        })
    return (
        <ul id="Outcomes">
            {outcomesInListFormat}
        </ul>
    )
}
