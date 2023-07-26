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
                Enjoy unlimited streaming fun with friends and family, no matter
                the distance, using the browser extension. Watch Prime together
                and chat, make audio and video calls while enjoying your
                favorite shows. You can also have an{" "}
                <span> Amazon Prime group watch </span>
                with your friends.
              </p>
              <p>
                With this feature, everyone can enjoy synchronized streaming, so
                all participants see the same video at the exact same time as if
                they were watching together in person. Plus, it comes with a
                built-in chat feature that lets viewers interact with each other
                during the movie or show. It&apos;s like having a virtual movie night
                with friends, making the experience even more enjoyable and
                engaging!
              </p>
              <p>
                You can discuss scenes, share reactions, and engage in real-time
                conversations, enhancing the shared viewing experience.
              </p>
              <p>
                To use this extension, make sure you have an active Amazon Prime
                subscription. The feature is available for specific movies and
                TV shows within the Amazon Prime Video library. So, check out
                the eligible content and start enjoying the fun of synchronized
                streaming with your friends and family.
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
