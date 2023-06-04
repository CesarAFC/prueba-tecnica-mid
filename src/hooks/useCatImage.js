import { useEffect, useState } from 'react'

function useCatImage(fact) {
    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        if(!fact) return

        const firstWord = fact.split(' ', 3).join(' ')
        fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
        .then( res => res.json())
        .then(data => {
            const { url } = data;
            setImageURL(url)
        })
    }, [fact])

    return {imageURL};
}

export default useCatImage