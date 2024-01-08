import { Img } from "react-image";

export default function OurMission() {
  return (
    <div className="flex">
      <div className="w-3/6">
        <Img src="/images/team.jpg" />
      </div>
      <div className="flex w-3/6 flex-col items-center justify-center">
        <h2 className="text-4xl font-medium dark:text-white">Our Mission</h2>
        <p className="pt-10 text-center text-lg">
          At UkExpress, our purpose is simple - to offer and deliver goods in
          the best way!
        </p>
        <p className="px-10 py-1 text-center text-lg">
          Twenty years ago, we began as a small online retailer that only sold
          clothes. Today, we still sell clothes — as well as electronics, food,
          accessories, and more. That "more" is providing the very best customer
          service, customer experience, and company culture. We aim to inspire
          the world by showing it's possible to simultaneously deliver happiness
          to customers, employees, vendors, shareholders, and the community in a
          long-term, sustainable way.
        </p>
      </div>
    </div>
  );
}
