import React , {useState} from 'react'
import './App.css';
import TransactionList from './Transaction';


function App() {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='date' onChange={handleDate} value={date}/>
      <input type='text' placeholder='description' onChange={handleDescription} value={date}/>
      <input type='text' placeholder='category' onChange={handlecategory} value={date}/>
      <input type='text' placeholder='amount' onChange={handleAmount} value={date}/>
    </form>
    <TransactionList/>
    </>
  );
}

function handleSubmit(event){
  event.preventDefault()
}

export default App;
