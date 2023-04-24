import React from 'react';

function TransactionTable({ transactions }) {
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
    </>
  );
}



export default TransactionTable;
