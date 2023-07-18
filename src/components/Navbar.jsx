'use client';
import React from 'react'
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  return (
    <motion.div variants={navVariants} initial="hidden" whileInView="show" className={`  ${styles.xPaddings} sm:px-16 px-6  py-8 relative`} >

    <div className='gradient-01 w-[50%] inset-0 absolute' />

    <div className='2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8'>

      <img className='w-[24px] h-[24px] object-contain' src='/search.svg' />

      <h2 className='font-extrabold text-[24px] text-white leading-[30px]'>METAVERSES</h2>
      <img className='w-[24px] h-[24px] object-contain' src='/menu.svg' />
    </div>

    </motion.div>
  )
};

export default Navbar;


