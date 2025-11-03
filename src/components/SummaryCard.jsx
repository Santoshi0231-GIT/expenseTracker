import React from 'react'

const SummaryCard = ({transactions}) => {
    let income=0;
    let expense=0;
    transactions.forEach(t=>{
        if(t.type==='income'){
            income+=t.amount;

        }
        else{
            expense+=t.amount;
        }
    });
    const balance=income-expense;
  return (
 <>
 <div style={{padding:'15px', display: 'flex', justifyContent: 'space-around',border: '1px solid #ddd',}}>
    <div>
        <strong>Income:</strong> <span style={{ color: 'green' }}>${income.toFixed(2)}</span>
      </div>
      <div>
        <strong>Expense:</strong> <span style={{ color: 'red' }}>${expense.toFixed(2)}</span>
      </div>
      <div>
        <strong>Balance:</strong> <span style={{ color: balance >= 0 ? 'blue' : 'darkred' }}>${balance.toFixed(2)}</span>
      </div>
    
    
     </div>

 </>
  )
}

export default SummaryCard