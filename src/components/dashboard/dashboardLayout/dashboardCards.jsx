import { ArrowUpRight, ArrowDownRight, Wallet } from "lucide-react";

export default function DashboardCards({ theme }) {
  const cards = [
    {
      id: "01",
      title: "Total Balance",
      balance: "$5,581",
      icon: <Wallet size={18} />,
      color: theme === "dark" ? "text-emerald-400 bg-emerald-500/15" : "text-emerald-700 bg-emerald-100",
    },
    {
      id: "02",
      title: "Total Income",
      balance: "$19,581",
      icon: <ArrowUpRight size={18} />,
      color: theme === "dark" ? "text-emerald-400 bg-emerald-500/15" : "text-emerald-700 bg-emerald-100",
    },
    {
      id: "03",
      title: "Total Expenses",
      balance: "$13,581",
      icon: <ArrowDownRight size={18} />,
      color: theme === "dark" ? "text-red-400 bg-red-500/15" : "text-red-600 bg-red-50",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {cards.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col justify-between flex-1 min-w-[140px] h-28 p-5 rounded-2xl border transition-all duration-300
            ${theme === "dark"
              ? "bg-gray-900 border-gray-800 hover:border-gray-700 shadow-md shadow-black/40 hover:shadow-lg hover:shadow-black/50"
              : "bg-white border-slate-200 hover:border-slate-300 shadow-sm shadow-slate-200 hover:shadow-md hover:shadow-slate-300"
            }`}
        >
          <div className="flex justify-between items-center">
            <span className={`text-sm ${theme === "dark" ? "text-neutral-400" : "text-slate-500"}`}>
              {item.title}
            </span>
            <span className={`w-8 h-8 flex items-center justify-center rounded-lg ${item.color}`}>
              {item.icon}
            </span>
          </div>
          <span className={`text-2xl font-bold ${theme === "dark" ? "text-neutral-100" : "text-slate-800"}`}>
            {item.balance}
          </span>
        </div>
      ))}
    </div>
  );
}