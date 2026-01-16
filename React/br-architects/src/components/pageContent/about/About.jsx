const teamData = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    img: "https://www.w3schools.com/w3images/team2.jpg",
    description:
      "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
  },
  {
    name: "Jane Doe",
    role: "Architect",
    img: "https://www.w3schools.com/w3images/team1.jpg",
    description:
      "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
  },
  {
    name: "Mike Ross",
    role: "Architect",
    img: "https://www.w3schools.com/w3images/team3.jpg",
    description:
      "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
  },
  {
    name: "Dan Star",
    role: "Architect",
    img: "https://www.w3schools.com/w3images/team3.jpg",
    description:
      "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
  },
];

const About = () => {
  return (
    <div id="about" className="px-6 py-8">
      {/* Section heading */}
      <h2 className="pb-4 mb-6 border-b border-gray-300 text-2xl font-semibold">
        About
      </h2>

      {/* About text */}
      <p className="mb-8 text-gray-700 leading-relaxed">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamData.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-700 mb-4">{member.description}</p>
              <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
