import { supabase } from "@/lib/supabaseClient";
import PlanCard from "@/components/PlanCard";

export default async function PlansPage() {
  const { data: plans } = await supabase
    .from("study_plans")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Saved Study Plans</h1>
      <div className="max-w-md mx-auto">
        {plans?.length ? (
          plans.map((p) => (
            <PlanCard
              key={p.id}
              subject={p.subject}
              topics={p.topics}
              examDate={p.exam_date}
              plan={p.plan}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No plans saved yet.</p>
        )}
      </div>
    </main>
  );
}