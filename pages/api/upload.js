import AWS from "aws-sdk";
import formidable from "formidable-serverless";
import fs from "fs";

const s3 = new AWS.S3({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();

    // parse the incoming form data
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
        return;
      }

      // get the video file from the incoming form data
      const video = files.video;

      // read the contents of the file
      const fileContent = fs.readFileSync(video.path);

      // Upload the file to S3
      const putObjectParams = {
        Bucket: "evm-rohit-next-bucket",
        Key: video.name,
        Body: fileContent,
        ContentType: video.type,
      };
      await s3.putObject(putObjectParams).promise();

      // Log the file information to the console
      console.log(`File uploaded to S3: ${video.name} (${video.type})`);

      res.status(200).json({ message: "File uploaded successfully!" });
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}