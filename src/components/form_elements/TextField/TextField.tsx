import type React from "react";
import styles from "./TextField.module.css";

type TextFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: () => void;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  id,
  error,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className={styles.textField}>
      <div className={styles.description}>
        <label htmlFor={id}>{label}</label>
        <small>{error}</small>
      </div>
      <input
        style={{ border: error ? "2px solid var(--error)" : "" }}
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
