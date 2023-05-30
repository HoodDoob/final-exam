import React, { createContext, useState } from 'react';

export const TextModifierContext = createContext();

export const TextModifierProvider = ({ children }) => {
  const [modifiedText, setModifiedText] = useState('');

  const modifyText = (text) => {
    // Replace letter characters with a specified character
    const replacedText = text.replace(/[a-zA-Z]/g, '*');
    setModifiedText(replacedText);
  };

  return (
    <TextModifierContext.Provider value={modifyText}>
      {children}
    </TextModifierContext.Provider>
  );
};