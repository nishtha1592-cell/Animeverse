import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "What is the Notion Club, and who can join?",
    answer: "Notion is a premier technical club dedicated to fostering innovation, logic, and collaborative learning. If you are a student from any branch or year and have a passion for technology, you are welcome to join! We have something for everyone, from absolute beginners to advanced tech experts.",
  },
  {
    id: 2,
    question: "Is prior coding experience required to participate in events?",
    answer: "Not at all! We host workshops like the 'Neural Networks: Zero to Hero Bootcamp' that start completely from scratch. Additionally, for hackathons, we always need creative designers, project managers, and ideators alongside coders.",
  },
  {
    id: 3,
    question: "Will the ByteCraft Hackathon be online or offline?",
    answer: "ByteCraft 2026 is a Hybrid hackathon. This means you can either participate physically at the Campus Main Auditorium or join us online via Discord from anywhere.",
  },
  {
    id: 4,
    question: "Will participants receive certificates or prizes after the events?",
    answer: "Yes, all participants will receive an official certificate of participation. Furthermore, top performers and hackathon winners will be rewarded with exciting cash prizes, exclusive goodies, and mentorship opportunities.",
  },
  {
    id: 5,
    question: "What kind of mentorship will I get after joining the club?",
    answer: "Our club is backed by top industry experts—including Google Senior SDE Arjun Mehta and ACM-ICPC Regionalist Rohan Das. You will get direct guidance, code reviews, and real-world insights into the tech industry from them.",
  },
];

export default function CenteredAccordionFAQ() {
  const [openId, setOpenId] = useState(1); 

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-zinc-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          
          <h2 className="font-blk text-4xl font-semibold tracking-tight text-white sm:text-5xl text-center mb-10">
            Frequently asked questions
          </h2>
          
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="pt-6">
                  <dt>
                    <button
                      type="button"
                      onClick={() => toggleAccordion(faq.id)}
                      className="flex w-full items-start justify-between text-left text-white"
                      aria-controls={`faq-answer-${faq.id}`}
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {isOpen ? (
                          <svg className="size-6 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                          </svg>
                        ) : (
                          <svg className="size-6 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                          </svg>
                        )}
                      </span>
                    </button>
                  </dt>
               
                  {isOpen && (
                    <dd className="mt-2 pr-12" id={`faq-answer-${faq.id}`}>
                      <p className="text-base leading-7 text-gray-400">
                        {faq.answer}
                      </p>
                    </dd>
                  )}
                </div>
              );
            })}
          </dl>
          
        </div>
      </div>
    </div>
  );
}