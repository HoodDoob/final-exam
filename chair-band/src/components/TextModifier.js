import { createContext, useEffect, useState } from 'react';

export const TextModifierContext = createContext();

export const TextModifierProvider = ({ children }) => {
  const [modifyEnabled, setModifyEnabled] = useState(false);

  function modifyAllText() {
    // Get all text nodes in the document
    const textNodes = document.querySelectorAll('*');
    console.log(textNodes)
    textNodes.forEach((node) => {
      if (node.nodeName == "P" || node.nodeName == "H1" || node.nodeName == "LI") {

        console.log("we're here now")
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