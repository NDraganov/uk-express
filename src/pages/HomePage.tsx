import Banner from "../features/home/Banner";
import BigSale from "../features/home/BigSale";
import Slider from "../features/home/Slider";
import HomeVideo from "../features/home/HomeVideo";
import NewCollection from "../features/home/NewCollection";
import TopCategories from "../features/home/TopCategories";
import NewsModal from "../features/news-subscription/NewsModal";
import AnimationPageWrapper from "../ui/AnimationPageWrapper";

export default function HomePage() {
  return (
    <main className="mt-[4.5rem] dark:bg-slate-900">
      <AnimationPageWrapper>
        <NewsModal />
        <Banner />
        <HomeVideo />
        <Slider />
        <BigSale />
        <TopCategories />
        <NewCollection />
      </AnimationPageWrapper>
    </main>
  );
}
