import { Rating } from "flowbite-react";
import { RatingStar } from "flowbite-react/lib/esm/components/Rating/RatingStar";

interface ProductRatingProps {
  rating: string | undefined;
}

export default function ProductRating({ rating }: ProductRatingProps) {
  if (rating === "5") {
    return (
      <Rating>
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
      </Rating>
    );
  } else if (rating === "4") {
    return (
      <Rating>
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar filled={false} />
      </Rating>
    );
  } else if (rating === "3") {
    <Rating>
      <RatingStar />
      <RatingStar />
      <RatingStar />
      <RatingStar filled={false} />
      <RatingStar filled={false} />
    </Rating>;
  } else if (rating === "2") {
    <Rating>
      <RatingStar />
      <RatingStar />
      <RatingStar filled={false} />
      <RatingStar filled={false} />
      <RatingStar filled={false} />
    </Rating>;
  } else {
    <Rating>
      <RatingStar />
      <RatingStar filled={false} />
      <RatingStar filled={false} />
      <RatingStar filled={false} />
      <RatingStar filled={false} />
    </Rating>;
  }
}
