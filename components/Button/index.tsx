import React from "react";
import styles from "./styles.module.css";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: HTMLButtonElement["disabled"];
  type: HTMLButtonElement["type"];
}

const Button = ({ children, onClick, disabled, type = "button" }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type as any}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
