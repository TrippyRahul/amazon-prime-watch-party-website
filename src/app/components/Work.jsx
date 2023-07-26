import React from "react";
import styles from "../styles/work.module.scss";
import Image from "next/image";

const Work = () => {
  return (
    <div className={styles.work} id="how-it-works">
      <div className={styles.container}>
        <h2 id="work">
          How does the Amazon video watch party work on the browser?
        </h2>
        <p>
          Join the fun with this<span>online watch party</span> that lets you
          enjoy synchronized movie or TV show viewing with friends and family
          through your web browser. It's the perfect way to connect and have a
          shared movie-watching experience, even when you're physically apart.
          Here's how it works
        </p>

        <ul className={styles.content}>
          <li>
            <span>Extension setup:</span>to start, you'll need to install it in
            major web browsers like Google Chrome and Mozilla Firefox.
          </li>
          <li>
            <span>Video Selection:</span> Once the extension is installed, open
            it on your browser and choose the movie or TV show you want to watch
            together.
          </li>
          <li>
            <span>Create a Party:</span>After selecting the content, look for
            the "Watch Party" icon located near the video player. Click on it to
            create a watch party.
          </li>
          <li>
            <span>Share the Link: </span> The extension will generate a unique
            link for your watch party. Share this link with your friends or
            family members you want to invite to join the party.
          </li>
          <li>
            <span>Synchronized Viewing: </span> When your friends click on the
            link, they will join the watch party, and their video player will
            sync with yours. This means everyone will see the same content at
            the same time, just like watching together in person.
          </li>
          <li>
            <span>Chat & Interaction:</span> It includes a chat and audio and
            video call feature, allowing all participants to communicate and
            share their thoughts while watching the content. You can discuss
            scenes, react to funny moments, or simply chat as if you were
            watching in the same room.
          </li>
          <li>
            <span>Host Controls:</span> The person who created the watch party
            will have control over playback, meaning they can pause, play,
            rewind, or fast-forward the video to everyone.
          </li>
          <li>
            <span>Enjoy the Experience: </span> Watch, chat, and have fun
            together as you experience the movie or TV show in a virtual shared
            space.
          </li>
        </ul>

        <p>
          Make sure to remember that this watch party feature is specifically
          for Amazon Prime Video content. Everyone who wants to participate
          needs to have an active Amazon Prime subscription. Also, keep in mind
          that there might be some limitations based on the region or the type
          of device you're using. So, check for compatibility and enjoy the
          movie night with your friends and family!
        </p>
      </div>
    </div>
  );
};

export default Work;
