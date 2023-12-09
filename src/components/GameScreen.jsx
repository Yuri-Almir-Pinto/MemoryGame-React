import styles from './GameScreen.module.css';
import {useEffect} from 'react';
import ImageCards from './imageCards';

export default function GameScreen(props) {
    const { setIsGameRunning, cardImages, setCardImages } = props;

    return (
        <div className={styles.gamePanel}>
            <ImageCards
            cardImages = {cardImages}
            setCardImages = {setCardImages}/>
        </div>
    )
}