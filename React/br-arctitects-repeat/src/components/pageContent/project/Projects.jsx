import { projectsData } from "../../../datas/data";
import ProjectCard from "./ProjectCard";
export default function Projects() {
  return (
    <div className="px-6 py-8">
      {/* Section heading */}
      <h2 className="mb-6 border-b border-gray-300 pb-4 text-2xl font-semibold">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projectsData.map((project) => (
          <ProjectCard key={project.id ?? project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
