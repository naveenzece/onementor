import React from "react";

const PaymentSummary = () => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
      <div className="flex justify-between mb-1">
        <span>Service Fee</span>
        <span>$50</span>
      </div>
      <div className="flex justify-between font-bold border-t pt-2">
        <span>Total</span>
        <span>$50</span>
      </div>
    </div>
  );
};

export default PaymentSummary;
