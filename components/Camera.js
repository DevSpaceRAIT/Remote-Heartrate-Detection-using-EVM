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

  

  // const handleStopCaptureClick = useCallback(() => {
  //   mediaRecorderRef.current.stop();
  //   setCapturing(false);
  // }, [mediaRecorderRef, setCapturing]);

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
  const handleStartCaptureClick = useCallback(() => {
    try {
      setCapturing(true);
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm"
      });
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorderRef.current.start();
      setTimeout(() => {
        mediaRecorderRef.current.stop();
        setCapturing(false);
        setTimeout(handleDownload, 1000); // call handleDownload after stopping recording
      }, 5000); // stop recording after 5 seconds
    } catch (error) {
      console.error(error);
      setCapturing(false);
    }
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable, handleDownload]);
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
     
        
      
     {recordedChunks.length === 0 && (
  <button
    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-4"
    onClick={handleStartCaptureClick}
  >
    {capturing ? (
    <div role="status">
      <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
    'Start Capture'
  )}
  </button>
)}

{recordedChunks.length > 0 && (
  <button
    className="bg-blue-300 hover:bg-red-400 text-red-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-2 "
    onClick={handleDownload}
  >
    Check Heartrate
  </button>
)}
  {heartRate !== null && (
    <div>
      <h1 className="text-xl ">
        {`Heart rate: ${heartRate}`} bpm
      </h1>
    </div>
  )}
    </div>
  );
}
