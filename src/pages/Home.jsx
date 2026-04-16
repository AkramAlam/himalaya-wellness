import React from 'react';
import Hero from '../components/Hero';
import TopSellers from "../components/TopSellers";
import PromoBanners from '../components/PromoBanners';
import WellnessCards from '../components/WellnessCards';
import CampaignBanners from '../components/CampaignBanners';
import Remedies from '../components/Remedies';
import QuizSection from '../components/QuizSection';
import NewLaunches from '../components/NewLaunches';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

// 1. YAHAN BADLAW HAI: () se badalkar ({ addToCart }) kiya
const Home = ({ addToCart }) => {
  return (
    <main>
      <Hero />
      <TopSellers addToCart={addToCart} /> {/* 'props.addToCart' hata diya */}
      <PromoBanners />
      <WellnessCards />
      <CampaignBanners />
      <Remedies addToCart={addToCart} />
      <QuizSection />
      <NewLaunches />
      <Testimonials />
      <Footer/>
    </main>
  );
};

export default Home;