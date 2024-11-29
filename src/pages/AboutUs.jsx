import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">

        {/* Overview Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-600 mb-6">
            About <span className="text-gray-800">Golden Med Notes</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for NEET PG success. Our notes are meticulously
            crafted by solving MCQs, analyzing GTs, and reviewing lectures to ensure
            you get the best preparation material.
          </p>
          <div className="mt-8">
            <img
              src="https://cdn.prod.website-files.com/609d8acf830e6079f27ba963/66d06748eaaa1b5a348e9bd4_USA%20scholarship%20for%20indian%20students.jpg"
              alt="Golden Med Notes"
              className="w-full h-[250px] sm:h-[400px] lg:h-[450px] rounded-lg shadow-lg "
            />
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-gray-200 p-6 sm:p-10 rounded-xl shadow-md mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 text-base sm:text-lg text-center max-w-2xl mx-auto mb-4">
            “We’ve helped 5000+ aspirants by making preparation simpler. Our notes save
            time, remove the useless, and focus on what truly matters. This year,
            they’re even better.”
          </p>
          <p className="text-gray-700 text-base sm:text-lg text-center max-w-2xl mx-auto">
            To save your time and simplify preparation with high-quality notes that
            make your NEET PG journey effective and efficient.
          </p>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-yellow-500 to-pink-500 p-6 sm:p-10 rounded-xl text-white shadow-md">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            Contact Information
          </h2>
          <div className="text-base sm:text-lg text-center">
            <p className="mb-4">
              <span className="font-semibold">Address:</span> BL-5, GR, FR,
              Santoshpur Co-Op Colony, Kolkata 700066
            </p>
            <p className="mb-4">
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href="tel:+918017379245"
                className="underline hover:text-gray-300"
              >
                +91 8017379245
              </a>
            </p>
            <p className="mb-4">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:goldenmednotes@gmail.com"
                className="underline hover:text-gray-300"
              >
                goldenmednotes@gmail.com
              </a>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="mt-8">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-4">
              Connect with Us
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-8 space-y-4 sm:space-y-0">
              <a
                href="https://instagram.com/neetpg.fmge"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-yellow-500 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-white transition duration-300 w-full sm:w-auto text-center"
              >
                @neetpg.fmge
              </a>
              <a
                href="https://instagram.com/goldenmednotes"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pink-500 font-semibold px-4 py-2 rounded-lg hover:bg-pink-400 hover:text-white transition duration-300 w-full sm:w-auto text-center"
              >
                @goldenmednotes
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
