import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Notifications from "./Notifications";

export default function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        

        <h2
          onClick={() => navigate("/projects")}
          className="text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
        >
          TaskFlow
        </h2>

      
        <div className="flex items-center gap-3">

      
          <Notifications />

          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-white/10 hover:bg-blue-500/80 hover:text-white transition-all duration-300 shadow-sm"
          >
            Dashboard
          </button>
          
          <button
            onClick={() => navigate("/projects")}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-white/10 hover:bg-blue-500/80 hover:text-white transition-all duration-300 shadow-sm"
          >
            Projects
          </button>

          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-red-500/90 hover:bg-red-600 text-white transition-all duration-300 shadow-md"
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
}