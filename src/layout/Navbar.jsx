import { Shield, Eye, Sun, Moon, TrendingUp, Menu } from "lucide-react";

export default function Navbar({ data, selected, onSelect, theme, onTheme, activePage, onMenuClick }) {
  return (
    <nav className={`px-4 md:px-8 py-4 w-full fixed top-0 left-0 z-30 border-b transition-shadow duration-300
      ${theme === "dark"
        ? "bg-gray-950 border-gray-800 text-neutral-100 shadow-lg shadow-black/50"
        : "bg-white border-slate-200 text-slate-900 shadow-sm shadow-slate-200"
      }`}>
      <ul className="flex justify-between items-center">
        <li>
          <div className="flex items-center gap-2 md:gap-2.5">
             <button
              className={`md:hidden p-1.5 rounded-md cursor-pointer border-none outline-none transition-colors duration-200
                ${theme === "dark" ? "text-neutral-400 hover:text-emerald-400" : "text-slate-500 hover:text-emerald-600"}`}
              onClick={onMenuClick}
            >
              <Menu size={20} />
            </button>
            <span className={`p-1.5 rounded-lg ${theme === "dark" ? "bg-emerald-500/20 text-emerald-400" : "bg-emerald-100 text-emerald-600"}`}>
              <TrendingUp size={20} strokeWidth={2.5} />
            </span>
            <span className={`text-xl md:text-2xl font-bold tracking-tight ${theme === "dark" ? "text-emerald-400" : "text-emerald-600"}`}>
              Financer
            </span>
          </div>
        </li>

         <li className={`hidden md:block text-lg font-semibold ${theme === "dark" ? "text-neutral-300" : "text-slate-600"}`}>
          {activePage}
        </li>

        <li>
          <ul className="flex items-center gap-3 md:gap-6 text-sm">
            <li>
              <select
                className={`border rounded-md px-2 py-1 text-sm outline-none cursor-pointer
                  ${theme === "dark"
                    ? "bg-gray-900 text-neutral-200 border-gray-700"
                    : "bg-slate-50 text-slate-800 border-slate-300"
                  }`}
                value={data.findIndex((item) => item.id === selected.id)}
                onChange={(e) => onSelect(data[e.target.value])}
              >
                {data.map((item, idx) => (
                  <option value={idx} key={item.id}>{item.role}</option>
                ))}
              </select>
            </li>

            <li className={`hidden md:flex items-center gap-1.5 w-28 text-sm ${theme === "dark" ? "text-neutral-400" : "text-slate-500"}`}>
              <span className="flex w-5 justify-center">
                {selected.access === "Full Access" ? <Shield size={14} /> : <Eye size={14} />}
              </span>
              {selected.access}
            </li>

            <li>
              <button
                className={`flex items-center p-1.5 rounded-md border-none outline-none cursor-pointer transition-colors duration-200
                  ${theme === "dark" ? "text-neutral-300 hover:text-emerald-400" : "text-slate-500 hover:text-emerald-600"}`}
                onClick={() => onTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}