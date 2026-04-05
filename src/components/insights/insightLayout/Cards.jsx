import { DollarSign, PiggyBank, ShoppingBag, TrendingDown } from "lucide-react";

export default function Cards({ theme }) {
  const cardData = [
    {
      id: "01",
      title: "Top Spending",
      value: "Travel",
      sub: "$2,532",
      icon: <ShoppingBag size={14} />,
      accent: theme === "dark" ? "bg-amber-500/15 text-amber-400" : "bg-amber-50 text-amber-600",
    },
    {
      id: "02",
      title: "Savings Rate",
      value: "28.8%",
      sub: "of total income saved",
      icon: <PiggyBank size={14} />,
      accent: theme === "dark" ? "bg-emerald-500/15 text-emerald-400" : "bg-emerald-50 text-emerald-600",
    },
    {
      id: "03",
      title: "Avg. Expense",
      value: "$238",
      sub: "per transaction",
      icon: <DollarSign size={14} />,
      accent: theme === "dark" ? "bg-blue-500/15 text-blue-400" : "bg-blue-50 text-blue-600",
    },
    {
      id: "04",
      title: "Monthly Change",
      value: "-29.2%",
      sub: "expenses decreased",
      icon: <TrendingDown size={14} />,
      accent: theme === "dark" ? "bg-emerald-500/15 text-emerald-400" : "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <div className="flex flex-wrap gap-3 w-full">
      {cardData.map((data) => (
        <div
          key={data.id}
          className={`flex-1 min-w-[140px] rounded-xl border h-36 px-4 py-4 flex flex-col justify-between transition-all duration-300
            ${theme === "dark"
              ? "bg-gray-900 border-gray-800 hover:border-gray-700 shadow-md shadow-black/40 hover:shadow-lg hover:shadow-black/50"
              : "bg-white border-slate-200 hover:border-slate-300 shadow-sm shadow-slate-200 hover:shadow-md hover:shadow-slate-300"
            }`}
        >
          <div className="flex items-center gap-2">
            <span className={`w-8 h-8 p-2 rounded-lg shrink-0 flex items-center justify-center ${data.accent}`}>
              {data.icon}
            </span>
            <span className={`text-sm ${theme === "dark" ? "text-neutral-400" : "text-slate-500"}`}>
              {data.title}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-xl font-bold ${theme === "dark" ? "text-neutral-100" : "text-slate-800"}`}>
              {data.value}
            </span>
            <span className={`text-xs ${theme === "dark" ? "text-neutral-500" : "text-slate-400"}`}>
              {data.sub}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}