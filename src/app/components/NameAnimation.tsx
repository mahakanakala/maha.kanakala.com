import React, { useState, useEffect } from "react";
import styles from '../page.module.css';

const NameAnimation = () => {
  const [inputValue, setInputValue] = useState("");
  const [currentChar, setCurrentChar] = useState("");

  const typingSpeed = 200;
  const texts = ['maha', 'महा', 'మహా'];

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setInputValue(prevValue => prevValue + currentChar);
      setCurrentChar("");
    }, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [currentChar]);

  useEffect(() => {
    const currentText = texts.join("");
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setCurrentChar(currentText[currentIndex]);
      currentIndex = (currentIndex + 1) % currentText.length;

      if (currentIndex === 0) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  },);

  return <input title='name' type="text" className={styles.nameCenter} value={inputValue} />;
};

export default NameAnimation;
