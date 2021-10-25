import { motion } from "framer-motion";
import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <div className='hero'>
      <div className='hero__container'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1,
            delay: 1,
          }}
          className='hero__container__text'
        >
          The{" "}
          <i>
            <strong>Future</strong>
          </i>{" "}
          is <strong>Online</strong> {window.innerWidth > 600 && <br />} We Get
          You There
          <strong> Faster</strong>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "tween",
            delay: 1.5,
            duration: 1,
          }}
          className='hero__container__buttons'
        >
          <div className='contact__button'>Contact Us</div>
          <div className='scroll__button'>Scroll</div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
