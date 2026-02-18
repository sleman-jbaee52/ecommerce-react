import React from "react";
import { motion as _motion } from "framer-motion";

function PageTransition({ children }) {
  return (
    <_motion.div
      initial={{ opacity: 0, y: 20 }} // start
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </_motion.div>
  );
}

export default PageTransition;
