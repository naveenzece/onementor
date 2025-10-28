import React from "react";

const ConfirmRequestCard = ({ request, onAction }) => {
  return (
    <div className="p-4 bg-gradient-to-r from-blue-300 to-purple-300 rounded-2xl shadow-md flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-gray-800">
        <h3 className="font-bold text-lg">{request.student}</h3>
        <p>{request.topic}</p>
        <p className="text-sm">
          {request.date} at {request.time}
        </p>
        <span
          className={`text-xs px-2 py-1 rounded-full mt-1 inline-block ${
            request.status === "pending"
              ? "bg-yellow-200 text-yellow-800"
              : request.status === "accepted"
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {request.status === "accepted"
            ? "Confirmed"
            : request.status === "rejected"
            ? "Declined"
            : "Pending"}
        </span>
      </div>

      {request.status === "pending" && (
        <div className="flex gap-2">
          <button
            onClick={() => onAction(request.id, "accepted")}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition"
          >
            Accept
          </button>
          <button
            onClick={() => onAction(request.id, "rejected")}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition"
          >
            Decline
          </button>
        </div>
      )}
    </div>
  );
};

export default ConfirmRequestCard;
