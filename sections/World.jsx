'use client';

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";


const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World"
        textStyles="text-center" />
      <TitleText
        title={<>
            Track friends around you and invite them to play together in the same world
        </>}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className=" relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        {/* <div className="absolute top-20 left-[50%] w-[400px] h-[266px] flex justify-center items-center">
          <img
            src="world-gradient-background.png"
            alt="background"
            className="w-full h-full absolute"
          />
          <img
            src="world-background.png"
            alt="background"
            className="w-[180px] h-[136px] absolute border-[5px] rounded-[24px] border-gray-600/75"
          />
          <div className="absolute">
              <h1 className="text-white text-lg font-bold">Hawkins Labs</h1>
            
            </div>
        </div> */}

      </motion.div>
      </motion.div>
  </section>
);

export default World;
