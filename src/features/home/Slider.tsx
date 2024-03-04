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
  return (
    <div className="mx-20 flex gap-20 overflow-hidden py-10">
      {[...images].map((image, idx) => (
        <SliderCard key={idx} image={image.src} />
      ))}
    </div>
  );
}
