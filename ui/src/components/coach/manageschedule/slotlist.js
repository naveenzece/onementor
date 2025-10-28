"use client";

import React from "react";

const SlotList = ({ slots = [], onDelete }) => {
  const safeSlots = Array.isArray(slots) ? slots : [];

  return (
    <ul className="space-y-3">
      {safeSlots.length === 0 ? (
        <p className="text-gray-500 text-sm italic">No slots added yet.</p>
      ) : (
        safeSlots.map((slot, index) => (
          <li
            key={slot.id ?? index}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-pink-100"
          >
            <div>
              <p className="font-medium text-gray-700">{slot.date}</p>
              <p className="text-gray-500 text-sm">
                {slot.start_time} - {slot.end_time}
              </p>
            </div>
            <button
              onClick={() => onDelete(slot.id)}
              className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold"
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default SlotList;
