import { useEffect, useState } from "react";
import api from "../api/axios";

export default function ActivityTimeline({ projectId }: any) {

  const [activity, setActivity] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await api.get(`/activity/${projectId}`);
    setActivity(res.data.activity);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">

      <h2 className="font-semibold mb-3">
        Activity Timeline
      </h2>

      {activity.map((a: any) => (
        <div
          key={a.id}
          className="border-l-2 border-blue-500 pl-3 mb-3"
        >
          <p className="text-sm">{a.message}</p>

          <span className="text-xs text-gray-400">
            {new Date(a.created_at).toLocaleString()}
          </span>

        </div>
      ))}

    </div>
  );
}