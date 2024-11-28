import React from "react";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    name: "INR 149 Plan",
    title: " Access essential NEET PG resources for one low price!",
    price: "149",
    duration: "1",
  },
  {
    id: 2,
    name: "INR 399 Plan",
    title:
      "Unlock access to Golden Med Notes and other premium content for acomprehensive NEET PG experience for a limited time.",
    price: "399",
    duration: "1",
  },
  {
    id: 3,
    name: "INR 1499 Plan",
    title: " Limited Time Offer for Huge for Yearly Subscription",
    price: "1499",
    duration: "12",
  },
];

const SubscriptionSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-green-500 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Choose Your Plan and Unlock Premium NEET PG Resources!
        </h2>

        <p className="text-lg md:text-xl mb-12">
          We offer flexible plans to fit your preparation needs. Choose the one
          that suits you best!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              className="bg-white text-blue-900 p-6 rounded-lg shadow-lg"
              key={card.id}
            >
              <h3 className="text-2xl font-semibold mb-4">{card.name}</h3>
              <p className="text-gray-700 mb-4">{card.title}</p>
              <div className="flex justify-center mt-6">
                <Link
                  to="/payment/inr149"
                  className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300"
                >
                  Pay Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
