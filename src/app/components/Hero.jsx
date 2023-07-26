import React from "react";
import styles from "../styles/Hero.module.scss";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles["inner-container"]}>
              <div className={styles.headings}>
                <h1>
                  Stream unlimited movie nights with Amazon Prime watch party
                </h1>
              </div>
              <div className={styles.text}>
                <p>
                  Have fun with the boundless joy of a movie with amazon. Here,
                  you&apos;ll find a huge collection of films and TV shows, bringing
                  the excitement of the big screen to your home. Whether you&apos;re
                  with friends, or family, or enjoying some alone time, Amazon
                  Prime lets you share the fun with loved ones, no matter where
                  they are.
                </p>
              </div>
              <div className={styles.btn}>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["virtual-party"]}>
        <div className={styles.container}>
          <p>
            With this extension, you can sync the movie playback and chat in
            real time. Laugh together and talk about your favorite parts while
            having an audio or video call. It&apos;s a fantastic way to connect and
            enjoy the movie together, even if you&apos;re far apart. So grab some
            popcorn, relax, and have a great time.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
