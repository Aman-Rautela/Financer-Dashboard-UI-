import { TrendingUp, TrendingDown, Wallet } from "lucide-react";

export default function StatsBar({ theme, data }) {
  const totalIncome = data
    .filter((r) => r.type === "Income")
    .reduce((sum, r) => sum + parseFloat(r.amount.replace(/[^0-9.]/g, "")), 0);

  const totalExpenses = data
    .filter((r) => r.type === "Expenses")
    .reduce((sum, r) => sum + parseFloat(r.amount.replace(/[^0-9.]/g, "")), 0);

  const net = totalIncome - totalExpenses;

  const stats = [
    {
      id: "01",
      label: "Total Income",
      value: `+$${totalIncome.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      icon: <TrendingUp size={15} />,
      color: theme === "dark"
        ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/20"
        : "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      id: "02",
      label: "Total Expenses",
      value: `-$${totalExpenses.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      icon: <TrendingDown size={15} />,
      color: theme === "dark"
        ? "bg-red-500/15 text-red-400 border-red-500/20"
        : "bg-red-50 text-red-600 border-red-200",
    },
    {
      id: "03",
      label: "Net Balance",
      value: `${net >= 0 ? "+" : "-"}$${Math.abs(net).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      icon: <Wallet size={15} />,
      color: net >= 0
        ? theme === "dark"
          ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/20"
          : "bg-emerald-50 text-emerald-700 border-emerald-200"
        : theme === "dark"
          ? "bg-red-500/15 text-red-400 border-red-500/20"
          : "bg-red-50 text-red-600 border-red-200",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 px-4 md:px-8">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex items-center justify-between px-5 py-3.5 rounded-xl border ${stat.color}`}
        >
          <div className="flex flex-col gap-0.5">
            <span className="text-xs opacity-70">{stat.label}</span>
            <span className="text-lg font-bold tabular-nums">{stat.value}</span>
          </div>
          <span className="opacity-60">{stat.icon}</span>
        </div>
      ))}
    </div>
  );
}