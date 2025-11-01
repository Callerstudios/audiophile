import React from "react";
import styles from "./CustomRadio.module.css";

interface CustomRadioProps {
  label: string;
  value: string;
  name: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const CustomRadio: React.FC<CustomRadioProps> = ({
  label,
  value,
  name,
  checked,
  onChange,
}) => {
  return (
    <label
      className={`${styles.radioContainer} ${checked ? styles.active : ""}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className={styles.radioInput}
      />
      <span className={styles.customCircle}></span>
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default CustomRadio;
