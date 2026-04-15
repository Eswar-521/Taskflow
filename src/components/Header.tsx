import Notifications from "./Notifications";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow">

      <h1 className="text-xl font-semibold">
        Project Management
      </h1>

      
      <div className="flex items-center gap-4">

        
        <Notifications />
        <div className="text-sm">
          👤 User
        </div>

      </div>

    </div>
  );
}