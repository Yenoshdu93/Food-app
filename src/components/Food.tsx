import { useState } from "react";
import { data } from "../asserts/data";

const Food = () => {
  const [food, setFood] = useState(data);

  // filter type
  const filterType = (category: string) => {
    setFood(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  //filter price
  const filterPrice = (price: string) => {
    setFood(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <>
      <div className="max-w-[1640px] mx-auto p-2 py-4">
        <h1 className="text-center text-2xl lg:text-3xl font-semibold text-orange-400 uppercase">
          Today Rated Food Items{" "}
        </h1>
        <div className="flex flex-col lg:flex-row justify-between gap-2 py-2">
          <div>
            <h1 className="text-black font-semibold lg:text-2xl pb-2 uppercase">
              Filterd By Items
            </h1>
            <div className="flex gap-4">
              <button
                onClick={() => setFood(data)}
                className="border px-4 py-1 border-orange-400 text-orange-400 rounded-md"
              >
                All
              </button>
              <button
                onClick={() => filterType("burger")}
                className="border px-4 py-1 border-orange-400 text-orange-400 rounded-md"
              >
                Burger
              </button>
              <button
                onClick={() => filterType("pizza")}
                className="border px-4 py-1 border-orange-400 text-orange-400 rounded-md"
              >
                Pizza
              </button>
              <button
                onClick={() => filterType("salad")}
                className="border px-4 py-1 border-orange-400 text-orange-400 rounded-md"
              >
                Saladas
              </button>
              <button
                onClick={() => filterType("chicken")}
                className="border px-4 py-1 border-orange-400 text-orange-400 rounded-md"
              >
                Chicken
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-black font-semibold lg:text-2xl pb-2 uppercase">
              Prices
            </h1>
            <div className="flex gap-4">
              <button
                onClick={() => filterPrice("$")}
                className="border px-4 py-1 border-orange-400 text-orange-400 rounded-md"
              >
                $
              </button>
              <button
                onClick={() => filterPrice("$$")}
                className="border px-4 py-1 border-orange-400 text-orange-400 rounded-md"
              >
                $$
              </button>
              <button
                onClick={() => filterPrice("$$$")}
                className="border px-4 py-1 border-orange-400 text-orange-400 rounded-md"
              >
                $$$
              </button>
              <button
                onClick={() => filterPrice("$$$$")}
                className="border px-4 py-1 border-orange-400 text-orange-400 rounded-md"
              >
                $$$$
              </button>
              <button
                onClick={() => filterPrice("$$$$$")}
                className="border px-4 py-1 border-orange-400 text-orange-400 rounded-md"
              >
                $$$$$
              </button>
            </div>
          </div>
        </div>

        {/* Food items  */}
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4 ">
          {food.map((items) => (
            <div
              key={items.id}
              className="relative w-full h-full shadow-md rounded-md md:hover:scale-[101%] transition-all duration-300 "
            >
              <div>
                <img
                  className="w-full h-full object-cover max-h-[200px] rounded-md"
                  src={items.image}
                  alt="image1"
                />
              </div>
              <div className="flex justify-between items-center px-2 py-4">
                <p className="text-gray-500 text-sm lg:text-xl">{items.name}</p>
                <p className="bg-orange-500 px-2 py-1 rounded-md text-white font-semibold cursor-pointer">
                  {items.price}
                </p>
                {/* <p className="absolute top-4 right-4 text-2xl uppercase text-orange-400">
                  {items.category}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Food;
