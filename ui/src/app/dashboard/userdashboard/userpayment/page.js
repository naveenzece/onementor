"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Import router
import PaymentForm from "@/components/userpayment/PaymentForm";
import PaymentSummary from "@/components/userpayment/PaymentSummary";

const PaymentPage = () => {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const router = useRouter(); // ✅ Initialize router

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full">
        {!paymentCompleted ? (
          <>
            <h1 className="text-2xl font-bold mb-6 text-gray-800">
              Complete Your Payment
            </h1>
            <PaymentSummary />
            <PaymentForm onPaymentSuccess={() => setPaymentCompleted(true)} />
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Payment Successful!
            </h2>
            <p className="text-gray-700">Thank you for your payment.</p>
          </div>
        )}
      </div>

      {/* ✅ Back Button below the card */}
      <div className="mt-6">
        <button
          onClick={() => router.back()}
          className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
