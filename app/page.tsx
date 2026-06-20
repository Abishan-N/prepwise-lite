"use client";

import { useState } from "react";
import StudyForm from "@/components/StudyForm";

export default function Home() {
  const [plan, setPlan] = useState("");

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        PrepWise AI — Smart Study Planner
      </h1>

      <StudyForm onPlanGenerated={(p) => setPlan(p)} />

      {plan && (
        <div className="max-w-md mx-auto mt-6 bg-white p-6 rounded-xl shadow whitespace-pre-wrap">
          <h2 className="font-semibold mb-2">Your Study Plan</h2>
          {plan}
        </div>
      )}
    </main>
  );
}