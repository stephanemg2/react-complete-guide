import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css'

const AddUser = props => {
    const [enteredUserName, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUserName, enteredAge);
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };


    return (
        <Card cssClass={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type="text" onChange={usernameChangeHandler} />
                <label htmlFor='age'>Age (years)</label>
                <input id='age' type="number" onChange={ageChangeHandler}/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>);
};

export default AddUser;