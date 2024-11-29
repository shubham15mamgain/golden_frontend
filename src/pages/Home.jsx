import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import SubscriptionSection from "../components/SubscriptionsSection";
import FreePDFsSection from "../components/FreePDFs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <SubscriptionSection />
      <FreePDFsSection />
      <Testimonials />

      <Footer />
    </div>
  );
};

export default Home;
