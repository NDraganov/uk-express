import Banner from "../features/home/Banner";
import BigSale from "../features/home/BigSale";
import Carousel from "../features/home/Carousel";
import NewCollection from "../features/home/NewCollection";
import TopCategories from "../features/home/TopCategories";

export default function HomePage() {
  return (
    <main className="pt-28 dark:bg-slate-900">
      <Banner />
      <Carousel />
      <BigSale />
      <NewCollection />
      <TopCategories />
    </main>
  );
}
