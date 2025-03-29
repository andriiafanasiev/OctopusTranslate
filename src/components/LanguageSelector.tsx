import React, { useState } from 'react';
import { languages } from '../utils/languages';

interface LanguageSelectorProps {
    selectedLanguage: string;
    onLanguageChange: (e: React.ChangeEvent<HTMLButtonElement>) => void;
    showDetectOption: boolean;
    detectedLang?: string;
}

const LanguageSelector = ({
    selectedLanguage,
    onLanguageChange,
    showDetectOption,
    detectedLang,
}: LanguageSelectorProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="language-selector relative inline-block">
            <button
                onClick={toggleDropdown}
                className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-56 text-left text-sm"
            >
                {selectedLanguage === 'auto'
                    ? `Detect language${
                          detectedLang ? ` (${detectedLang})` : ''
                      }`
                    : languages.find((lang) => lang.code === selectedLanguage)
                          ?.name || 'Select language'}
                <span className="ml-2">&#9662;</span>
            </button>

            {isOpen && (
                <div className="absolute z-10 bg-white border border-gray-300 mt-1 rounded-md shadow-lg w-full max-w-xs">
                    <div className="grid grid-cols-2 gap-3 p-4 max-h-64 overflow-auto text-sm">
                        {showDetectOption && (
                            <div
                                onClick={() => {
                                    onLanguageChange({
                                        target: { value: 'auto' },
                                    } as any);
                                    toggleDropdown();
                                }}
                                className={`px-4 py-2 hover:bg-gray-200 cursor-pointer ${
                                    selectedLanguage === 'auto'
                                        ? 'bg-gray-100 font-semibold'
                                        : ''
                                }`}
                            >
                                Detect language
                            </div>
                        )}
                        {languages.map((lang) => (
                            <div
                                key={lang.code}
                                onClick={() => {
                                    onLanguageChange({
                                        target: { value: lang.code },
                                    } as any);
                                    toggleDropdown();
                                }}
                                className={`px-4 flex justify-center items-center py-2 hover:bg-gray-200 cursor-pointer ${
                                    selectedLanguage === lang.code
                                        ? 'bg-gray-100 font-semibold'
                                        : ''
                                }`}
                            >
                                {lang.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
