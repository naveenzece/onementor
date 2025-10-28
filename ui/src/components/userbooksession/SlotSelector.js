export default function SlotSelector({ slots = [], coach, onBack, onSelect }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-indigo-700">
        Select a Slot for {coach?.name || "Unknown Coach"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.isArray(slots) && slots.length > 0 ? (
          slots.map((slot) => (
            <button
              key={slot.id}
              onClick={() => onSelect(slot)}
              className="p-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg shadow hover:from-indigo-200 hover:to-purple-200 transition transform hover:scale-105"
            >
              {slot.date} <br /> {slot.start_time} - {slot.end_time}
            </button>
          ))
        ) : (
          <p className="text-gray-500 italic text-center col-span-full">
            No slots available
          </p>
        )}
      </div>

      <button
        onClick={onBack}
        className="mt-6 px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
      >
        Back
      </button>
    </div>
  );
}
