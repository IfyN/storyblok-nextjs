import { storyblokEditable } from "@storyblok/react";
import styles from "./Heading.module.css";

export const Heading = ({ blok }) => {
  return (
    <h1 className={styles.heading} {...storyblokEditable(blok)}>
      {blok.headline}
    </h1>
  );
};
