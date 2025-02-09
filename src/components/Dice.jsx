export default function Dice(props) {
    return (
        <span className={(props.isHeld)
                ?"held-dice"
                :"dice"
        }
        onClick={()=> props.hold(props.id)}>
            {props.value}
        </span>
    )
}