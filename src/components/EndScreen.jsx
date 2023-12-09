import styles from './EndScreen.module.css';
import generalStyles from './general.module.css'

export default function EndScreen(props) {
    const {setIsGameFinished, setIsGameRunning, endMessage} = props

    function returnSelectScreen () {
        setIsGameFinished(false);
        setIsGameRunning(false);
    }

    return (
        <div className={styles.lostPanel}>
            <h2>{endMessage}</h2>
            <button className={generalStyles.standardButtonWithHover} onClick={returnSelectScreen}>
                Return
            </button>
        </div>
    )
}