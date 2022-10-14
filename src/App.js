import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import data from './data';

const App = () => {
  const [value, setValue] = useState(0);
  const [newParagraphs, setNewParagraphs] = useState([]);

  const paragraphs = data;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value < 1) {
      return setNewParagraphs(paragraphs.slice(0, 1));
    }

    if (value > paragraphs.length - 1) {
      setValue(paragraphs.length - 1);
    }

    setNewParagraphs(paragraphs.slice(0, value));
  };

  return (
    <main>
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="num">Paragraphs: </label>
        <input
          type="number"
          id="num"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Generate</button>
      </form>

      <section>
        {newParagraphs.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </section>
    </main>
  );
};

export default App;
