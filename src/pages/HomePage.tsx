import Banner from "../features/home/Banner";
import BigSale from "../features/home/BigSale";
import Carousel from "../features/home/Carousel";
import NewCollection from "../features/home/NewCollection";
import TopCategories from "../features/home/TopCategories";
import NewsModal from "../features/news-subscription/NewsModal";

export default function HomePage() {
  return (
    <main className="pt-28 dark:bg-slate-900">
      <NewsModal />
      <Banner />
      <Carousel />
      <BigSale />
      <NewCollection />
      <TopCategories />
    </main>
  );
}
