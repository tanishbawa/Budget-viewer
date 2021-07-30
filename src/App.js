import React, { useState } from 'react';
import Card from './UI/Card';
import NewExpense from './NewExpense/NewExpense';
import ExpensesFilter from './ExpenseFilter/ExpenseFilter';
import ExpensesList from './Expenses/ExpensesList';
import ExpensesChart from './Expenses/ExpensesChart';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'SIP',
    amount: 4000,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const [filteredYear, setFilteredYear] = useState(new Date().getUTCFullYear());

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

  }

  const filterYearChangeHandler = (filterdYear) => {
    setFilteredYear(filterdYear);
  }

  const filteredExpenses = expenses.filter(expense => {
    return (expense.date.getFullYear().toString() === filteredYear.toString());
  });

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onFilterChange={filterYearChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default App;