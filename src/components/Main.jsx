import Dice from "./Dice"
import React from "react";

export default function Main() {
    const [diceComponent,setDiceComponent] = React.useState(
        new Array(10).fill(null).map(()=> ({
            num: Math.ceil(Math.random() * 6),
            isHeld: false
        }))
    );
    console.log(diceComponent);
    function rollDice() {
        setDiceComponent((prev)=> {
            return prev.map((item)=> ({
                num: Math.ceil(Math.random() * 6),
                isHeld: item.isHeld
            }))
        })
    }
    return (
        <section className="main">
            <div className="col">
                {diceComponent.filter((_,idx)=> idx <5).map((item,idx)=> {
                    return (
                        <Dice key={idx} value={item.num} isHeld={item.isHeld}/>
                    )
                })}
            </div>
            <div className="col">
                {diceComponent.filter((_,idx)=> idx >= 5).map((item,idx)=> {
                    return (
                        <Dice key={idx} value={item.num} isHeld={item.isHeld}/>
                    )
                })}
            </div>
            <button 
                onClick={rollDice}
                className="roll">
                ROLL
            </button>
        </section>
    )
}