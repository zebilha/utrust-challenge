import isEqual from 'react-fast-compare';
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './AddressesManagement.scss';
import '../../helper.scss';

const AddressesManagement = ({ addresses }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <header className="p-4">My Ethereum addresses</header>
      <body>
        {addresses && addresses.length > 0
          ? addresses.map((address, index) => (
              <>
                <div className="address d-flex justify-content-between p-4">
                  <div className="address-path pr-2">{address.path}</div>
                  <div className="address-quantity pl-2 d-flex flex-row">
                    <b className="address-amount">{address.amount}</b>
                    <div className="address-unit pl-1">ETH</div>
                  </div>
                </div>
                {index + 1 < addresses.length ? <hr /> : null}
              </>
            ))
          : null}
      </body>
      <footer className="addresses-footer d-flex justify-content-between p-3">
        <span>Please copy the address from which you wish to send money.</span>
        <button onClick={() => navigate('/send', { replace: true })}>
          Next
        </button>
      </footer>
    </div>
  );
};

AddressesManagement.propTypes = {
  addresses: PropTypes.array,
};

export default React.memo(AddressesManagement, isEqual);
