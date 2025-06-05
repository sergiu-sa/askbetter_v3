import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const { theme } = useTheme();

  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary text-primary-content hover:bg-primary/90 focus:ring-primary",
    secondary:
      "bg-secondary text-secondary-content hover:bg-secondary/90 focus:ring-secondary",
    ghost: "hover:bg-base-300 focus:ring-base-300",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <motion.button whileTap={{ scale: 0.98 }} className={styles} {...props}>
      {children}
    </motion.button>
  );
};
