export default function Confirmation({ coach, slot, onBack, onConfirm, error }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center text-indigo-700">
        Confirm Your Booking
      </h2>

      {/* Error state */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg p-3 text-center">
          {error}
        </div>
      )}

      {/* Booking details */}
      <div className="text-center space-y-1">
        <p className="font-bold text-lg">{coach.name}</p>
        <p className="text-gray-500">{coach.expertise}</p>
        <p className="mt-2 text-indigo-600 font-medium">
          {slot.date} • {slot.time}
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          aria-label="Go back to slot selection"
        >
          Back
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
          aria-label="Confirm booking"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
