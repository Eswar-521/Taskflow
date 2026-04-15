// src/components/ProjectCard.tsx
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }: any) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${project.id}`)}
      className="cursor-pointer bg-white border border-gray-200 rounded-2xl p-5 shadow-sm
                 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">

        <div className="flex items-center gap-2">
          
          {/* Icon */}
          <span className="text-2xl">
            {project.icon || "🚀"}
          </span>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-800">
            {project.name}
          </h3>

        </div>

        {/* Color */}
        <div
          className="w-4 h-4 rounded-full"
          style={{ background: project.color || "#3b82f6" }}
        />
        
      </div>

  
      <p className="text-gray-500 text-sm line-clamp-2">
        {project.description || "No description"}
      </p>

  
      <div className="mt-4 flex justify-between items-center">
        
        {project.dueDate && (
          <span className="text-xs text-gray-400">
            📅 {project.dueDate}
          </span>
        )}

        <span className="text-xs text-blue-500 font-medium">
          View Details →
        </span>

      </div>

    </div>
  );
}