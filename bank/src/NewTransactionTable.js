import React from 'react';

function TransactionTable({ transactions }) {
  return (
    <>
      <h2>Added Transactions</h2>
      <table id='table'>
        <thead>
          <tr>
            <th id='dat'>Date</th>
            <th id='dat'>Category</th>
            <th id='des'>Description</th>
            <th id='amnt'>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td id='dat'>{transaction.date}</td>
              <td id='dat'>{transaction.category}</td>
              <td id='des'>{transaction.description}</td>
              <td id='amnt'>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}



export default TransactionTable;
