import { useState } from "react";
import Icon from "../../ui/Icon";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const images = [
  {
    src: "/images/television.jpeg",
  },
  {
    src: "/images/men-clothing.jpg",
  },
  {
    src: "/images/women-clothing.jpg",
  },
  {
    src: "/images/watches.jpg",
  },
  { src: "/images/jewellery.jpg" },
];

export default function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);

  function prevSlide() {
    slideIndex === 0
      ? setSlideIndex(images.length - 1)
      : setSlideIndex(slideIndex - 1);
  }

  function nextSlide() {
    slideIndex + 1 === images.length
      ? setSlideIndex(0)
      : setSlideIndex(slideIndex + 1);
  }

  return (
    <div className="relative my-40 h-56 sm:h-full">
      <button
        className="absolute left-10 top-1/2 flex items-center justify-center rounded-full p-2 hover:bg-white hover:bg-opacity-30"
        onClick={prevSlide}
      >
        <Icon value={{ className: "fill-white sm:text-5xl" }}>
          <IoIosArrowBack />
        </Icon>
      </button>
      <img
        className="h-full w-full"
        src={images[slideIndex].src}
        alt="Television"
      />
      <button
        className="absolute right-10 top-1/2 flex items-center justify-center rounded-full p-2 hover:bg-white hover:bg-opacity-30"
        onClick={nextSlide}
      >
        <Icon value={{ className: "fill-white sm:text-5xl" }}>
          <IoIosArrowForward />
        </Icon>
      </button>
    </div>
  );
}
