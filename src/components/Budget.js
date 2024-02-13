import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, currency, dispatch , expenses} = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
}, 0);

  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  }

  const updateBudget = () => {
    const parsedBudget = parseInt(newBudget, 10);

    // Check if the new budget is within the allowed range
    if (parsedBudget > 20000) {
      alert("The maximum budget you can set is 20000. Please reduce the budget.");
      // You might want to handle this differently based on your application's needs
    } else if (parsedBudget < totalExpenses){
        alert("Your budget can not be lower than current spending. Please increase the budget")
    }
    
    else {
      // Dispatch an action to update the budget in the context
      dispatch({ type: 'SET_BUDGET', payload: parsedBudget });
    }
  }

  return (
    <div className='alert alert-secondary'>
      <span>Budget: {currency}{budget}</span>
      <div>
      <span style={{ marginRight: '0.5rem' }}>{currency}</span>
      
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
        onBlur={updateBudget}
      />

</div>
    </div>
  );
};

export default Budget;
