"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Import router
import EarningsTable from "@/components/coach/earnings/EarningsTable";

const EarningsPage = () => {
  const router = useRouter(); // ✅ initialize router
  const [sessions] = useState([
    {
      id: 1,
      learner: "Amit Verma",
      date: "2025-09-05",
      topic: "Leadership",
      status: "Completed",
      amount: 1500,
      paymentStatus: "Paid",
    },
    {
      id: 2,
      learner: "Sneha Kapoor",
      date: "2025-09-06",
      topic: "Communication",
      status: "Completed",
      amount: 1200,
      paymentStatus: "Pending",
    },
    {
      id: 3,
      learner: "Rohan Gupta",
      date: "2025-09-07",
      topic: "Time Management",
      status: "Completed",
      amount: 1800,
      paymentStatus: "Paid",
    },
  ]);

  const totalEarnings = sessions
    .filter((s) => s.paymentStatus === "Paid")
    .reduce((sum, s) => sum + s.amount, 0);

  // ✅ Back button handler
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 via-purple-200 to-pink-200 p-6 flex justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-5xl w-full">
        {/* ✅ Back button */}
        <button
          onClick={handleBack}
          className="mb-6 px-4 py-2 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-500 transition"
        >
          &larr; Back
        </button>

        {/* Summary */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Earnings Dashboard
        </h1>

        <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-2xl p-6 shadow-md text-center mb-6">
          <h2 className="text-lg">Total Earnings</h2>
          <p className="text-4xl font-bold">₹{totalEarnings}</p>
        </div>

        {/* Table */}
        <EarningsTable sessions={sessions} />
      </div>
    </div>
  );
};

export default EarningsPage;
