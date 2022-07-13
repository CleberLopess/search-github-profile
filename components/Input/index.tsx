import React from "react";
import styles from "./styles.module.css";

interface Props {
  type?: HTMLInputElement["type"];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: HTMLInputElement["placeholder"];
  value?: HTMLInputElement["value"];
  disabled?: HTMLInputElement["disabled"];
  required?: HTMLInputElement["required"];
}

const Input = ({ onChange, placeholder, type, value, disabled }: Props) => {
  return (
    <input
      className={styles.input}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default Input;
