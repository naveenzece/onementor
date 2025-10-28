"use client";
import { useRouter } from "next/navigation"; // ✅ Import router
import VideoChat from "@/components/coach/livesession/VideoPanel";
import ChatBox from "@/components/coach/livesession/ChatPanel";

export default function LiveSessionPage({ params }) {
  const { sessionId } = params;
  const router = useRouter();

  // ✅ Back button handler
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="p-6 space-y-6">
      {/* ✅ Back button */}
      <button
        onClick={handleBack}
        className="mb-4 px-4 py-2 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-500 transition"
      >
        &larr; Back
      </button>

      <h1 className="text-2xl font-bold">Live Session #{sessionId}</h1>

      <VideoChat sessionId={sessionId} />
      <ChatBox sessionId={sessionId} />
    </div>
  );
}
