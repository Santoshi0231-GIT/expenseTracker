import React, { useState, useEffect } from 'react';
import { loadTransactions, saveTransactions } from './utils/storage';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/Transactionlist';
import SummaryCard from './components/SummaryCard';

const App = () => {
    // 1. Initialize state with data from local storage
    const [transactions, setTransactions] = useState(loadTransactions());
    
    // 2. Persistence logic: Save state whenever transactions change
    useEffect(() => {
        saveTransactions(transactions);
    }, [transactions]);
    
    // 3. Function to add a new transaction (passed as prop)
    const addTransaction = (newTransaction) => {
        
        setTransactions([newTransaction, ...transactions]);
    };
    
    return (
    <div className='cursor-pointer font-medium align-middle bg-amber-50 px-40 py-40'>
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
            <h1 className='text-3xl text-black font-bold'>💰 Expense Tracker</h1>
            
            <SummaryCard transactions={transactions} />
            <hr />
            
        
            <TransactionForm onAdd={addTransaction}/>
            <hr />
            
            <TransactionList transactions={transactions}/>
        </div></div>
    );
}

export default App;