import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    
    };
    const decreaseAllociton = (name) =>{
        const expense ={
            name : name,
            cost: 10
        };

        dispatch({
            type: 'RED_EXPENSE' ,
            payload: expense
        });
    };

    

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><button style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '2em',
                        cursor: 'pointer',
                        backgroundColor: 'green',
                        color: 'white',
                        margin: '0 5px',
                    }} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '2em',
                        cursor: 'pointer',
                        backgroundColor: 'red',
                        color: 'white',
                        margin: '0 5px',
                    }} onClick={event=> decreaseAllociton(props.name)}>-</button> </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;

