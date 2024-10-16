import React, { useEffect, useRef } from 'react';

const TranslationBox = ({ text, onTextChange, placeholder, isReadOnly }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current && !isReadOnly) {
      textareaRef.current.focus();
    }
  }, [isReadOnly]);

  return (
    <div className="w-full border border-none rounded-lg p-4 relative">
      <textarea
        ref={textareaRef}
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
