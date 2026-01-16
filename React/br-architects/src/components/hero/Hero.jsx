const HeroSection = () => {
  return (
    <div id="home" className="mx-auto max-w-391 relative">
      {/* Image container */}
      <div className="relative mx-auto max-w-375">
        <img
          className="w-full"
          src="https://www.w3schools.com/w3images/architect.jpg"
          alt="Architecture"
        />

        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center mt-4 text-center">
          <h1 className="text-[4rem] font-bold tracking-widest text-white">
            <span className="px-2 bg-black bg-opacity-70">
              <b>BR</b>
            </span>
            <span className="hidden sm:inline text-gray-300 ml-2">
              Architects
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
