import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import EditCustomer from './components/EditCustomer';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={CustomerList} />
          <Route path="/add" component={CustomerForm} />
          <Route path="/edit/:id" component={EditCustomer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
