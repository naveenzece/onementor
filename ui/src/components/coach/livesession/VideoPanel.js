"use client";
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function VideoChat({ sessionId }) {
  const localVideo = useRef(null);
  const remoteVideo = useRef(null);
  const [pc, setPc] = useState(null);

  useEffect(() => {
    const peerConnection = new RTCPeerConnection();
    setPc(peerConnection);

    // Join session
    socket.emit("join_session", sessionId);

    // Capture video/audio
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localVideo.current.srcObject = stream;
        stream.getTracks().forEach((track) => peerConnection.addTrack(track, stream));
      });

    // Remote stream
    peerConnection.ontrack = (event) => {
      remoteVideo.current.srcObject = event.streams[0];
    };

    // Handle ICE
    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("signal", { sessionId, data: { candidate: event.candidate } });
      }
    };

    // Listen for signaling
    socket.on("signal", async ({ data }) => {
      if (data.sdp) {
        await peerConnection.setRemoteDescription(new RTCSessionDescription(data.sdp));
        if (data.sdp.type === "offer") {
          const answer = await peerConnection.createAnswer();
          await peerConnection.setLocalDescription(answer);
          socket.emit("signal", { sessionId, data: { sdp: answer } });
        }
      } else if (data.candidate) {
        try {
          await peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
        } catch (err) {
          console.error("Error adding candidate:", err);
        }
      }
    });

    // Create Offer
    const startCall = async () => {
      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);
      socket.emit("signal", { sessionId, data: { sdp: offer } });
    };

    startCall();

    return () => {
      socket.disconnect();
      peerConnection.close();
    };
  }, [sessionId]);

  return (
    <div className="flex flex-col gap-4">
      <video ref={localVideo} autoPlay playsInline muted className="w-1/2 rounded-xl shadow-md" />
      <video ref={remoteVideo} autoPlay playsInline className="w-1/2 rounded-xl shadow-md" />
    </div>
  );
}
