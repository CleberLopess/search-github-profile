import React from "react";
import styles from "./styles.module.css";

interface Options {
  value: string | undefined;
  label: string;
}

interface Props {
  name: string;
  id: string;
  options: Options[];
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ id, name, options, disabled, onChange }: Props) => {
  return (
    <select
      id={id}
      name={name}
      className={styles.select}
      disabled={disabled}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
