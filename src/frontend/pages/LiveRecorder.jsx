import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LiveRecorder = () => {
  const videoRef = useRef(null);
  const recordedRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [isRecording, setIsRecording] = useState(false);

  // Start camera preview
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (err) {
      alert("Camera access denied or not available!");
      console.error(err);
    }
  };

  // Start recording
  const startRecording = () => {
    setRecordedChunks([]);
    const stream = videoRef.current.srcObject;
    const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) setRecordedChunks((prev) => prev.concat(e.data));
    };

    mediaRecorder.start();
    setIsRecording(true);
  };

  // Stop recording
  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  // Save video file locally
  const saveVideo = () => {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "recording.webm";
    a.click();
  };

  // Play back the recorded video
  const playRecordedVideo = () => {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);
    recordedRef.current.src = url;
    recordedRef.current.play();
  };

  return (
    <div className="container my-5 text-center">
      <h2 className="mb-4 fw-bold">🎥 Live Recording (YouTube Style)</h2>

      {/* Live Preview */}
      <div className="d-flex justify-content-center mb-3">
        <video
          ref={videoRef}
          className="border border-dark rounded"
          width="640"
          height="360"
          autoPlay
          muted
        ></video>
      </div>

      {/* Buttons */}
      <div className="mb-4">
        <button className="btn btn-primary mx-2" onClick={startCamera}>
          Start Camera
        </button>
        {!isRecording ? (
          <button className="btn btn-danger mx-2" onClick={startRecording}>
            Start Recording
          </button>
        ) : (
          <button className="btn btn-warning mx-2" onClick={stopRecording}>
            Stop Recording
          </button>
        )}
      </div>

      {/* Playback Section */}
      {recordedChunks.length > 0 && (
        <div className="mt-4">
          <h5 className="fw-bold">Recorded Video:</h5>
          <video
            ref={recordedRef}
            className="border rounded mt-2"
            width="480"
            height="270"
            controls
          ></video>
          <div className="mt-3">
            <button
              className="btn btn-success mx-2"
              onClick={playRecordedVideo}
            >
              Play
            </button>
            <button className="btn btn-outline-dark mx-2" onClick={saveVideo}>
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveRecorder;
