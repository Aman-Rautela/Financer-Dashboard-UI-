import {
  LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer,
} from "recharts";

export default function BalanceTrend({ theme }) {
  const lineData = [
    { month: "Nov 25", balance: 0 },
    { month: "Dec 25", balance: 500 },
    { month: "Jan 26", balance: -1500 },
    { month: "Feb 26", balance: 3000 },
    { month: "Mar 26", balance: 6000 },
    { month: "Apr 26", balance: 5800 },
  ];

  const pieData = [
    { name: "Travel", value: 2500 },
    { name: "Education", value: 2100 },
    { name: "Healthcare", value: 1900 },
    { name: "Transport", value: 1800 },
    { name: "Bills", value: 1600 },
    { name: "Entertainment", value: 1500 },
  ];

  const COLORS = [
    "#10b981", "#34d399", "#6ee7b7",
    "#059669", "#047857", "#065f46",
  ];

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

  const cardClass = `w-full md:flex-1 md:w-1/2 rounded-xl p-5 border transition-all duration-300
    ${theme === "dark"
      ? "bg-gray-900 border-gray-800 hover:border-gray-700 shadow-md shadow-black/40 hover:shadow-lg hover:shadow-black/50"
      : "bg-white border-slate-200 hover:border-slate-300 shadow-sm shadow-slate-200 hover:shadow-md hover:shadow-slate-300"
    }`;

  const headingClass = `font-bold mb-5 ${theme === "dark" ? "text-neutral-200" : "text-slate-700"}`;

  return (
    <main className="flex flex-col md:flex-row gap-5">
      <div className={cardClass}>
        <h3 className={headingClass}>Balance Trend</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis dataKey="month" tick={axisStyle} axisLine={false} tickLine={false} />
            <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={tooltipStyle}
              labelStyle={{ color: theme === "dark" ? "#9ca3af" : "#64748b" }}
              cursor={{ stroke: theme === "dark" ? "#374151" : "#e2e8f0" }}
            />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ fill: "#10b981", strokeWidth: 0, r: 3 }}
              activeDot={{ r: 5, fill: "#10b981" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className={cardClass}>
        <h2 className={headingClass}>Spending Breakdown</h2>
        <div className="flex flex-col sm:flex-row items-center">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={45}
                outerRadius={70}
                dataKey="value"
                stroke="none"
                paddingAngle={3}
              >
                {pieData.map((_, idx) => (
                  <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>

          <div className="flex flex-row flex-wrap sm:flex-col gap-2.5 text-sm justify-center sm:justify-start">
            {pieData.map((data, idx) => (
              <div key={idx} className="flex items-center justify-between gap-3 sm:gap-5">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full inline-block shrink-0"
                    style={{ backgroundColor: COLORS[idx] }}
                  />
                  <span className={`text-xs ${theme === "dark" ? "text-neutral-400" : "text-slate-500"}`}>
                    {data.name}
                  </span>
                </div>
                <span className={`font-semibold text-xs ${theme === "dark" ? "text-neutral-200" : "text-slate-700"}`}>
                  ${data.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}