import { useEffect, useState } from "react";
import api from "../api/axios";

export default function TaskComments({ taskId }: any) {

  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await api.get(`/comments/${taskId}`);
    setComments(res.data.comments);
  };

  const add = async () => {
    await api.post(`/comments/${taskId}`, {
      comment: text
    });

    setText("");
    load();
  };

  return (
    <div className="mt-3">

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add comment"
        className="w-full border p-2 rounded mb-2"
      />

      <button
        onClick={add}
        className="text-sm bg-blue-500 text-white px-3 py-1 rounded"
      >
        Add
      </button>

      {comments.map((c: any) => (
        <div
          key={c.id}
          className="text-sm bg-gray-100 p-2 rounded mt-2"
        >
          {c.comment}
        </div>
      ))}

    </div>
  );
}