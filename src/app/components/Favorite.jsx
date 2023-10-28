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
                <h2>
                  Stream movies at the same time with Prime Video watch party
                </h2>
              </div>
              <div className={styles.desc}>
                <p>
                  It is super quick, all you need to do is install the
                  extension. Log in to <span> watch Party Amazon Prime</span>{" "}
                  and invite your buddies to watch endless movies together. But
                  remember that you need to log in at the exact time in which
                  your friend is logging in.
                </p>
                <p>
                  With its amazing features including chat and audio/video
                  calls, you can discuss about your favorite scenes. Enjoy
                  unlimited series with this extension and fasten up your
                  buffering speed. Watch your favorite movie in HD quality. Have
                  an ultimate <span> viewing party </span>with your family and
                  friends.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="/favorite.svg"
                alt="favorite"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles["bottom-left"]}>
            <div className={styles["image-container"]}>
              <Image
                src="/customize.svg"
                alt="customize"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles["bottom-right"]}>
            <div className={styles.headings}>
              <h2>Personalise Amazon watch party on tv</h2>
            </div>
            <div className={styles.desc}>
              <p>
                By downloading and installing the extension, you can create your
                own watch party on it. It has fun features like chat, audio
                calls, and video calls. With this tool, you can have the perfect
                movie night with family and friends. So, select your favorite
                shows from the best online streaming platforms.
              </p>
              <p>
                You can explore high-quality movies as they synchronize
                playback. By streaming shows together simultaneously, you can
                have a brilliant time together. You can also share your moments
                and make new memories too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
