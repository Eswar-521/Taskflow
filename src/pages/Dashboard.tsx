import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Dashboard() {
  const [data, setData] = useState({
    projects: 0,
    tasks: 0,
    todo: 0,
    progress: 0,
    done: 0,
    recent: []
  });

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await api.get("/dashboard");
    setData(res.data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Dashboard
      </h2>

      
      <div className="grid grid-cols-5 gap-4 mb-8">

        <Card title="Projects" value={data.projects} />
        <Card title="Tasks" value={data.tasks} />
        <Card title="Todo" value={data.todo} />
        <Card title="Progress" value={data.progress} />
        <Card title="Done" value={data.done} />

      </div>

    
      <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-5 rounded-xl shadow">
        <h3 className="font-semibold mb-3">
          Recent Tasks
        </h3>

        {data.recent.map((task: any) => (
          <div
            key={task.id}
            className="border-b border-white/10 py-2"
          >
            <h4>{task.title}</h4>
            <p className="text-sm text-gray-400">
              {task.status}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

function Card({ title, value }: any) {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-4 rounded-xl shadow">
      <h4 className="text-gray-400 text-sm">
        {title}
      </h4>
      <p className="text-2xl font-semibold">
        {value}
      </p>
    </div>
  );
}