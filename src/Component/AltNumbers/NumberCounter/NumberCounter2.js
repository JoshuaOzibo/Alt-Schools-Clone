// NumberCounter.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NumberCounter2 = ({ targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < targetNumber) {
      const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 40); // Adjust the interval speed as needed

      return () => clearInterval(interval);
    }
  }, [count, targetNumber]);

  return (
    <div className="number-counter">
      <motion.span className="count">{count}%</motion.span>
    </div>
  );
};

export default NumberCounter2;