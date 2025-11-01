import type React from "react";
import styles from "./TextField.module.css";

type TextFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: () => void;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className={styles.textField}>
      <label htmlFor="">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
