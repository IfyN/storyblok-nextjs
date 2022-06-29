import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import styles from "./Pets.module.css";

export const Pets = ({ blok }) => {
  return (
    <div className={styles.infobox} {...storyblokEditable(blok)}>
      {blok.items.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
