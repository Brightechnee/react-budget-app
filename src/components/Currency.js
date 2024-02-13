import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);
  const [newCurrency, setNewCurrency] = useState(currency);

  const updateCurrency = () => {
    // Dispatch an action to update the currency in the context
    dispatch({ type: 'SET_CURRENCY', payload: newCurrency });
  };

  const currencyOptions = [
    { code: '$', name: 'Dollar' },
    { code: '£', name: 'Pound' },
    { code: '€', name: 'Euro' },
    { code: '₹', name: 'Ruppee' },
  ];

  return (
    <div className='alert alert-primary'>
      <label htmlFor="newCurrency">Select Currency:</label>
      <select
        id="newCurrency"
        value={newCurrency}
        onChange={(e) => setNewCurrency(e.target.value)}
      >
        {currencyOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.code} {option.name}
          </option>
        ))}
      </select>
      <button onClick={updateCurrency}>Update Currency</button>
    </div>
  );
};

export default Currency;
