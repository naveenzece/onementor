"use client";

export default function InterestSelector({ interests, setInterests }) {
  const options = ["Web Dev", "AI", "Python", "React", "Node.js"];

  const toggleInterest = (interest) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((i) => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-lg font-semibold mb-2 text-green-700">Interests</label>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => toggleInterest(opt)}
            className={`px-4 py-2 rounded-full transition font-medium ${
              interests.includes(opt)
                ? "bg-green-500 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
