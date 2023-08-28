"use client";
import React from "react";
import styles from "../styles/button.module.scss";

const Button = () => {
   const handleButtonClick = () => {
      const redirectURL = "https://chrome.google.com/webstore/detail/watchottparty/akbbdmilignoplkhminiaecccigmpdmo?hl=en-US";
      window.open(redirectURL, "_blank");
  };
  return (
    <button className={styles.btn} onClick={handleButtonClick}>
      Add to Chrome
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        fill="white"
      >
        <path d="M0 256C0 209.4 12.47 165.6 34.27 127.1L144.1 318.3C166 357.5 207.9 384 256 384C270.3 384 283.1 381.7 296.8 377.4L220.5 509.6C95.9 492.3 0 385.3 0 256zM365.1 321.6C377.4 302.4 384 279.1 384 256C384 217.8 367.2 183.5 340.7 160H493.4C505.4 189.6 512 222.1 512 256C512 397.4 397.4 511.1 256 512L365.1 321.6zM477.8 128H256C193.1 128 142.3 172.1 130.5 230.7L54.19 98.47C101 38.53 174 0 256 0C350.8 0 433.5 51.48 477.8 128V128zM168 256C168 207.4 207.4 168 256 168C304.6 168 344 207.4 344 256C344 304.6 304.6 344 256 344C207.4 344 168 304.6 168 256z" />
      </svg>
    </button>
  );
};

export default Button;
