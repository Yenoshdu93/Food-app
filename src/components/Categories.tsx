import { categories } from "../asserts/data";

const Categories = () => {
  return (
    <>
      <div className="max-w-[1640px] mx-auto p-10">
        <div className="w-full h-full">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-serif text-center text-orange-400">
            Top Categories
          </h1>
          <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4 gap-2">
            {categories.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-200 space-x-2 rounded-md"
              >
                <p className="text-gray-500 font-bold">{item.name}</p>
                <img src={item.image} className="objec-cover" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Categories;
