import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

const ImageProfile = ({ src, alt }: Props) => {
  return <img className={styles.imageProfile} alt={alt} src={src} />;
};

export default ImageProfile;
