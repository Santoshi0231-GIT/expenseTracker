import React, { useState } from 'react';


const TransactionForm = ({ onAdd }) => {
    // useStates
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('expense');

    const handleSubmit = (e) => {
        e.preventDefault();
        
       
        if (!description.trim() || !amount) { 
            alert("Fill all the fields");
            return; 
        }
        
      
        if (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        const newTransaction = {
           
            id: Date.now(),
            description, 
            amount: parseFloat(amount),
            type,
        };

        
        onAdd(newTransaction); 

       
        setDescription('');
        setAmount('');
        setType('expense'); 
    };
    
    return (
        <form onSubmit={handleSubmit} style={{display:'grid', gap:'10px'}} className='cursor-pointer'>
            <h2 className='text-center font-semibold font-serif m-2'>New Transaction</h2>
            
            <input 
                type="text"
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></input>
            
            <input 
                type="number" 
                value={amount} 
                placeholder='Amount'
                onChange={(e) => setAmount(e.target.value)} 
                step="0.01"
            />

            <select value={type} 
                onChange={(e) => setType(e.target.value)}>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>

            <button type='submit' className='bg-blue-800 rounded-4xl px-2 py-2 text-2xl text-white m-1 cursor-pointer hover:bg-green-500
        '>Submit</button>
        </form>
    )
}

export default TransactionForm;