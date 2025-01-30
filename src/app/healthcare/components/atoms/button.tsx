"use client"
import React from "react";
import {
  ButtonProps,
  MotionButtonProps,
  MotionButtonWrapperProps,
} from "../../lib/interface/atoms.interface";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const Button: React.FC<MotionButtonProps> = ({
  text,
  className,
  onClick,
  ...props
}) => {
  return (
    <motion.button
      whileTap={{ opacity: 0.5 }}
      className={twMerge(
        `bg-healthcare-accent desktop:hover:bg-gradient-to-br from-healthcare-accent to-cyan-400 transition-all text-white text-sm font-brandon font-black w-fit h-10 px-7  rounded-lg`,
        className
      )}
      onClick={(event) => {
        if (onClick) {
          onClick(event);
        }
      }}
      {...props}
    >
      {text}
    </motion.button>
  );
};

export const CustomButton: React.FC<ButtonProps> = ({
  text,
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        `bg-healthcare-accent hover:bg-gradient-to-br from-healthcare-accent to-cyan-400 text-white text-sm font-brandon-black w-fit h-10 px-7  rounded-lg`,
        className
      )}
      onClick={(event) => {
        if (onClick) {
          onClick(event);
        }
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const OutlinedButton: React.FC<ButtonProps> = ({
  text,
  className,
  ...props
}) => {
  return (
    <button
     
      className={twMerge(
        `border-accent border-2 px-4 text-white text-sm font-charter font-black tracking-[0.15rem] h-12 rounded-full cursor-text`,
        className
      )}
      {...props}
    >
      {text}
    </button>
  );
};

export const ButtonWrapper: React.FC<MotionButtonWrapperProps> = ({
  className,
  onClick,
  ...props
}) => {
  return (
    <motion.button
      whileTap={{ opacity: 0.5 }}
      className={`transition-all ${className}`}
      onClick={(event) => {
        if (onClick) {
          onClick(event);
        }
      }}
      {...props}
    >
      {props.children}
    </motion.button>
  );
};
