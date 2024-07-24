import axios from 'axios';

export const FETCH_CUSTOMERS_REQUEST = 'FETCH_CUSTOMERS_REQUEST';
export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';
export const FETCH_CUSTOMERS_FAILURE = 'FETCH_CUSTOMERS_FAILURE';
export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const EDIT_CUSTOMER = 'EDIT_CUSTOMER';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

export const fetchCustomers = () => async dispatch => {
    dispatch({ type: FETCH_CUSTOMERS_REQUEST });
    try {
        const response = await axios.get('/api/customers');
        dispatch({ type: FETCH_CUSTOMERS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_CUSTOMERS_FAILURE, error });
    }
};

export const addCustomer = (customer) => async dispatch => {
    const response = await axios.post('/api/customers', customer);
    dispatch({ type: ADD_CUSTOMER, payload: response.data });
};

export const editCustomer = (id, customer) => async dispatch => {
    const response = await axios.put(`/api/customers/${id}`, customer);
    dispatch({ type: EDIT_CUSTOMER, payload: response.data });
};

export const deleteCustomer = (id) => async dispatch => {
    await axios.delete(`/api/customers/${id}`);
    dispatch({ type: DELETE_CUSTOMER, payload: id });
};

