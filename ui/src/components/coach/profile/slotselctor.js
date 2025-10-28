"use client";
import React, { useState } from "react";

const SlotSelector = ({ slots, onSlotsChange }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const addSlot = () => {
    if (date && time) {
      const newSlot = `${date} ${time}`;
      onSlotsChange([...slots, newSlot]);
      setDate("");
      setTime("");
    }
  };

  const removeSlot = (slot) => {
    onSlotsChange(slots.filter((s) => s !== slot));
  };

  return (
    <div className="slot-selector space-y-3">
      <label className="block text-sm font-medium text-gray-700">
        Available Slots
      </label>

      {/* Input fields */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
        <button
          type="button"
          onClick={addSlot}
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-300"
        >
          Add Slot
        </button>
      </div>

      {/* Slots list */}
      <div className="flex flex-wrap gap-2">
        {slots.map((slot, i) => (
          <span
            key={i}
            className="flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full shadow-sm"
          >
            {slot}
            <button
              type="button"
              onClick={() => removeSlot(slot)}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SlotSelector;
