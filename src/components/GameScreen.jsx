import styles from './GameScreen.module.css';
import ImageCards from './imageCards';
import {useState, useEffect} from 'react';

export default function GameScreen(props) {
    const { setIsGameFinished, cardImages, setCardImages, setEndMessage, difficulty, highScore, setHighScore } = props;
    const [selectedImages, setSelectedImages] = useState([]);

    function decideHighScore() {
        if (selectedImages.length + 1 > highScore)
            setHighScore(highScore + 1);
    }

    function randomizeImages() {
        const images = structuredClone(cardImages);
        if(cardImages.length !== 0) {
            for (let i = 0 ; i < difficulty*2 ; i++) {
                const currentIndex = Math.floor((Math.random() * difficulty));
                const newIndex = Math.floor((Math.random() * difficulty))

                const store = images[newIndex];
                images[newIndex] = images[currentIndex]
                images[currentIndex] = store;
            }
        }
        setCardImages(images);
    }

    function imageClickHandler({target}) {
        if (target.tagName === "IMG" && target.src != null) {
            if (selectedImages.length === 0) {
                let images = [];
                images.push(target.src);
                setSelectedImages(images);
                randomizeImages();
                decideHighScore();
            }
            else {
                const alreadyPresent = selectedImages.some((element) => element === target.src);

                if (alreadyPresent) {
                    setIsGameFinished(true);
                    setEndMessage("You have lost. How sad.")
                }
                else {
                    let images = selectedImages.length !== 0 ? structuredClone(selectedImages) : [];
            
                    images.push(target.src);
                    setSelectedImages(images);
                    randomizeImages();
                    decideHighScore();
                }
                
            }
                
        }
    }

    useEffect(() => {
        if (selectedImages.length > difficulty-1) {
            setIsGameFinished(true);
            setEndMessage("Wow, you won. Congratulations.")
        }
    }, [selectedImages]);

    return (
        <div className={styles.outsidePanel}>
            <h2>{selectedImages.length}/{difficulty} Images selected.</h2>
            <div className={styles.gamePanel} onClick={imageClickHandler}>
                <ImageCards
                cardImages = {cardImages}
                setCardImages = {setCardImages}
                difficulty = {difficulty}
                randomizeImages = {randomizeImages}/>
            </div>
        </div>
        
    )
}