import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = `https://api.icndb.com/jokes/random`;

function App() {
  const [joke, setJoke] = useState('');

  const generateJoke = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setJoke(data.value.joke))
  }

  useEffect(() => {
    generateJoke();
  }, [])

  return (
    <div className="box">
      <h2>Chuck Norris Jokes Generator</h2>
      <p>{joke}</p>
      <button onClick={generateJoke}>Get a joke <span role="img">😄</span>  </button>
    </div>
  );
}

export default App;
