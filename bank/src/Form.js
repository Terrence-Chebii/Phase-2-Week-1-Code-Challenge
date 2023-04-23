import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TransactionForm({ onAddTransaction }) {
  const [dateInput, setDateInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    const newTransaction = { date: dateInput, description: descriptionInput, amount: amountInput };
    // Append the new transaction to the list of transactions
    setTransactions([...transactions, newTransaction]);
    // Reset the form fields
    setDateInput('');
    setDescriptionInput('');
    setAmountInput('');
  };

  return (
    <>
      <h2>Added Transactions</h2>
      <table id='table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="text"
            value={dateInput}
            onChange={event => setDateInput(event.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={descriptionInput}
            onChange={event => setDescriptionInput(event.target.value)}
          />
        </label>
        <label>
          Amount:
          <input
            type="text"
            value={amountInput}
            onChange={event => setAmountInput(event.target.value)}
          />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
    </>
  );
}

TransactionForm.propTypes = {
  onAddTransaction: PropTypes.func.isRequired,
};

export default TransactionForm;
