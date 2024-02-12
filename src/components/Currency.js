import react, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Currency =() =>{
    const {currency, dispatch} = useContext (AppContext);
    const [newCurrency, SetNewCurrency] = useState(currency);

    const updatCurrency=() =>{
        // Dispatch an action to update the currency in the context
    } 
}