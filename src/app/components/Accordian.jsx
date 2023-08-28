"use client";

import React, { useState } from "react";
import styles from "../styles/accordian.module.scss";
import Button from "../components/Button";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "What is a watch party on Prime? ",
    ans: "Watch Party on Prime is a browser extension, where you can invite your friends and family to stream together. In prime, you will have a wide variety of movies and series. It also synchronizes playback movies.",
  },
  {
    id: 2,
    ques: "How to do watch party on amazon prime?",
    ans: "To host a watch party on Amazon Prime, use the 'Watch Party' icon on eligible movies or TV shows, invite friends with a unique URL link, and enjoy synchronized viewing and real-time chat together and enjoy Prime video shareplay.",
  },
  {
    id: 3,
    ques: "Is it free to use?",
    ans: "Yes, this extension is free to use.",
  },
  {
    id: 4,
    ques: "Can you share your screen on this extension?",
    ans: "Yes, while using this extension, you can share your screen with your best buddy and watch a movie together.",
  },
  {
    id: 5,
    ques: "Does amazon prime have a watch party?",
    ans: "Yes, amazon prime has a watch party where you can enjoy unlimited movies and series.",
  },
];

const Accordian = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (questionId) => {
    if (showAnswer === questionId) {
      setShowAnswer(null);
    } else {
      setShowAnswer(questionId);
    }
  };

  return (
    <div className={styles.accordian}>
      <div className={styles.container}>
        <h2>FREQUENTLY ASKED QUESTION</h2>

        <ol>
          {questions.map((question) => (
            <li key={question.id} onClick={() => toggleAnswer(question.id)}>
              <div className={styles.question}>
                <p>{question.ques}</p>
                <div className={styles["image-container"]}>
                  <Image
                    src="./add-logo.svg"
                    alt="add-logo"
                    fill={true}
                    className={styles.image}
                  />
                </div>
              </div>
              {showAnswer === question.id && (
                <div
                  className={`${styles.answer} ${
                    showAnswer === question.id ? styles.active : ""
                  }`}
                >
                  <p>{question.ans}</p>
                </div>
              )}

              {/*
               */}
            </li>
          ))}
        </ol>
        <Button />
      </div>
    </div>
  );
};

export default Accordian;
