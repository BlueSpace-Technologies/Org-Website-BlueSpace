import React from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => (
  <div className="mb-10">
    <h3 className="flex items-center mb-4 text-lg font-medium text-white dark:text-white">
      <svg
        className="flex-shrink-0 mr-2 w-5 h-5 text-white dark:text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        ></path>
      </svg>
      {question}
    </h3>
    <p className="text-white dark:text-gray-400">{answer}</p>
  </div>
);

const FAQS: React.FC = () => {
  const faqItems: FaqItemProps[] = [
    {
      question: 'What do you mean by "Figma assets"?',
      answer:
        'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.',
    },
    {
      question: 'What do you mean by "Figma assets"?',
      answer:
        'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.',
    },
    {
      question: 'What do you mean by "Figma assets"?',
      answer:
        'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.',
    },
    {
      question: 'What do you mean by "Figma assets"?',
      answer:
        'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.',
    },
    {
      question: 'What do you mean by "Figma assets"?',
      answer:
        'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.',
    },
    {
      question: 'What do you mean by "Figma assets"?',
      answer:
        'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.',
    },
    {
      question: 'What do you mean by "Figma assets"?',
      answer:
        'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.',
    },
    {
      question: 'What do you mean by "Figma assets"?',
      answer:
        'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.',
    },

    // ... (other FAQ items)
  ];

  return (
    <section className="bg-black dark:bg-gray-900 w-full">
      <div className="py-8 px-4 mx-auto max-w-screen-2xl sm:py-16 lg:padding-x padding-y">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-white dark:text-white">
          Frequently asked questions
        </h2>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQS;
