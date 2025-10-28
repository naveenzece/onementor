"use client";

export default function RequestCard({ request, onAction }) {
  return (
    <div className="p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-md flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{request.student}</h2>
        <p className="text-gray-600">{request.topic}</p>
        <p className="text-sm text-gray-500">
          {request.date} • {request.time}
        </p>
        <p
          className={`mt-1 text-sm font-medium ${
            request.status === "approved"
              ? "text-green-600"
              : request.status === "rejected"
              ? "text-red-600"
              : "text-yellow-600"
          }`}
        >
          Status: {request.status}
        </p>
      </div>

      {request.status === "pending" && (
        <div className="flex space-x-3">
          <button
            onClick={() => onAction(request.id, "approved")}
            className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600"
          >
            Approve
          </button>
          <button
            onClick={() => onAction(request.id, "rejected")}
            className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
}
