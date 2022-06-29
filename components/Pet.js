import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import styles from "./Pet.module.css";

export const Pet = ({ blok }) => (
  <div className={styles.infobox_content} {...storyblokEditable(blok)}>
    <h2 className={styles.infobox_name}>{blok.name}</h2>
    {blok.image && <img alt={blok.image.alt} src={blok.image.filename} />}
    <h3 className={styles.efv} {...storyblokEditable(blok)}>
      {blok.specie}
    </h3>
    <p {...storyblokEditable(blok)}> {blok.description}</p>
  </div>
);
