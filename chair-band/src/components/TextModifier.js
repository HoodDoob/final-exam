import { createContext, useEffect, useState } from 'react';

export const TextModifierContext = createContext();

export const TextModifierProvider = ({ children }) => {
  const [modifyEnabled, setModifyEnabled] = useState(false);

  function modifyAllText() {
    // Get all text nodes in the document
    const textNodes = document.querySelectorAll('*');
    console.log(textNodes)
    textNodes.forEach((node) => {
      if (node.nodeType === 3) {
        // Replace all characters in the text node with "*"
        const replacedText = node.innerText.replace(/./g, '🪑');
        node.innerText = replacedText;
      }
    });
  };

  function handleButtonClick() {
    setModifyEnabled(true);
    console.log("hi")
  };

  useEffect(() => {
    if (modifyEnabled) {
      modifyAllText();
    }
  }, [modifyEnabled]);


  return (
    <TextModifierContext.Provider value={{ modifyEnabled, handleButtonClick }}>
      {children}
    </TextModifierContext.Provider>
  );
};