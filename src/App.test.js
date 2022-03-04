import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const renderApp = () =>
  render(
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  );

test('renders addresses management title', () => {
  renderApp();
  const addressesManagementTitle = screen.getByText('My Ethereum addresses');
  expect(addressesManagementTitle).toBeInTheDocument();
});

test('renders at least one address', () => {
  renderApp();
  const address = screen.getByText(
    '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B'
  );
  expect(address).toBeInTheDocument();

  const amount = screen.getByText('50.0344');
  expect(amount).toBeInTheDocument();
});

test('click next button & send transaction', () => {
  renderApp();
  const nextButton = screen.getByRole('button');
  fireEvent.click(nextButton);

  const transactionFormTitle = screen.getByText(
    'Please fill the form to send Ethereum'
  );
  expect(transactionFormTitle).toBeInTheDocument();

  const addressesInputs = screen.getAllByRole('textbox');

  const fromInput = addressesInputs[0];
  fireEvent.change(fromInput, {
    target: { value: '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B' },
  });

  const toInput = addressesInputs[1];
  fireEvent.change(toInput, {
    target: { value: '0xdc9Ac3C20D1ed0B540dF9b1feDC10039Df13F99c' },
  });

  const amountInput = screen.getByRole('spinbutton');
  fireEvent.change(amountInput, { target: { value: '2.0383' } });

  const sendButton = screen.getByRole('button');
  fireEvent.click(sendButton);

  const transactionCompleteTitle = screen.getByText('Transaction complete');
  expect(transactionCompleteTitle).toBeInTheDocument();

  const youSentText = screen.getByText('You sent');
  expect(youSentText).toBeInTheDocument();

  const fromText = screen.getByText('From');
  expect(fromText).toBeInTheDocument();

  const toText = screen.getByText('To');
  expect(toText).toBeInTheDocument();

  const fromAddress = screen.getByText(
    '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B'
  );
  expect(fromAddress).toBeInTheDocument();

  const toAddress = screen.getByText(
    '0xdc9Ac3C20D1ed0B540dF9b1feDC10039Df13F99c'
  );
  expect(toAddress).toBeInTheDocument();

  const amount = screen.getByText('2.0383 ETH');
  expect(amount).toBeInTheDocument();
});
