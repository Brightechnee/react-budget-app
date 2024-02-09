import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  }

  const updateBudget = () => {
    // Use getElementById to get the input element and set the new budget
    const inputElement = document.getElementById('budgetInput');
    if (inputElement) {
      const inputValue = inputElement.value;
      dispatch({ type: 'SET_BUDGET', payload: parseInt(inputValue, 10) });
    }
  }

  return (
    <div className='alert alert-secondary'>
      <span>Budget: £{budget}</span>
      <input
        id="budgetInput"
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
        onBlur={updateBudget}
      />
    </div>
  );
};

export default Budget;
