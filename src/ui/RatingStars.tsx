import Icon from "./Icon";
import { FaStar } from "react-icons/fa6";

interface RatingStarsProps {
  rating: string | undefined;
}

export default function RatingStars({ rating }: RatingStarsProps) {
  if (rating === "5") {
    return (
      <div className="flex">
        <Icon value={{ className: "fill-yellow-500" }}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </Icon>
      </div>
    );
  } else if (rating === "4") {
    return (
      <div className="flex">
        <Icon value={{ className: "fill-yellow-500" }}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </Icon>
      </div>
    );
  } else if (rating === "3") {
    return (
      <div className="flex">
        <Icon value={{ className: "fill-yellow-500" }}>
          <FaStar />
          <FaStar />
          <FaStar />
        </Icon>
      </div>
    );
  } else if (rating === "2") {
    return (
      <div className="flex">
        <Icon value={{ className: "fill-yellow-500" }}>
          <FaStar />
          <FaStar />
        </Icon>
      </div>
    );
  } else {
    return (
      <div className="flex">
        <Icon value={{ className: "fill-yellow-500" }}>
          <FaStar />
        </Icon>
      </div>
    );
  }
}
