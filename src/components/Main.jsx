import Confetti from "react-confetti";
import Dice from "./Dice"
import React from "react";

export default function Main() {
    const [diceComponent,setDiceComponent] = React.useState(
        new Array(10).fill(null).map(()=> ({
            num: Math.ceil(Math.random() * 6),
            isHeld: false
        }))
    );
    const [gameWon,setGameWon]=React.useState(false);
    function rollDice() {
        if(gameWon) {
            setGameWon(false);
            setDiceComponent((prev)=> {
                return prev.map((item,idx)=> {
                    return {
                        num:Math.ceil(Math.random() * 6),
                        isHeld: false
                    }
                })
            })
        }
        else {
            setDiceComponent((prev)=> {
                return prev.map((item)=> ({
                    num: (item.isHeld)? item.num : Math.ceil(Math.random() * 6),
                    isHeld: item.isHeld
                }))
            })
        }
    }

    function hold(id) {
        setDiceComponent((prev) =>
            prev.map((item, idx) => 
                idx === id ? { ...item, isHeld: !item.isHeld } : item
            )
        );
    }
    React.useEffect(()=> {
        const allSameNum = diceComponent.every(die => die.num === diceComponent[0].num);
        const allHeld = diceComponent.every(die => die.isHeld);
    
        if (allSameNum && allHeld) {
            setGameWon(true)
        }
    },[diceComponent]);
    return (
        <section className="main">
            {gameWon && <Confetti />}
            {
                (gameWon)
                ?<h1 className="header-h1">
                    YOU WON!!
                </h1>
                :<>
                <p className="description">
                    Roll until all dices are the same click each die 
                    to freeze it at its position 
                </p>
                <div className="col">
                {diceComponent.filter((_,idx)=> idx <5).map((item,idx)=> {
                    return (
                        <Dice 
                            id={idx} 
                            hold={hold} 
                            key={idx} 
                            value={item.num} 
                            isHeld={item.isHeld}
                            isWon={gameWon}
                        />
                    )
                })}
            </div>
            <div className="col">
                {diceComponent.filter((_,idx)=> idx >= 5).map((item,idx)=> {
                    return (
                        <Dice 
                            key={idx+5} 
                            value={item.num} 
                            isHeld={item.isHeld}
                            id={idx+5}
                            hold={hold}
                            isWon={gameWon}
                        />
                    )
                })}
            </div>
            </>
            }
            <button 
                onClick={rollDice}
                className="roll">
                {
                    (gameWon)
                    ?"New Game"
                    :"Roll"
                }
            </button>
        </section>
    )
}