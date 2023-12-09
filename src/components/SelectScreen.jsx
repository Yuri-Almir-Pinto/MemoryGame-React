import styles from './SelectScreen.module.css';

export default function SelectScreen(props) {
    const { difficulty, setDifficulty, setIsGameRunning } = props;

    function buttonClickHandler({target}) {
        if (target.tagName === "BUTTON" && target.value != null) {
            setDifficulty(Number.parseInt(target.value));
        }
    }

    return (
        <div className={styles.selectPanel}>
            <h2>Select the game's difficulty.</h2>
            <div className={styles.difficultyButtons} onClick={buttonClickHandler}>
                <button className={difficulty === 5 ? styles.selectedDifficulty : ""} value={5}>
                    Easy.
                </button>
                <button className={difficulty === 10 ? styles.selectedDifficulty : ""} value={10}>
                    Normal.
                </button>
                <button className={difficulty === 15 ? styles.selectedDifficulty : ""} value={15}>
                    Hard.
                </button>
                <button className={difficulty === 30 ? styles.selectedDifficulty : ""} value={30}>
                    Impossible.
                </button>
            </div>
            <div className={styles.beginGame}>
                <button onClick={() => setIsGameRunning(true)}>Begin game.</button>
            </div>
        </div>
    )
}