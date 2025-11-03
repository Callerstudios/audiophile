import type React from "react";
import styles from "./TextField.module.css";

type TextFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  fullWidth?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  id,
  error,
  placeholder,
  value,
  onChange,
  fullWidth,
}) => {
  return (
    <div className={`${styles.textField} ${fullWidth ? "w-full" : "max-w-77"}`}>
      <div className={styles.description}>
        <label htmlFor={id}>{label}</label>
        <small>{error}</small>
      </div>
      <input
        style={{ border: error ? "2px solid #CD2C2C" : "" }}
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
