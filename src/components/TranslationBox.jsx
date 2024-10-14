import React from 'react';

const TranslationBox = ({ text, onTextChange }) => {
  return (
    <div className="translation-box">
      <textarea
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Type to translate."
      />
    </div>
  );
};

export default TranslationBox;
