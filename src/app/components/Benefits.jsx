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
              <h2>
                Enjoy a limitless streaming experience with teleparty amazon
                prime
              </h2>
            </div>
            <div className={styles.desc}>
              <p>
                Get ready for an epic streaming adventure with{" "}
                <span>teleparty amazon prime.!</span> This magical extension
                offers an endless collection of movies and TV shows to watch
                with your buddies and family. Wherever you are, you can join
                forces and <span>watch amazon prime together</span>, unleashing
                the power of shared movie nights!
              </p>
              <p>
                But wait, there&apos;s more! You won&apos;t just be watching alone; you
                can chat, have hilarious audio calls, and even jump into video
                calls together! It&apos;s like having your own private cinema party
                but with the added fun of chatting and laughing together!
              </p>
              <p>
                So, whether you&apos;re binge-watching your favorite series with your
                tribe or going on a solo adventure, this unites everyone for
                unforgettable shared viewing! Grab your popcorn, get cozy, and
                let the streaming joy take over with it.
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
