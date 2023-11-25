import {
  GanttChart,
  Search,
  ShoppingBasket,
  PanelLeft,
  Truck,
  Heart,
  Wallet,
  Download,
  UserSquare,
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const menuLinks = [
    { title: "Orders", icon: <Truck /> },
    { title: "Favorite", icon: <Heart /> },
    { title: "Wallet", icon: <Wallet /> },
    { title: "Download", icon: <Download /> },
    { title: "Friends", icon: <UserSquare /> },
  ];
  return (
    <>
      <div className="sticky top-0 max-w-[1640px] mx-auto flex items-center justify-between lg:justify-around bg-white p-4 z-50 shadow-md">
        {/* left */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsActive(!isActive)}
            className="cursor-pointer border border-gray-200 rounded-md md:p-1"
          >
            <GanttChart size={30} color="gray" />
          </button>
          <h1 className="text-xl  md:text-3xl uppercase">
            Best <span className="font-bold">Foods</span>
          </h1>
          <div className="hidden lg:inline-flex items-center gap-2 uppercase text-sm font-semibold bg-gray-200 rounded-xl transition-transform duration-300 translate-x-0">
            <p className="bg-black p-2 rounded-xl text-white">Delivery</p>
            <p className="p-2">Order</p>
          </div>
        </div>
        {/* center  */}
        <div className="hidden relative  h-10 md:min-w-[400px] md:flex items-center">
          <Search className="absolute mx-2" color="gray" />
          <input
            placeholder="Search here ..."
            className="w-full h-full text-sm font-semibold pl-10 outline-none border rounded-md focus:ring-2 focus:ring-black  transition-all duration-300"
            type="text"
          />
        </div>
        {/* right  */}
        <div>
          <button className="flex items-center gap-2 border px-2 py-1 rounded-md bg-black">
            <ShoppingBasket className="w-[2rem] sm:h-[2rem] text-white" />
            <p className="text-white font-semibold">Cart</p>
          </button>
        </div>
      </div>
      {/* mobile  */}
      {/* overlay  */}
      <div
        className={` ${
          isActive
            ? "fixed top-0 left-0 right-0 w-full h-screen  bg-black/80 z-50"
            : "null"
        }`}
      ></div>
      <div
        className={`fixed top-0 left-0 w-[300px] h-screen bg-white z-50 transition-transform transform ${
          isActive ? "translate-x-0" : "-translate-x-full"
        }  duration-300`}
      >
        <PanelLeft
          onClick={() => setIsActive(!isActive)}
          className="absolute right-6 top-2 p-1 cursor-pointer border rounded-md hover:bg-gray-200"
          size={40}
        />
        <h1 className="p-4 text-2xl font-semibold underline uppercase">
          Best Foods
        </h1>
        {menuLinks.map((link, index) => (
          <ul key={index} className="flex items-center gap-2">
            <li className="p-4 cursor-pointer">{link.icon}</li>
            <li className="cursor-pointer">{link.title}</li>
          </ul>
        ))}
      </div>
    </>
  );
};
export default Navbar;
