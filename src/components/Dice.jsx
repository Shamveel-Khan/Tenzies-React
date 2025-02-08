export default function Dice(props) {
    return (
        <span className={(props.isHeld)
                ?"held-dice"
                :"dice"
        }>{props.value}</span>
    )
}