import isEqual from 'react-fast-compare';
import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './utrust-logo.png';
import AddressesManagement from './AddressesManagement/AddressesManagement';
import TransactionForm from './TransactionForm/TransactionForm';
import TransactionComplete from './TransactionComplete/TransactionComplete';

const App = () => {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<AddressesManagement></AddressesManagement>}
            />
            <Route
              exact
              path="/send"
              element={<TransactionForm></TransactionForm>}
            />
            <Route
              exact
              path="/send/success"
              element={<TransactionComplete></TransactionComplete>}
            />
          </Routes>
        </Router>
      </body>
    </>
  );
};

export default React.memo(App, isEqual);
