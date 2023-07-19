'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { TitleText, TypingText } from './CustomTexts';
import StartSteps from "./StartSteps";
import { startingFeatures } from "../../constants";
import React from 'react'

const GetStarted = () => {

  return (
    <section
    className="sm:p-16 xs:p-8 px-6 py-12 relative z-10"
    >
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        className=" 2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8">

        <motion.div
          variants={planetVariants('left')}
          className="flex justify-center items-center flex-1"
        >

          <img
            className="object-contain w-[90%] h-[90%]"
            src="./get-started.png" />

        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex flex-col justify-center"
        >
          <TypingText title='| How metaversus woeks' />
          <TitleText title={<>Get started with just a few clicks</>} />
          <div
            className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps
                key={feature}
                number={index + 1}
                text={feature} />
            )
            )}
          </div>

        </motion.div>

      </motion.div>
    </section>
  )
}

export default GetStarted