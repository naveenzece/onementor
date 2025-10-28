"use client";
import React, { useState } from "react";

const SkillInput = ({ skills, onSkillsChange }) => {
  const [input, setInput] = useState("");

  const addSkill = () => {
    if (input && !skills.includes(input)) {
      onSkillsChange([...skills, input]);
      setInput("");
    }
  };

  const removeSkill = (skill) => {
    onSkillsChange(skills.filter((s) => s !== skill));
  };

  return (
    <div className="skill-input space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Skills
      </label>

      {/* Input + Add button */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a skill"
          className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
        <button
          type="button"
          onClick={addSkill}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Add
        </button>
      </div>

      {/* Skills list */}
      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full shadow-sm"
          >
            {skill}
            <button
              type="button"
              onClick={() => removeSkill(skill)}
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

export default SkillInput;
