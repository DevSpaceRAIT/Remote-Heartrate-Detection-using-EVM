import AWS from "aws-sdk";
import formidable from "formidable-serverless";
import fs from "fs";
import axios from "axios";
export const config ={
  
  api: {
    bodyParser: false,
  },
};
const s3 = new AWS.S3({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },
});
const localURL = process.env.URL;


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
      await s3.putObject(putObjectParams).promise()
        .then(async() => {
          console.log(`File uploaded to S3: ${video.name} (${video.type})`);
          // send a POST request to the endpoint
          try {
            const response = await axios.post(localURL+"/localnode", {
              shouldTrigger: true, // replace with your boolean value
            });
            console.log(response.data);
            res.json(response.data);
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
          }
        })
        .catch((err) => {
          console.error(err);
          res.status(500).json({ error: "Server error" });
        });
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}