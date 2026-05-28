"use client";
import React, { useState } from 'react';
import localFont from 'next/font/local';
const sora = localFont({
    src: '../../public/fonts/sora/static/Sora-Light.ttf',
    variable: '--font-sora',
    display: 'swap',
});
const faqs = [
    {
        question: "What makes SS Innovations different from other surgical robotics companies?",
        answer: "SS Innovations brings a unique approach to surgical robotics by focusing on highly advanced, multi-specialty solutions like the SSI Mantra, engineered to make world-class robotic surgery accessible and cost-effective globally."
    },
    {
        question: "Where is SS Innovations based?",
        answer: "SS Innovations is headquartered in Gurugram, Haryana, India, with expanding operations, research facilities, and global partnerships across the world."
    },
    {
        question: "Who uses your technology today?",
        answer: "Our advanced robotic systems are utilized by leading hospitals, pioneering medical institutions, and expert multi-specialty surgeons dedicated to improving patient outcomes."
    },
    {
        question: "How can I get in touch with your team?",
        answer: "You can reach out to our team by using the 'Book Demo' section on our website, or by visiting our contact page for direct email and phone support details."
    }
];
export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (<section className={`faqContainer ${sora.variable}`}>
      <div className="contentWrapper">
        <h2 className="title">Frequently Asked Questions</h2>

        <div className="faqList">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (<div key={index} className={`faqItem ${isOpen ? 'open' : ''}`}>
                <button className="questionRow" onClick={() => toggleFAQ(index)} aria-expanded={isOpen}>
                  <h3 className="question">{faq.question}</h3>
                  <div className={`iconWrapper ${isOpen ? 'rotated' : ''}`}>
                    
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                
                
                <div className={`answerWrapper ${isOpen ? 'open' : ''}`}>
                  <div className="answerInner">
                    <p className="answer">{faq.answer}</p>
                  </div>
                </div>
              </div>);
        })}
        </div>
      </div>

      <style jsx>{`
        .faqContainer {
          width: 100%;
          padding: 80px 20px;
          background: #F4F6F8;
          display: flex;
          justify-content: center;
        }

        .contentWrapper {
          width: 100%;
          max-width: 1000px;
        }

        .title {
          color: #1E1E1E;
          font-family: var(--font-sora), sans-serif;
          font-size: 32px;
          font-weight: 500;
          margin-bottom: 40px;
          text-align: left;
        }

        .faqList {
          display: flex;
          flex-direction: column;
          border-top: 1px solid #E5E5E5;
        }

        .faqItem {
          border-bottom: 1px solid #E5E5E5;
        }

        /* Use a button for the row to improve accessibility and touch area */
        .questionRow {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 24px 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: opacity 0.2s ease;
        }

        @media (hover: hover) {
          .questionRow:hover .question {
            color: #000;
          }
          .questionRow:hover .iconWrapper {
            border-color: #1E1E1E;
            color: #1E1E1E;
          }
        }

        .question {
          color: #3F3F3F;
          font-family: var(--font-sora), sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.5;
          margin: 0;
          transition: color 0.3s ease;
        }

        .faqItem.open .question {
          color: #1E1E1E;
        }

        .iconWrapper {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          border-radius: 50%;
          border: 1px solid #C4C4C4;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6E6E6E; /* SVG inherits this via currentColor */
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                      border-color 0.3s ease, 
                      color 0.3s ease;
        }

        .iconWrapper.rotated {
          transform: rotate(45deg);
          border-color: #1E1E1E;
          color: #1E1E1E;
        }

        /* The Grid Magic for smooth height transition */
        .answerWrapper {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .answerWrapper.open {
          grid-template-rows: 1fr;
        }

        .answerInner {
          overflow: hidden;
          opacity: 0;
          transition: opacity 0.4s ease;
          transition-delay: 0s;
        }

        .answerWrapper.open .answerInner {
          opacity: 1;
          transition-delay: 0.1s; /* Slight delay makes the text fade in after height expands */
        }

        .answer {
          color: #6E6E6E;
          font-family: var(--font-sora), sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.6;
          margin: 0;
          padding-bottom: 24px;
          padding-right: 52px; /* Prevent text wrapping exactly under the plus icon */
        }

        /* Mobile Responsive Adjustments */
        @media (max-width: 768px) {
          .faqContainer {
            padding: 60px 16px;
          }

          .title {
            font-size: 26px;
            margin-bottom: 32px;
          }

          .questionRow {
            padding: 20px 0;
            gap: 16px;
          }

          .question {
            font-size: 15px;
          }

          .answer {
            font-size: 14px;
            padding-bottom: 20px;
            padding-right: 0; /* Let it flow full width on mobile */
          }
        }
      `}</style>
    </section>);
}
