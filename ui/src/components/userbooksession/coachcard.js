export default function CoachCard({ coach, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className="bg-white p-6 rounded-2xl shadow-md cursor-pointer transition transform hover:scale-105 hover:shadow-xl hover:bg-indigo-50"
    >
      <h3 className="text-xl font-bold text-center text-indigo-700 mb-2">{coach.name}</h3>
      <p className="text-sm text-gray-500 text-center">{coach.expertise}</p>
    </div>
  );
}
