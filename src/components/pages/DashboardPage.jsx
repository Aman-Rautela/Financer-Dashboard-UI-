import ViewerDashboard from "../dashboard/viewerDashboard";

export default function DashboardPage({ theme }) {
  return (
    <main className={`m-2 md:m-4 rounded-2xl border
      ${theme === "dark" ? "bg-gray-900 border-gray-800" : "bg-white border-slate-200"}`}>
      <ViewerDashboard theme={theme} />
    </main>
  );
}