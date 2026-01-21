export default function Hero() {
  return (
    <div id="home" className="relative mx-auto max-w-391">
      {/* Image container */}
      <div className="relative mx-auto max-w-375">
        <img src="/architect.jpg" alt="Architecture" className="w-full" />
        {/* Text overlay */}
        <div className="absolute inset-0 mt-4 flex items-center justify-center">
          <h1 className="text-[4rem] font-bold tracking-widest text-white">
            <span className="bg-black px-2">
              <b>BR</b>
            </span>
            <span className="ml-2 hidden text-gray-300 sm:inline">
              Architects
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
