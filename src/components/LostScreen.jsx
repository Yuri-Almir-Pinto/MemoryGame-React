import styles from './LostScreen.module.css';
import generalStyles from './general.module.css'
import {useEffect} from 'react';

export default function LostScreen(props) {
    const {setIsGameLost, setIsGameRunning} = props

    function returnSelectScreen () {
        setIsGameLost(false);
        setIsGameRunning(false);
    }

    return (
        <div className={styles.lostPanel}>
            <h2>You lost. How sad.</h2>
            <button className={generalStyles.standardButtonWithHover} onClick={returnSelectScreen}>
                Return
            </button>
        </div>
    )
}