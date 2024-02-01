import { useState } from "react";
import Icon from "../../ui/Icon";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import images from "../../data/CarouselImages.json";

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
    <div className="relative my-5 h-56 sm:my-40 sm:h-full">
      <button
        className="absolute left-10 top-1/2 flex items-center justify-center rounded-full p-2 hover:bg-white hover:bg-opacity-30"
        title="Previous image"
        onClick={prevSlide}
      >
        <Icon value={{ className: "fill-white sm:text-5xl" }}>
          <IoIosArrowBack />
        </Icon>
      </button>
      <img
        className="h-full w-full"
        loading="lazy"
        role="presentation"
        decoding="async"
        src={images[slideIndex].src}
        alt="Carousel image"
      />
      <button
        className="absolute right-10 top-1/2 flex items-center justify-center rounded-full p-2 hover:bg-white hover:bg-opacity-30"
        title="Next image"
        onClick={nextSlide}
      >
        <Icon value={{ className: "fill-white sm:text-5xl" }}>
          <IoIosArrowForward />
        </Icon>
      </button>
    </div>
  );
}
