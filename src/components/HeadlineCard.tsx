const HeadlineCard = () => {
  interface cardsType {
    title: string;
    image: string;
    price: number;
    button?: string;
  }

  const cards: cardsType[] = [
    {
      title: "Burger",
      image:
        "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 230,
      button: "Buy Now",
    },
    {
      title: "French fries",
      image:
        "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 130,
      button: "Buy Now",
    },
    {
      title: "Sandwich",
      image:
        "https://images.pexels.com/photos/4491395/pexels-photo-4491395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 300,
      button: "Buy Now",
    },
  ];
  return (
    <>
      <div className="w-full max-w-[1640px] mx-auto p-2 grid grid-cols-1 grid-flow-row-dense md:grid-cols-3 gap-8 py-12">
        {cards.map((items, index) => (
          <div key={index} className="relative max-h-[200px] rounded-xl">
            <div className="w-full h-full absolute  bg-black/30 flex flex-col gap-2 text-gray-300 font-bold rounded-xl">
              <p className="text-xl p-2 md:text-3xl lg:text-5xl text-gray-200">
                {items.title}
              </p>
              <p className="hidden lg:inline-block ">
                <span className="text-orange-400 p-2">Only</span>
                {items.price} RS
              </p>
              <button className="hidden lg:inline-flex ml-3 w-[100px] px-2 py-1 bg-white  rounded-md text-black">
                {items.button}
              </button>
            </div>
            <img
              className="w-full h-full max-h-[200px] rounded-xl object-cover"
              src={items.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default HeadlineCard;
