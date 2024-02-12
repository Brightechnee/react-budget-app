import react, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Currency =() =>{
    const {currency, dispatch} = useContext (AppContext);
    const [newCurrency, SetNewCurrency] = useState(currency);

    const updatCurrency=() =>{
        // Dispatch an action to update the currency in the context
        dispatch({ type: 'SET_CURRENCY', payload: newCurrency });
    } 

    const currencyOptions = [
        { code: 'USD', name: 'Dollar' },
        { code: 'GBP', name: 'Pound' },
        { code: 'EUR', name: 'Euro' },
        { code: 'INR', name: 'Ruppee' },
      ];
    
      return (
        <div>
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

export default Currency