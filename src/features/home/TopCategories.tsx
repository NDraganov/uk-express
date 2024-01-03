import { NavLink } from "react-router-dom";
import {
  useGetLaptopsQuery,
  useGetMensShoesQuery,
  useGetMensWatchesQuery,
  useGetSmartphonesQuery,
  useGetWomensBagsQuery,
  useGetWomensJewelleryQuery,
} from "../../api/productsApiSlice";
import { Img } from "react-image";

export default function TopCategories() {
  const { data: laptops } = useGetLaptopsQuery(undefined);
  const { data: shoes } = useGetMensShoesQuery(undefined);
  const { data: smartphones } = useGetSmartphonesQuery(undefined);
  const { data: bags } = useGetWomensBagsQuery(undefined);
  const { data: watches } = useGetMensWatchesQuery(undefined);
  const { data: jewellery } = useGetWomensJewelleryQuery(undefined);

  return (
    <section className="mx-10 my-10">
      <h2 className="mb-4 text-xl dark:text-white">Top categories</h2>
      <div className="grid grid-cols-6 gap-2 dark:text-white">
        <NavLink to="/products/category/laptops">
          <div className="dark:bg-slate-800items-center flex h-36 w-56  flex-col justify-center gap-2 rounded-md px-5 py-2 shadow-xl hover:scale-105 hover:text-cyan-600 dark:bg-slate-800 hover:dark:text-cyan-500">
            <Img
              className="h-5/6 rounded-md"
              src={laptops?.products[2].thumbnail}
            />
            <p>Laptops</p>
          </div>
        </NavLink>
        <NavLink to="/products/category/mens-shoes">
          <div className="flex h-36 w-56 flex-col items-center justify-center gap-2 rounded-md px-5 py-2 shadow-xl hover:scale-105 hover:text-cyan-600 dark:bg-slate-800 hover:dark:text-cyan-500">
            <Img
              className="h-5/6 rounded-md"
              src={shoes?.products[4].thumbnail}
            />
            <p>Shoes</p>
          </div>
        </NavLink>
        <NavLink to="/products/category/smartphones">
          <div className="flex h-36 w-56 flex-col items-center justify-center gap-2 rounded-md px-5 py-2 shadow-xl hover:scale-105 hover:text-cyan-600 dark:bg-slate-800 hover:dark:text-cyan-500">
            <Img
              className="h-5/6 rounded-md"
              src={smartphones?.products[1].thumbnail}
            />
            <p>Smartphones</p>
          </div>
        </NavLink>
        <NavLink to="/products/category/womens-dresses">
          <div className="flex h-36 w-56 flex-col items-center justify-center gap-2 rounded-md px-5 py-2 shadow-xl hover:scale-105 hover:text-cyan-600 dark:bg-slate-800 hover:dark:text-cyan-500">
            <Img
              className="h-5/6 rounded-md"
              src={bags?.products[1].thumbnail}
            />
            <p>Dresses</p>
          </div>
        </NavLink>
        <NavLink to="/products/category/mens-watches">
          <div className="flex h-36 w-56 flex-col items-center justify-center gap-2 rounded-md px-5 py-2 shadow-xl hover:scale-105 hover:text-cyan-600 dark:bg-slate-800 hover:dark:text-cyan-500">
            <Img
              className="h-5/6 rounded-md"
              src={watches?.products[2].thumbnail}
            />
            <p>Watches</p>
          </div>
        </NavLink>
        <NavLink to="/products/category/womens-jewellery">
          <div className="flex h-36 w-56 flex-col items-center justify-center gap-2 rounded-md px-5 py-2 shadow-xl hover:scale-105 hover:text-cyan-600 dark:bg-slate-800 hover:dark:text-cyan-500">
            <Img
              className="h-5/6 rounded-md"
              src={jewellery?.products[2].thumbnail}
            />
            <p>Jewellery</p>
          </div>
        </NavLink>
      </div>
    </section>
  );
}
