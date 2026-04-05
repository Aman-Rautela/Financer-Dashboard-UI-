import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const barData = [
  { month: "Nov 25", income: 2200, expenses: 2100 },
  { month: "Dec 25", income: 2100, expenses: 1500 },
  { month: "Jan 26", income: 1200, expenses: 3200 },
  { month: "Feb 26", income: 7800, expenses: 1400 },
  { month: "Mar 26", income: 4200, expenses: 3000 },
  { month: "Apr 26", income: 1800, expenses: 2100 },
];

export default function BarGraph({ theme }) {
  const tooltipStyle = {
    borderRadius: "10px",
    border: theme === "dark" ? "1px solid #1f2937" : "1px solid #e2e8f0",
    backgroundColor: theme === "dark" ? "#111827" : "#ffffff",
    color: theme === "dark" ? "#e5e7eb" : "#1e293b",
    fontSize: "12px",
    boxShadow: theme === "dark" ? "0 4px 16px rgba(0,0,0,0.5)" : "0 4px 16px rgba(100,116,139,0.15)",
  };

  const axisStyle = {
    fontSize: 11,
    fill: theme === "dark" ? "#6b7280" : "#94a3b8",
  };

  return (
    <main className={`w-full flex flex-col gap-4 rounded-xl border px-6 py-6 transition-all duration-300
      ${theme === "dark"
        ? "bg-gray-900 border-gray-800 hover:border-gray-700 shadow-md shadow-black/40 hover:shadow-lg hover:shadow-black/50"
        : "bg-white border-slate-200 hover:border-slate-300 shadow-sm shadow-slate-200 hover:shadow-md hover:shadow-slate-300"
      }`}>
      <div className="flex items-center justify-between">
        <h2 className={`font-bold ${theme === "dark" ? "text-neutral-200" : "text-slate-700"}`}>
          Monthly Income vs Expenses
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm inline-block bg-emerald-500" />
            <span className={`text-xs ${theme === "dark" ? "text-neutral-400" : "text-slate-500"}`}>Income</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm inline-block bg-red-400" />
            <span className={`text-xs ${theme === "dark" ? "text-neutral-400" : "text-slate-500"}`}>Expenses</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={barData} barCategoryGap="30%" barGap={4}>
          <XAxis dataKey="month" tick={axisStyle} axisLine={false} tickLine={false} />
          <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={{ color: theme === "dark" ? "#9ca3af" : "#64748b" }}
            cursor={{ fill: theme === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)" }}
          />
          <Bar dataKey="income" fill="#10b981" radius={[4, 4, 0, 0]} />
          <Bar dataKey="expenses" fill="#f87171" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </main>
  );
}