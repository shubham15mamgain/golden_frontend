/* eslint-disable react/prop-types */
import React from "react";

const featuresData = [
  {
    title: "Designed for Photographic Memory",
    description:
      "Strategically placed bold text, highlights, and mnemonics to boost recall.",
  },
  {
    title: "Save Time and Resources",
    description:
      "One subscription gives you access to everything you need—no extra hassle.",
  },
  {
    title: "Last-Minute Revision Power",
    description: "Revise entire subjects in hours, not days.",
  },
  {
    title: "Content from Experience",
    description:
      "Crafted by reviewing lectures, solving MCQs, and analyzing GTs.",
  },
  {
    title: "First-Time and Revision-Friendly",
    description:
      "Comprehensive for building understanding, concise for quick revision.",
  },
  {
    title: "Exam-Focused Mnemonics",
    description:
      "Mnemonics placed exactly where needed for easy recall during high-pressure moments.",
  },
  {
    title: "Secure and Personalized PDFs",
    description: "Delivered instantly with your name watermarked.",
  },
];

const FeaturesPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-600">
          Smart Notes for Smarter Minds: Save Time, Ace Faster
        </h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/pricing-faq"
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-yellow-600 transition-all duration-300"
        >
          Subscribe Now
        </a>
      </div>
    </div>
  );
};

const Feature = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeaturesPage;
