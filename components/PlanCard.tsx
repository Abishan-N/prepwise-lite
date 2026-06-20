type PlanCardProps = {
  subject: string;
  topics: string;
  examDate: string;
  plan: string;
};

export default function PlanCard({ subject, topics, examDate, plan }: PlanCardProps) {
  return (
    <div className="bg-white p-5 rounded-xl shadow mb-4">
      <h3 className="font-semibold text-lg text-gray-900">{subject}</h3>
      <p className="text-sm text-gray-500 mb-2">
        Topics: {topics} • Exam: {examDate}
      </p>
      <p className="whitespace-pre-wrap text-gray-700">{plan}</p>
    </div>
  );
}