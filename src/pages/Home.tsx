import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white">

  
      <div className="flex justify-between items-center px-8 py-5 backdrop-blur-lg bg-white/5 border-b border-white/10 sticky top-0 z-50">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          TaskFlow
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 text-sm text-gray-300 hover:text-white transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="px-4 py-2 bg-blue-500/90 rounded-xl hover:bg-blue-600 text-sm shadow-md transition-all"
          >
            Get Started
          </button>
        </div>
      </div>

    
      <div className="flex flex-col items-center justify-center text-center px-6 pt-24">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Manage Your Projects
          <br />
          Like a Pro 🚀
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl text-lg">
          TaskFlow helps you organize tasks, track progress, and collaborate
          with your team in one powerful workspace.
        </p>

        <div className="flex gap-4 mt-10">
          <button
            onClick={() => navigate("/register")}
            className="px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 shadow-lg transition-all"
          >
            Start Free
          </button>

          <button
            onClick={() => navigate("/login")}
            className="px-6 py-3 border border-white/20 rounded-xl hover:border-white hover:bg-white/10 transition-all"
          >
            Login
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 px-6 md:px-12 mt-28">

        {[
          {
            title: "⚡ Fast Workflow",
            desc: "Create and manage projects in seconds with smooth UI.",
          },
          {
            title: "📊 Track Progress",
            desc: "Monitor tasks and project status easily.",
          },
          {
            title: "🤝 Team Collaboration",
            desc: "Work with your team efficiently in one place.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-105 hover:border-blue-500/40 transition-all duration-300 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}

      </div>

      
      <div className="text-center mt-28 pb-20 px-6">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Ready to boost your productivity?
        </h2>

        <button
          onClick={() => navigate("/register")}
          className="mt-8 px-8 py-3 bg-green-500 rounded-xl hover:bg-green-600 shadow-lg transition-all"
        >
          Create Account
        </button>
      </div>

    </div>
  );
}