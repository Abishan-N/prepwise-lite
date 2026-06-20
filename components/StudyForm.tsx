"use client";

import { useState } from "react";

export default function StudyForm({ onPlanGenerated }: { onPlanGenerated: (plan: string) => void }) {
  const [subject, setSubject] = useState("");
  const [topics, setTopics] = useState("");
  const [examDate, setExamDate] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject, topics, examDate }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.plan) {
      onPlanGenerated(data.plan);
    } else {
      alert("Something went wrong generating your plan.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-xl shadow space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Plan Your Study Session</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="e.g. Advanced Algorithms"
          required
          className="mt-1 w-full border rounded-lg p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Topics</label>
        <textarea
          value={topics}
          onChange={(e) => setTopics(e.target.value)}
          placeholder="e.g. Dynamic Programming, Greedy Algorithms, Huffman Coding"
          required
          className="mt-1 w-full border rounded-lg p-2"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Exam Date</label>
        <input
          type="date"
          value={examDate}
          onChange={(e) => setExamDate(e.target.value)}
          required
          className="mt-1 w-full border rounded-lg p-2"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Study Plan"}
      </button>
    </form>
  );
}