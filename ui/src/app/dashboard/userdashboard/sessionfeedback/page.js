"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation"; // ✅ Import router
import FeedbackForm from "@/components/usersessionfeedback/FeedbackForm";
import ProgressUpdate from "@/components/usersessionfeedback/ProgressReport";

export default function SessionEndPage() {
  const params = useParams();
  const bookingId = params.bookingId;
  const userId = 2;  // assume logged-in student
  const coachId = 1; // assume coach from booking
  const router = useRouter(); // ✅ Initialize router

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Session End Report</h1>
      
      <FeedbackForm bookingId={bookingId} userId={userId} coachId={coachId} />
      <ProgressUpdate userId={userId} bookingId={bookingId} />

      {/* ✅ Back Button below content */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => router.back()}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
