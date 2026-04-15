import { useState } from "react";
import api from "../api/axios";

export default function CreateProjectModal({ onClose, reload }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#3b82f6");
  const [dueDate, setDueDate] = useState("");
  const [icon, setIcon] = useState("🚀");

  const create = async () => {
    await api.post("/projects", {
      name,
      description,
      color,
      dueDate,
      icon
    });

    reload();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      
      <div className="bg-gray-900 text-white p-6 rounded-2xl w-full max-w-md shadow-xl border border-white/10">

        <h3 className="text-xl font-semibold mb-4">
          Create Project
        </h3>

        {/* Project Name */}
        <input
          placeholder="Project Name"
          className="w-full p-3 rounded-lg bg-white/5 border border-white/10 mb-3 outline-none focus:border-blue-500"
          onChange={(e) => setName(e.target.value)}
        />

        {/* Description */}
        <textarea
          placeholder="Description"
          className="w-full p-3 rounded-lg bg-white/5 border border-white/10 mb-3 outline-none focus:border-blue-500"
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Icon */}
        <div className="mb-3">
          <label className="text-sm text-gray-400">Project Icon</label>
          <select
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10"
            onChange={(e) => setIcon(e.target.value)}
          >
            <option>🚀</option>
            <option>📊</option>
            <option>💻</option>
            <option>📱</option>
            <option>🎯</option>
          </select>
        </div>

    
        <div className="mb-3">
          <label className="text-sm text-gray-400">Project Color</label>
          <input
            type="color"
            className="w-full h-10 rounded-lg bg-white/5 border border-white/10"
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

    
        <div className="mb-4">
          <label className="text-sm text-gray-400">Due Date</label>
          <input
            type="date"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10"
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

    
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={create}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
          >
            Create
          </button>
        </div>

      </div>
    </div>
  );
}