import classes from "./OnlineLine.css"

const OnlineLine = ({ onlineState }) => {
    if (onlineState.online) {
        return (
            <span className={classes.onlineLine}>Online</span>
        )
    } else {
        return (
            <span className={classes.offlineLine}>Offline, last seen {onlineState.lastSeen}</span>
        )
    }
}

export default OnlineLine