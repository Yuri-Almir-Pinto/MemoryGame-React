import styles from './SelectScreen.module.css';

export default function GameScreen(props) {
    const { difficulty, setDifficulty } = props;

    function buttonClickHandler({target}) {
        if (target.tagName === "BUTTON" && target.value != null) {
            setDifficulty(target.value);
        }
    }

    return (
        <div className={styles.selectPanel}>
            <h2>Select the game's difficulty.</h2>
            <div className={styles.difficultyButtons} onClick={buttonClickHandler}>
                <button className={difficulty === "easy" ? styles.selectedDifficulty : ""} value="easy">
                    Easy.
                </button>
                <button className={difficulty === "normal" ? styles.selectedDifficulty : ""} value="normal">
                    Normal.
                </button>
                <button className={difficulty === "hard" ? styles.selectedDifficulty : ""} value="hard">
                    Hard.
                </button>
                <button className={difficulty === "impossible" ? styles.selectedDifficulty : ""} value="impossible">
                    Impossible.
                </button>
            </div>
            <div className={styles.beginGame}>
                <button>Begin game.</button>
            </div>
        </div>
    )
}