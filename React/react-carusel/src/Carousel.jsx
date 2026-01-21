import { useState } from "react";

export default function Carousel() {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-300">
      <div className="w-80 rounded-3xl bg-white p-6 text-center shadow-xl">
        <h1 className="mb-4 text-2xl font-bold">Image Carousel</h1>

        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="mx-auto mb-4 h-48 w-full rounded-xl object-cover transition-transform duration-300"
        />

        <div className="flex justify-between gap-4">
          <button
            onClick={prev}
            className="w-1/2 rounded-xl bg-gray-200 py-2 font-semibold transition hover:bg-gray-300"
          >
            ◀ Prev
          </button>

          <button
            onClick={next}
            className="w-1/2 rounded-xl bg-gray-200 py-2 font-semibold transition hover:bg-gray-300"
          >
            Next ▶
          </button>
        </div>
      </div>
    </div>
  );
}
