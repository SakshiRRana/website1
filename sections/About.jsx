'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About RandiantBeauty Hub" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">RandiantBeauty Hub</span>  is an ecommerce platform dedicated to offering a wide range of high-quality beauty products. From skincare and makeup to haircare and accessories, RadiantBeauty Hub provides a curated collection of items that enhance and {' '}
        <span className="font-extrabold text-white">
        celebrate natural beauty
        </span>{' '}
        . With a focus on quality, innovation, and customer satisfaction, RadiantBeauty Hub aims to be a go-to destination for individuals seeking products that help them {' '}
        <span className="font-extrabold text-white">radiate confidence and beauty</span> . Let's{' '}
        <span className="font-extrabold text-white">explore</span> the beauty products 
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px] animate-bounce"
      />
    </motion.div>
  </section>
);

export default About;
