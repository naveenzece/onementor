"use client";

import { useState } from "react";

export default function SkillInput({ skills, setSkills }) {
  const [input, setInput] = useState("");

  const addSkill = () => {
    if (input && !skills.includes(input)) {
      setSkills([...skills, input]);
      setInput("");
    }
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <div className="mb-6">
      <label className="block text-lg font-semibold mb-2 text-purple-700">Skills</label>
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a skill"
          className="border border-gray-300 p-2 rounded-lg flex-1 focus:ring-2 focus:ring-purple-400 outline-none"
        />
        <button
          type="button"
          onClick={addSkill}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full flex items-center gap-2 font-medium"
          >
            {skill}
            <button onClick={() => removeSkill(skill)} className="font-bold hover:text-red-500">×</button>
          </span>
        ))}
      </div>
    </div>
  );
}
