/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import gsap from "gsap";

const PricingPage = () => {
  
    const pricingPlan= [
      {
        "planName": "NEET PG Guidance",
        "duration": "Monthly",
        "price": "INR 149",
        "paymentLink": "/payment-page"
      },
      {
        "planName": "Golden Med Notes",
        "duration": "Monthly",
        "price": "INR 399",
        "paymentLink": "/golden-med-notes-payment"
      },
      {
        "planName": "Golden Med Notes",
        "duration": "6 Months",
        "price": "INR 1499",
        "paymentLink": "/golden-med-notes-payment"
      },
      {
        "planName": "Golden Med Notes",
        "duration": "6 Months",
        "price": "INR 1499",
        "paymentLink": "/golden-med-notes-payment"
      }
    ]

  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-600">Choose Your Plan</h1>
        <p className="text-lg text-gray-600 mt-4">
          Select the best plan that suits your needs.
        </p>
      </header>


      <div className="flex gap-10  justify-center mx-auto ">
  {pricingPlan.map((item, i) => (
    <div key={i} className="flex  flex-col md:flex-row gap-10 items-center ">
      <div className="border rounded-lg ring-2 ring-[#4F46E5] p-8 w-[250px] h-[350px] ">
      <div className="text-2xl font-bold text-[#111827] mb-4">{item.price}</div>        <div className="text-lg font-semibold mb-2">{item.duration}</div>
        <div className="text-xl font-bold text-[#4B5563] mb-2">{item.planName}</div>
      
        <div className="ring-1 bg-[#4F46E5] mt-10 text-center rounded-md px-2 py-2">
          <a
            href={item.paymentLink}
            className="text-white text-center hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Make Payment
          </a>
        </div>
      </div>
    </div>
  ))}
</div>




   

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {faqData.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </div>
  );
};

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        duration: 0.3,
        ease: "power1.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.3,
        ease: "power1.in",
      });
    }
  };

  return (
    <div
      className="bg-orange-300 p-6 shadow-lg rounded-lg transition duration-300"
      // onClick={() => setIsOpen(!isOpen)}
      onClick={toggleFAQ}
    >
      <div className="flex justify-between items-center cursor-pointer">
        <h3 className="text-xl font-semibold text-gray-800">{question}</h3>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-180"
          }`}
        >
          +
        </span>
      </div>
      <div
        ref={contentRef}
        // className={`mt-4 overflow-hidden transition-[max-height] duration-300 ${
        //   isOpen ? "max-h-40" : "max-h-0"
        // }`}

        style={{ height: 0, overflow: "hidden" }}
        className="mt-4 transition-all"
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "Who can use these notes?",
    answer: "Ideal for all NEET PG aspirants, from beginners to advanced.",
  },
  {
    question: "Will this help average students?",
    answer: "Yes! Designed for clarity and easy recall.",
  },
  {
    question: "How to use these notes?",
    answer: "Use for building understanding and quick revisions.",
  },
  {
    question: "Why are these notes unique?",
    answer:
      "Save time, study less, and achieve better results with efficient, focused preparation.",
  },
];

export default PricingPage;
