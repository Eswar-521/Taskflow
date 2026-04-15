import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Notifications() {

  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await api.get("/notifications");
    setData(res.data.notifications);
  };

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="text-xl"
      >
        🔔
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg p-3">

          <h3 className="font-semibold mb-2">
            Notifications
          </h3>

          {data.map((n: any) => (
            <div
              key={n.id}
              className="text-sm border-b py-2"
            >
              {n.message}
            </div>
          ))}

        </div>
      )}

    </div>
  );
}