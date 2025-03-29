import React, { useState, useEffect } from 'react';
import LanguageSelector from './LanguageSelector';
import TranslationBox from './TranslationBox';

const TranslatorApp = () => {
    const [sourceLang, setSourceLang] = useState('auto');
    const [detectedLang, setDetectedLang] = useState('');
    const [targetLanguage, setTargetLanguage] = useState('en');
    const [textToTranslate, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    useEffect(() => {
        if (!textToTranslate) {
            setTranslatedText('');
            setDetectedLang('');
            return;
        }

        const apiKey = '74192183-d133-4208-8089-02b3a9fb99e4:fx';
        const url = `https://api-free.deepl.com/v2/translate`;

        const data = new URLSearchParams({
            auth_key: apiKey,
            text: textToTranslate,
            target_lang: targetLanguage,
        });

        if (sourceLang !== 'auto') {
            data.append('source_lang', sourceLang);
        }

        fetch(url, {
            method: 'POST',
            body: data,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((result) => {
                setTranslatedText(result.translations[0].text);
                if (sourceLang === 'auto') {
                    setDetectedLang(
                        result.translations[0].detected_source_language
                    );
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [sourceLang, targetLanguage, textToTranslate]);

    const handlesourceLangChange = (e) => {
        setSourceLang(e.target.value);
        if (e.target.value !== 'auto') {
            setDetectedLang('');
        }
    };

    const handleTargetLanguageChange = (e) => setTargetLanguage(e.target.value);
    const handleTextChange = (newText) => {
        setText(newText);
        if (newText === '') {
            setTranslatedText('');
        }
    };

    return (
        <div className="main-component bg-[#B9D9EB] min-h-screen flex items-center justify-center">
            <img
                className="max-w-24 max-h-24 absolute top-10 right-10 rotate-12"
                src="/img/octopus.png"
                alt="octopus-image"
            />
            <div className="w-full max-w-4xl p-8 bg-white shadow-md rounded-lg">
                <div className="flex justify-between items-center mb-6">
                    <LanguageSelector
                        selectedLanguage={sourceLang}
                        onLanguageChange={handlesourceLangChange}
                        showDetectOption={true}
                        detectedLang={detectedLang}
                    />
                    <LanguageSelector
                        selectedLanguage={targetLanguage}
                        onLanguageChange={handleTargetLanguageChange}
                    />
                </div>

                <div className="flex flex-row justify-center gap-5 mt-10">
                    <div className="w-1/2 border border-gray-300 rounded-lg p-4">
                        <TranslationBox
                            text={textToTranslate}
                            onTextChange={handleTextChange}
                            placeholder="Type to translate."
                        />
                        <div className="flex justify-end mt-2">
                            <span className="text-gray-500 text-sm">
                                {textToTranslate.length} / 5000
                            </span>
                        </div>
                    </div>

                    <div className="w-1/2 border border-gray-300 rounded-lg p-4">
                        <TranslationBox
                            text={translatedText}
                            onTextChange={() => {}}
                            placeholder="Translation will appear here."
                            isReadOnly
                        />
                        <div className="flex justify-end items-center mt-4">
                            <button
                                className="text-[#7CB9E8] font-semibold border border-[#7CB9E8] px-4 py-1 rounded-lg 
                hover:bg-[#7CB9E8] hover:text-white 
                active:bg-[#7CB9E8] active:border-[#7CB9E8]
                transition duration-200 ease-in-out"
                                onClick={() =>
                                    navigator.clipboard.writeText(
                                        translatedText
                                    )
                                }
                            >
                                Copy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TranslatorApp;
