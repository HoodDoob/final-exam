import { createContext, useEffect, useState } from 'react';

export const TextModifierContext = createContext();

export const TextModifierProvider = ({ children }) => {
  const [modifyEnabled, setModifyEnabled] = useState(false);

  function modifyAllText() {
    // Get all text nodes in the document
    const textNodes = document.querySelectorAll('*');
    textNodes.forEach((node) => {
      if (node.nodeName == "P" || node.nodeName == "H1" || node.nodeName == "H2" || node.nodeName == "H3" || node.nodeName == "H4" || node.nodeName == "LI" || node.nodeName == "A" || node.nodeName == "LABEL") {
        // Replace all characters in the text node with "*"
        const replacedText = node.innerText.replace(/[a-zA-Z]/g, '🪑');
        node.innerText = replacedText;
      }
    });
  };

  function handleButtonClick() {
    setModifyEnabled(!modifyEnabled);
    console.log("hi")
  };

  useEffect(() => {
    if (modifyEnabled) {
      modifyAllText();
    }
  }, [modifyEnabled]);


  return (
    <TextModifierContext.Provider value={{ modifyEnabled, handleButtonClick, modifyEnabled, modifyAllText }}>
      {children}
    </TextModifierContext.Provider>
  );
};