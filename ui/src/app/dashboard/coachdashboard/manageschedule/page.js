"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import CalendarSlots from "@/components/coach/manageschedule/CalendarSlots";
import SlotForm from "@/components/coach/manageschedule/slotform";
import SlotList from "@/components/coach/manageschedule/slotlist";

const SchedulePage = () => {
  const router = useRouter(); // Initialize router
  const [slots, setSlots] = useState([]);
  const [coachId, setCoachId] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  // Load user info from localStorage
  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    const storedRole = localStorage.getItem("userRole");
    const storedEmail = localStorage.getItem("userEmail");

    if (storedId) {
      setCoachId(storedId);
      setUserRole(storedRole);
      setUserEmail(storedEmail);
    }
  }, []);

  // Fetch slots for this coach
  useEffect(() => {
    const fetchSlots = async () => {
      if (!coachId) return;
      try {
        const res = await fetch(
          `http://localhost:8001/api/manageschedules?coach_id=${coachId}`
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setSlots(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSlots();
  }, [coachId]);

  // Add new slot
  const handleAddSlot = async (newSlot) => {
    if (!coachId) return;
    try {
      const res = await fetch("http://localhost:8001/api/manageschedules", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newSlot, coach_id: coachId }),
      });
      const data = await res.json();
      setSlots((prev) => [...prev, data]);
    } catch (err) {
      console.error("Error adding slot:", err);
    }
  };

  // Delete slot
  const handleDeleteSlot = async (id) => {
    try {
      await fetch(`http://localhost:8001/api/manageschedules/${id}`, {
        method: "DELETE",
      });
      setSlots((prev) => prev.filter((slot) => slot.id !== id));
    } catch (err) {
      console.error("Error deleting slot:", err);
    }
  };

  // Back button handler
  const handleBack = () => {
    router.back();
  };

  if (!coachId) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        User ID not found. Please log in first.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 p-6 flex justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-6xl w-full">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="mb-6 px-4 py-2 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-500 transition"
        >
          &larr; Back
        </button>

        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Manage Your Availability
        </h1>
        <p className="text-center mb-8">
          Welcome {userEmail} ({userRole})
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <CalendarSlots slots={slots} />
          <div className="space-y-6">
            <SlotForm onAddSlot={handleAddSlot} />
            <SlotList slots={slots} onDelete={handleDeleteSlot} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
