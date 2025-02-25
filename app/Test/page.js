'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function JobForm() {
  const [jobRole, setJobRole] = useState('');
  const [skills, setSkills] = useState(['', '', '', '']);
  const [difficulty, setDifficulty] = useState(1);
  const router = useRouter();

  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ jobRole, skills, difficulty });
    router.push('/Questions');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Job Form</h2>
        
        <label className="block mb-2 font-medium">Job Role:</label>
        <input
          type="text"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        
        <label className="block mb-2 font-medium">Skills (min 4):</label>
        {skills.map((skill, index) => (
          <input
            key={index}
            type="text"
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
            className="w-full p-2 border rounded mb-2"
            required
          />
        ))}
        
        <button
          type="button"
          onClick={addSkill}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          + Add Skill
        </button>
        
        <label className="block mb-2 font-medium">Difficulty (1-5):</label>
        <input
          type="range"
          min="1"
          max="5"
          value={difficulty}
          onChange={(e) => setDifficulty(Number(e.target.value))}
          className="w-full mb-4"
        />
        
        <button
          type="submit"
          className="w-full bg-green-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
