import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCustomer } from '../actions/customerActions';
import { useHistory } from 'react-router-dom';

const CustomerForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCustomer({ name, email }));
        history.push('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit">Add Customer</button>
        </form>
    );
};

export default CustomerForm;
