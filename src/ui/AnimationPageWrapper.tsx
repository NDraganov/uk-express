import { type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimationPageWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const variations = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={variations.hidden}
        animate={variations.visible}
        transition={{ delay: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
