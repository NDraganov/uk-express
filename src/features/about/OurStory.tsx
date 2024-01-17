import { Img } from "react-image";

export default function OurStory() {
  return (
    <div className="flex flex-col-reverse sm:flex-row">
      <div className="flex w-full flex-col items-center justify-center py-4 sm:w-3/6 sm:py-0">
        <h2 className="text-4xl font-medium dark:text-white">Our story</h2>
        <p className="pt-2 text-center text-lg sm:pt-10">
          In 2004, we started UkExpress, a small online retailer based in
          London, UK.
        </p>
        <p className="px-10 py-1 text-center text-lg">
          For the last 20 years, thanks to our fantastic customer service,
          UkExpress has expanded to Spain, France and Germany.
        </p>
      </div>
      <div className="w-full sm:w-3/6">
        <Img src="/images/london.jpg" />
      </div>
    </div>
  );
}
