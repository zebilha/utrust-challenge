import isEqual from 'react-fast-compare';
import React, { useState, useCallback } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './utrust-logo.png';
import AddressesManagement from './Pages/AddressesManagement/AddressesManagement';
import TransactionForm from './Pages/TransactionForm/TransactionForm';
import TransactionComplete from './Pages/TransactionComplete/TransactionComplete';

const mockAddresses = [
  //vb
  { path: '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B', amount: 50.0344 },
  //utk
  { path: '0xdc9Ac3C20D1ed0B540dF9b1feDC10039Df13F99c', amount: 12.0323 },
  //link
  { path: '0x514910771AF9Ca656af840dff83E8264EcF986CA', amount: 31.44455 },
  //bat
  { path: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF', amount: 0.01323 },
];
const App = () => {
  const [addresses] = useState(mockAddresses);
  const [transactionInfo, setTransactionInfo] = useState({
    from: '',
    to: '',
    amount: '',
  });

  const updateTransactionInfo = useCallback(
    (from, to, amount) => {
      setTransactionInfo({ from: from, to: to, amount: amount });
    },
    [setTransactionInfo]
  );

  return (
    <div className="App d-flex justify-content-center">
      <div className="d-flex flex-column align-self-center">
        <header>
          <img
            src={logo}
            className="App-logo d-flex justify-content-start"
            alt="logo"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
            integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
            crossorigin="anonymous"
          />
        </header>
        <body>
          <Router>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <AddressesManagement
                    addresses={addresses}
                  ></AddressesManagement>
                }
              />
              <Route
                exact
                path="/send"
                element={
                  <TransactionForm
                    addresses={addresses}
                    updateTransactionInfo={updateTransactionInfo}
                  ></TransactionForm>
                }
              />
              <Route
                exact
                path="/send/success"
                element={
                  <TransactionComplete
                    //transactionInfo={transactionInfo}
                    transactionInfo={{
                      from: '0xdc9Ac3C20D1ed0B540dF9b1feDC10039Df13F99c',
                      to: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
                      amount: 93.1111,
                    }}
                  ></TransactionComplete>
                }
              />
            </Routes>
          </Router>
        </body>
      </div>
    </div>
  );
};

export default React.memo(App, isEqual);
