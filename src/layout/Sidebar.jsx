export default function Sidebar({ theme, activePage, onActivePage }) {
  return (
    <aside className={`flex flex-col w-52 md:w-56 h-[calc(100%-1rem)] justify-between py-8 px-4 rounded-2xl mx-2 border transition-all duration-300
      ${theme === "dark"
        ? "bg-gray-900 border-gray-800 text-neutral-200 shadow-md shadow-black/40"
        : "bg-white border-slate-200 text-slate-700 shadow-sm shadow-slate-200"
      }`}>
      <div className="flex flex-col gap-1">
        {["Dashboard", "Transactions", "Insights"].map((item) => (
          <span
            key={item}
            onClick={() => onActivePage(item)}
            className={`px-4 py-2.5 rounded-xl cursor-pointer font-medium text-sm transition-all duration-200
              ${activePage === item
                ? theme === "dark"
                  ? "bg-emerald-500/20 text-emerald-400"
                  : "bg-emerald-50 text-emerald-700"
                : theme === "dark"
                  ? "text-neutral-400 hover:bg-gray-800 hover:text-neutral-200"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
              }`}
          >
            {item}
          </span>
        ))}
      </div>

      <div className={`text-xs leading-relaxed border-t pt-5
        ${theme === "dark" ? "border-gray-800 text-neutral-500" : "border-slate-200 text-slate-400"}`}>
        <p className={`font-semibold text-sm mb-1 ${theme === "dark" ? "text-neutral-300" : "text-slate-600"}`}>
          Financer
        </p>
        <p>Track spending, monitor income, and gain financial insights.</p>
      </div>
    </aside>
  );
}