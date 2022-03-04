import isEqual from 'react-fast-compare';
import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import './TransactionForm.scss';
import '../../helper.scss';
import Form from '../../Components/Form/Form';

const metadata = [
  { id: 'from', type: 'text' },
  { id: 'to', type: 'text' },
  { id: 'amount', type: 'number' },
];

const TransactionForm = ({ addresses }) => {
  const [from, setFrom] = useState({ value: null, isValid: true });
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');
  const [disableSendOption, setDisableSendOption] = useState(true);

  useEffect(() => {
    setDisableSendOption(
      from.value === '' || to === '' || amount === '' || !from.isValid
    );
  }, [from, to, amount]);

  const sendETH = useCallback(() => {
    //
  }, [from, to, amount]);

  const updateInput = useCallback(
    (id, newValue) => {
      switch (id) {
        case 'from':
          setFrom({
            value: newValue,
            isValid: addresses.map((a) => a.path).includes(newValue),
          });
          break;
        case 'to':
          setTo(newValue);
          break;
        case 'amount':
          setAmount(newValue);
          break;
        default:
          return;
      }
    },
    [setFrom, setTo, setAmount, addresses]
  );

  return (
    <div className="card">
      <header className="p-4">Please fill the form to send Ethereum</header>
      <body>
        <Form
          metadata={metadata}
          sendETH={sendETH}
          updateInput={updateInput}
          disableSendOption={disableSendOption}
          isFromValid={from.isValid}
          fromValue={from.value}
        ></Form>
      </body>
    </div>
  );
};

TransactionForm.propTypes = {
  addresses: PropTypes.array,
};

export default React.memo(TransactionForm, isEqual);
