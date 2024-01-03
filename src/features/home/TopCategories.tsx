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
    <div className="mx-10 my-10">
      <h2 className="text-xl">Top categories</h2>
      <div className="grid grid-cols-6 gap-2">
        <NavLink to="/products/category/laptops">
          <div className="flex h-36 w-56 flex-col items-center justify-center gap-2 rounded-md px-5 py-2 shadow-xl hover:scale-105 hover:text-cyan-600">
            <Img className="h-5/6" src={laptops?.products[2].thumbnail} />
            <p className="dark:text-black">Laptops</p>
          </div>
        </NavLink>
        <NavLink to="/products/category/mens-shoes">
          <div className="flex h-36 w-56 flex-col items-center justify-center gap-2 rounded-md px-5 py-2 shadow-xl hover:scale-105 hover:text-cyan-600">
            <Img className="h-5/6" src={shoes?.products[4].thumbnail} />
            <p className="dark:text-black">Shoes</p>
          </div>
        </NavLink>
        <NavLink to="/products/category/smartphones">
          <div className="flex h-36 w-56 flex-col items-center justify-center gap-2 rounded-md px-5 py-2 shadow-xl hover:scale-105 hover:text-cyan-600">
            <Img className="h-5/6" src={smartphones?.products[1].thumbnail} />
            <p className="dark:text-black">Smartphones</p>
          </div>
        </NavLink>
        <NavLink to="/products/category/womens-dresses">
          <div className="flex h-36 w-56 flex-col items-center justify-center gap-2 rounded-md px-5 py-2 shadow-xl hover:scale-105 hover:text-cyan-600">
            <Img className="h-5/6" src={bags?.products[1].thumbnail} />
            <p className="dark:text-black">Dresses</p>
          </div>
        </NavLink>
        <NavLink to="/products/category/mens-watches">
          <div className="flex h-36 w-56 flex-col items-center justify-center gap-2 rounded-md px-5 py-2 shadow-xl hover:scale-105 hover:text-cyan-600">
            <Img className="h-5/6" src={watches?.products[2].thumbnail} />
            <p className="dark:text-black">Watches</p>
          </div>
        </NavLink>
        <NavLink to="/products/category/womens-jewellery">
          <div className="flex h-36 w-56 flex-col items-center justify-center gap-2 rounded-md px-5 py-2 shadow-xl hover:scale-105 hover:text-cyan-600">
            <Img className="h-5/6" src={jewellery?.products[2].thumbnail} />
            <p className="dark:text-black">Jewellery</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
