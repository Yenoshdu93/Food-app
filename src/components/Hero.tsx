const Hero = () => {
  return (
    <>
      <div className="max-w-[1640px] mx-auto p-1 rounded-md">
        <div className="relative max-h-[500px]">
          <div className="absolute w-full h-full text-gray-200 max-h-[500px] flex flex-col items-center m lg:justify-center  bg-black/30">
            <p className="lg:p-2 text-xl font-semibold md:text-2xl lg:text-5xl lg:tracking-wider">
              The <span className="text-orange-300">Best</span>
            </p>
            <p className="lg:p-2 text-xl font-semibold md:text-2xl lg:text-5xl">
              <span className="text-orange-300">Food</span> Delivery
            </p>
          </div>
          <img
            className="w-full max-h-[500px] object-cover rounded-md"
            src="https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg"
            alt="burger"
          />
        </div>
      </div>
    </>
  );
};
export default Hero;
