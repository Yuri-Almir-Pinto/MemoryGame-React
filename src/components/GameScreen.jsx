import styles from './GameScreen.module.css';
import ImageCards from './imageCards';
import {useState} from 'react';

export default function GameScreen(props) {
    const { setIsGameLost, cardImages, setCardImages } = props;
    const [selectedImages, setSelectedImages] = useState([]);

    function randomizeImages() {
        const images = structuredClone(cardImages);
        if(cardImages.length !== 0) {
            for (let i = 0 ; i < 50 ; i++) {
                const currentIndex = Math.floor((Math.random() * 20));
                const newIndex = Math.floor((Math.random() * 20))

                const store = images[newIndex];
                images[newIndex] = images[currentIndex]
                images[currentIndex] = store;
            }
        }
        setCardImages(images);
    }

    function imageClickHandler({target}) {
        debugger;
        if (target.tagName === "IMG" && target.src != null) {
            if (selectedImages.length === 0) {
                let images = [];
                images.push(target.src);
                setSelectedImages(images);
                randomizeImages();
            }
            else {
                const alreadyPresent = selectedImages.some((element) => element === target.src);

                if (alreadyPresent) {
                    setIsGameLost(true);
                }
                else {
                    let images = selectedImages.length !== 0 ? structuredClone(selectedImages) : [];
            
                    images.push(target.src);
                    setSelectedImages(images);
                    randomizeImages();
                }
                
            }
                
        }
    }

    return (
        <div className={styles.gamePanel} onClick={imageClickHandler}>
            <ImageCards
            cardImages = {cardImages}
            setCardImages = {setCardImages}/>
        </div>
    )
}