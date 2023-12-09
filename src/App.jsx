import { useState } from 'react';
import styles from './App.module.css';
import SelectScreen from './components/SelectScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';

export default function App() {
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [difficulty, setDifficulty] = useState(10);
  const [cardImages, setCardImages] = useState([]);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [endMessage, setEndMessage] = useState("Wow, this should be a very cool message.")

  return (
    <main className={styles.main}>
      <h1>
        { isGameRunning ? "Select a card that you have not selected before, please." : "Hello, welcome to my game." }
      </h1>
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
          difficulty = {difficulty}/>
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