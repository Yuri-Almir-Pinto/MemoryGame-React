import styles from './ImageCards.module.css';
import {useEffect, useState} from 'react';

export default function ImageCards(props) {
    const { cardImages, setCardImages, difficulty, randomizeImages } = props;
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        async function getData () {
            try {
                const res = await fetch(`https://api.slingacademy.com/v1/sample-data/photos?limit=${difficulty}`);
                if (!res.ok)
                    throw new Error(`Error: Fetch result is not OK. Fetch result: ${res.status}`)
    
                const images = await res.json();
    
                return images;
            }
            catch (err) {
                console.log(err);
            }
        }
        debugger;

        if (cardImages.length !== 0 && !(cardImages.length < difficulty))
            return () => {};

        const data = getData();
        data.then((element) => {
            let array = [];
            element.photos.forEach((element, index) => {
                array.push({url: element.url, id: index});
            })

            setCardImages(array);
            setImagesLoaded(true);
        }).catch((err) => {
            console.log(`Erro: ${err}`);
        });
        
        return () => {};
    }, [cardImages, difficulty])

    useEffect(() => {
        if(imagesLoaded) {
            randomizeImages();
            setImagesLoaded(false);
        }
    }, [imagesLoaded])

    return ( <>
        {cardImages.map((element, index) => {
            if (index >= difficulty)
                return;
            return <div key = {element.id} className={styles.imageCard}>
                <img src = {element.url} height={120} width={120} className={styles.image}></img>
            </div>
        })}
    </>
            
    )
}