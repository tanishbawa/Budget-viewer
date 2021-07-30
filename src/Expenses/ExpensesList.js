import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {

    let expensesContent = <h2 className='expenses-list__fallback'>No expenses found.</h2>;

    if (props.filteredExpenses.length != 0) {
        expensesContent = props.filteredExpenses.map((item) => {
            return (
                <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
            );
        });
    }

    return (
        <ul className='expenses-list'>{expensesContent}</ul>
    );

}

export default ExpensesList;