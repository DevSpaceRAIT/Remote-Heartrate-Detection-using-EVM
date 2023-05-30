const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const { spawn } = require("child_process");
const ffmpeg = require("ffmpeg-static");
const fetch = require("node-fetch");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/Users/rohitmeshram/Development/FE/finalproject16apr/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, "anothervideorecorded.mp4");
  },
});

const upload = multer({ storage: storage });

const app = express();
app.use(cors());
app.post("/upload", upload.single("video"), (req, res) => {
  console.log(req.file);
  // handle the uploaded file here
  // res.send("File uploaded successfully!");
  console.log("Starting script");

  const python = spawn("python", [
    "/Users/rohitmeshram/Development/FE/finalproject16apr/eulerian-remote/main.py",
    "/Users/rohitmeshram/Development/FE/finalproject16apr/uploads/anothervideorecorded.mp4",
  ]);
  python.stdout.on("data", async function (data) {
    const output = data.toString();
    const lines = output.split("\n");
    const heartRateLine = lines.find((line) => line.startsWith("Heart rate:"));
    if (heartRateLine) {
      const heartRate = heartRateLine.split(":")[1].trim();
      console.log(heartRate);
      res.json({ heartRate });

      // Send the heart rate value to the Next.js app
      // const response = await fetch("http://localhost:3000/heartrate", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ heartRate }),
      // });
      // const data = await response.json();
      // console.log(data);
    }
  });
  python.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
