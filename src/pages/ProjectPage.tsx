
import { useEffect, useState } from "react";
import api from "../api/axios";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data.projects);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />

      <h2 style={{ padding: "20px" }}>Projects</h2>

      <div className="project-grid">
        {projects.map((p: any) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </>
  );
}