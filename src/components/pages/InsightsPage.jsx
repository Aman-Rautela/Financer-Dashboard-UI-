import InsightDashboard from "../insights/InsightDashboard";

export default function InsightsPage({ theme }) {
  return (
    <main className={`m-2 md:m-4 rounded-2xl border
      ${theme === "dark" ? "bg-gray-900 border-gray-800" : "bg-white border-slate-200"}`}>
      <InsightDashboard theme={theme} />
    </main>
  );
}