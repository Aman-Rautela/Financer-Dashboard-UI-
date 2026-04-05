# Financer — Finance Dashboard UI

A clean, interactive personal finance dashboard built with React and Tailwind CSS. Financer helps users track income, monitor expenses, and gain insights into their financial activity through an intuitive UI with role-based access control.

---

## Setup
```bash
git clone https://github.com/Aman-Rautela/Financer-Dashboard-UI-
cd financer
npm install
npm run dev
```

App runs at `http://localhost:5173`

---

## Tech Stack

- **React 18** + Vite
- **Tailwind CSS**
- **Recharts** — charts and graphs
- **Lucide React** — icons
- **localStorage** — data persistence

---

## Features

**Dashboard**
- Summary cards — Total Balance, Income, Expenses
- Balance trend line chart
- Spending breakdown pie chart
- Recent transactions list

**Transactions**
- Search, filter by type and category, sort by date and amount
- Live stats bar — income, expenses, net balance update with filters
- Add new transactions (Admin only)
- Export filtered data as CSV or JSON

**Insights**
- Key metric cards — top spending, savings rate, avg expense, monthly change
- Monthly income vs expenses bar chart
- Category distribution with progress bars
- Largest transactions list

**Role-Based UI**
- Switch between Viewer and Admin from the navbar dropdown
- Viewer — read only
- Admin — can add transactions
- Role persists via localStorage

**Other**
- Dark and light mode with localStorage persistence
- Fully responsive — mobile drawer sidebar, stacking layouts on small screens

---

## State Management

All state is handled with React `useState`. Key state lives in `App.jsx` (theme, role, activePage) and `TransactionDashboard.jsx` (transactions, filters, sort). No external library used.

---

## Known Limitations

- Chart data is hardcoded, not derived from live transactions
- No edit or delete for existing transactions
- Role switching is frontend-only, no authentication

---

## Author

Built as part of a frontend developer assessment.

---

> Financer is a frontend-only project built for evaluation purposes. No real financial data is used or stored beyond the browser's localStorage.
