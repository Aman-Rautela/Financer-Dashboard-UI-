import BalanceTrend from "./dashboardLayout/BalanceTrend";
import TransactionTable from "./dashboardLayout/TransactionTable";
import DashboardCards from "./dashboardLayout/dashboardCards";

export default function ViewerDashboard({ theme }) {
  return (
    <main className="px-4 md:px-10 py-6 md:py-10 flex flex-col gap-5">
      <div className="w-full"><DashboardCards theme={theme} /></div>
      <div><BalanceTrend theme={theme} /></div>
      <div><TransactionTable theme={theme} /></div>
    </main>
  );
}