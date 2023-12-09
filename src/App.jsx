import { useState } from 'react';
import styles from './App.module.css';
import SelectScreen from './components/SelectScreen';
import GameScreen from './components/GameScreen';

export default function App() {
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [difficulty, setDifficulty] = useState("normal");
  const [cardImages, setCardImages] = useState([]);

  function onChange( {target} ) {
    setValue(target.value);
    setCount(count + 1);
  }

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
        : 
          <GameScreen
          setIsGameRunning = {setIsGameRunning}
          cardImages = {cardImages}
          setCardImages = {setCardImages}/>
        }
        
      </div>
    </main>
  );
}