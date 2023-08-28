import Script from "next/script";
import React from "react";

const Schema = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is a watch party on Prime?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "TWatch Party on Prime is a browser extension, where you can invite your friends and family to stream together. In prime, you will have a wide variety of movies and series. It also synchronizes playback movies.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to do watch party on amazon prime?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To host a watch party on Amazon Prime, use the 'Watch Party' icon on eligible movies or TV shows, invite friends with a unique URL link, and enjoy synchronized viewing and real-time chat together and enjoy Prime video shareplay.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is it free to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, this extension is free to use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you share your screen on this extension?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, while using this extension, you can share your screen with your best buddy and watch a movie together.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does amazon prime have a watch party? ",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, amazon prime has a watch party where you can enjoy unlimited movies and series.",
                  },
                },
              ],
            },
            null,
            "\t"
          ),
        }}
        id="schema"
      />
    </>
  );
};

export default Schema;
