import React from "react";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
