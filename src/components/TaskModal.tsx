import { useState } from "react";
import api from "../api/axios";

export default function TaskModal({ projectId, onClose, reload }: any) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");

  const saveTask = async () => {
   await api.post(`/projects/${projectId}/tasks`, {
  title,
  priority,
  status: "todo"
});


    reload();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6">
      
        <h3 className="text-xl font-semibold text-gray-800 mb-5">
          Create Task
        </h3>

        
        <input
          placeholder="Enter task title"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        
        <select
          onChange={(e) => setPriority(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-6
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="low">🟢 Low</option>
          <option value="medium">🟡 Medium</option>
          <option value="high">🔴 High</option>
        </select>

    
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            Close
          </button>

          <button
            onClick={saveTask}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}