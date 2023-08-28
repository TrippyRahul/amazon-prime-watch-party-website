import React from "react";
import styles from "../styles/work.module.scss";
import Image from "next/image";

const Work = () => {
  return (
    <div className={styles.work} id="how-it-works">
      <div className={styles.container}>
        <h2 id="work">How Amazon video watch party work?</h2>
        <p>
          Have a unique experience with online watch party. Through this, you
          can enjoy synchronized series and movies. It is the best way to
          connect with your close ones and have fun. There are some points you
          need to follow, before using the extension.
        </p>

        <ul className={styles.content}>
          <li>
            <span>Install the extension </span>in your web browser like Google
            Chrome and Firefox
          </li>
          <li>Open it on your browser and select a movie</li>
          <li>
            Click on the <span> watch party </span> icon and make a party
          </li>
          <li>
            After creating a party,
            <span> share it with your friends and family</span>
          </li>
          <li>
            By clicking the link, your friends will automatically{" "}
            <span> join the party </span>
          </li>
          <li>
            It has incredible features like{" "}
            <span>chat and audio and video calls</span>
          </li>
          <li>
            It has a time sync so that you can{" "}
            <span> watch a movie together at the same time </span>
          </li>
          <li>
            The person who is hosting the watch party has all the control over
            playback for example he can play or pause the video
          </li>
          <li>Have fun and enjoy the movies, shows, and series together</li>
        </ul>

        <p>
          If you want to watch movies together, you need to have a valid account
          on Amazon Prime. So, don’t wait for too long and enjoy the best movie
          night with your family and friends.
        </p>
      </div>
    </div>
  );
};

export default Work;
