import { useEffect, useState } from "react";
import api from "../api/axios";

export default function ProjectMembers({ projectId }: any) {
  const [members, setMembers] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await api.get(`/members/${projectId}`);
    setMembers(res.data.members);
  };

  const add = async () => {
    await api.post(`/members/${projectId}`, {
      userId
    });

    load();
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <h3 className="font-semibold mb-3">
        Team Members
      </h3>

      <div className="flex gap-2 mb-4">
        <input
          placeholder="User Id"
          onChange={(e) => setUserId(e.target.value)}
          className="border p-2 rounded"
        />

        <button
          onClick={add}
          className="bg-blue-500 text-white px-3 py-2 rounded"
        >
          Add
        </button>
      </div>

      {members.map((m: any) => (
        <div key={m.id} className="border-b py-2">
          User: {m.user_id} ({m.role})
        </div>
      ))}
    </div>
  );
}