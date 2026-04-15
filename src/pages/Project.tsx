import { useEffect, useState } from "react";
import api from "../api/axios";
import ProjectCard from "../components/ProjectCard";
import CreateProjectModal from "../components/CreateProjectModal";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      setError("");
      const res = await api.get("/projects");
      setProjects(res.data.projects);
    } catch (err) {
      setError("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white">


      
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">

        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Projects Dashboard
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Manage all your projects in one place
          </p>
        </div>

        <button
          onClick={() => setShow(true)}
          className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 rounded-xl shadow-md transition-all text-sm font-medium"
        >
          + New Project
        </button>

      </div>

      <div className="max-w-7xl mx-auto px-6 pb-12">

        {loading && (
          <div className="flex justify-center py-20">
            <div className="animate-pulse text-gray-400">
              Loading projects...
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-20 text-red-400">
            {error}
          </div>
        )}

        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-400 text-lg mb-4">
              No projects found 🚀
            </p>
            <button
              onClick={() => setShow(true)}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl shadow-md transition"
            >
              Create your first project
            </button>
          </div>
        )}

        {!loading && !error && projects.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p: any) => (
              <div
                key={p.id}
                className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg hover:scale-[1.02] hover:border-blue-500/40 transition-all"
              >
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        )}

      </div>

      {show && (
        <CreateProjectModal
          onClose={() => setShow(false)}
          reload={load}
        />
      )}

    </div>
  );
}