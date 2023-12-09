import { useState } from 'react';
import styles from './App.module.css';
import SelectScreen from './components/SelectScreen';
import GameScreen from './components/GameScreen';
import LostScreen from './components/LostScreen';

export default function App() {
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [difficulty, setDifficulty] = useState("normal");
  const [cardImages, setCardImages] = useState([]);
  const [isGameLost, setIsGameLost] = useState(false);

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
        : !isGameLost ?
          <GameScreen
          setIsGameLost = {setIsGameLost}
          cardImages = {cardImages}
          setCardImages = {setCardImages}/>
        : 
          <LostScreen
          setIsGameLost = {setIsGameLost}
          setIsGameRunning = {setIsGameRunning}/>
        }
        
      </div>
    </main>
  );
}