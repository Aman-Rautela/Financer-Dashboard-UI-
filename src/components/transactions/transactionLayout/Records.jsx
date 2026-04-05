import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

// eslint-disable-next-line react-refresh/only-export-components
export const data = [
  { id: "01", date: "2026-04-22", name: "Souvenirs", category: "Travel", type: "Expenses", amount: "-$263.16" },
  { id: "02", date: "2026-04-19", name: "Books & Materials", category: "Education", type: "Expenses", amount: "-$342.00" },
  { id: "03", date: "2026-04-18", name: "Clothing Purchase", category: "Shopping", type: "Expenses", amount: "-$220.20" },
  { id: "04", date: "2026-04-17", name: "Phone Bill", category: "Bills & Utilities", type: "Expenses", amount: "-$433.92" },
  { id: "05", date: "2026-04-15", name: "Streaming Subscription", category: "Entertainment", type: "Expenses", amount: "-$70.28" },
  { id: "06", date: "2026-04-14", name: "Tutorial Subscription", category: "Education", type: "Expenses", amount: "-$78.97" },
  { id: "07", date: "2026-04-11", name: "Dental Checkup", category: "Healthcare", type: "Expenses", amount: "-$85.00" },
  { id: "08", date: "2026-04-10", name: "Monthly Salary", category: "Investment", type: "Income", amount: "+$3,591.00" },
  { id: "09", date: "2026-04-08", name: "Metro Card", category: "Transport", type: "Expenses", amount: "-$45.00" },
  { id: "10", date: "2026-04-05", name: "Freelance Payment", category: "Other Income", type: "Income", amount: "+$1,200.00" },
  { id: "11", date: "2026-04-03", name: "Flight Tickets", category: "Travel", type: "Expenses", amount: "-$520.00" },
  { id: "12", date: "2026-04-02", name: "Doctor Visit", category: "Healthcare", type: "Expenses", amount: "-$120.00" },
  { id: "13", date: "2026-03-30", name: "Electricity Bill", category: "Bills & Utilities", type: "Expenses", amount: "-$98.75" },
  { id: "14", date: "2026-03-28", name: "Side Project", category: "Other Income", type: "Income", amount: "+$2,333.00" },
  { id: "15", date: "2026-03-25", name: "Souvenirs", category: "Travel", type: "Expenses", amount: "-$180.50" },
  { id: "16", date: "2026-03-22", name: "Books & Materials", category: "Education", type: "Expenses", amount: "-$95.00" },
  { id: "17", date: "2026-03-20", name: "Bus Pass", category: "Transport", type: "Expenses", amount: "-$60.00" },
  { id: "18", date: "2026-03-18", name: "Netflix", category: "Entertainment", type: "Expenses", amount: "-$15.99" },
  { id: "19", date: "2026-03-15", name: "Cashback Reward", category: "Investment", type: "Income", amount: "+$1,601.00" },
  { id: "20", date: "2026-03-10", name: "Gym Membership", category: "Healthcare", type: "Expenses", amount: "-$45.00" },
];

export default function Records({ theme, data, sortBy, sortOrder, onSort }) {
  const SortIcons = ({ field }) => {
    if (sortBy !== field || sortOrder === "none")
      return <ArrowUpDown size={12} className={theme === "dark" ? "text-neutral-600" : "text-slate-400"} />;
    return sortOrder === "desc"
      ? <ArrowDown size={12} className="text-emerald-500" />
      : <ArrowUp size={12} className="text-emerald-500" />;
  };

  return (
    <div className={`rounded-xl mx-8 overflow-x-auto border transition-all duration-300
      ${theme === "dark"
        ? "bg-gray-900 border-gray-800 shadow-md shadow-black/40"
        : "bg-white border-slate-200 shadow-sm shadow-slate-200"
      }`}>
      <table className="w-full text-sm">
        <thead>
          <tr className={`border-b ${theme === "dark" ? "border-gray-800" : "border-slate-200"}`}>
            {[
              { label: "Date", key: "date", sortable: true, align: "left" },
              { label: "Description", key: null, align: "left" },
              { label: "Category", key: null, align: "left" },
              { label: "Type", key: null, align: "left" },
              { label: "Amount", key: "amount", sortable: true, align: "right" },
            ].map(({ label, key, sortable, align }) => (
              <th
                key={label}
                onClick={sortable ? () => onSort(key) : undefined}
                className={`py-3 px-6 font-medium text-xs uppercase tracking-wider whitespace-nowrap
                  text-${align}
                  ${sortable ? "cursor-pointer select-none" : ""}
                  ${theme === "dark" ? "text-neutral-500" : "text-slate-400"}`}
              >
                <span className="inline-flex items-center gap-1.5">
                  {label} {sortable && <SortIcons field={key} />}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className={`border-b last:border-none transition-colors duration-150
                ${theme === "dark"
                  ? "border-gray-800/60 hover:bg-gray-800/50"
                  : "border-slate-100 hover:bg-slate-50"
                }`}
            >
              <td className={`py-3 px-6 whitespace-nowrap text-sm ${theme === "dark" ? "text-neutral-400" : "text-slate-500"}`}>
                {row.date}
              </td>
              <td className={`py-3 px-6 whitespace-nowrap font-medium ${theme === "dark" ? "text-neutral-200" : "text-slate-800"}`}>
                {row.name}
              </td>
              <td className="py-3 px-6 whitespace-nowrap">
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium
                  ${theme === "dark" ? "bg-gray-800 text-neutral-400" : "bg-slate-100 text-slate-600"}`}>
                  {row.category}
                </span>
              </td>
              <td className="py-3 px-6 whitespace-nowrap">
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium
                  ${row.type === "Income"
                    ? theme === "dark" ? "bg-emerald-500/15 text-emerald-400" : "bg-emerald-50 text-emerald-700"
                    : theme === "dark" ? "bg-red-500/15 text-red-400" : "bg-red-50 text-red-600"
                  }`}>
                  {row.type}
                </span>
              </td>
              <td className={`py-3 px-6 text-right whitespace-nowrap font-semibold tabular-nums
                ${row.type === "Income" ? "text-emerald-500" : theme === "dark" ? "text-red-400" : "text-red-500"}`}>
                {row.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}