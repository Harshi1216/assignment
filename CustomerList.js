import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers, deleteCustomer } from '../actions/customerActions';
import { Link } from 'react-router-dom';

const CustomerList = () => {
    const dispatch = useDispatch();
    const customers = useSelector((state) => state.customers.customers);
    const loading = useSelector((state) => state.customers.loading);
    const error = useSelector((state) => state.customers.error);

    useEffect(() => {
        dispatch(fetchCustomers());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteCustomer(id));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Customer List</h1>
            <Link to="/add">Add Customer</Link>
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id}>
                        {customer.name} - {customer.email}
                        <Link to={`/edit/${customer.id}`}>Edit</Link>
                        <button onClick={() => handleDelete(customer.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;
