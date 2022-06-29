import { storyblokEditable } from "@storyblok/react";
import styles from "./Heading.module.css";

export const Subheading = ({ blok }) => {
  return (
    <h2 className={styles.heading} {...storyblokEditable(blok)}>
      {blok.title}
    </h2>
  );
};
