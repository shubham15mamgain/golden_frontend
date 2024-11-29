import React from 'react';

const PricingPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Pricing Table Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-600">Choose Your Plan</h1>
        <p className="text-lg text-gray-600 mt-4">Select the best plan that suits your needs.</p>
      </header>

      {/* Pricing Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
      <div className="overflow-x-auto">
      <div className="overflow-x-auto">
  <table className="min-w-full bg-white border-collapse table-auto">
    <thead className="bg-gray-200">
      <tr>
        <th className="px-6 py-3 border-b text-lg font-semibold text-gray-700 w-1/4 text-center">
          Plan Name
        </th>
        <th className="px-6 py-3 border-b text-lg font-semibold text-gray-700 w-1/4 text-center">
          Duration
        </th>
        <th className="px-6 py-3 border-b text-lg font-semibold text-gray-700 w-1/4 text-center">
          Price
        </th>
        <th className="px-6 py-3 border-b text-lg font-semibold text-gray-700 w-1/4 text-center">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 border-b text-gray-800 text-center">NEET PG Guidance</td>
        <td className="px-6 py-4 border-b text-gray-800 text-center">Monthly</td>
        <td className="px-6 py-4 border-b text-gray-800 text-center">INR 149</td>
        <td className="px-6 py-4 border-b text-center">
          <a
            href="/payment-page"
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-300"
          >
            Pay Now
          </a>
        </td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 border-b text-gray-800 text-center">Golden Med Notes</td>
        <td className="px-6 py-4 border-b text-gray-800 text-center">Monthly</td>
        <td className="px-6 py-4 border-b text-gray-800 text-center">INR 399</td>
        <td className="px-6 py-4 border-b text-center">
          <a
            href="/golden-med-notes-payment"
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-300"
          >
            Pay Now
          </a>
        </td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 border-b text-gray-800 text-center">Golden Med Notes</td>
        <td className="px-6 py-4 border-b text-gray-800 text-center">6 Months</td>
        <td className="px-6 py-4 border-b text-gray-800 text-center">INR 1499</td>
        <td className="px-6 py-4 border-b text-center">
          <a
            href="/golden-med-notes-payment"
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-300 text-nowrap"
          >
            Pay Now
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

</div>

      </div>

      {/* FAQs Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {faqData.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </div>
  );
};

// FAQ Component
const FAQ = ({ question, answer }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

// FAQs data
const faqData = [
  {
    question: "Who can use these notes?",
    answer: "Ideal for all NEET PG aspirants, from beginners to advanced."
  },
  {
    question: "Will this help average students?",
    answer: "Yes! Designed for clarity and easy recall."
  },
  {
    question: "How to use these notes?",
    answer: "Use for building understanding and quick revisions."
  },
  {
    question: "Why are these notes unique?",
    answer: "Save time, study less, and achieve better results with efficient, focused preparation."
  }
];

export default PricingPage;
