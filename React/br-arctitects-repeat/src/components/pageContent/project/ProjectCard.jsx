export default function ProjectCard({ img, title }) {
  return (
    <div className="group relative overflow-hidden">
      <img src={img} alt={title} className="w-full object-cover" />
      <div className="absolute top-0 left-0 bg-black/70 px-2 py-1 font-semibold text-white">
        {title}
      </div>
    </div>
  );
}
