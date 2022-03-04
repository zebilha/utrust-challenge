import isEqual from 'react-fast-compare';
import React from 'react';
import PropTypes from 'prop-types';
import './TransactionComplete.scss';
import '../../helper.scss';
import success_img from '../../success-sent.png';

const TransactionComplete = ({ transactionInfo }) => {
  return (
    <div className="card">
      <header className="p-4">Transaction complete</header>
      <body>
        <div className="d-flex justify-content-center">
          <img src={success_img} className="Success-img" alt="success-img" />
        </div>
        <div className="success-content d-flex flex-column">
          <label>You sent</label>
          <span className="amount">{`${transactionInfo.amount} ETH`}</span>
          <hr />
          <label>From</label>
          <span className="address pb-2">{transactionInfo.from}</span>
          <label>To</label>
          <span className="address">{transactionInfo.to}</span>
        </div>
      </body>
    </div>
  );
};

TransactionComplete.propTypes = {
  transactionInfo: PropTypes.object,
};

export default React.memo(TransactionComplete, isEqual);
