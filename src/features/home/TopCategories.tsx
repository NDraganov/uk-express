import { NavLink } from "react-router-dom";
import Icon from "../../ui/Icon";
import { GiLaptop } from "react-icons/gi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsSmartwatch } from "react-icons/bs";
import { GiConverseShoe } from "react-icons/gi";
import { GiDress } from "react-icons/gi";
import { GiBigDiamondRing } from "react-icons/gi";

export default function TopCategories() {
  return (
    <div className="flex h-60 flex-col items-center justify-center gap-4 bg-lime-400">
      <h2 className="text-2xl font-semibold dark:text-black">Top Categories</h2>
      <div className="flex items-center justify-center gap-10">
        <NavLink to="/category/laptops">
          <div className="flex flex-col items-center justify-center rounded-full bg-white px-10 py-6">
            <Icon
              value={{
                className: "text-6xl dark:text-black hover:fill-orange-500",
              }}
            >
              <GiLaptop />
            </Icon>
            <p className="dark:text-black">Laptops</p>
          </div>
        </NavLink>
        <NavLink to="/category/mens-shoes">
          <div className="flex flex-col items-center justify-center rounded-full bg-white px-10 py-6">
            <Icon
              value={{
                className: "text-6xl dark:text-black hover:fill-orange-500",
              }}
            >
              <GiConverseShoe />
            </Icon>
            <p className="dark:text-black">Shoes</p>
          </div>
        </NavLink>
        <NavLink to="/category/smartphones">
          <div className="flex flex-col items-center justify-center rounded-full bg-white px-10 py-6">
            <Icon
              value={{
                className: "text-6xl dark:text-black hover:fill-orange-500",
              }}
            >
              <IoPhonePortraitOutline />
            </Icon>
            <p className="dark:text-black">Phones</p>
          </div>
        </NavLink>
        <NavLink to="/category/womens-dresses">
          <div className="flex flex-col items-center justify-center rounded-full bg-white px-10 py-6">
            <Icon
              value={{
                className: "text-6xl dark:text-black hover:fill-orange-500",
              }}
            >
              <GiDress />
            </Icon>
            <p className="dark:text-black">Dresses</p>
          </div>
        </NavLink>
        <NavLink to="/category/mens-watches">
          <div className="flex flex-col items-center justify-center rounded-full bg-white px-10 py-6">
            <Icon
              value={{
                className: "text-6xl dark:text-black hover:fill-orange-500",
              }}
            >
              <BsSmartwatch />
            </Icon>
            <p className="dark:text-black">Watches</p>
          </div>
        </NavLink>
        <NavLink to="/category/womens-jewellery">
          <div className="flex flex-col items-center justify-center rounded-full bg-white px-10 py-6">
            <Icon
              value={{
                className: "text-6xl dark:text-black hover:fill-orange-500",
              }}
            >
              <GiBigDiamondRing />
            </Icon>
            <p className="dark:text-black">Jewellery</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
