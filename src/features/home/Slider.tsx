import { useEffect, useState } from "react";
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
    title: "furniture",
    src: furniture,
    to: "/products/category/furniture",
  },
  {
    title: "men shoes",
    src: menClothing,
    to: "/products/category/mens-shoes",
  },
  {
    title: "women dresses",
    src: womenClothing,
    to: "/products/category/womens-dresses",
  },
  {
    title: "men watches",
    src: watches,
    to: "/products/category/mens-watches",
  },
  {
    title: "women jewellery",
    src: jewellery,
    to: "/products/category/womens-jewellery",
  },
];

const FAST_DURATION = 25;
const SLOW_DURATION = 70;

export default function Slider() {
  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    const finalPosition = -1600 - 64;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender, mustFinish]);

  return (
    <div className="overflow-hidden rounded-xl">
      <motion.div
        className="flex gap-4 pt-36"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setDuration(SLOW_DURATION), setMustFinish(true);
        }}
        onHoverEnd={() => {
          setDuration(FAST_DURATION), setMustFinish(true);
        }}
      >
        {[...images, ...images].map((image, idx) => (
          <SliderCard
            key={idx}
            title={image.title}
            image={image.src}
            to={image.to}
          />
        ))}
      </motion.div>
    </div>
  );
}
