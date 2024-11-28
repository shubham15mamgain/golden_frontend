// import React from "react";
// import { Link } from "react-router-dom";

// const FreePDFsSection = () => {
//   const freePDFs = [
//     {
//       title: "INR 149 Plan Sample",
//       description: "Get a glimpse of the essential resources we offer.",
//       link: "https://res.cloudinary.com/dapjyizvj/raw/upload/v1731996423/Bazar91/zxfwyverrsb4fc5qhrpw.pdf",
//     },
//     {
//       title: "Golden Med Notes Sample",
//       description: "Preview premium content designed for success.",
//       link: "https://res.cloudinary.com/dapjyizvj/raw/upload/v1731995581/Bazar91/szw9i42udrcsfjifxwye.pdf",
//     },
//   ];

//   return (
//     <section className="bg-gray-100 py-20">
//       <div className="container mx-auto px-6 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
//           Explore Free PDFs for Each Plan
//         </h2>

//         <p className="text-lg md:text-xl mb-12 text-gray-600">
//           Take a sneak peek at what we offer. Download free samples and see the
//           quality for yourself!
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {freePDFs.map((pdf, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300"
//             >
//               <h3 className="text-xl font-semibold mb-4 text-gray-800">
//                 {pdf.title}
//               </h3>
//               <p className="text-gray-600 mb-6">{pdf.description}</p>
//               <div className="flex justify-center">
//                 <a
//                   href={pdf.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
//                 >
//                   Download Sample
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Subscribe Now Button */}
//         <div className="mt-12">
//           <Link
//             to="/pricing-faq"
//             className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300"
//           >
//             Subscribe Now
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FreePDFsSection;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const FreePDFsSection = () => {
  useEffect(() => {
    // GSAP Animation for cards
    gsap.fromTo(
      ".pdf-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  const freePDFs = [
    {
      title: "INR 149 Plan Sample",
      description: "Get a glimpse of the essential resources we offer.",
      link: "/sample/inr149", // Replace with actual sample PDF link
    },
    {
      title: "Golden Med Notes Sample",
      description: "Preview premium content designed for success.",
      link: "/sample/golden-med-notes", // Replace with actual sample PDF link
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Headline with Framer Motion */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Free PDFs for Each Plan
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl mb-12 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4, delay: 0.8 }}
        >
          Take a sneak peek at what we offer. Download free samples and see the
          quality for yourself!
        </motion.p>

        {/* Free PDFs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {freePDFs.map((pdf, index) => (
            <div
              key={index}
              className="pdf-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {pdf.title}
              </h3>
              <p className="text-gray-600 mb-6">{pdf.description}</p>
              <div className="flex justify-center">
                <a
                  href={pdf.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
                >
                  Download Sample
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Now Button with Framer Motion */}
        <motion.div
          className="mt-12"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, duration: 4 }}
        >
          <Link
            to="/pricing-faq"
            className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300"
          >
            Subscribe Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FreePDFsSection;
