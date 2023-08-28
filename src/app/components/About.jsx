import React from "react";
import styles from "../styles/about.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.headings}>
              <h2>About Amazon Prime</h2>
            </div>
            <div className={styles.desc}>
              <p>
                It is the best tool to enjoy endless fun with friends and
                family. It has the best features like chatting, audio, and video
                calls while watching your favorite series. You can also create
                an <span> Amazon Prime group watch </span> with your buddies.
              </p>
              <p>
                You can enjoy movies at the same time by just logging in
                together. So, if your friend is in another city, now you can
                still watch the movie with them. Plus, it has a great chat
                feature with audio and video callsto discuss your fqvrouite
                content. It is like you are watching a movie in a theatre
                without extra disturbance.
              </p>
              <p>
                You can share laughter, joy and discuss scenes in real time.
              </p>
              <p>
                You need to have an active account on Amazon Prime. Visit the
                Amazon video library and choose your favorite content to watch.
                It has great features like you can chat, audio, and video calls
                while streaming series.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="./about.svg"
                alt="about"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
