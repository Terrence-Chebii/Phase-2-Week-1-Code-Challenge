import React , {useState} from 'react'
import './App.css';
import TransactionForm from './Form';
import Transaction from './Transaction';



function App() {
  return (
    <>
    <h1>BANK OF FLATIRON</h1>
    <Transaction/>
     <TransactionForm/>

    </>
  );
}






export default App;
