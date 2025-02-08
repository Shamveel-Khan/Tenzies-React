import Dice from "./Dice"
import React from "react";

export default function Main() {
    function generateAllNewDice() {
        let array=[];
        for(let i=0;i<10;i++) {
            let num=Math.ceil(Math.random() * 6);
            array.push(num)
        }
        return array
    }
    console.log(generateAllNewDice());
    const [numbers, setNumbers]=React.useState(generateAllNewDice());

    return (
        <section className="main">
            <div className="col">
                {numbers.filter((_,idx)=> idx < 5).map((item,idx)=> {
                    return (
                        <Dice key={idx} value={item} />
                    )
                })}
            </div>
            <div className="col">
            {numbers.filter((_,idx)=> idx >= 5).map((item,idx)=> {
                    return (
                        <Dice key={idx} value={item} />
                    )
                })}
            </div>
            <button onClick={()=> {
                setNumbers(generateAllNewDice)
            }}
                className="roll">
                ROLL
            </button>
        </section>
    )
}