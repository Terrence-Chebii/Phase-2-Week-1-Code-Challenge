import React, { useState, useEffect } from 'react';

function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
  }, []);

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.includes(search)
  );

  return (
    <>
    <div id='div'>
      <input type='text' placeholder='Search...' onChange={e => setSearch(e.target.value)} />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default Transaction;
