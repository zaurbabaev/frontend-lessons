const projectsData = [
  { title: "Summer", img: "https://www.w3schools.com/w3images/house5.jpg" },
  { title: "Brick House", img: "https://www.w3schools.com/w3images/house2.jpg" },
  { title: "Renovated", img: "https://www.w3schools.com/w3images/house3.jpg" },
  { title: "Barn House", img: "https://www.w3schools.com/w3images/house4.jpg" },
  { title: "Summer", img: "https://www.w3schools.com/w3images/house3.jpg" },
  { title: "Brick House", img: "https://www.w3schools.com/w3images/house4.jpg" },
  { title: "Renovated", img: "https://www.w3schools.com/w3images/house5.jpg" },
  { title: "Barn House", img: "https://www.w3schools.com/w3images/house3.jpg" },
];

const Projects = () => {
  return (
    <div id="projects" className="px-6 py-8">
      {/* Section heading */}
      <h2 className="pb-4 mb-6 border-b border-gray-300 text-2xl font-semibold">
        Projects
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projectsData.map((project, index) => (
          <div key={index} className="relative group overflow-hidden">
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-auto object-cover"
            />

            {/* Overlay title */}
            <div className="absolute top-0 left-0 bg-black bg-opacity-70 text-white px-2 py-1 font-semibold">
              {project.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
