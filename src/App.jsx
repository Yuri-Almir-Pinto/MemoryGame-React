import { useState } from 'react';
import styles from './App.module.css';
import generalStyles from './components/general.module.css'
import SelectScreen from './components/SelectScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';

export default function App() {
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [difficulty, setDifficulty] = useState(10);
  const [cardImages, setCardImages] = useState([]);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [endMessage, setEndMessage] = useState("Wow, this should be a very cool message.")
  const [highScore, setHighScore] = useState(0);

  return (
    <main className={styles.main}>
      <h1>
        { isGameRunning ? "Select a card that you have not selected before, please." : "Hello, welcome to my game." }
      </h1>
      <button className={`${generalStyles.standardButtonWithHover} ${styles.backButton}`} onClick={() => {
        setIsGameFinished(false);
        setIsGameRunning(false);
      }}>
        Go back.
      </button>
      <h2 className={styles.highScore}>
        Highscore: {highScore}
      </h2>
      <div className={styles.gameArea}>
        {!isGameRunning ? 
          <SelectScreen
          difficulty = {difficulty}
          setDifficulty = {setDifficulty}
          setIsGameRunning = {setIsGameRunning}/>
        : !isGameFinished ?
          <GameScreen
          setIsGameFinished = {setIsGameFinished}
          cardImages = {cardImages}
          setCardImages = {setCardImages}
          setEndMessage = {setEndMessage}
          difficulty = {difficulty}
          highScore = {highScore}
          setHighScore = {setHighScore}/>
        : 
          <EndScreen
          setIsGameFinished = {setIsGameFinished}
          setIsGameRunning = {setIsGameRunning}
          endMessage = {endMessage}/>
        }
        
      </div>
    </main>
  );
}