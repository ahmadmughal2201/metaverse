'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { TitleText, TypingText } from './CustomTexts';
import NewFeatures from "./NewFeatures";
import { newFeatures } from "../../constants";
import React from 'react'


const WhatsNew = () => {

  return (
    <section
      className="sm:p-16 xs:p-8 px-6 py-12 relative z-10"

    >
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8">



        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.75] flex flex-col justify-center"
        >
          <TypingText title='| Whats New?' />
          <TitleText title={<>Whats new about Metaversus?</>} />
          {<div
            className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <NewFeatures
                key={feature.title}
                {...feature} />
            )
            )}
          </div>}

        </motion.div>

        <motion.div
          variants={planetVariants('right')}
          className="flex justify-center items-center flex-1"
        >
          <img
            className="object-contain w-[90%] h-[90%]"
            src="./whats-new.png" />
        </motion.div>

      </motion.div>
    </section>
  )
}

export default WhatsNew;
