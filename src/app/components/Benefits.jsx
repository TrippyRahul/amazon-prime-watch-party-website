import React from "react";
import styles from "../styles/benefits.module.scss";
import Button from "./Button";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className={styles.benefits} id="features">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles["image-container"]}>
            <Image
              src="./benefits.svg"
              alt="benefits"
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.headings}>
              <h2>Experience endless watching with teleparty amazon prime</h2>
            </div>
            <div className={styles.desc}>
              <p>
                With teleparty amazon prime, you will have unlimited movies and
                series. Enjoy the ultimate experience with friends on watch
                amazon prime together. In this extension, you will have a huge
                variety of collections of movies and shows. So, have the best
                movie nights.
              </p>
              <p>
                So, it’s not like you are watching it all alone, it is like you
                are watching it with your family and friends in your comfort
                zone. Have your own theatre in your home and share your moments
                with them.
              </p>
              <p>
                Now, it’s time to create your own cinema and watch movies
                together. Share your laugh, thoughts, feelings, and love with
                them. Unite with your buddies and have an unforgettable
                experience. With its cool features and endless shows.
              </p>
            </div>
            <div className={styles.btn}>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
