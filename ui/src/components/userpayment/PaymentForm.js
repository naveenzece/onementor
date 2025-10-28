import React, { useState } from "react";

const PaymentForm = ({ onPaymentSuccess }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment success
    onPaymentSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 mb-1">Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="1234 5678 9012 3456"
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-gray-700 mb-1">Expiry</label>
          <input
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            placeholder="MM/YY"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700 mb-1">CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
      >
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;
