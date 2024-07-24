import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editCustomer } from '../actions/customerActions';
import { useParams, useHistory } from 'react-router-dom';

const EditCustomer = () => {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const customers = useSelector((state) => state.customers.customers);
    const customer = customers.find((cust) => cust.id === parseInt(id));

    const [name, setName] = useState(customer ? customer.name : '');
    const [email, setEmail] = useState(customer ? customer.email : '');

    useEffect(() => {
        if (customer) {
            setName(customer.name);
            setEmail(customer.email);
        }
    }, [customer]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editCustomer(id, { name, email }));
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
            <button type="submit">Edit Customer</button>
        </form>
    );
};

export default EditCustomer;
