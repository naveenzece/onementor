"use client";

import React, { useState } from "react";

const SlotForm = ({ onAddSlot }) => {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !startTime || !endTime) return;
    onAddSlot({ date, start_time: startTime, end_time: endTime });
    setDate("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full p-2 border rounded" />
      <input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} className="w-full p-2 border rounded" />
      <input type="time" value={endTime} onChange={e => setEndTime(e.target.value)} className="w-full p-2 border rounded" />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Add Slot</button>
    </form>
  );
};

export default SlotForm;
