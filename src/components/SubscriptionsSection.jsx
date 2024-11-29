import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";

const cards = [
  {
    id: 1,
    name: "INR 149 Plan",
    title: "Access essential NEET PG resources for one low price!",
    price: "149",
    duration: "1",
  },
  {
    id: 2,
    name: "INR 399 Plan",
    title:
      "Unlock access to Golden Med Notes and other premium content for a comprehensive NEET PG experience for a limited time.",
    price: "399",
    duration: "1",
  },
  {
    id: 3,
    name: "INR 1499 Plan",
    title: "Limited Time Offer for Yearly Subscription",
    price: "1499",
    duration: "12",
  },
];

const SubscriptionSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 1,
      duration: 2,
      stagger: 0.5,
    });
  }, []);

  return (
    <section className="bg-gradient-to-r from-purple-500 to-green-500 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Choose Your Plan and Unlock Premium NEET PG Resources!
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-12"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          We offer flexible plans to fit your preparation needs. Choose the one
          that suits you best!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="group relative bg-white text-blue-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-800 transform"
              ref={(el) => (cardsRef.current[index] = el)}
              whileHover={{ scale: 1.1 }}
            >
              <motion.h3
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, duration: 1 }}
                className="text-2xl font-semibold mb-4 group-hover:text-red-600 transition duration-300"
              >
                {card.name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="text-gray-700 group-hover:text-green-600 transition duration-300 mb-20"
              >
                {card.title}
              </motion.p>
              <motion.div
                className="flex justify-center items-center mt-20  absolute bottom-4 left-[35%]"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                <Link
                  to={`/payment/inr${card.price}`}
                  className="bg-yellow-400  text-blue-900 py-3 px-6 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300"
                >
                  Pay Now
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
