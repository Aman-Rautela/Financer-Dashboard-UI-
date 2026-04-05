import { ArrowDownRight } from "lucide-react";

export default function TransactionTable({ theme }) {
  const tableData = [
    { id: "01", name: "Souvenirs", type: "Travel", expense: "$263.16", date: "2026-04-22" },
    { id: "02", name: "Books & Materials", type: "Education", expense: "$120.50", date: "2026-04-20" },
    { id: "03", name: "Doctor Visit", type: "Healthcare", expense: "$85.00", date: "2026-04-18" },
    { id: "04", name: "Metro Card", type: "Transport", expense: "$45.00", date: "2026-04-15" },
    { id: "05", name: "Electricity Bill", type: "Bills", expense: "$98.75", date: "2026-04-10" },
  ];

  return (
    <main>
      <div className={`w-full rounded-xl border transition-all duration-300
        ${theme === "dark"
          ? "bg-gray-900 border-gray-800 hover:border-gray-700 shadow-md shadow-black/40 hover:shadow-lg hover:shadow-black/50"
          : "bg-white border-slate-200 hover:border-slate-300 shadow-sm shadow-slate-200 hover:shadow-md hover:shadow-slate-300"
        }`}>
        <h2 className={`font-bold text-sm px-6 py-4 border-b
          ${theme === "dark" ? "text-neutral-200 border-gray-800" : "text-slate-700 border-slate-200"}`}>
          Recent Transactions
        </h2>
        <div className="flex flex-col px-2">
          {tableData.map((data) => (
            <div
              key={data.id}
              className={`flex items-center justify-between gap-3 px-4 py-3 border-b last:border-none mx-2 transition-colors duration-150
                ${theme === "dark"
                  ? "border-gray-800/60 hover:bg-gray-800/40"
                  : "border-slate-100 hover:bg-slate-50"
                }`}
            >
              <div className="flex items-center gap-3">
                <ArrowDownRight
                  size={15}
                  className={`w-8 h-8 p-1.5 rounded-lg shrink-0
                    ${theme === "dark" ? "bg-red-500/10 text-red-400" : "bg-red-50 text-red-500"}`}
                />
                <div className="flex flex-col gap-0.5">
                  <span className={`text-sm font-semibold ${theme === "dark" ? "text-neutral-200" : "text-slate-700"}`}>
                    {data.name}
                  </span>
                  <span className={`text-xs ${theme === "dark" ? "text-neutral-500" : "text-slate-400"}`}>
                    {data.type}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-0.5">
                <span className={`text-sm font-bold ${theme === "dark" ? "text-red-400" : "text-red-500"}`}>
                  -{data.expense}
                </span>
                <span className={`text-xs ${theme === "dark" ? "text-neutral-500" : "text-slate-400"}`}>
                  {data.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}