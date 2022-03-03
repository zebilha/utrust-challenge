import isEqual from 'react-fast-compare';
import React from 'react';
import './TransactionForm.scss';

const TransactionForm = () => {
  return <div>TransactionForm</div>;
};

export default React.memo(TransactionForm, isEqual);
