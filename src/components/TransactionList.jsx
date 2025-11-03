import React from 'react'

const TransactionList = ({transactions}) => {
  return (<>
    <div>
      <h4>Transaction history</h4>  
      <ul style={{padding:0, listStyle:'none'}}>{transactions.map(t =>(
        <li key={t.id}style={{ 
              borderLeft: `5px solid ${t.type === 'income' ? 'green' : 'red'}`, 
              padding: '8px', 
              margin: '5px 0',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
                <span>{t.description}</span>
                <span>{t.type==='income'?'+':'-'}${t.amount.toFixed(2)}</span>
            </li>
      ))}

      </ul>
    
        </div></>
  )
}

export default TransactionList