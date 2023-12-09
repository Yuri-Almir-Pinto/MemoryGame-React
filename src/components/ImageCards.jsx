import styles from './ImageCards.module.css';
import {useEffect} from 'react';

export default function ImageCards(props) {
    const { cardImages, setCardImages } = props;


    useEffect(() => {
        async function getData () {
            try {
                const res = await fetch(`https://api.slingacademy.com/v1/sample-data/photos?limit=20`);
                if (!res.ok)
                    throw new Error(`Error: Fetch result is not OK. Fetch result: ${res.status}`)
    
                const images = await res.json();
    
                return images;
            }
            catch (err) {
                console.log(err);
            }
        }

        if (cardImages.length !== 0)
            return () => {};

        const data = getData();
        data.then((element) => {
            let array = [];
            element.photos.forEach((element, index) => {
                array.push({url: element.url, id: index});
            })

            setCardImages(array);
        }).catch((err) => {
            console.log(`Erro: ${err}`);
        });

        console.log(cardImages);
        
        return () => {};
    }, [cardImages])

    return ( <>
        {cardImages.map((element) => {
            return <div key = {element.id}>
                <img src = {element.url} height={120} width={120} className={styles.image}></img>
            </div>
        })}
    </>
            
    )
}