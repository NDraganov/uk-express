import { useState } from "react";
import Icon from "../../ui/Icon";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const images = [
  {
    src: "/television.jpeg",
  },
  {
    src: "/men-clothing.jpeg",
  },
  {
    src: "/women-clothing.jpeg",
  },
  { src: "/jewellery.jpeg" },
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
    <div className="relative h-56 sm:h-[40rem]">
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
