import { Download, Plus } from "lucide-react";
import Records from "./transactionLayout/Records";
import SearchBar from "./transactionLayout/SearchBar";
import { data } from "./transactionLayout/Records";
import { useState } from "react";
import Form from "./transactionLayout/Form";
import Exports from "./transactionLayout/Exports";
import StatsBar from "./transactionLayout/StatsBar";

export default function TransactionDashboard({ selected, theme }) {
  const [searched, setSearched] = useState("");
  const [typed, setTyped] = useState("All Types");
  const [categories, setCategories] = useState("All Categories");
  const [open, setOpen] = useState(false);
  const [exports, setExports] = useState(false);

  const [selectType, setSelectType] = useState("Income");
  const [amount, setAmount] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [description, setDescription] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [newData, setNewData] = useState(() => {
    const saved = localStorage.getItem("transaction");
    return saved ? JSON.parse(saved) : data;
  });
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOder] = useState("none");

  const handleSorting = (field) => {
    if (sortBy !== field) {
      setSortBy(field);
      setSortOder("desc");
    } else {
      if (sortOrder === "desc") setSortOder("asc");
      else if (sortOrder === "asc") {
        setSortOder("none");
        setSortBy(null);
      }
    }
  };

  const handleAddTransaction = (newValue) => {
    const updated = [newValue, ...newData];
    setNewData(updated);
    localStorage.setItem("transaction", JSON.stringify(updated));
    setOpen(false);
  };

  const filteredData = newData
    .filter((row) => row.name.toLowerCase().includes(searched.toLowerCase()))
    .filter((row) => typed === "All Types" || row.type === typed)
    .filter(
      (row) => categories === "All Categories" || row.category === categories,
    )
    .sort((a, b) => {
      if (!sortBy || sortOrder === "none") return 0;
      if (sortBy === "date") {
        return sortOrder === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      }
      if (sortBy === "amount") {
        const aVal = parseFloat(a.amount.replace(/[^0-9.-]/g, ""));
        const bVal = parseFloat(b.amount.replace(/[^0-9.-]/g, ""));
        return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
      }
    });

  const exportCsv = () => {
    const headers = ["Date", "Name", "Category", "Type", "Amount"];
    const rows = filteredData.map((row) =>
      [row.date, row.name, row.category, row.type, row.amount].join(","),
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(filteredData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="w-full flex flex-col gap-8">
      <div className="flex items-center justify-between px-4 pt-2">
        <div className="flex flex-col gap-1 px-6 py-4">
          <h3 className="font-bold text-lg">Transactions</h3>
          <span
            className={`text-sm ${theme === "dark" ? "text-neutral-500" : "text-slate-400"}`}
          >
            {filteredData.length} transactions found
          </span>
        </div>
        <div className="flex items-center gap-3 pr-4">
          {selected.access === "Full Access" && (
            <button
              onClick={() => setOpen(true)}
              className={`flex gap-2 items-center border-none outline-none cursor-pointer px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200
                ${
                  theme === "dark"
                    ? "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/35"
                    : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                }`}
            >
              <Plus size={14} /> Add Transaction
            </button>
          )}
          <button
            onClick={() => setExports(true)}
            className={`flex gap-2 items-center border-none outline-none cursor-pointer px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200
              ${
                theme === "dark"
                  ? "bg-gray-800 text-neutral-300 hover:bg-gray-700"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
          >
            <Download size={14} /> Export
          </button>
        </div>
      </div>

      <div>
        <SearchBar
          theme={theme}
          searched={searched}
          onSearched={setSearched}
          typed={typed}
          onTyped={setTyped}
          categories={categories}
          onCategories={setCategories}
        />
      </div>

      <div>
        <StatsBar theme={theme} data={filteredData} />
      </div>

      <div>
        <Records
          theme={theme}
          data={filteredData}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSort={handleSorting}
        />
      </div>

      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Form
              theme={theme}
              onClose={setOpen}
              selectType={selectType}
              onTypeChange={setSelectType}
              amount={amount}
              onAmountChange={setAmount}
              selectCategory={selectCategory}
              onCategoryChange={setSelectCategory}
              description={description}
              onDescriptionChange={setDescription}
              selectDate={selectDate}
              onDateChange={setSelectDate}
              onSubmit={handleAddTransaction}
            />
          </div>
        </div>
      )}

      {exports && (
        <div className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <Exports
            theme={theme}
            onClose={setExports}
            onExportCsv={exportCsv}
            onExportJson={exportJson}
          />
        </div>
      )}
    </main>
  );
}
