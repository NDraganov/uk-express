import team from "../../assets/images/team.jpeg";

export default function OurMission() {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-3/6">
        <img
          loading="lazy"
          role="presentation"
          decoding="async"
          src={team}
          alt="Team"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center py-4 sm:w-3/6 sm:py-0">
        <h2 className="text-4xl font-medium dark:text-white">Our Mission</h2>
        <p className="pt-2 text-center text-lg sm:pt-10">
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
