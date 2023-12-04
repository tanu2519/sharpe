import React, { useState } from 'react';
import '../App.css';

function Transaction() {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!walletAddress.trim()) {
      errors.walletAddress = 'Wallet address cannot be empty';
      isValid = false;
    } else if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
      errors.walletAddress = 'Invalid Ethereum wallet address format';
      isValid = false;
    }

    if (!amount.trim()) {
      errors.amount = 'Amount cannot be empty';
      isValid = false;
    } else if (isNaN(amount) || amount < 0 || amount > 10000) {
      errors.amount = 'Amount must be a number within the range of 0 - 10,000';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform submission or API call here
      setSuccessMessage('Form submitted successfully!');
      // Clear form fields after successful submission if needed
      setWalletAddress('');
      setAmount('');
    }
  };

  return (
    <div className="transaction-container">
      <h2>Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Wallet Address:</label>
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
          {errors.walletAddress && <span className="error-message" style={{ color: 'red' }}>{errors.walletAddress}</span>}
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {errors.amount && <span className="error-message" style={{ color: 'red' }}>{errors.amount}</span>}
        </div>
        <button className="submit-button" type="submit">Submit</button>
      </form>
      {successMessage && <p className="success-message" style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
}

export default Transaction;
