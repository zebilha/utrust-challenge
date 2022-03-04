import isEqual from 'react-fast-compare';
import React from 'react';
import './TransactionComplete.scss';

const TransactionComplete = () => {
  return <div>TransactionComplete</div>;
};

export default React.memo(TransactionComplete, isEqual);
