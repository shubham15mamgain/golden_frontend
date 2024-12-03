/* eslint-disable react/prop-types */
// @ts-nocheck

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/utils";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const generateVariants = (direction) => {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const value = direction === "right" || direction === "down" ? 100 : -100;

  return {
    hidden: { filter: "blur(10px)", opacity: 0, [axis]: value },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      [axis]: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };
};

const defaultViewport = { amount: 0.3, margin: "0px 0px 0px 0px" };

const TextAnimation = ({
  as = "h1",
  text,
  classname = "",
  viewport = defaultViewport,
  variants,
  direction = "down",
  letterAnime = false,
  lineAnime = false,
}) => {
  const baseVariants = variants || generateVariants(direction);
  const modifiedVariants = {
    hidden: baseVariants.hidden,
    visible: {
      ...baseVariants.visible,
    },
  };
  const MotionComponent = motion[as];
  return (
    <>
      <>
        <MotionComponent
          whileInView="visible"
          initial="hidden"
          variants={containerVariants}
          viewport={viewport}
          className={cn(
            `inline-block dark:text-white text-black uppercase  `,
            classname
          )}
        >
          {lineAnime ? (
            <>
              {" "}
              <motion.span
                className={`inline-block `}
                variants={modifiedVariants}
              >
                {text}
              </motion.span>
            </>
          ) : (
            <>
              {text.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  className={`inline-block `}
                  variants={letterAnime === false ? modifiedVariants : {}}
                >
                  {letterAnime ? (
                    <>
                      {word.split("").map((letter, index) => (
                        <>
                          <motion.span
                            className={`inline-block `}
                            variants={modifiedVariants}
                          >
                            {letter}
                          </motion.span>
                        </>
                      ))}
                      &nbsp;
                    </>
                  ) : (
                    <>{word}&nbsp;</>
                  )}
                </motion.span>
              ))}
            </>
          )}
        </MotionComponent>
      </>
    </>
  );
};

export default TextAnimation;
