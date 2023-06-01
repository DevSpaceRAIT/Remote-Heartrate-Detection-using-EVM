const express = require("express");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const { spawn } = require("child_process");
const ffmpeg = require("ffmpeg-static");
const fetch = require("node-fetch");
require('dotenv').config();
const s3Client = new S3Client({
   region: "ap-south-1" ,
   credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
   },
  }); // Replace "your-region" with your S3 bucket region

const storage = multer.memoryStorage(); // Use memory storage instead of disk storage

const upload = multer({ storage: storage });

const app = express();
app.use(cors());
app.post("/upload", upload.single("video"), async (req, res) => {
  const { originalname, mimetype, buffer } = req.file;

  // Upload the file to S3
  const putObjectParams = {
    Bucket: "evm-rohit-next-bucket", // Replace "your-bucket-name" with your S3 bucket name
    Key: originalname,
    Body: buffer,
    ContentType: mimetype,
  };
  await s3Client.send(new PutObjectCommand(putObjectParams));

  // Log the file information to the console
  console.log(`File uploaded to S3: ${originalname} (${mimetype})`);

  res.send("File uploaded successfully!");
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});