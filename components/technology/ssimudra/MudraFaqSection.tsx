"use client";
import React, { useState } from 'react';
import localFont from 'next/font/local';
const sora = localFont({
    src: '../../../public/fonts/sora/static/Sora-Light.ttf',
    variable: '--font-sora',
    display: 'swap',
});
const faqs = [
    {
        question: "Which procedures can Mudra instruments be used for?",
        answer: "Mudra instruments are designed for a wide range of minimally invasive robotic surgeries, including urological, gynecological, general surgical, and thoracic applications."
    },
    {
        question: "Are Mudra instruments reusable or single-use?",
        answer: "Our instrument suite includes both fully reusable components and specific single-use items, balancing stringent sterilization requirements with hospital cost-effectiveness."
    },
    {
        question: "Can the instruments be switched mid-procedure?",
        answer: "Yes, the system is engineered for rapid, seamless interchangeability. Toolsets can be swapped instantly mid-procedure by the OR staff without disrupting the surgeon's workflow."
    },
    {
        question: "What safety features are built into Mudra instruments?",
        answer: "Mudra instruments are equipped with advanced fail-safes, precise motion scaling to eliminate tremors, and robust articulation limits to prevent unintended movements and ensure maximum patient safety."
    }
];
export default function MudraFaqSection() {
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
          color: #6E6E6E; 
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                      border-color 0.3s ease, 
                      color 0.3s ease;
        }

        .iconWrapper.rotated {
          transform: rotate(45deg);
          border-color: #1E1E1E;
          color: #1E1E1E;
        }

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
          transition-delay: 0.1s; 
        }

        .answer {
          color: #6E6E6E;
          font-family: var(--font-sora), sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.6;
          margin: 0;
          padding-bottom: 24px;
          padding-right: 52px; 
        }

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
            padding-right: 0; 
          }
        }
      `}</style>
    </section>);
}
