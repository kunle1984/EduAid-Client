import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import CharitySection from "../components/CharitySection";
import CarouselCard from "../components/carouselCard";

const Home = () => {
  return (
    <div className="w-100 h-70">
      <HeroCarousel />
      <CharitySection />
      <CarouselCard />
    </div>
  );
};

export default Home;
