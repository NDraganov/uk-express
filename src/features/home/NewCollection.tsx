import { NavLink } from "react-router-dom";
import {
  useGetFurnitureQuery,
  useGetLaptopsQuery,
  useGetMensShirtsQuery,
  useGetSmartphonesQuery,
  useGetSunglassesQuery,
  useGetWomensBagsQuery,
} from "../../api/productsApiSlice";

export default function NewCollection() {
  const { data: smartphones } = useGetSmartphonesQuery(undefined);
  const { data: furniture } = useGetFurnitureQuery(undefined);
  const { data: laptops } = useGetLaptopsQuery(undefined);
  const { data: sunglasses } = useGetSunglassesQuery(undefined);
  const { data: mensShirts } = useGetMensShirtsQuery(undefined);
  const { data: womensBags } = useGetWomensBagsQuery(undefined);

  return (
    <section className="my-40">
      <h2 className="pb-6 pl-10 text-3xl dark:text-white">New Collection</h2>
      <div className="no-scrollbar grid grid-flow-col gap-5 overflow-scroll px-10 pb-10">
        <NavLink to={`/products/${smartphones?.products[1].id}`}>
          <div className="flex h-full w-96 flex-col justify-between rounded-md p-2 shadow-lg dark:bg-slate-800 hover:dark:shadow-slate-700">
            <div className="flex justify-between">
              <div>
                <p className="text-lg">{smartphones?.products[1].brand}</p>
                <h4 className="line-clamp-1 text-2xl dark:text-white">
                  {smartphones?.products[1].title}
                </h4>
              </div>
              <p className="flex h-8 w-16 items-center justify-center rounded-md bg-lime-400 px-2 py-1 text-lg dark:text-black">
                New
              </p>
            </div>
            <div>
              <img
                className="my-4 h-80 w-96 rounded-md"
                src={smartphones?.products[1].images[2]}
                alt="iphone"
              />
              <p>
                <span className="text-xl font-bold dark:text-white">
                  £{smartphones?.products[1].price}
                </span>
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to={`/products/${furniture?.products[1].id}`}>
          <div className="flex h-full w-96 flex-col justify-between rounded-md p-2 shadow-lg dark:bg-slate-800 hover:dark:shadow-slate-700">
            <div className="flex justify-between">
              <div>
                <p className="text-lg">{furniture?.products[1].brand}</p>
                <h4 className="line-clamp-1 text-2xl dark:text-white">
                  {furniture?.products[1].title}
                </h4>
              </div>
              <p className="flex h-8 w-16 items-center justify-center rounded-md bg-lime-400 px-2 py-1 text-lg dark:text-black">
                New
              </p>
            </div>
            <div>
              <img
                className="my-4 h-80 w-96 rounded-md"
                src={furniture?.products[1].images[2]}
                alt="iphone"
              />
              <p>
                <span className="text-xl font-bold dark:text-white">
                  £{furniture?.products[1].price}
                </span>
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to={`/products/${laptops?.products[1].id}`}>
          <div className="flex h-full w-96 flex-col justify-between rounded-md p-2 shadow-lg dark:bg-slate-800 hover:dark:shadow-slate-700">
            <div className="flex justify-between">
              <div>
                <p className="text-lg">{laptops?.products[1].brand}</p>
                <h4 className="line-clamp-1 text-2xl dark:text-white">
                  {laptops?.products[1].title}
                </h4>
              </div>
              <p className="flex h-8 w-16 items-center justify-center rounded-md bg-lime-400 px-2 py-1 text-lg dark:text-black">
                New
              </p>
            </div>
            <div>
              <img
                className="my-4 h-80 w-96 rounded-md"
                src={laptops?.products[1].images[0]}
                alt="iphone"
              />
              <p>
                <span className="text-xl font-bold dark:text-white">
                  £{laptops?.products[1].price}
                </span>
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to={`/products/${sunglasses?.products[1].id}`}>
          <div className="flex h-full w-96 flex-col justify-between rounded-md p-2 shadow-lg dark:bg-slate-800 hover:dark:shadow-slate-700">
            <div className="flex justify-between">
              <div>
                <p className="text-lg">{sunglasses?.products[1].brand}</p>
                <h4 className="line-clamp-1 text-2xl dark:text-white">
                  {sunglasses?.products[1].title}
                </h4>
              </div>
              <p className="flex h-8 w-16 items-center justify-center rounded-md bg-lime-400 px-2 py-1 text-lg dark:text-black">
                New
              </p>
            </div>
            <div>
              <img
                className="my-4 h-80 w-96 rounded-md"
                src={sunglasses?.products[1].thumbnail}
                alt="iphone"
              />
              <p>
                <span className="text-xl font-bold dark:text-white">
                  £{sunglasses?.products[1].price}
                </span>
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to={`/products/${mensShirts?.products[1].id}`}>
          <div className="flex h-full w-96 flex-col justify-between rounded-md p-2 shadow-lg dark:bg-slate-800 hover:dark:shadow-slate-700">
            <div className="flex justify-between">
              <div>
                <p className="text-lg">{mensShirts?.products[1].brand}</p>
                <h4 className="line-clamp-1 text-2xl dark:text-white">
                  {mensShirts?.products[1].title}
                </h4>
              </div>
              <p className="flex h-8 w-16 items-center justify-center rounded-md bg-lime-400 px-2 py-1 text-lg dark:text-black">
                New
              </p>
            </div>
            <div>
              <img
                className="my-4 h-80 w-96 rounded-md"
                src={mensShirts?.products[1].images[0]}
                alt="iphone"
              />
              <p>
                <span className="text-xl font-bold dark:text-white">
                  £{mensShirts?.products[1].price}
                </span>
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to={`/products/${womensBags?.products[1].id}`}>
          <div className="flex h-full w-96 flex-col justify-between rounded-md p-2 shadow-lg dark:bg-slate-800 hover:dark:shadow-slate-700">
            <div className="flex justify-between">
              <div>
                <p className="text-lg">{womensBags?.products[1].brand}</p>
                <h4 className="line-clamp-1 text-2xl dark:text-white">
                  {womensBags?.products[1].title}
                </h4>
              </div>
              <p className="flex h-8 w-16 items-center justify-center rounded-md bg-lime-400 px-2 py-1 text-lg dark:text-black">
                New
              </p>
            </div>
            <div>
              <img
                className="my-4 h-80 w-96 rounded-md"
                src={womensBags?.products[1].images[3]}
                alt="iphone"
              />
              <p>
                <span className="text-xl font-bold dark:text-white">
                  £{womensBags?.products[1].price}
                </span>
              </p>
            </div>
          </div>
        </NavLink>
      </div>
    </section>
  );
}
