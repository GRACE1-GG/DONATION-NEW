import React, { useState } from 'react';

const MonetaryDonationForm = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add payment integration logic here
    console.log({ amount, paymentMethod });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Donate Money</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="amount" className="block mb-2">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block mb-2">Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select Payment Method</option>
            <option value="M-Pesa">M-Pesa</option>
            <option value="PayPal">PayPal</option>
            <option value="Credit Card">Credit Card</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Donate Money
        </button>
      </form>
    </div>
  );
};

export default MonetaryDonationForm;
