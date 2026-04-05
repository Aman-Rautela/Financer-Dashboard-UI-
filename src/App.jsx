import { useState } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import DashboardPage from "./components/pages/DashboardPage";
import TransactionsPage from "./components/pages/TransactionsPage";
import InsightsPage from "./components/pages/InsightsPage";

const user = [
  { id: "01", role: "Viewer", access: "View Only" },
  { id: "02", role: "Admin", access: "Full Access" },
];

const themes = {
  dark: "bg-gray-950 text-neutral-100",
  light: "bg-slate-100 text-slate-900",
};

function App() {
  const [selected, setSelected] = useState(() => {
    const saved = localStorage.getItem("selected");
    return saved ? JSON.parse(saved) : user[0];
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const [activePage, setActivePage] = useState(() => {
    return localStorage.getItem("activePage") || "Dashboard";
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSelect = (val) => {
    setSelected(val);
    localStorage.setItem("selected", JSON.stringify(val));
  };

  const handleTheme = (val) => {
    setTheme(val);
    localStorage.setItem("theme", val);
  };

  const handleActivePage = (val) => {
    setActivePage(val);
    localStorage.setItem("activePage", val);
  };

  return (
    <main className={`${themes[theme]} h-screen w-full overflow-hidden`}>
      <Navbar
        data={user}
        selected={selected}
        onSelect={handleSelect}
        theme={theme}
        onTheme={handleTheme}
        activePage={activePage}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex h-[calc(100vh-4rem)] mt-16 p-2 md:p-4 gap-0 overflow-hidden">

        {/* Sidebar */}
        <div className={`fixed md:relative z-20 transition-transform duration-300 md:translate-x-0
          h-[calc(100vh-5rem)] shrink-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
          <Sidebar
            theme={theme}
            onTheme={handleTheme}
            activePage={activePage}
            onActivePage={(val) => {
              handleActivePage(val);
              setSidebarOpen(false);
            }}
          />
        </div>

        {/* Main content */}
        <section className="flex-1 h-full overflow-y-auto min-w-0">
          {activePage === "Dashboard" && <DashboardPage selected={selected} theme={theme} />}
          {activePage === "Transactions" && <TransactionsPage selected={selected} theme={theme} />}
          {activePage === "Insights" && <InsightsPage selected={selected} theme={theme} />}
        </section>

      </div>
    </main>
  );
}

export default App;