import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    // const changeTitleHandler = () => {
    //     console.log("Clicked");
    //     setTitle('Change title');
    // }

    return (
        <Card className='expense-item'>
            <div className='expense-item__description'>
                <ExpenseDate date={props.date}/>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* <button onClick={changeTitleHandler}>Change title</button> */}
        </Card>
    );
}

export default ExpenseItem;