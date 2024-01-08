import { Img } from "react-image";

export default function OurStory() {
  return (
    <div className="flex">
      <div className="flex w-3/6 flex-col items-center justify-center">
        <h2 className="text-4xl font-medium dark:text-white">Our story</h2>
        <p className="pt-10 text-center text-lg">
          In 2004, we started UkExpress, a small online retailer based in
          London, UK.
        </p>
        <p className="px-10 py-1 text-center text-lg">
          For the last 20 years, thanks to our fantastic customer service,
          UkExpress has expanded to Spain, France and Germany.
        </p>
      </div>
      <div className="w-3/6">
        <Img src="/images/london.jpg" />
      </div>
    </div>
  );
}
