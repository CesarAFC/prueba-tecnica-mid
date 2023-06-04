import React, { useEffect, useInsertionEffect, useState } from 'react';
import './App.css'
import useCatFact from './hooks/useCatFact';
import useCatImage from './hooks/useCatImage';

const CAT_FACT = 'https://catfact.ninja/fact';
const CAT_IMAGE_FROM_FACT = 'https://cataas.com/';

function App() {
    //const [fact, setFact] = useState();
    // const [imageURL, setImageURL] = useState('');
    const { fact, refreshFact } = useCatFact();
    const {imageURL} = useCatImage(fact)

    const handleClick = () => {
        refreshFact()
      }

      // Primera forma
    {
    // ************************************************************************************
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
    }


    // Segunda opcion
    {
    // useEffect(() => {
    //     fetch(CAT_FACT)
    //     .then( res => res.json())
    //     .then(data => {
    //         const { fact } = data 
    //         setFact(fact)
    //     })
    // }, []);


    // useEffect(() => {
    //     if(!fact) return

    //     const firstWord = fact.split(' ', 3).join(' ')
    //     fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
    //     .then( res => res.json())
    //     .then(data => {
    //         const { url } = data;
    //         setImageURL(url)
    //     })
    // }, [fact])
    }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick} >Get new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageURL && <img src={`${CAT_IMAGE_FROM_FACT}${imageURL}`} alt={'Cat'} />}
      </section>
    </main>
  );
}

export default App