import { ChevronDown, X } from "lucide-react";
import { typesData } from "./SearchBar";
import { categoriesData } from "./SearchBar";

export default function Form({
  theme, onClose, onTypeChange, onAmountChange, onCategoryChange,
  onDescriptionChange, onDateChange, selectType, amount,
  selectCategory, description, selectDate, onSubmit
}) {
  const inputClass = `w-full px-4 py-2 rounded-lg border text-sm outline-none transition-all duration-200
    ${theme === "dark"
      ? "bg-gray-900 text-neutral-200 border-gray-700 placeholder:text-neutral-600 focus:border-emerald-600"
      : "bg-slate-50 text-slate-800 border-slate-300 placeholder:text-slate-400 focus:border-emerald-500"
    } focus:ring-1 focus:ring-emerald-500/30`;

  const selectClass = `w-full appearance-none border rounded-lg px-4 py-2 cursor-pointer text-sm outline-none transition-colors duration-200
    ${theme === "dark"
      ? "bg-gray-900 text-neutral-200 border-gray-700"
      : "bg-slate-50 text-slate-800 border-slate-300"
    }`;

  return (
    <main className={`flex flex-col w-96 px-8 py-6 rounded-2xl border shadow-2xl
      ${theme === "dark"
        ? "bg-gray-900 border-gray-700 text-neutral-200"
        : "bg-white border-slate-200 text-slate-800"
      }`}>
      <form className="w-full flex flex-col gap-5" onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          id: Date.now().toString(),
          type: selectType,
          amount: selectType === "Income" ? `+$${amount}` : `-$${amount}`,
          category: selectCategory,
          name: description,
          date: selectDate,
        });
      }}>
        <div className={`flex items-center justify-between pb-3 border-b
          ${theme === "dark" ? "border-gray-800" : "border-slate-200"}`}>
          <div className="flex flex-col gap-0.5">
            <h2 className="font-bold text-lg">Add Transaction</h2>
            <p className={`text-sm ${theme === "dark" ? "text-neutral-500" : "text-slate-400"}`}>
              Fill in the details to add a new transaction.
            </p>
          </div>
          <span
            onClick={() => onClose(false)}
            className={`cursor-pointer transition-colors duration-200
              ${theme === "dark" ? "text-neutral-500 hover:text-red-400" : "text-slate-400 hover:text-red-500"}`}
          >
            <X size={18} />
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex flex-col gap-1.5 flex-1">
              <label className={`text-xs font-medium ${theme === "dark" ? "text-neutral-400" : "text-slate-500"}`}>
                Type
              </label>
              <div className="relative">
                <select className={selectClass} onChange={(e) => onTypeChange(e.target.value)}>
                  {typesData.slice(1).map((data) => (
                    <option value={data.value} key={data.id}>{data.value}</option>
                  ))}
                </select>
                <ChevronDown size={13} className={`absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none
                  ${theme === "dark" ? "text-neutral-500" : "text-slate-400"}`} />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
              <label className={`text-xs font-medium ${theme === "dark" ? "text-neutral-400" : "text-slate-500"}`}>
                Amount ($)
              </label>
              <input type="text" placeholder="0.00" className={inputClass}
                onChange={(e) => onAmountChange(e.target.value)} />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className={`text-xs font-medium ${theme === "dark" ? "text-neutral-400" : "text-slate-500"}`}>
              Category
            </label>
            <div className="relative">
              <select className={selectClass} defaultValue="allCategory"
                onChange={(e) => onCategoryChange(e.target.value)}>
                <option value="allCategory" hidden>— Select Category —</option>
                {categoriesData.slice(1).map((data) => (
                  <option value={data.value} key={data.id}>{data.value}</option>
                ))}
              </select>
              <ChevronDown size={13} className={`absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none
                ${theme === "dark" ? "text-neutral-500" : "text-slate-400"}`} />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className={`text-xs font-medium ${theme === "dark" ? "text-neutral-400" : "text-slate-500"}`}>
              Description
            </label>
            <input type="text" placeholder="Transaction description..." className={inputClass}
              onChange={(e) => onDescriptionChange(e.target.value)} />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className={`text-xs font-medium ${theme === "dark" ? "text-neutral-400" : "text-slate-500"}`}>
              Date
            </label>
            <input type="date" className={inputClass} onChange={(e) => onDateChange(e.target.value)} />
          </div>
        </div>

        <div className="flex justify-end items-center gap-3 pt-1">
          <button
            type="button"
            onClick={() => onClose(false)}
            className={`px-4 py-2 rounded-lg border text-sm cursor-pointer transition-colors duration-200
              ${theme === "dark"
                ? "border-gray-700 text-neutral-400 hover:bg-gray-800 hover:text-neutral-200"
                : "border-slate-300 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
              }`}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors duration-200
              ${theme === "dark"
                ? "bg-emerald-600 text-white hover:bg-emerald-500"
                : "bg-emerald-600 text-white hover:bg-emerald-700"
              }`}
          >
            Add Transaction
          </button>
        </div>
      </form>
    </main>
  );
}