import BarGraph from "./insightLayout/BarGraph";
import Cards from "./insightLayout/Cards";
import Tables from "./insightLayout/Tables";

export default function InsightDashboard({ theme }) {
  return (
    <div className="px-4 md:px-5 py-6 flex flex-col gap-5">
      <div className="flex flex-col gap-1 px-1">
        <h3 className={`font-bold text-2xl ${theme === "dark" ? "text-neutral-100" : "text-slate-800"}`}>
          Insights
        </h3>
        <p className={`text-sm ${theme === "dark" ? "text-neutral-500" : "text-slate-400"}`}>
          Key observations from your financial data
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div><Cards theme={theme} /></div>
        <div><BarGraph theme={theme} /></div>
        <div><Tables theme={theme} /></div>
      </div>
    </div>
  );
}