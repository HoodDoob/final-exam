import { useContext } from 'react';
import { TextModifierContext } from './TextModifier';

export default function Button() {
  const { handleButtonClick } = useContext(TextModifierContext);

  return (
    <button onClick={handleButtonClick}>Chair Mode</button>
  );
}