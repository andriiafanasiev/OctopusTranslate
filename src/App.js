import React, { useState, useEffect } from 'react';
import './App.css';
import TranslatorApp from './components/TranslatorApp';

function App() {
  const [translate, setTranslate] = useState('');
  useEffect(() => {
    const apiKey = '74192183-d133-4208-8089-02b3a9fb99e4:fx';
    const url = `https://api-free.deepl.com/v2/translate`;

    const data = new URLSearchParams({
      auth_key: apiKey,
      text: 'Привіт, як справи?',
      target_lang: 'EN',
    });

    fetch(url, {
      method: 'POST',
      body: data,
    })
      .then((response) => response.json())
      .then((result) => {
        setTranslate(result.translations[0].text);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <TranslatorApp />
    </div>
  );
}

export default App;
