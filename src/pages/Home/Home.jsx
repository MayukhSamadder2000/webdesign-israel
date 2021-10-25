import { motion } from "framer-motion";
import React from "react";
import Brands from "../../components/Brands/Brands";
import Clients from "../../components/Clients/Clients";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import Services from "../../components/Services/Services";
import SuperText from "../../components/SuperText/SuperText";
import "./Home.scss";

const exitVariation = {
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

function Home() {
  return (
    <motion.div variants={exitVariation} exit='exit' className='home'>
      <Hero />
      <ProjectGrid />
      <SuperText />
      <Services />
      <Brands />
      <Clients />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default Home;
