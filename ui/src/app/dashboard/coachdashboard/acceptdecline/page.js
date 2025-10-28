"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Import router
import ConfirmRequestCard from "@/components/coach/acceptdecline/ConfirmRequestCard";

const ConfirmRequestsPage = () => {
  const router = useRouter(); // ✅ initialize router
  const [requests, setRequests] = useState([
    {
      id: 1,
      student: "Rahul Mehta",
      date: "2025-09-10",
      time: "11:00 AM",
      topic: "Career Guidance",
      status: "pending",
    },
    {
      id: 2,
      student: "Priya Singh",
      date: "2025-09-12",
      time: "3:00 PM",
      topic: "Time Management",
      status: "pending",
    },
  ]);

  const handleAction = (id, action) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: action } : req
      )
    );
  };

  // ✅ Back button handler
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 via-purple-200 to-pink-200 p-6 flex justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full">
        {/* ✅ Back button */}
        <button
          onClick={handleBack}
          className="mb-6 px-4 py-2 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-500 transition"
        >
          &larr; Back
        </button>

        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Confirm Session Requests
        </h1>

        {requests.length > 0 ? (
          <div className="space-y-4">
            {requests.map((req) => (
              <ConfirmRequestCard
                key={req.id}
                request={req}
                onAction={handleAction}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No pending requests.</p>
        )}
      </div>
    </div>
  );
};

export default ConfirmRequestsPage;
