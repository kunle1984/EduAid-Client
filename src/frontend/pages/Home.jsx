import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import CharitySection from "../components/CharitySection";
import CarouselCard from "../components/carouselCard";

import Faq from "../components/Faq";
import Testimonial from "../components/Testimonial";
import PartnerLogos from "../components/PartnerLogos";
import { logos } from "../../assets/assets";
import { heroImages } from "../../assets/assets";
import DonateSection from "../components/DonateSection";
const { hero1, hero2, hero3, hero4, hero5, logo } = heroImages;

const logoData = [
  {
    image: logo,
    title: "HEART CARE",
    subtitle: "CHARITY",
  },
  {
    image: logo,
    title: "THEBIRD",
    subtitle: "creative shape",
  },
  {
    image: logo,
    title: "LOREM IPSUM",
    subtitle: "YOUR SLOGAN HERE",
  },
  {
    image: logo,
    title: "Tree Life",
    subtitle: "SLOGAN HERE",
  },
];

const Home = () => {
  return (
    <div className="w-100 h-70">
      <HeroCarousel />

      <CharitySection />
      <CarouselCard />
      <Testimonial />
      <Faq />
      <PartnerLogos logos={logoData} />
      <DonateSection />
    </div>
  );
};

export default Home;
