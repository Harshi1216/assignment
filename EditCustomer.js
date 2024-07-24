import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editCustomer } from '../actions/customerActions';
import { useParams, useHistory } from 'react-router-dom';

const EditCustomer = () => {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const customers = useSelector((state) => state.customers.customers);
    const customer = customers.find((cust) => cust.id
