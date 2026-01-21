import { teamData } from "../../../datas/data";

export default function About() {
  return (
    <div className="px-6 py-8">
      {/* Section heading */}
      <h2 className="mb-6 border-b border-gray-300 pb-4 text-2xl font-semibold">
        About
      </h2>

      {/* About text */}
      <p className="mb-8 text-justify leading-relaxed text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      {/* Team grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teamData.map(({ name, role, img, description }, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg bg-white text-center shadow-md"
          >
            <img src={img} alt={name} className="h-auto w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="mb-2 text-gray-500">{role}</p>
              <p className="mb-4 text-gray-700">{description}</p>
              <button className="w-full rounded-2xl bg-gray-200 py-2 font-semibold text-gray-800 hover:bg-gray-300">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
