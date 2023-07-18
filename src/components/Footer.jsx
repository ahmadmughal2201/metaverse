'use client';
import React from 'react'
import { motion } from "framer-motion";
import styles from "../styles/index";
import { navVariants } from "../utils/motion";

const Footer = () => {
  return (
    <motion.div variants={navVariants} initial="hidden" whileInView="show" className={` text-lg ${styles.xPaddings} py-8 reative`} >
      Footer bjdjdj
    </motion.div>
  )
};
export default Footer;
