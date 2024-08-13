import { Outlet } from "react-router-dom";
import DashboardNav from "../components/common/DashboardNav";

export default function DashboardLayout() {
  return (
    <main className="flex gap-6">
      <DashboardNav />
      <Outlet />
    </main>
  );
}
