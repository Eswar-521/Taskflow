import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import TaskModal from "../components/TaskModal";
import ProjectMembers from "../components/ProjectMembers";
import TaskComments from "../components/TaskComments";
import ActivityTimeline from "../components/ActivityTimeline";


export default function ProjectDetails() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await api.get(`/projects/${id}/tasks`);
    setTasks(res.data.tasks);
  };

  const updateStatus = async (taskId: number, status: string) => {
    await api.patch(`/task/${taskId}`, { status });
    load();
  };

  const columns = {
    todo: tasks.filter((t: any) => t.status === "todo"),
    progress: tasks.filter((t: any) => t.status === "progress"),
    done: tasks.filter((t: any) => t.status === "done"),
  };

  return (
    <div className="p-6">

    
      <ProjectMembers projectId={id} />


      <div className="flex justify-between mb-6 mt-6">
        <h2 className="text-2xl font-semibold">Tasks</h2>

        <button
          onClick={() => setShow(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          + Add Task
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">

        {Object.entries(columns).map(([key, col]: any) => (
          <div
            key={key}
            className="bg-gray-100 p-4 rounded-xl min-h-[400px]"
          >

            <h3 className="font-semibold mb-4 capitalize">
              {key}
            </h3>

            {col.map((task: any) => (
              <div
                key={task.id}
                className="bg-white p-4 rounded-xl shadow mb-3"
              >
                <h3 className="font-semibold">
                  {task.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Priority: {task.priority}
                </p>

                <div className="flex gap-2 mt-3 flex-wrap">

                  {key !== "todo" && (
                    <button
                      onClick={() => updateStatus(task.id, "todo")}
                      className="text-xs bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                    >
                      Todo
                    </button>
                  )}

                  {key !== "progress" && (
                    <button
                      onClick={() => updateStatus(task.id, "progress")}
                      className="text-xs bg-yellow-200 px-2 py-1 rounded hover:bg-yellow-300"
                    >
                      Progress
                    </button>
                  )}

                  {key !== "done" && (
                    <button
                      onClick={() => updateStatus(task.id, "done")}
                      className="text-xs bg-green-200 px-2 py-1 rounded hover:bg-green-300"
                    >
                      Done
                    </button>
                  )}

                </div>

          
                <TaskComments taskId={task.id} />

              </div>
            ))}

          </div>
        ))}

      </div>


      {show && (
        <TaskModal
          projectId={id}
          reload={load}
          onClose={() => setShow(false)}
        />
      )}

    </div>
  );
}