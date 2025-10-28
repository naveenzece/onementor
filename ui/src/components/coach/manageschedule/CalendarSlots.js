"use client";

import React from "react";

const CalendarSlots = ({ slots = [] }) => {
  const safeSlots = Array.isArray(slots) ? slots : [];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
      <h2 className="text-xl font-bold text-indigo-700 mb-4">📅 Calendar View</h2>

      {safeSlots.length === 0 ? (
        <p className="text-gray-500 text-sm italic">No slots available yet.</p>
      ) : (
        <ul className="space-y-3">
          {safeSlots.map((slot, index) => (
            <li
              key={slot.id ?? `${slot.date}-${slot.start_time}-${index}`}
              className="flex items-center justify-between bg-indigo-50 p-3 rounded-xl"
            >
              <div>
                <p className="text-indigo-700 font-medium">
                  {slot.date
                    ? new Date(slot.date).toLocaleDateString("en-GB", {
                        weekday: "short",
                        day: "2-digit",
                        month: "short",
                      })
                    : "No date"}
                </p>
                <p className="text-gray-600 text-sm">
                  ⏰ {slot.start_time || "--"} - {slot.end_time || "--"}
                </p>
              </div>
              <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                {slot.is_booked ? "Booked" : "Available"}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CalendarSlots;
