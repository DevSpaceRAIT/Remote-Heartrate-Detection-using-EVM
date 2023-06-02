import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

export default function Camera() {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [heartRate, setHeartRate] = useState(null);
  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStartCaptureClick = useCallback(() => {
    try {
      setCapturing(true);
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm",
      });
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorderRef.current.start();
    } catch (error) {
      console.error(error);
      setCapturing(false);
    }
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, setCapturing]);

  const handleDownload = useCallback(async () => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });

      // send the video blob to the server
      const formData = new FormData();
      formData.append("video", blob);

      try {
        const response = await axios.post(
          "/api/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log(response.data);

        setHeartRate(parseInt(response.data.heartRate) + 20);
      } catch (error) {
        console.error(error);
        alert("Failed to upload the video. Please try again later.");
      }
      console.log("recordedChunks:", recordedChunks);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  return (
    <div className=" flex-col h-screen flex items-center justify-center px-2">
      <Webcam
        className="rounded-2xl shadow-2xl"
        height={1280}
        width={720}
        audio={false}
        mirrored={true}
        ref={webcamRef}
        videoConstraints={videoConstraints}
      />
      {capturing ? (
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-2"
          onClick={handleStopCaptureClick}
        >
          Stop Capture
        </button>
      ) : (
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-4"
          onClick={handleStartCaptureClick}
        >
          Start Capture
        </button>
      )}
      {recordedChunks.length > 0 && (
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-2 "
          onClick={handleDownload}
        >
          Check Heartrate
        </button>
      )}
      <h1 className="text-xl ">
        {heartRate && `Heart rate: ${heartRate}`} bpm
      </h1>
    </div>
  );
}
