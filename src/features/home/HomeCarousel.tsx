import { Carousel } from "flowbite-react";

export default function HomeCarousel() {
  return (
    <div className="my-10 flex items-center justify-center">
      <div className="w-4/5 sm:h-64 xl:h-[34rem] 2xl:h-full">
        <Carousel pauseOnHover>
          <img className="h-[34rem]" src="/television.jpeg" alt="Television" />
          <img className="h-[34rem]" src="/jewelry.jpeg" alt="jewelry" />
          <img
            className="h-[34rem]"
            src="/men-clothing.jpeg"
            alt="Men Clothing"
          />
          <img
            className="h-[34rem]"
            src="/women-clothing.jpeg"
            alt="Women Clothing"
          />
        </Carousel>
      </div>
    </div>
  );
}
