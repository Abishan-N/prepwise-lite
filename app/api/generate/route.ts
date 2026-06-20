import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  const { subject, topics, examDate } = await req.json();

  const prompt = `Create a structured, day-by-day study plan for a student.
Subject: ${subject}
Topics to cover: ${topics}
Exam date: ${examDate}
Today's date: ${new Date().toISOString().split("T")[0]}

Break the plan into days, list what to study each day, and include short revision days before the exam. Keep it concise and practical.`;

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await groqRes.json();
    const plan = data.choices?.[0]?.message?.content ?? "No plan generated.";

    await supabase.from("study_plans").insert({
      subject,
      topics,
      exam_date: examDate,
      plan,
    });

    return NextResponse.json({ plan });
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate plan" }, { status: 500 });
  }
}