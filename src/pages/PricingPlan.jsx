import React from "react";

const PricingPlans = () => {
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      logo: "🌟",
      price: "$10/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      id: 2,
      name: "Pro Plan",
      logo: "🔥",
      price: "$20/month",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      highlighted: true,
    },
    {
      id: 3,
      name: "Enterprise Plan",
      logo: "💼",
      price: "$30/month",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`flex flex-col items-center bg-white shadow-lg border rounded-lg p-6 w-full md:w-1/3 ${
            plan.highlighted
              ? "border-orange-500 transform translate-y-[-10px] scale-105"
              : ""
          } transition-transform`}
        >
          <div className="text-4xl mb-4">{plan.logo}</div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">{plan.name}</h3>
          <div className="mb-4">
            {plan.features.map((feature, index) => (
              <p key={index} className="flex items-center text-gray-600 mb-2">
                <span className="text-green-500 mr-2">✔</span>
                {feature}
              </p>
            ))}
          </div>
          <div className="text-lg font-semibold text-gray-700">
            {plan.price}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
