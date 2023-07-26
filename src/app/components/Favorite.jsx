import React from "react";
import styles from "../styles/favorite.module.scss";
import Image from "next/image";

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles["left-top"]}>
              <div className={styles.headings}>
                <h2>Time syncs with a prime video watch party</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  If you love watching movies or series with your friends, just
                  log in to your<span> watch party amazon prime </span>and
                  invite them to join in! To stream the movie together, both you
                  and your buddy need to log in at the same time. But don&apos;t
                  worry, once you&apos;re both in, the fun begins!
                </p>
                <p>
                  With this watch party, you can have audio and video calls
                  while enjoying the movie together. Plus, you&apos;ll benefit from
                  fast buffering and HD video quality right in your browser.
                  It&apos;s the ultimate <span>viewing party</span> experience,
                  making movie nights with friends even more exciting and
                  enjoyable.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="./favorite.svg"
                alt="favorite"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles["bottom-left"]}>
            <div className={styles.bg}>
              <div className={styles["bg-image-container"]}>
                <Image
                  src="./customize-bg.svg"
                  alt="customize-bg"
                  fill={true}
                  className={styles["bg-image"]}
                />
              </div>
            </div>
            <div className={styles["image-container"]}>
              <Image
                src="./customize.svg"
                alt="customize"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles["bottom-right"]}>
            <div className={styles.headings}>
              <h2>Customize your Amazon watch party on tv</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Simply click on the creative user icon, and it will unlock
                amazing features like chat, audio calls, and video calls. With
                these tools, you can create your perfect movie night with
                friends and family, picking your favorite shows and movies from
                the best online streaming platforms.
              </p>
              <p>
                Experience high-quality streaming that&apos;s synchronized for
                everyone, so you can all cheer and have a fantastic time
                together. It&apos;s the ultimate way to enjoy shared moments and make
                unforgettable memories with your loved ones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
