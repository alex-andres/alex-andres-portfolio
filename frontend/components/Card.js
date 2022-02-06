import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import Button from "./Button";
import { useTheme } from "next-themes";
import { useState } from "react";

const itemVariants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.25,
    },
  },
};

const MotionButton = motion(Button);

export default function Card({
  title,
  imageSrc,
  darkImageSrc,
  alt,
  description,
  buttonText,
  path,
  className,
}) {
  const { theme } = useTheme();
  if (darkImageSrc) {
    return (
      <motion.article
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.15 }}
        className={className}
      >
        <div className="header">
          <motion.div variants={itemVariants} className="image-wrapper">
            <Image
              layout="fill"
              objectFit="cover"
              src={theme === "light" ? imageSrc : darkImageSrc}
              alt={alt}
            />
          </motion.div>
          <div className="heading-wrapper">
            <motion.h3 variants={itemVariants}>{title}</motion.h3>
          </div>
        </div>
        <div className="text-container">
          <motion.p variants={itemVariants}>{description}</motion.p>
          <Button variants={itemVariants} buttonText={buttonText} path={path} />
        </div>
      </motion.article>
    );
  } else {
    return (
      <motion.article
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.15 }}
        className={className}
      >
        <div className="header">
          <motion.div variants={itemVariants} className="image-wrapper">
            <Image layout="fill" objectFit="cover" src={imageSrc} alt={alt} />
          </motion.div>
          <div className="heading-wrapper">
            <motion.h3 variants={itemVariants}>{title}</motion.h3>
          </div>
        </div>
        <div className="text-container">
          <motion.p variants={itemVariants}>{description}</motion.p>
          <Button variants={itemVariants} buttonText={buttonText} path={path} />
        </div>
      </motion.article>
    );
  }
}
