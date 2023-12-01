import DummyProducts from "../components/DummyProducts";
import HomeCarousel from "../features/home/HomeCarousel";

export default function HomePage() {
  return (
    <main>
      <HomeCarousel />
      <DummyProducts />
    </main>
  );
}
