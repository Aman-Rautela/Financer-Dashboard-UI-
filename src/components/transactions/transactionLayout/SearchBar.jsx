import { ChevronDown, Search } from "lucide-react";

export const typesData = [
  { id: "1", value: "All Types" },
  { id: "2", value: "Income" },
  { id: "3", value: "Expenses" },
];

export const categoriesData = [
  { id: "1", value: "All Categories" },
  { id: "2", value: "Travel" },
  { id: "3", value: "Education" },
  { id: "4", value: "Healthcare" },
  { id: "5", value: "Transport" },
  { id: "6", value: "Bills & Utilities" },
  { id: "7", value: "Entertainment" },
  { id: "8", value: "Shopping" },
  { id: "9", value: "Investment" },
  { id: "10", value: "Other Income" },
];

export default function SearchBar({ theme, searched, onSearched, typed, onTyped, categories, onCategories }) {
  const selectClass = `appearance-none border rounded-lg px-3 md:px-4 py-2 pr-8 cursor-pointer text-sm outline-none transition-colors duration-200 w-full
    ${theme === "dark"
      ? "bg-gray-900 text-neutral-200 border-gray-700 hover:border-gray-600"
      : "bg-white text-slate-800 border-slate-300 hover:border-slate-400"
    }`;

  return (
    <div className={`border rounded-xl px-4 md:px-6 py-4 mx-4 md:mx-8 transition-all duration-300
      ${theme === "dark"
        ? "bg-gray-900 border-gray-800 shadow-md shadow-black/40"
        : "bg-white border-slate-200 shadow-sm shadow-slate-200"
      }`}>
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">

        {/* Search input */}
        <div className="w-full md:w-3/6 relative">
          <Search size={15} className={`absolute top-1/2 -translate-y-1/2 left-3
            ${theme === "dark" ? "text-neutral-500" : "text-slate-400"}`} />
          <input
            value={searched}
            type="text"
            placeholder="Search transactions..."
            onChange={(e) => onSearched(e.target.value)}
            className={`w-full pl-9 pr-4 py-2 rounded-lg border text-sm outline-none transition-all duration-200
              ${theme === "dark"
                ? "bg-gray-800 text-neutral-200 border-gray-700 placeholder:text-neutral-600 focus:border-emerald-600"
                : "bg-slate-50 text-slate-800 border-slate-300 placeholder:text-slate-400 focus:border-emerald-500"
              } focus:ring-1 focus:ring-emerald-500/30`}
          />
        </div>

        {/* Filters */}
        <div className="w-full md:w-3/6 flex items-center gap-3">
          <div className="relative flex-1">
            <select value={typed} onChange={(e) => onTyped(e.target.value)} className={selectClass}>
              {typesData.map((data) => (
                <option value={data.value} key={data.id}>{data.value}</option>
              ))}
            </select>
            <ChevronDown size={13} className={`absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none
              ${theme === "dark" ? "text-neutral-500" : "text-slate-400"}`} />
          </div>
          <div className="relative flex-1">
            <select value={categories} onChange={(e) => onCategories(e.target.value)} className={selectClass}>
              {categoriesData.map((data) => (
                <option value={data.value} key={data.id}>{data.value}</option>
              ))}
            </select>
            <ChevronDown size={13} className={`absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none
              ${theme === "dark" ? "text-neutral-500" : "text-slate-400"}`} />
          </div>
        </div>

      </div>
    </div>
  );
}