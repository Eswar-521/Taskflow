import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Layout() {
  const { token } = useAuth();

  return (
    <>
      {token && <Navbar />}
      <Outlet />
    </>
  );
}