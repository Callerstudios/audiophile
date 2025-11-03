import React from "react";
import styles from "./NumberSelector.module.css";

interface NumberSelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const NumberSelector: React.FC<NumberSelectorProps> = ({
  value,
  onChange,
  min = 1,
  max = 99,
}) => {
  const handleDecrease = () => {
    if (value > min) onChange(value - 1);
  };

  const handleIncrease = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div className={`${styles.container} bg-gray-1`}>
      <button
        className={`${styles.button} hover:text-brown-1 opacity-25`}
        onClick={handleDecrease}
        aria-label="Decrease quantity"
        >
        –
      </button>

      <span className={styles.value}>{value}</span>

      <button
        className={`${styles.button} hover:text-brown-1 opacity-25`}
        onClick={handleIncrease}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default NumberSelector;
