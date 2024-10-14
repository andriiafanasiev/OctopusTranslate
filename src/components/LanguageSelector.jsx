import React from 'react';

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <div className="language-selector">
      <select value={selectedLanguage} onChange={onLanguageChange}>
        <option value="auto">Detect language</option>
        <option value="en">English (American)</option>
        <option value="uk">Ukrainian</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
        <option value="pt">Portuguese</option>
        <option value="zh">Chinese (Simplified)</option>
        <option value="ja">Japanese</option>
        <option value="ko">Korean</option>
        <option value="ar">Arabic</option>
        <option value="pl">Polish</option>
        <option value="nl">Dutch</option>
        <option value="sv">Swedish</option>
        <option value="cs">Czech</option>
        <option value="el">Greek</option>
        <option value="tr">Turkish</option>
        <option value="hi">Hindi</option>
        <option value="he">Hebrew</option>
        <option value="fi">Finnish</option>
        <option value="da">Danish</option>
        <option value="hu">Hungarian</option>
        <option value="no">Norwegian</option>
        <option value="th">Thai</option>
        <option value="vi">Vietnamese</option>
        <option value="id">Indonesian</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
