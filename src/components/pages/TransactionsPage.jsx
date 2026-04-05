import TransactionDashboard from "../transactions/TransactionDasboard";

export default function TransactionsPage({ selected, theme }) {
  return (
    <main className="py-2">
      <TransactionDashboard selected={selected} theme={theme} />
    </main>
  );
}