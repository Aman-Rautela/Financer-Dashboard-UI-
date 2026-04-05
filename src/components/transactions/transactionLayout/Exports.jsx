import { Download, X } from "lucide-react";

export default function Exports({ theme, onClose, onExportCsv, onExportJson }) {
  return (
    <main className={`w-auto px-8 py-6 flex items-center gap-8 rounded-xl border shadow-xl
      ${theme === "dark"
        ? "bg-gray-900 border-gray-700 text-neutral-200"
        : "bg-white border-slate-200 text-slate-800"
      }`}>
      <div className="flex items-center gap-4">
        <button
          onClick={onExportCsv}
          className={`cursor-pointer flex items-center justify-center gap-2 px-4 py-2 rounded-lg outline-none border-none text-sm font-medium transition-colors duration-200
            ${theme === "dark"
              ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/35"
              : "bg-blue-50 text-blue-700 hover:bg-blue-100"
            }`}
        >
          <Download size={14} /> Export CSV
        </button>
        <button
          onClick={onExportJson}
          className={`cursor-pointer flex items-center justify-center gap-2 px-4 py-2 rounded-lg outline-none border-none text-sm font-medium transition-colors duration-200
            ${theme === "dark"
              ? "bg-amber-500/20 text-amber-400 hover:bg-amber-500/35"
              : "bg-amber-50 text-amber-700 hover:bg-amber-100"
            }`}
        >
          <Download size={14} /> Export JSON
        </button>
      </div>
      <span
        className={`cursor-pointer transition-colors duration-200
          ${theme === "dark" ? "text-neutral-500 hover:text-red-400" : "text-slate-400 hover:text-red-500"}`}
        onClick={() => onClose(false)}
      >
        <X size={18} />
      </span>
    </main>
  );
}