import { ArrowUpRight } from "lucide-react";

export default function Tables({ theme }) {
  const categoryData = [
    { id: "01", title: "Travel", expense: "$2,532", percent: "18.4%" },
    { id: "02", title: "Education", expense: "$2,032", percent: "15.1%" },
    { id: "03", title: "Healthcare", expense: "$1,532", percent: "14.1%" },
    { id: "04", title: "Transport", expense: "$1,032", percent: "12.7%" },
    { id: "05", title: "Bills & Utilities", expense: "$1,102", percent: "11.7%" },
    { id: "06", title: "Entertainment", expense: "$1,142", percent: "10.7%" },
  ];

  const transactionData = [
    { id: "1", title: "Monthly Salary", sub: "Salary", date: "2026-02-25", value: "3,591" },
    { id: "2", title: "Side Project", sub: "Other Income", date: "2026-02-21", value: "2,333" },
    { id: "3", title: "Gift Received", sub: "Other Income", date: "2026-03-10", value: "2,281" },
    { id: "4", title: "Cashback Reward", sub: "Other Income", date: "2026-02-27", value: "1,601" },
    { id: "5", title: "Interest Income", sub: "Investment", date: "2026-03-06", value: "1,269" },
  ];

  const cardClass = `rounded-xl border transition-all duration-300
    ${theme === "dark"
      ? "bg-gray-900 border-gray-800 hover:border-gray-700 shadow-md shadow-black/40 hover:shadow-lg hover:shadow-black/50"
      : "bg-white border-slate-200 hover:border-slate-300 shadow-sm shadow-slate-200 hover:shadow-md hover:shadow-slate-300"
    }`;

  const labelClass = `text-xs ${theme === "dark" ? "text-neutral-500" : "text-slate-400"}`;
  const dividerClass = `border-b ${theme === "dark" ? "border-gray-800" : "border-slate-100"}`;

  return (
    <main className="flex flex-col md:flex-row gap-4">
       <div className={`w-full md:w-1/2 p-5 flex flex-col gap-4 ${cardClass}`}>
        <span className={`font-bold text-base ${theme === "dark" ? "text-neutral-200" : "text-slate-700"}`}>
          Category Distribution
        </span>
        <div className="flex flex-col gap-4">
          {categoryData.map((data) => (
            <div key={data.id} className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className={labelClass}>{data.title}</span>
                <div className="flex gap-2 items-center">
                  <span className={`text-sm font-medium ${theme === "dark" ? "text-neutral-200" : "text-slate-700"}`}>
                    {data.expense}
                  </span>
                  <span className={`text-[11px] px-2 py-0.5 rounded-md font-medium
                    ${theme === "dark" ? "bg-gray-800 text-neutral-400" : "bg-slate-100 text-slate-500"}`}>
                    {data.percent}
                  </span>
                </div>
              </div>
              <div className={`w-full h-1.5 rounded-full ${theme === "dark" ? "bg-gray-800" : "bg-slate-100"}`}>
                <div
                  style={{ width: data.percent }}
                  className="bg-emerald-500 rounded-full h-1.5"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

       <div className={`w-full md:w-1/2 flex flex-col ${cardClass}`}>
        <span className={`font-bold text-base px-6 py-5 border-b
          ${theme === "dark" ? "text-neutral-200 border-gray-800" : "text-slate-700 border-slate-200"}`}>
          Largest Transactions
        </span>
        <div className="flex flex-col">
          {transactionData.map((data) => (
            <div
              key={data.id}
              className={`flex items-center gap-3 px-4 md:px-6 py-4 last:border-none transition-colors duration-150 ${dividerClass}
                ${theme === "dark" ? "hover:bg-gray-800/40" : "hover:bg-slate-50"}`}
            >
              <span className={labelClass}>#{data.id}</span>
              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-1">
                  <span className={`font-semibold text-sm ${theme === "dark" ? "text-neutral-200" : "text-slate-700"}`}>
                    {data.title}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-md
                      ${theme === "dark" ? "bg-gray-800 text-neutral-400" : "bg-slate-100 text-slate-500"}`}>
                      {data.sub}
                    </span>
                    <span className={`text-xs ${labelClass}`}>{data.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <ArrowUpRight size={14} className="text-emerald-500" />
                  <span className="font-semibold text-sm text-emerald-500">${data.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}