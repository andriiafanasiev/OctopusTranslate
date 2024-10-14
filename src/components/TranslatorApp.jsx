import React, { useState, useEffect } from 'react';
import LanguageSelector from './LanguageSelector';
import TranslationBox from './TranslationBox';

const TranslatorApp = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('auto');
  const [text, setText] = useState('');

  useEffect(() => {
    const apiKey = '74192183-d133-4208-8089-02b3a9fb99e4:fx';
    const url = `https://api-free.deepl.com/v2/translate`;

    const data = new URLSearchParams({
      auth_key: apiKey,
      text: 'Привіт, як справи?',
      target_lang: selectedLanguage, // мова перекладу
    });

    fetch(url, {
      method: 'POST',
      body: data,
    })
      .then((response) => response.json())
      .then((result) => {
        setText(result.translations[0].text); // оновлюємо стан після отримання перекладу
      })
      .catch((error) => console.error('Error:', error));
  }, [selectedLanguage]);

  const handleLanguageChange = (e) => setSelectedLanguage(e.target.value);
  const handleTextChange = (newText) => setText(newText);

  return (
    <div className="main-component">
      <LanguageSelector
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
      />
      <TranslationBox text={text} onTextChange={handleTextChange} />
    </div>
  );
};

export default TranslatorApp;
