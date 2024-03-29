import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

interface SliderCardProps {
  title: string;
  image: string;
  to: string;
}

export default function SliderCard({ image, to, title }: SliderCardProps) {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <motion.div
      className="relative flex h-56 min-w-[20rem] items-center justify-center overflow-hidden rounded-xl"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="pointer-events-none absolute h-full w-full bg-black/50" />
            <motion.button
              className="z-10 rounded-full bg-white px-5 py-2"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              title={`Explore ${title}`}
            >
              <Link to={to} className="flex items-center justify-center gap-2">
                Explore now
                <BsArrowUpRightCircleFill />
              </Link>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      <img src={image} className="h-full" alt={image} />
    </motion.div>
  );
}
