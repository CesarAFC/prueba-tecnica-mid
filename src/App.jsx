import React, { useEffect, useInsertionEffect, useState } from 'react';
import './App.css'

const CAT_FACT = 'https://catfact.ninja/fact';
const CAT_IMAGE_FROM_FACT = 'https://cataas.com/';

function App() {
    const [fact, setFact] = useState('lorem cat fact');
    const [imageURL, setImageURL] = useState('')

    // Primera forma
    // useEffect(() => {
    //     getCatFact(CAT_FACT);
    // }, [])
    
    // function getCatFact(url) {
    //     fetch(url)
    //     .then( res => res.json())
    //     .then(data => {
    //         const { fact } = data 
    //         setFact(fact)
    //         const firstWord = fact.split(' ', 3).join(' ')
    //         getCatImage(firstWord)
    //     })
    // }

    // function getCatImage(word) {
    //     fetch(`https://cataas.com/cat/says/${word}?json=true`)
    //     .then(res => res.json())
    //     .then(response => {
    //         const { url } = response;
    //         setImageURL(url)
    //     })
    // }

    useEffect(() => {
        fetch(CAT_FACT)
        .then( res => res.json())
        .then(data => {
            const { fact } = data 
            setFact(fact)
        })
    }, []);

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
    

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageURL && <img src={`${CAT_IMAGE_FROM_FACT}${imageURL}`} alt={'Cat'} />}
      </section>
    </main>
  );
}

export default App