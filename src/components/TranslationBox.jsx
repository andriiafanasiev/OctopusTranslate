import React from 'react';

const TranslationBox = ({ text, onTextChange, placeholder, isReadOnly }) => {
  return (
    <div className="w-full border border-none rounded-lg p-4 relative">
      <textarea
        className="w-full h-full text-lg border-none focus:outline-none resize-none"
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder={placeholder}
        maxLength={5000}
        readOnly={isReadOnly}
      />
    </div>
  );
};

export default TranslationBox;
