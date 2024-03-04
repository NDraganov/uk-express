import { useEffect } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import furniture from "../../assets/images/furniture.jpeg";
import menClothing from "../../assets/images/men-clothing.jpeg";
import womenClothing from "../../assets/images/women-clothing.jpeg";
import watches from "../../assets/images/watches.jpeg";
import jewellery from "../../assets/images/jewellery.jpeg";
import SliderCard from "./SliderCard";

const images = [
  {
    src: furniture,
  },
  {
    src: menClothing,
  },
  {
    src: womenClothing,
  },
  {
    src: watches,
  },
  {
    src: jewellery,
  },
];

export default function Slider() {
  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    const finalPosition = -1600;

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className="overflow-hidden rounded-xl">
      <motion.div
        className="flex gap-4 py-10"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...images, ...images].map((image, idx) => (
          <SliderCard key={idx} image={image.src} />
        ))}
      </motion.div>
    </div>
  );
}
