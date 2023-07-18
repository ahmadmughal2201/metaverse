'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from './CustomTexts';
import ExploreCard from "./ExploreCard";
import { exploreWorlds } from "../../constants";
import React from 'react'
import { useState } from "react";
import World from "./World";

const Explore = () => {
  const [active, setActive] = useState('world-2')

  return (
    <section className=" sm:p-16 xs:p-8 px-6 py-12 " id="explore">
      <motion.div variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex flex-col 2xl:max-w-[1280px] w-full">
          <TypingText title="| The World" textStyles="text-center"/>
          <TitleText  textStyles="text-center" title={<>Choose the world you want <br className="md:block hidden"/>  to explore </>} />
          <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((World,index)=>
          <ExploreCard key={World.id} {...World} index={index} active={active} handleClick={setActive} />)}
          </div>
      </motion.div>
    </section>
  )
}

export default Explore
