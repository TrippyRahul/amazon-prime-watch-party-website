import React from "react";
import styles from "../styles/Hero.module.scss";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1>Stream unlimited movie nights with Amazon Prime watch party</h1>
            <p>
              Amazon offers endless entertainment through movies. There is a
              wide selection of films and television shows in this addition.
              Therefore, gather your loved ones for movie nights and enjoy them
              in a special way. You&apos;ll be able to give your loved ones a
              genuine moment of joy.
            </p>

            <Button />
          </div>
          <div className={styles.right}>
            <div className={styles[`image-container`]}>
              <Image
                src={`/hero-img.svg`}
                alt="hero-img"
                fill
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <p>
              Now, you can chat and make audio and video calls with this
              extension. While watching a movie together you can discuss any
              scene with your partner at the same time. So, just relax and binge
              a movie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
